require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
// Clean URL to prevent double slashes
const BITRIX_WEBHOOK_URL = process.env.BITRIX24_WEBHOOK || process.env.BITRIX_WEBHOOK_URL;

// ==========================================
// 1. CONFIGURATION: BITRIX FIELD MAPPINGS
// ==========================================

const DEAL_ID_LINK_FIELDS = {
    COMPANY_ID: "COMPANY_ID",
    DIRECTOR_IDS: [
        "UF_CRM_1614063941", // Director 1 Contact ID
        "UF_CRM_1614064857", // Director 2 Contact ID
        "UF_CRM_1614064874", // Director 3 Contact ID
        "UF_CRM_1614064916", // Director 4 Contact ID
        "UF_CRM_1614064930"  // Director 5 Contact ID
    ],
    SHAREHOLDER_IDS: [
        "UF_CRM_1614065078", // Shareholder 1 Contact ID
        "UF_CRM_1614065093", // Shareholder 2 Contact ID
        "UF_CRM_1614065107", // Shareholder 3 Contact ID
        "UF_CRM_1614065119", // Shareholder 4 Contact ID
        "UF_CRM_1614065131"  // Shareholder 5 Contact ID
    ]
};

const DIRECT_DEAL_MAP = {
    "Clarify_Single_Letters": "UF_CRM_CLARIFY_SINGLE",
    "Clarify_Not_BM_EN": "UF_CRM_CLARIFY_LANG",
    "Clarify_Proper_Name": "UF_CRM_CLARIFY_PROPER",
    "Clarify_Similar_Name": "UF_CRM_CLARIFY_SIMILAR",
    "Clarify_Trademark": "UF_CRM_CLARIFY_TRADE",
    "Clarify_Other": "UF_CRM_CLARIFY_OTHER",

    "super_form_data.business_codes.0.Business_Code": "UF_CRM_1615172513994",
    "super_form_data.business_codes.1.Business_Code": "UF_CRM_1615172524462",
    "super_form_data.business_codes.2.Business_Code": "UF_CRM_1615172535785",

    // Moving Business Address back to Deal as confirmed by Step 55
    "Business_Address_1": "UF_CRM_1619746187397",
    "Business_Address_2": "UF_CRM_1619746194929",
    "Business_Country": "UF_CRM_BIZ_COUNTRY",
    "Business_State": "UF_CRM_1619746205190",
    "Business_City": "UF_CRM_1619746217014",
    "Business_Postcode": "UF_CRM_1619746236432",
    "Business_Office_No": "UF_CRM_BIZ_OFFICE_NO",
    "Business_Fax": "UF_CRM_BIZ_FAX",
};

const COMPANY_MAP = {
    "Business_Description": "COMMENTS",
    "Email": "EMAIL",
    "Office_Number": "PHONE",
    "Fax_Number": "FAX",
    "Same_As_Above": "UF_CRM_COMP_SAME_ADDR_FLAG",

    "Registered_Address_1": "UF_CRM_1581838992248",
    "Registered_Address_2": "UF_CRM_1581839002479",
    "Registered_Country": "ADDRESS_COUNTRY",
    "Registered_State": "ADDRESS_REGION",
    "Registered_City": "UF_CRM_1581839032051",
    "Registered_Postcode": "UF_CRM_1581839059588",
};

const CONTACT_DETAIL_MAP = {
    NRIC: "UF_CRM_1609226763792",
    NAME: "NAME",
    LAST_NAME: "LAST_NAME",
    NATIONALITY: "UF_CRM_1614056849056",
    GENDER: "UF_CRM_1611739396",
    RACE: "UF_CRM_1614056837683",
    ADDRESS_LINE1: "ADDRESS",
    ADDRESS_LINE2: "ADDRESS_2",
    COUNTRY: "ADDRESS_COUNTRY",
    STATE: "ADDRESS_PROVINCE",
    CITY: "ADDRESS_CITY",
    POSTCODE: "ADDRESS_POSTAL_CODE",
    EMAIL: "EMAIL",
    MOBILE: "PHONE",
    OFFICE: "UF_CRM_CONTACT_OFFICE_PHONE",
    FAX: "UF_CRM_CONTACT_FAX",
    COMPLIANCE_CHECKBOX: "UF_CRM_CONTACT_COMPLIANCE",
    ALSO_MEMBER_CHECKBOX: "UF_CRM_CONTACT_ALSO_MEMBER"
};

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================

function setNestedValue(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    keys.forEach((key, index) => {
        const isLast = index === keys.length - 1;
        const nextKey = keys[index + 1];
        const isNextArray = !isNaN(Number(nextKey));

        if (isLast) {
            current[key] = value;
        } else {
            if (!current[key]) {
                current[key] = isNextArray ? [] : {};
            }
            current = current[key];
        }
    });
}

function processValue(path, value) {
    if (value === undefined || value === null) {
        // Default Country/Nationality to Malaysia even if null/undefined
        if (path.toLowerCase().includes('country') || path.toLowerCase().includes('nationality')) {
            return "Malaysia";
        }
        return value;
    }

    // 1. Business Code Padding: 4 digits -> 5 digits with leading '0'
    if (path.endsWith('Business_Code')) {
        let valStr = String(value).trim();
        console.log(`[Padding Check] Path: ${path}, Value: "${valStr}"`);
        if (valStr.includes(':')) {
            let parts = valStr.split(':');
            let code = parts[0].trim();
            if (code.length === 4 && /^\d+$/.test(code)) {
                const newValue = `0${code} : ${parts.slice(1).join(':').trim()}`;
                console.log(`   - Padded with colon: "${newValue}"`);
                return newValue;
            }
        } else if (valStr.length === 4 && /^\d+$/.test(valStr)) {
            const newValue = `0${valStr}`;
            console.log(`   - Padded raw: "${newValue}"`);
            return newValue;
        }
    }

    // 2. Default Country/Nationality to Malaysia
    if (path.toLowerCase().includes('country') || path.toLowerCase().includes('nationality')) {
        if (!value || String(value).trim() === "" || String(value).toLowerCase().includes('null')) {
            return "Malaysia";
        }
    }

    // 3. Director ID Type Logic: ic if NRIC, passport if Passport
    if (path.endsWith('_ID_Type') || path.endsWith('ID_Type')) {
        const valStr = String(value).toLowerCase();
        if (valStr.includes('nric') || valStr.includes('ic')) return 'ic';
        if (valStr.includes('passport')) return 'passport';

        // Fallback: If we don't have a value but this is a mapping for ID Type, 
        // return null so it can be handled elsewhere or just ignored
    }

    return value;
}

async function callBitrix(method, params) {
    try {
        console.log(`Calling Bitrix Method: ${method}`, JSON.stringify(params, null, 2));
        const url = `${BITRIX_WEBHOOK_URL}/${method}`;
        const response = await axios.post(url, params);
        if (response.data.error) {
            console.error(`Bitrix API Error (${method}):`, response.data.error_description);
            throw new Error(response.data.error_description);
        }
        return response.data.result;
    } catch (error) {
        const errorMsg = error.response?.data?.error_description || error.message;
        console.error(`Axios/Bitrix Error (${method}):`, errorMsg);
        if (error.response?.data) {
            console.error("Full Error Response:", JSON.stringify(error.response.data, null, 2));
        }
        throw new Error(errorMsg);
    }
}

function getMultiFieldValue(multiFieldArray) {
    return (Array.isArray(multiFieldArray) && multiFieldArray.length > 0) ? multiFieldArray[0].VALUE : "";
}

async function fetchAndMapContactDetails(contactId, rolePrefix, forceAlsoMember = false) {
    if (!contactId) return null;

    try {
        const contactData = await callBitrix('crm.contact.get', { id: contactId });
        const mappedContact = {};

        // Helper to apply processValue while mapping
        const setMapped = (key, bitrixField, isMulti = false) => {
            let val = isMulti ? getMultiFieldValue(contactData[bitrixField]) : contactData[bitrixField];
            val = processValue(key, val);
            if (val !== undefined && val !== null && val !== "") {
                mappedContact[key] = val;
            }
        };

        setMapped(`${rolePrefix}_Name`, CONTACT_DETAIL_MAP.NAME); // We'll handle full name below
        if (contactData[CONTACT_DETAIL_MAP.NAME]) {
            const fullName = `${contactData[CONTACT_DETAIL_MAP.NAME]} ${contactData[CONTACT_DETAIL_MAP.LAST_NAME] || ''}`.trim();
            mappedContact[`${rolePrefix}_Name`] = fullName;
        }

        // Deriving ID Type fallback if CONTACT_DETAIL_MAP.ID_TYPE is missing or value is empty
        const idTypeField = CONTACT_DETAIL_MAP.ID_TYPE;
        let idTypeVal = idTypeField ? contactData[idTypeField] : null;
        if (!idTypeVal && contactData[CONTACT_DETAIL_MAP.NRIC]) {
            // If NRIC looks like an IC (contains only digits, spaces, or dashes), assume 'ic'
            const nricVal = String(contactData[CONTACT_DETAIL_MAP.NRIC]);
            if (/^[\d-\s]+$/.test(nricVal)) idTypeVal = 'nric';
        }

        const finalIdType = processValue(`${rolePrefix}_ID_Type`, idTypeVal);
        if (finalIdType) mappedContact[`${rolePrefix}_ID_Type`] = finalIdType;

        setMapped(`${rolePrefix}_NRIC`, CONTACT_DETAIL_MAP.NRIC);
        setMapped(`${rolePrefix}_Nationality`, CONTACT_DETAIL_MAP.NATIONALITY);
        setMapped(`${rolePrefix}_Gender`, CONTACT_DETAIL_MAP.GENDER);
        setMapped(`${rolePrefix}_Race`, CONTACT_DETAIL_MAP.RACE);

        setMapped(`${rolePrefix}_Address_Line1`, CONTACT_DETAIL_MAP.ADDRESS_LINE1);
        setMapped(`${rolePrefix}_Address_Line2`, CONTACT_DETAIL_MAP.ADDRESS_LINE2);
        setMapped(`${rolePrefix}_Country`, CONTACT_DETAIL_MAP.COUNTRY);
        setMapped(`${rolePrefix}_State`, CONTACT_DETAIL_MAP.STATE);
        setMapped(`${rolePrefix}_City`, CONTACT_DETAIL_MAP.CITY);
        setMapped(`${rolePrefix}_Postcode`, CONTACT_DETAIL_MAP.POSTCODE);

        setMapped(`${rolePrefix}_Email`, CONTACT_DETAIL_MAP.EMAIL, true);
        setMapped(`${rolePrefix}_Mobile`, CONTACT_DETAIL_MAP.MOBILE, true);
        setMapped(`${rolePrefix}_Office`, CONTACT_DETAIL_MAP.OFFICE, true);
        setMapped(`${rolePrefix}_Fax`, CONTACT_DETAIL_MAP.FAX, true);

        if (contactData[CONTACT_DETAIL_MAP.COMPLIANCE_CHECKBOX] !== undefined) {
            mappedContact[`${rolePrefix}_Compliance_Checkbox`] = (contactData[CONTACT_DETAIL_MAP.COMPLIANCE_CHECKBOX] === 'Y');
        }

        if (rolePrefix === "Director") {
            // Priority 1: Force true if they appear in both Deal fields
            // Priority 2: Use Bitrix field 'Y'/'N'
            if (forceAlsoMember === true) {
                mappedContact[`${rolePrefix}_Also_Member_Checkbox`] = true;
            } else if (contactData[CONTACT_DETAIL_MAP.ALSO_MEMBER_CHECKBOX] !== undefined) {
                mappedContact[`${rolePrefix}_Also_Member_Checkbox`] = (contactData[CONTACT_DETAIL_MAP.ALSO_MEMBER_CHECKBOX] === 'Y');
            }
        }

        if (rolePrefix === "Member") {
            mappedContact["Member_Promoter_Type"] = "INDIVIDUAL";
            mappedContact["Member_New_Or_Existing"] = "NEW";
            mappedContact["Member_Price_Per_Share"] = "1.00";
            mappedContact["Member_Number_Of_Shares"] = "0";
            mappedContact["Member_Class_Of_Shares"] = "ORDINARY";
        }

        return mappedContact;
    } catch (error) {
        console.warn(`Could not fetch or map Contact ID ${contactId} for ${rolePrefix}: ${error.message}`);
        return null;
    }
}

// ==========================================
// 3. API ENDPOINT: /api/get-full-deal-json
// ==========================================
app.post('/api/get-full-deal-json', async (req, res) => {
    try {
        const dealIdStr = req.query.id;
        if (!dealIdStr) return res.status(400).json({ success: false, message: "Missing query parameter: id" });

        const dealIdNum = Number(dealIdStr);
        if (isNaN(dealIdNum)) return res.status(400).json({ success: false, message: "Deal ID must be a number." });

        console.log(`Processing Deal ID: ${dealIdNum}`);

        const finalJson = {
            "super_form_data": {
                "business_codes": [],
                "directors": [],
                "members_shareholders": [],
                "information_to_agency": {}
            }
        };

        // --- STEP 1: Fetch Deal Data ---
        console.log(`   - Fetching Deal ${dealIdNum}...`);
        const dealData = await callBitrix('crm.deal.get', { id: dealIdNum });

        Object.entries(DIRECT_DEAL_MAP).forEach(([jsonPath, bitrixCode]) => {
            let val = dealData[bitrixCode];
            val = processValue(jsonPath, val);
            if (val !== undefined && val !== null && val !== "") {
                setNestedValue(finalJson, jsonPath, val);
            }
        });

        // --- STEP 2: Fetch Company Data ---
        const companyId = dealData[DEAL_ID_LINK_FIELDS.COMPANY_ID];
        if (companyId) {
            console.log(`   - Fetching linked Company ${companyId}...`);
            const companyData = await callBitrix('crm.company.get', { id: companyId });

            Object.entries(COMPANY_MAP).forEach(([jsonPath, bitrixCode]) => {
                let val = companyData[bitrixCode];
                if (['EMAIL', 'PHONE', 'FAX'].includes(bitrixCode) ||
                    bitrixCode.startsWith('UF_CRM_BIZ_OFFICE') || bitrixCode.startsWith('UF_CRM_BIZ_FAX')) {
                    val = getMultiFieldValue(val);
                }

                val = processValue(jsonPath, val);

                if (bitrixCode === 'UF_CRM_COMP_SAME_ADDR_FLAG' && val !== undefined) {
                    val = (val === 'Y');
                }
                if (val !== undefined && val !== null && val !== "") {
                    setNestedValue(finalJson, jsonPath, val);
                }
            });
        }

        // --- STEP 3: Fetch Directors ---
        console.log(`   - Fetching Directors...`);
        const directorIds = DEAL_ID_LINK_FIELDS.DIRECTOR_IDS
            .map(code => dealData[code])
            .filter(id => id && Number(id) > 0)
            .map(id => Number(id));

        // --- STEP 4: Fetch Shareholders ---
        console.log(`   - Fetching Shareholders...`);
        const shareholderIds = DEAL_ID_LINK_FIELDS.SHAREHOLDER_IDS
            .map(code => dealData[code])
            .filter(id => id && Number(id) > 0)
            .map(id => Number(id));

        // Deduplication Logic:
        // 1. Common IDs: Contacts in BOTH fields
        const commonIds = directorIds.filter(id => shareholderIds.includes(id));

        // 2. Shareholder-Only IDs: Contacts NOT in Directors
        const uniqueShareholderIds = shareholderIds.filter(id => !directorIds.includes(id));

        // --- STEP 2.5: Handle Same_As_Above Fallback ---
        if (finalJson.Same_As_Above === true) {
            console.log("   - Same_As_Above is true. Copying Registered Address to Business Address where missing...");
            const addressFields = ['Address_1', 'Address_2', 'Country', 'State', 'City', 'Postcode'];
            addressFields.forEach(field => {
                const regKey = `Registered_${field}`;
                const bizKey = `Business_${field}`;
                if (finalJson[regKey] && !finalJson[bizKey]) {
                    finalJson[bizKey] = finalJson[regKey];
                }
            });
        }

        // Process Directors (Pass forceAlsoMember=true if ID is in commonIds)
        const directors = await Promise.all(directorIds.map(id =>
            fetchAndMapContactDetails(id, "Director", commonIds.includes(id))
        ));
        finalJson.super_form_data.directors = directors.filter(d => d !== null);

        // Process ONLY unique Shareholders
        const shareholders = await Promise.all(uniqueShareholderIds.map(id =>
            fetchAndMapContactDetails(id, "Member")
        ));
        finalJson.super_form_data.members_shareholders = shareholders.filter(s => s !== null);

        // --- STEP 5: Add Comment to Bitrix ---
        const jsonString = JSON.stringify(finalJson, null, 4);

        const commentId = await callBitrix('crm.timeline.comment.add', {
            fields: {
                ENTITY_ID: dealIdNum,
                ENTITY_TYPE: 'deal',
                COMMENT: jsonString // Raw JSON only as requested
            }
        });

        console.log(`✅ Success! JSON logged to Bitrix Timeline. Comment ID: ${commentId}`);

        res.json({
            success: true,
            deal_id: dealIdNum,
            comment_id: commentId,
            data_preview: finalJson
        });

    } catch (error) {
        console.error("❌ Server Error:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => console.log(`Backend Agent running on port ${PORT}`));