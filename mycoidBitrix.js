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
    ],
    SHAREHOLDER_SHARES: [
        "UF_CRM_1614065148", // No. of share (1)
        "UF_CRM_1614065159", // No. of share (2)
        "UF_CRM_1614065174", // No. of share (3)
        "UF_CRM_1614065188", // No. of share (4)
        "UF_CRM_1614065200"  // No. of share (5)
    ],
    CORPORATE_SHAREHOLDER_IDS: [
        "UF_CRM_1620625155", // Corporate Shareholder 1
        "UF_CRM_1620625173", // Corporate Shareholder 2
        "UF_CRM_1620625192", // Corporate Shareholder 3
        "UF_CRM_1620625211", // Corporate Shareholder 4
        "UF_CRM_1620625269"  // Corporate Shareholder 5
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
    "Business_Description": "UF_CRM_1611194608807",
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
    "Business_Description": "UF_CRM_1611194608807" // Still get this from deal
    // All Registered Address fields and Same_As_Above are now hardcoded in finalJson
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

const REGISTERED_STATE_MAP = {
    "45": "KEDAH",
    "47": "PERLIS",
    "49": "PULAU PINANG",
    "51": "PERAK",
    "53": "KELANTAN",
    "55": "TERENGGANU",
    "57": "SELANGOR",
    "59": "NEGERI SEMBILAN",
    "61": "MELAKA",
    "63": "PAHANG",
    "65": "SABAH",
    "67": "SARAWAK",
    "183": "JOHOR",
    "1371": "W.P. LABUAN",
    "2185": "W.P. KUALA LUMPUR"
};

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
    // 1. Handle Countries and Nationalities (Standardizing to MALAYSIA)
    const lowerPath = path.toLowerCase();
    if (lowerPath.includes('country') || lowerPath.includes('nationality')) {
        const valStr = value ? String(value).trim().toLowerCase() : "";

        // Standardize variations of Malaysia/Malaysian and empty/null/NA markers to "MALAYSIA"
        if (!value ||
            valStr === "" ||
            valStr === "null" ||
            valStr === "n/a" ||
            valStr === "none" ||
            valStr.startsWith('malay')
        ) {
            return "MALAYSIA";
        }
    }

    if (value === undefined || value === null) {
        return value;
    }

    // 2. Business Code Extraction & Padding: Extract only the code and pad to 5 digits
    if (path.endsWith('Business_Code')) {
        let valStr = String(value || "").trim();
        // Extract only the code part if there's a colon
        if (valStr.includes(':')) {
            valStr = valStr.split(':')[0].trim();
        }

        // Pad 4 digits to 5 digits
        if (valStr.length === 4 && /^\d+$/.test(valStr)) {
            valStr = `0${valStr}`;
        }

        console.log(`[Business Code Mapping] Path: ${path}, Final Code: "${valStr}"`);
        return valStr;
    }

    // 3. Handle NRIC Dash Stripping (900101-01-1234 -> 900101011234)
    if (path.toLowerCase().endsWith('nric')) {
        const valStr = String(value || "").trim();
        // Check if it matches XXXXXX-XX-XXXX
        if (/^\d{6}-\d{2}-\d{4}$/.test(valStr)) {
            console.log(`[NRIC Stripping] Stripping dashes from: "${valStr}"`);
            return valStr.replace(/-/g, '');
        }
    }

    // 4. Director ID Type Logic: NRIC or Passport
    if (path.endsWith('_ID_Type') || path.endsWith('ID_Type')) {
        const valStr = String(value || "").toLowerCase();
        if (valStr.includes('nric') || valStr.includes('ic')) return 'NRIC';
        if (valStr.includes('passport')) return 'Passport';
    }

    // 5. State Standardization (incl. KL conversion and ID lookup)
    if (path.toLowerCase().endsWith('state')) {
        let valStr = String(value || "").trim();
        // Check if it's an ID from REGISTERED_STATE_MAP
        if (REGISTERED_STATE_MAP[valStr]) {
            valStr = REGISTERED_STATE_MAP[valStr];
        }
        valStr = valStr.toUpperCase();
        if (valStr === "KL" || valStr === "KUALA LUMPUR") {
            return "W.P. KUALA LUMPUR";
        }
        return valStr;
    }

    // 6. City Standardization (Uppercase only)
    if (path.toLowerCase().endsWith('city')) {
        return String(value || "").trim().toUpperCase();
    }

    return value;
}

async function fetchAndMapCorporateShareholder(companyId, shares = null) {
    if (!companyId) return null;

    try {
        const companyData = await callBitrix('crm.company.get', { id: companyId });
        const mappedMember = {
            "Member_Promoter_Type": "BODY CORPORATE",
            "Member_New_Or_Existing": "NEW",
            "Member_Type": "ROC", // Default to ROC
            "Member_Price_Per_Share": "1.00",
            "Member_Number_Of_Shares": (shares !== null && shares !== undefined && shares !== "") ? String(shares) : "0",
            "Member_Class_Of_Shares": "Ordinary",
            "Member_Corporate_Name": companyData.TITLE || "",
            "Member_Company_Registration_No": companyData.UF_CRM_1585708913204 || "",
            "Member_Place_of_incorporation": "MALAYSIA",

            "Member_Corp_Address_Line1": companyData.ADDRESS || "",
            "Member_Corp_Address_Line2": companyData.ADDRESS_2 || "",
            "Member_Corp_Country": processValue('Member_Corp_Country', companyData.ADDRESS_COUNTRY || "MALAYSIA"),
            "Member_Corp_State": processValue('Member_Corp_State', companyData.ADDRESS_REGION || ""),
            "Member_Corp_City": processValue('Member_Corp_City', companyData.ADDRESS_CITY || ""),
            "Member_Corp_Postcode": companyData.ADDRESS_POSTAL_CODE || "",

            "Member_Email": getMultiFieldValue(companyData.EMAIL),
            "Member_Mobile": getMultiFieldValue(companyData.PHONE),
            "Member_Office": getMultiFieldValue(companyData.PHONE),
            "Member_Fax": getMultiFieldValue(companyData.FAX),
            "Member_Compliance_Checkbox": true,
            "Member_Rep_Designation": "Mr" // Default as requested
        };

        // --- Fetch Representative (Contact ID from Company Field) ---
        const rawRepId = companyData.UF_CRM_1626401801;
        const repId = extractId(rawRepId);

        if (repId) {
            try {
                console.log(`      * Fetching Corporate Rep Contact ID: ${repId} (from Company field UF_CRM_1626401801)`);
                const repData = await callBitrix('crm.contact.get', { id: repId });
                mappedMember.Member_Rep_Name = `${repData.NAME} ${repData.LAST_NAME || ''}`.trim();

                // Use processValue (id logic / dash stripping)
                const rawID = repData[CONTACT_DETAIL_MAP.NRIC] || "";
                mappedMember.Member_Rep_NRIC = processValue('Member_Rep_NRIC', rawID);
            } catch (err) {
                console.warn(`      ! Could not fetch Corporate Rep Contact ID ${repId}: ${err.message}`);
            }
        }

        return mappedMember;
    } catch (error) {
        console.warn(`Could not fetch or map Corporate Shareholder Company ID ${companyId}: ${error.message}`);
        return null;
    }
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

function extractId(val) {
    if (val === null || val === undefined || val === "" || (Array.isArray(val) && val.length === 0)) return null;
    let idVal = Array.isArray(val) ? val[0] : val;
    const valStr = String(idVal).trim();
    // Handles IDs like "123", "C_123", "CO_123", ["123"]
    const match = valStr.match(/\d+/);
    return match ? Number(match[0]) : null;
}

async function fetchAndMapContactDetails(contactId, rolePrefix, forceAlsoMember = false, shares = null) {
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

        // User Logic: if NRIC value is xxxxxx-xx-xxxx, idType is NRIC, else Passport
        const nricVal = String(contactData[CONTACT_DETAIL_MAP.NRIC] || "");
        if (/^\d{6}-\d{2}-\d{4}$/.test(nricVal.trim())) {
            idTypeVal = 'NRIC';
        } else if (nricVal.trim() !== "") {
            // If it has a value but doesn't match the NRIC pattern, assume Passport
            idTypeVal = 'Passport';
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

        mappedContact[`${rolePrefix}_Compliance_Checkbox`] = true;

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
            mappedContact["Member_Number_Of_Shares"] = (shares !== null && shares !== undefined && shares !== "") ? String(shares) : "0";
            mappedContact["Member_Class_Of_Shares"] = "Ordinary";
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
            },
            // Hardcoded Registered Address Fields from Image
            "Registered_Address_1": "38, 3RD FLOOR,",
            "Registered_Address_2": "JALAN RADIN ANUM,",
            "Registered_Address_3": "BANDAR BARU SRI PETALING",
            "Registered_Country": "MALAYSIA",
            "Registered_State": "W.P. KUALA LUMPUR",
            "Registered_City": "KUALA LUMPUR",
            "Registered_Postcode": "57000",
            "Email": "cosec.my@ezco.co",
            "Office_Number": "0386817355",
            "Fax_Number": "-",
            "Same_As_Above": false
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

        // Create a map of Contact ID -> Shares from the deal's shareholder slots
        const sharesMap = {};
        DEAL_ID_LINK_FIELDS.SHAREHOLDER_IDS.forEach((field, index) => {
            const id = Number(dealData[field]);
            const sharesField = DEAL_ID_LINK_FIELDS.SHAREHOLDER_SHARES[index];
            const sharesVal = dealData[sharesField];
            if (id && id > 0) {
                sharesMap[id] = sharesVal;
            }
        });

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

        // --- STEP 5: Process Directors ---
        const directors = await Promise.all(directorIds.map(id =>
            fetchAndMapContactDetails(id, "Director", shareholderIds.includes(id)) // Set checkbox if also a member
        ));
        finalJson.super_form_data.directors = directors.filter(d => d !== null);

        // --- STEP 6 & 7: Process Shareholders (Individual or Corporate) ---
        console.log(`   - Processing Shareholder Slots...`);
        const individualShareholders = [];
        const corporateShareholders = [];

        for (let i = 0; i < 5; i++) {
            const rawInd = dealData[DEAL_ID_LINK_FIELDS.SHAREHOLDER_IDS[i]];
            const rawCorp = dealData[DEAL_ID_LINK_FIELDS.CORPORATE_SHAREHOLDER_IDS[i]];
            const indId = extractId(rawInd);
            const corpId = extractId(rawCorp);
            const shareVal = dealData[DEAL_ID_LINK_FIELDS.SHAREHOLDER_SHARES[i]];

            console.log(`   - Slot ${i + 1}: IndField=${DEAL_ID_LINK_FIELDS.SHAREHOLDER_IDS[i]}, RawInd="${JSON.stringify(rawInd)}", ExtractedInd=${indId}`);
            console.log(`             CorpField=${DEAL_ID_LINK_FIELDS.CORPORATE_SHAREHOLDER_IDS[i]}, RawCorp="${JSON.stringify(rawCorp)}", ExtractedCorp=${corpId}`);

            if (indId) {
                console.log(`      + Mapping Individual Shareholder Index ${i} (ID: ${indId})`);
                const s = await fetchAndMapContactDetails(indId, "Member", false, shareVal);
                if (s) individualShareholders.push(s);
            }

            if (corpId) {
                console.log(`      + Mapping Corporate Shareholder Index ${i} (ID: ${corpId})`);
                const s = await fetchAndMapCorporateShareholder(corpId, shareVal);
                if (s) corporateShareholders.push(s);
            }
        }

        // Combine both into members_shareholders (Individuals first, then Body Corporates)
        finalJson.super_form_data.members_shareholders = [
            ...individualShareholders,
            ...corporateShareholders
        ];

        // --- STEP 5: Add Comment to Bitrix ---
        // const jsonString = JSON.stringify(finalJson, null, 4);

        //const commentId = await callBitrix('crm.timeline.comment.add', {
        //     fields: {
        //        ENTITY_ID: dealIdNum,
        //         ENTITY_TYPE: 'deal',
        //           COMMENT: jsonString // Raw JSON only as requested
        //    }
        // });

        // console.log(`✅ Success! JSON logged to Bitrix Timeline. Comment ID: ${commentId}`);


        res.json({
            success: true,
            deal_id: dealIdNum,
            // comment_id: commentId,
            data_preview: finalJson
        });

    } catch (error) {
        console.error("❌ Server Error:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => console.log(`Backend Agent running on port ${PORT}`));