// =================================================================================
// PART 1: SITE CONFIGURATION (SSM SPECIFIC)
// =================================================================================

const SSM_MAPPINGS = {
    // =========================================================================
    // EXISTING: Incorporation Form
    // =========================================================================
    Incorp_Form: {
        waitForElement: '#ctl00_ContentPlaceHolder1_FormEngine1_mf_f14088e5-389c-453e-bef5-3e97d113f41a',
        nextButtonSelector: null,
        fieldOrder: [
            "Clarify_Single_Letters", "Clarify_Not_BM_EN",
            "Clarify_Proper_Name", "Clarify_Similar_Name", "Clarify_Trademark", "Clarify_Other",
            "Business_Description",
            "Registered_Address_1", "Registered_Country", "Registered_State", "Registered_City", "Registered_Postcode",
            "Email", "Office_Number", "Fax_Number",
            "Same_As_Above",
            "Business_Address_1", "Business_Address_2", "Business_Address_3",
            "Business_Country", "Business_State", "Business_City", "Business_Postcode",
            "Business_Office_No", "Business_Fax"
        ],
        fields: {
            "Clarify_Single_Letters": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_f14088e5-389c-453e-bef5-3e97d113f41a",
            "Clarify_Not_BM_EN": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_31b72780-e5d3-4680-8498-ca66a79757fd",
            "Clarify_Proper_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c4e1cba4-eae3-4e76-843e-e727389206dd",
            "Clarify_Similar_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_5943c79f-9d41-4677-ba49-a0f1adf2cb21",
            "Clarify_Trademark": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_914643f1-dfba-42c5-bc11-c3708ec35156",
            "Clarify_Other": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c8dff08f-d7da-4963-bb45-3dd3e1820aa8",
            "Business_Description": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_773f3780-7707-464a-a1f9-989d74f82ec6",
            "Registered_Address_1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_16e89a05-304d-4de7-832b-7ebab4229f9d",
            "Registered_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_3c27c86f-5c54-444f-a96a-056a05cf05f4_ddlGroup",
            "Registered_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_a47e086f-b648-45aa-b296-8ef74209eb59_ddlGroup",
            "Registered_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_2176b5c2-4f01-4bbb-b3ab-7042bb3d0d06_ddlGroup",
            "Registered_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_eb9ac5e5-69ec-4368-9768-d465ec07b394_ddlGroup",
            "Business_Address_1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_ab0ce6c4-4d09-4cfc-b6b3-9239b270b10d",
            "Business_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_1129fe61-f66f-4316-86d1-ae32d77b4722_ddlGroup",
            "Business_Office_No": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_fb6a1a7e-5d98-4aa3-b172-49431079f864",
            "Business_Fax": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_4e224055-c902-4cef-a31e-eb6a468145a4",
            "Email": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_dd2f6f65-1175-479c-b091-27721b1c5b7b",
            "Office_Number": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_90e413c2-f9a9-4bef-8083-b596f5c3cf20",
            "Fax_Number": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_4e224055-c902-4cef-a31e-eb6a468145a4",
            "Same_As_Above": "#ctl00_ContentPlaceHolder1_FormEngine1_clb19ad51c-6533-4ef1-b9da-f662bdcf22b1_1",
            "Business_Address_2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_926a982c-229e-47d7-9651-38d17b2f9c55",
            "Business_Address_3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_d4b1c781-a843-4bbd-8664-e25a15d961be",
            "Business_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_29f02aab-0f7b-46d2-92bc-d5124987cd53_ddlGroup",
            "Business_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_41207d2d-0d06-4596-8442-6a9d0f69241d_ddlGroup",
            "Business_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_eb4f504d-36b1-420b-8b6a-3dcff7f96121_ddlGroup"
        }
    },

    // =========================================================================
    // NEW: Business Code Form (Repeater - for multiple business codes)
    // =========================================================================
    Business_Code_Form: {
        waitForElement: 'ALL:Add',
        tabClickSelector: 'ALL:Business Code',
        repeaterKey: 'business_codes',
        addButtonSelector: 'ALL:Add',
        saveButtonSelector: '#ctl00_ContentPlaceHolder1_FormEngine1_btnSave',
        nextButtonSelector: null,
        fieldOrder: [
            "Business_Code"
        ],
        fields: {
            "Business_Code": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_5da738e4-20fb-4289-9a1d-fc18ebb48643_ddlGroup"
        }
    },

    // =========================================================================
    // NEW: Directors Form (Repeater - for multiple directors)
    // =========================================================================
    Directors_Form: {
        waitForElement: 'ALL:Add',
        tabClickSelector: 'ALL:Directors',
        repeaterKey: 'directors',
        addButtonSelector: 'ALL:Add',
        saveButtonSelector: '#ctl00_ContentPlaceHolder1_FormEngine1_btnSave',
        nextButtonSelector: null,
        fieldOrder: [
            "Director_ID_Type", "Director_NRIC", "Director_Name", "Director_DOB",
            "Director_Nationality", "Director_Gender", "Director_Race",
            "Director_Address_Line1", "Director_Address_Line2", "Director_Address_Line3",
            "Director_Country", "Director_State", "Director_City", "Director_Postcode",
            "Director_Email", "Director_Mobile", "Director_Office", "Director_Fax",
            "Director_Compliance_Checkbox", "Director_Also_Member_Checkbox"
        ],
        fields: {
            "Director_ID_Type": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_260583e0-3852-4f28-a94b-4f87c754dc7b_ddlGroup",
            "Director_NRIC": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_87a278a7-4eff-45a3-be6b-9c37b26ff3ee",
            "Director_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_31929850-b119-4a44-8e34-87d87e4f5992",
            "Director_DOB": "#ctl00_ContentPlaceHolder1_FormEngine1_ctl12_txtDate",
            "Director_Nationality": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_8a7bbf89-cba5-4789-88aa-7fc66e4ea0be_ddlGroup",
            "Director_Gender": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rbaa9fc419-8743-40f7-8104-a5e8ccd495e2",
            "Director_Race": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c06cf816-00f1-4a6e-9ac9-38c06a031240_ddlGroup",
            "Director_Address_Line1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_86316498-8040-41d2-805b-9b5dbc797851",
            "Director_Address_Line2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_a615f8cf-f38e-4b94-82f7-16fac7345931",
            "Director_Address_Line3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0e5b0214-b20b-4df0-8e6f-4e060f0942b4",
            "Director_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_f11c1039-55d2-4346-a42f-995257e0d579_ddlGroup",
            "Director_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_788c22e1-dd3b-4de6-aadb-5f92f387a664_ddlGroup",
            "Director_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0641aa3a-e5b2-48bb-8a75-f8037a784c4e_ddlGroup",
            "Director_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_a39c630a-a6ef-4a2d-aa47-a8909686fa95_ddlGroup",
            "Director_Email": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_1615903f-84de-4029-85a9-a4d19cc03681",
            "Director_Mobile": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_364cd6dc-5687-4f4b-b6e3-ae3d40ef1e68",
            "Director_Office": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_af44fa3c-55d1-407d-944d-5d34ce3860eb",
            "Director_Fax": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_fcd8abb1-ad58-4589-9876-e1a7f721af28",
            "Director_Compliance_Checkbox": "#ctl00_ContentPlaceHolder1_FormEngine1_cl1d7945cd-129c-4b36-bdaa-da16fb3e7b9f_1",
            "Director_Also_Member_Checkbox": "#ctl00_ContentPlaceHolder1_FormEngine1_cl258e89d8-73e5-4f8f-b933-0206057d69e8_1"
        }
    },

    // =========================================================================
    // NEW: Members/Shareholders Form (Repeater - for multiple members)
    // =========================================================================

    Members_Form: {
        waitForElement: 'ALL:Add',
        tabClickSelector: 'ALL:Members/Shareholders',
        repeaterKey: 'members_shareholders',
        addButtonSelector: 'ALL:Add',
        saveButtonSelector: '#ctl00_ContentPlaceHolder1_FormEngine1_btnSave',
        nextButtonSelector: null,
        fieldOrder: [
            // --- 1. TOP SELECTION ---
            "Member_Promoter_Type",
            "Member_New_Or_Existing",

            // --- 2. BODY CORPORATE INFO (Visible only if Body Corp selected) ---
            "Member_Type",                      // Triggers Page Reload
            "Member_Company_Registration_No",   // ROC / LLP Number
            "Member_Establishment_Act",         // Govt Agency Only
            "Member_Corporate_Name",
            "Member_Place_of_incorporation",

            // --- 2b. BODY CORPORATE ADDRESS ---
            "Member_Corp_Address_Line1",
            "Member_Corp_Address_Line2",
            "Member_Corp_Address_Line3",
            "Member_Corp_Country",              // Triggers Postback
            "Member_Corp_State",
            "Member_Corp_City",
            "Member_Corp_Postcode",

            // --- 3. INDIVIDUAL INFO (Visible only if Individual selected) ---
            "Member_ID_Type",
            "Member_New_IC",                    // Triggers Auto-fill
            "Member_Name",
            "Member_DOB",
            "Member_Nationality",               // Triggers Race Load
            "Member_Gender",
            "Member_Race",

            // --- 3b. INDIVIDUAL ADDRESS ---
            "Member_Address_Line1",
            "Member_Address_Line2",
            "Member_Address_Line3",
            "Member_Country",                   // Triggers Postback
            "Member_State",
            "Member_City",
            "Member_Postcode",

            // --- 4. CONTACT INFO (Shared) ---
            "Member_Email",
            "Member_Mobile",
            "Member_Office",
            "Member_Fax",

            // --- 5. SHARES (Shared) ---
            "Member_Price_Per_Share",
            "Member_Number_Of_Shares",
            "Member_Class_Of_Shares",

            // --- 6. REPRESENTATIVE (Body Corporate Only - Bottom) ---
            "Member_Rep_Name",
            "Member_Rep_NRIC",
            "Member_Rep_Designation",

            // --- 7. CONFIRMATION ---
            "Member_Compliance_Checkbox"
        ],
        fields: {
            // --- RADIOS ---
            "Member_Promoter_Type": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rb60f0186e-9a9c-4f3e-b6e4-4d8fd8fd9fd8",
            "Member_New_Or_Existing": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rb049630b2-344d-403c-84e8-22ba2a6ec6fe",

            // --- BODY CORPORATE ---
            "Member_Type": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_4d7f45d4-467b-45af-8e68-e9912c848434_ddlGroup",
            "Member_Company_Registration_No": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_e414afde-f588-4e5a-a833-6a332288a9e0",
            "Member_Establishment_Act": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_65d17b52-5e2c-44c1-86ca-4eeecf2d8ee4",
            "Member_Corporate_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_romf_2d00521b-3d88-435c-9185-8271ea23cae4",
            "Member_Place_of_incorporation": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_80b697d5-6d45-4788-ad7d-506d007814ef",

            // --- BODY CORP ADDRESS ---
            "Member_Corp_Address_Line1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_7868b1aa-1d58-4c37-9913-f9444c583be6",
            "Member_Corp_Address_Line2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_01f53537-e6a0-4a1f-82d4-78e94decce6d",
            "Member_Corp_Address_Line3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c8ae1d7e-2f51-4f75-8238-0941733e7a5b",
            "Member_Corp_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_a74c5a17-734b-4e70-afa0-12feaf2ead91_ddlGroup",
            "Member_Corp_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_feedb64b-dea2-4ed4-b2b8-5720e8420f10_ddlGroup",
            "Member_Corp_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_33a145b5-75fd-4c4c-878f-0226a8130e61_ddlGroup",
            "Member_Corp_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_4c897100-8357-487e-8af6-052e112d0f66_ddlGroup",

            // --- INDIVIDUAL FIELDS ---
            "Member_ID_Type": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_4253bb22-f6a4-439b-83eb-67b8fa0422ac_ddlGroup",
            "Member_New_IC": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_00f606c7-86a3-4a1f-9844-70df7ba5da7c",
            "Member_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_8fb72166-0010-4bf8-889c-85119ebccf8c",
            "Member_DOB": "#ctl00_ContentPlaceHolder1_FormEngine1_ctl30_txtDate",
            "Member_Nationality": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_6d59e6ed-5584-4a5f-996b-43a80b0c385f_ddlGroup",
            "Member_Gender": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_af210407-086e-48fb-b81b-d52d68ad9f0e_ddlGroup",
            "Member_Race": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_faddff0a-0a67-4c3d-87c4-17f3e76531bb_ddlGroup",

            // --- INDIVIDUAL ADDRESS ---
            "Member_Address_Line1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_fe773982-1fbf-431c-92c7-04f78df1c385",
            "Member_Address_Line2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_f66fc72f-2336-4cf3-8e66-dd6c1cb87256",
            "Member_Address_Line3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_610748f9-64e5-4c34-adef-42c22caedabb",
            "Member_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_da6ea893-b2b4-4fc6-aa1a-6054e210b302_ddlGroup",
            "Member_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_649394c3-7301-42ca-8174-83b755c2277e_ddlGroup",
            "Member_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_4e5c5e6b-78f4-4821-8b5a-7ba3cb2f714a_ddlGroup",
            "Member_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_7b3f0d7e-de0f-45cf-87ed-b4b3d7ae0b95_ddlGroup",

            // --- CONTACT INFO ---
            "Member_Email": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_db0e311e-ba9c-432f-9363-96eb09b95e04",
            "Member_Mobile": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_60c6db22-1dd4-4163-a503-0396a7a0a105",
            "Member_Office": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0f932d41-cb0a-4452-9f9c-6bc36007f06f",
            "Member_Fax": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_22944627-750b-4be2-af35-665ed8984b6f",

            // --- SHARES ---
            "Member_Price_Per_Share": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_a4725b2a-3782-4785-9776-f8f7f3eca44f",
            "Member_Number_Of_Shares": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_35e5bd3e-51ed-4590-902c-396407d8afd9",
            "Member_Class_Of_Shares": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_ffb98b74-d407-4441-9ead-7b551bd72827_ddlGroup",

            // --- REPRESENTATIVE ---
            "Member_Rep_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_f116a325-1d42-4652-a9fe-51c4b6aa9bbf",
            "Member_Rep_NRIC": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_1f4b021a-d2f8-4830-9ad6-dea81fca1f14",
            "Member_Rep_Designation": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_97a4ba6d-c849-48db-aa19-9e9bc4a7351b",

            // --- COMPLIANCE ---
            "Member_Compliance_Checkbox": "#ctl00_ContentPlaceHolder1_FormEngine1_cl91fe61d1-084b-49dd-8823-2fb043c32d2b_1"
        }
    },

    // =========================================================================
    // NEW: Employee Information Form (Single Object)
    // =========================================================================
    Agency_Form: {
        waitForElement: '#ctl00_ContentPlaceHolder1_FormEngine1_mf_0b7d797c-1110-4fe9-95eb-9808cdd5e9d4',
        tabClickSelector: 'ALL:Information To Agency',
        nextButtonSelector: '#ctl00_ContentPlaceHolder1_FormEngine1_Button4',
        fieldOrder: [
            "Has_Employees", "Num_Fulltime_Local_Employee", "Num_Fulltime_Foreign_Employee",
            "Num_Parttime_Local_Employee", "Num_Parttime_Foreign_Employee", "Total_Num_Employees", "Employee_Start_Date",
            "Branch_Address_Line1", "Branch_Address_Line2", "Branch_Address_Line3",
            "Branch_Country", "Branch_State", "Branch_City", "Branch_Postcode",
            "Branch_Phone_Number", "Branch_Fax_Number", "Agency_Contact_Person", "Declaration_Confirm"
        ],
        fields: {
            "Has_Employees": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rbbe7c9126-dec5-488e-b703-9b7de3809964",
            "Num_Fulltime_Local_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0b7d797c-1110-4fe9-95eb-9808cdd5e9d4",
            "Num_Fulltime_Foreign_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_773b72e9-8425-418f-b41c-4adf7063ad16",
            "Num_Parttime_Local_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0b621642-f76f-4fb4-a7fa-4cb0750d2cb0",
            "Num_Parttime_Foreign_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_799d4b0d-d942-4c7c-9d77-8c40bc6d3c09",
            "Total_Num_Employees": "#ctl00_ContentPlaceHolder1_FormEngine1_romf_aec2e343-3c6f-4cde-adeb-17f647c35724",
            "Employee_Start_Date": "#ctl00_ContentPlaceHolder1_FormEngine1_ctl178_txtDate",
            "Branch_Address_Line1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0ca8b618-de23-452a-8965-07a7b57889f9",
            "Branch_Address_Line2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_7c6226ce-267e-4e89-b899-516030d2928d",
            "Branch_Address_Line3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c79f4502-7c5a-4024-88bd-18014251ca0b",
            "Branch_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_b2438850-9276-4654-9b95-3495f5a68695_ddlGroup",
            "Branch_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_dd452bde-0371-4556-89ac-d4cc2820443d_ddlGroup",
            "Branch_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_76232d45-82a8-40b7-981e-9afc91743d3b_ddlGroup",
            "Branch_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c0204fe2-9133-479b-8b2c-d8aff8030793_ddlGroup",
            "Branch_Phone_Number": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_76676f50-b260-4ffe-b1ec-3b86b53f16ad",
            "Branch_Fax_Number": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_94e41c84-af64-4015-805b-ef76dc7bf20d",
            "Agency_Contact_Person": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c72e6fb7-b9c9-4518-a10d-0de983d80879",
            "Declaration_Confirm": "#ctl00_ContentPlaceHolder1_FormEngine1_clbd45c870-35c6-4412-9740-0a069f061ff3_1"
        }
    }
};

// Map some common keys to Agency_Form
SSM_MAPPINGS.Employees_Form = SSM_MAPPINGS.Agency_Form;
SSM_MAPPINGS.Branch_Form = SSM_MAPPINGS.Agency_Form;

const SITE_CONFIG = {
    dataPreProcessor: (formData) => {
        // If data is already flat, return as-is
        if (!formData.super_form_data) return formData;

        const flat = {};
        const sfd = formData.super_form_data;

        // Map from nested structure to flat field names
        if (sfd.application_details_clarification) {
            const clarif = sfd.application_details_clarification;
            flat.Clarify_Single_Letters = clarif.clarification_proposed_name_desc || "";
            flat.Clarify_Not_BM_EN = clarif.clarification_controlled_words_desc || "";
            flat.Clarify_Proper_Name = clarif.clarification_associated_corp_desc || "";
            flat.Clarify_Other = clarif.clarification_other_comments || "";
        }

        if (sfd.information_to_agency) {
            const agency = sfd.information_to_agency;
            // Legacy/Alias Mapping
            flat.Business_Description = agency.agency_contact_person || "";
            flat.Business_Address_1 = agency.agency_branch_address_line1 || "";
            flat.Business_City = agency.agency_branch_city || "";
            flat.Business_Office_No = agency.agency_branch_phone_number || "";
            flat.Business_Fax = agency.agency_branch_fax_number || "";

            // Primary Mapping: Flatten all agency fields
            Object.assign(flat, agency);
        }

        // Extract Repeaters to Top Level
        if (sfd.business_codes) flat.business_codes = sfd.business_codes;
        if (sfd.directors) flat.directors = sfd.directors;
        if (sfd.members_shareholders) flat.members_shareholders = sfd.members_shareholders;

        // Keep any top-level fields that might exist
        Object.keys(formData).forEach(key => {
            if (key !== 'super_form_data' && !flat[key]) {
                flat[key] = formData[key];
            }
        });

        return flat;
    },
    fieldRules: {
        ajaxTriggers: [
            // ==========================================
            // NRIC/IC Special Handling (auto-fill prevention)
            // ==========================================
            {
                keyEquals: 'Director_NRIC',
                waitForAjax: true,
                postDelay: 3500
            },
            {
                keyEquals: 'Member_New_IC',
                waitForAjax: true,
                postDelay: 3500
            },
            {
                keyEquals: 'Member_Nationality',
                waitForAjax: true,
                postDelay: 5000 // Increased to allow the "Race" dropdown to populate
            },
            {
                keyEquals: 'Member_Gender',
                waitForAjax: true,
                postDelay: 4000 // Ensure Postback completes before moving to Race
            },
            {
                keyEquals: 'Member_Class_Of_Shares',
                waitForAjax: true,
                postDelay: 3500
            },
            {
                keyEquals: 'Member_Promoter_Type', // <--- THIS IS THE FIX
                waitForAjax: true,
                postDelay: 3500 // Give it 3.5 seconds to switch the form layout
            },

            // ====================================================
            // 2. WAIT FOR BODY CORPORATE TYPE (ROC vs FOREIGN)
            // ====================================================
            {
                keyEquals: 'Member_Type',
                waitForAjax: true,
                postDelay: 3500
            },
            // ==========================================
            // Country fields need EXTRA time for cascading
            // ==========================================
            {
                keyContains: 'Country',
                waitForAjax: true,
                postDelay: 4000  // Longer wait for country → state cascade
            },
            // ==========================================
            // Universal Rule: ALL _ddlGroup fields
            // ==========================================
            {
                selectorContains: '_ddlGroup',
                waitForAjax: true,
                postDelay: 2500
            }
        ],
        extraDelayFields: [],
    },

    enableSmartJump: true,
    pageSequence: ['Incorp_Form', 'Business_Code_Form', 'Members_Form',],
    mappings: SSM_MAPPINGS
};

// =================================================================================
// PART 2: Filler Engine (Generally Reusable - DO NOT MODIFY)
// =================================================================================

document.addEventListener('DOMContentLoaded', function () {
    const statusDiv = document.getElementById('msg');
    const jsonInput = document.getElementById('jsonData');
    const actionBtn = document.getElementById('actionBtn');
    const startStepSelect = document.getElementById('startStep');
    const progressBarFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progressText');
    const stepCounter = document.getElementById('stepCounter');
    const progressContainer = document.getElementById('progressContainer');
    const checklistContainer = document.getElementById('checklistContainer');

    let isRunning = false;
    let isPaused = false;

    if (startStepSelect) {
        SITE_CONFIG.pageSequence.forEach((step, index) => {
            const option = document.createElement('option');
            option.value = step;
            option.text = `${index + 1}. ${step}`;
            startStepSelect.appendChild(option);
        });
    }

    if (progressContainer && checklistContainer) {
        progressContainer.style.cursor = 'pointer';
        progressContainer.onclick = function (e) {
            if (e.target.closest('#checklistContainer')) return;
            checklistContainer.style.display = (checklistContainer.style.display === 'none' || checklistContainer.innerHTML === '') ? 'block' : 'none';
        };
    }

    let currentChecklistStatuses = {};
    chrome.storage.session.get(['savedAutomationJson', 'lastSavedStep', 'checklistStatuses'], function (result) {
        if (result.savedAutomationJson && jsonInput) jsonInput.value = result.savedAutomationJson;
        if (result.lastSavedStep && startStepSelect) startStepSelect.value = result.lastSavedStep;
        if (result.checklistStatuses) {
            currentChecklistStatuses = result.checklistStatuses;
            initInternalChecklist(SITE_CONFIG.pageSequence, 0, currentChecklistStatuses);
        }
    });

    if (jsonInput) jsonInput.addEventListener('input', () => chrome.storage.session.set({ 'savedAutomationJson': jsonInput.value }));

    actionBtn.addEventListener('click', () => {
        if (!isRunning) runFullAutomation();
        else if (isRunning && !isPaused) stopAutomation();
        else if (isRunning && isPaused) resumeAutomation();
    });

    function stopAutomation() {
        isRunning = false;
        isPaused = false;
        updateStatus("STOPPING...", "red");
        updateBtnState('IDLE');
    }

    function resumeAutomation() {
        isPaused = false;
        updateStatus("Resuming...", "blue");
        updateBtnState('RUNNING');
    }

    function updateBtnState(state) {
        if (state === 'IDLE') {
            actionBtn.textContent = "▶ Start Automation";
            actionBtn.style.backgroundColor = "#64369F";
            actionBtn.disabled = false;
            if (startStepSelect) startStepSelect.disabled = false;
        } else if (state === 'RUNNING') {
            actionBtn.textContent = "Stop Automation";
            actionBtn.style.backgroundColor = "#f44336";
            actionBtn.disabled = false;
            if (startStepSelect) startStepSelect.disabled = true;
        } else if (state === 'PAUSED') {
            actionBtn.textContent = "▶ I Fixed It. Resume!";
            actionBtn.style.backgroundColor = "#ff9800";
            actionBtn.disabled = false;
        }
    }

    function updateStatus(msg, color = "black") {
        if (statusDiv) { statusDiv.textContent = msg; statusDiv.style.color = color; }
        console.log('[Auto] ' + msg);
    }

    function showNotification(title, message) {
        chrome.notifications.create({ type: 'basic', title: title, message: message, priority: 2 });
    }

    function updateProgress(current, total) {
        if (!progressContainer || !progressBarFill) return;
        progressContainer.style.display = 'block';
        const pct = Math.round((current / total) * 100);
        progressBarFill.style.width = pct + '%';
        if (progressText) progressText.textContent = pct + '%';
        if (stepCounter) stepCounter.textContent = `Step ${current} / ${total}`;
    }

    function initInternalChecklist(pageList, startIndex, savedStatuses = {}) {
        if (!checklistContainer) return;
        checklistContainer.innerHTML = '';
        pageList.forEach((pageName, index) => {
            const item = document.createElement('div');
            item.id = 'chk_' + pageName;
            let status = savedStatuses[pageName] || 'pending';
            item.className = `checklist-item ${status}`;
            item.style.padding = "8px";
            item.style.borderBottom = "1px solid #f0f0f0";
            item.style.fontSize = "13px";
            let iconText = '●';
            let iconColor = 'inherit';
            if (status === 'success') { iconText = '✓'; iconColor = 'green'; }
            else if (status === 'failed') { iconText = '🛑'; iconColor = 'red'; }
            else if (status === 'warning') { iconText = '⚠️'; iconColor = 'orange'; }
            else if (status === 'skipped') { iconText = '⊘'; iconColor = 'gray'; }

            item.innerHTML = `
                    <div style="display:flex; align-items:flex-start;">
                        <span class="checklist-icon" style="margin-right:10px; font-weight:bold; min-width:20px; color:${iconColor}">${iconText}</span>
                        <div style="flex:1;">
                            <span class="page-name">${index + 1}. ${pageName}</span>
                            <div class="error-detail" style="color:#d32f2f; font-size:11px; margin-top:4px; display:none;"></div>
                        </div>
                    </div>
                `;
            if (status === 'success') item.style.backgroundColor = "#e8f5e9";
            else if (status === 'failed') item.style.backgroundColor = "#ffebee";
            else if (status === 'warning') item.style.backgroundColor = "#fff3e0";
            else if (status === 'processing') item.style.backgroundColor = "#e3f2fd";
            checklistContainer.appendChild(item);
        });
    }

    function updateChecklistStatus(pageName, status, errorDetails = [], customMsg = null) {
        const item = document.getElementById('chk_' + pageName);
        if (!item) return;
        currentChecklistStatuses[pageName] = status;
        chrome.storage.session.set({ 'checklistStatuses': currentChecklistStatuses });
        let bgColor = status === 'processing' ? "#e3f2fd" : (status === 'success' ? "#e8f5e9" : (status === 'warning' ? "#fff3e0" : (status === 'failed' ? "#ffebee" : "transparent")));
        item.style.backgroundColor = bgColor;
        const iconSpan = item.querySelector('.checklist-icon');
        const errorDiv = item.querySelector('.error-detail');
        if (status === 'processing') { iconSpan.textContent = '⏳'; item.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        else if (status === 'success') { iconSpan.textContent = '✓'; iconSpan.style.color = "green"; errorDiv.style.display = 'none'; }
        else if (status === 'warning') { iconSpan.textContent = '⚠️'; iconSpan.style.color = "orange"; if (errorDetails.length || customMsg) { errorDiv.style.display = 'block'; errorDiv.innerHTML = customMsg || `Issues:<br/> ${errorDetails.join('<br/>')}`; } }
        else if (status === 'skipped') { iconSpan.textContent = '⊘'; iconSpan.style.color = "gray"; }
        else if (status === 'failed') { iconSpan.textContent = '🛑'; iconSpan.style.color = "red"; if (errorDetails.length || customMsg) { errorDiv.style.display = 'block'; errorDiv.innerHTML = customMsg || `Error: ${errorDetails[0]}`; } }
    }

    async function waitForUserIntervention(tabId, errorMessage, currentPage, previousPage) {
        isPaused = true;
        updateBtnState('PAUSED');
        updateChecklistStatus(currentPage, 'processing');
        if (previousPage) updateChecklistStatus(previousPage, 'warning', [], `⚠️ STUCK HERE:<br/>${errorMessage}`);
        updateStatus(`🛑 Error. Fix manually & Click Resume.`, "red");
        showNotification("Automation Paused", errorMessage);
        while (isPaused && isRunning) await new Promise(r => setTimeout(r, 500));
        if (!isRunning) throw new Error("Stopped by user.");
        updateStatus(`Resuming search for ${currentPage}...`, "blue");
        if (previousPage) updateChecklistStatus(previousPage, 'success');
    }

    async function runFullAutomation() {
        console.log("%c🚀 AUTOMATION SCRIPT VERSION: FIX_V8 (Single Click)", "color: white; background: green; font-size: 16px; padding: 10px;");
        const jsonStr = jsonInput ? jsonInput.value : "";
        if (!jsonStr) return updateStatus("Error: Paste JSON first.", "red");
        let formData;
        try { formData = JSON.parse(jsonStr); } catch (e) { return updateStatus("Error: Invalid JSON.", "red"); }
        if (SITE_CONFIG.dataPreProcessor) formData = SITE_CONFIG.dataPreProcessor(formData);

        console.log("[Auto] Loaded Data Keys:", Object.keys(formData));
        if (formData.business_codes) console.log(`[Auto] Found ${formData.business_codes.length} business codes.`);
        else console.warn("[Auto] 'business_codes' NOT found in data provided!");

        let startIndex = 0;
        const manualSelection = startStepSelect ? startStepSelect.value : SITE_CONFIG.pageSequence[0];
        startIndex = SITE_CONFIG.pageSequence.indexOf(manualSelection);
        if (startIndex === -1) startIndex = 0;

        isRunning = true;
        isPaused = false;
        updateBtnState('RUNNING');
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];

        try {
            if (SITE_CONFIG.enableSmartJump) {
                updateStatus("Smart Jump: Analyzing...", "blue");
                const detectionList = [];
                SITE_CONFIG.pageSequence.forEach(name => {
                    const map = SITE_CONFIG.mappings[name];
                    if (map && map.waitForElement) detectionList.push({ name: name, selector: map.waitForElement });
                });
                const detectedPage = await injectScriptWithRetry(tab.id, detectCurrentPage, [detectionList]);
                if (detectedPage && detectedPage !== manualSelection) {
                    const detectedIndex = SITE_CONFIG.pageSequence.indexOf(detectedPage);
                    if (detectedIndex !== -1) {
                        updateStatus(`Jumped to: ${detectedPage}`, "green");
                        startIndex = detectedIndex;
                        if (startStepSelect) startStepSelect.value = detectedPage;
                        await new Promise(r => setTimeout(r, 1000));
                    }
                }
            }
            initInternalChecklist(SITE_CONFIG.pageSequence, startIndex, currentChecklistStatuses);

            for (let i = startIndex; i < SITE_CONFIG.pageSequence.length; i++) {
                if (!isRunning) throw new Error("Stopped by user.");
                const pageName = SITE_CONFIG.pageSequence[i];
                const mapping = SITE_CONFIG.mappings[pageName];
                updateProgress(i + 1, SITE_CONFIG.pageSequence.length);
                if (startStepSelect) startStepSelect.value = pageName;
                chrome.storage.session.set({ 'lastSavedStep': pageName });
                updateChecklistStatus(pageName, 'processing');

                if (mapping.shouldSkip && mapping.shouldSkip(formData)) {
                    updateChecklistStatus(pageName, 'skipped');
                    continue;
                }

                if (mapping.tabClickSelector) {
                    await clickElementInMainWorld(tab.id, mapping.tabClickSelector);
                    await new Promise(r => setTimeout(r, 1000));
                }

                if (mapping.waitForElement) {
                    let pageFound = false;
                    while (!pageFound && isRunning) {
                        const waitRes = await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.waitForElement, 15000]);
                        if (waitRes && waitRes.error) {
                            await waitForUserIntervention(tab.id, "Timeout: Page not found", pageName, i > 0 ? SITE_CONFIG.pageSequence[i - 1] : null);
                        } else pageFound = true;
                    }
                }
                await new Promise(r => setTimeout(r, 1000));

                if (mapping.repeaterKey) {
                    const items = formData[mapping.repeaterKey] || [];

                    for (let j = 0; j < items.length; j++) {
                        if (!isRunning) throw new Error("Stopped by user.");

                        updateStatus(`Processing ${pageName} item ${j + 1}/${items.length}...`, "blue");

                        // =========================================================
                        // STEP 1: CLICK ADD BUTTON (SINGLE ATTEMPT)
                        // =========================================================
                        if (mapping.addButtonSelector) {
                            let formOpened = false;
                            const firstFieldKey = (mapping.fieldOrder && mapping.fieldOrder.length > 0) ? mapping.fieldOrder[0] : null;
                            const firstFieldSelector = firstFieldKey ? mapping.fields[firstFieldKey] : null;

                            // 1. Wait for Button
                            await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.addButtonSelector, 5000]);

                            // 2. Click Button (ONE SHOT)
                            const clickRes = await clickElementInMainWorld(tab.id, mapping.addButtonSelector);
                            console.log(`[Auto] Click Result for ${mapping.addButtonSelector}:`, clickRes);

                            // 3. Wait for Modal/Form
                            await new Promise(r => setTimeout(r, 2000)); // Postback delay
                            await new Promise(r => setTimeout(r, 1000)); // Stabilization

                            // 4. Verification
                            if (firstFieldSelector || mapping.saveButtonSelector) {
                                const visibilityCheck = await injectScriptWithRetry(tab.id, (sel1, sel2) => {
                                    const getEl = (s) => {
                                        if (!s) return null;
                                        if (s.startsWith('RADIO:')) return document.querySelector('table[id*="' + s.replace('RADIO:', '') + '"]') || document.body;
                                        return document.querySelector(s) || document.getElementById(s.replace('#', ''));
                                    };
                                    const el1 = sel1 ? getEl(sel1) : null;
                                    const el2 = sel2 ? getEl(sel2) : null;
                                    const isVisible = (e) => e && e.offsetParent !== null;
                                    if ((el1 && isVisible(el1)) || (el2 && isVisible(el2))) return { visible: true };
                                    return { visible: false };
                                }, [firstFieldSelector, mapping.saveButtonSelector]);

                                if (visibilityCheck && visibilityCheck.visible) {
                                    formOpened = true;
                                } else {
                                    console.warn(`[Auto] Warning: Form might not be open. Proceeding anyway...`);
                                    formOpened = true; // Assume success to avoid stuck loop, error will catch later
                                }
                            } else {
                                formOpened = true;
                            }

                            if (!formOpened) {
                                throw new Error(`Failed to open form for ${pageName}. Check 'Add' button.`);
                            }
                        }

                        // Step 2: Fill the form fields for this item
                        const itemData = items[j];
                        const fieldsCopy = { ...mapping.fields };
                        if (mapping.fieldOrder) fieldsCopy.__fieldOrder = mapping.fieldOrder;

                        const fillResult = await injectScriptWithRetry(tab.id, fillPageWithData, [itemData, fieldsCopy, j, SITE_CONFIG.fieldRules], 'MAIN');
                        if (fillResult && !fillResult.success) {
                            updateStatus(`Error filling ${pageName} item ${j + 1}: ${fillResult.error}`, "red");
                            updateChecklistStatus(pageName, 'failed');
                            throw new Error(`Filling failed for ${pageName} item ${j + 1}: ${fillResult.error}`);
                        }
                        await new Promise(r => setTimeout(r, 500));

                        // Step 3: Click Save to save this item
                        if (mapping.saveButtonSelector) {
                            updateStatus(`Saving item ${j + 1}...`, "blue");
                            await clickElementInMainWorld(tab.id, mapping.saveButtonSelector);

                            // Step 4: Verify Return to List View
                            if (mapping.addButtonSelector) {
                                await updateStatus("Waiting for return to List View...", "blue");
                                await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.addButtonSelector, 15000]);
                                await new Promise(r => setTimeout(r, 1000));
                            } else {
                                await new Promise(r => setTimeout(r, 2500));
                            }
                        }
                    }
                } else {
                    const fields = { ...mapping.fields };
                    if (mapping.fieldOrder) fields.__fieldOrder = mapping.fieldOrder;

                    updateStatus(`Stabilizing ${pageName}...`, "blue");
                    await new Promise(r => setTimeout(r, 1500));

                    const fillResult = await injectScriptWithRetry(tab.id, fillPageWithData, [formData, fields, 0, SITE_CONFIG.fieldRules], 'MAIN');
                    if (fillResult && !fillResult.success) {
                        updateStatus(`Error filling ${pageName}: ${fillResult.error}`, "red");
                        updateChecklistStatus(pageName, 'failed');
                        throw new Error(`Filling failed for ${pageName}: ${fillResult.error}`);
                    }
                }

                updateChecklistStatus(pageName, 'success');
                if (mapping.nextButtonSelector) {
                    await clickElementInMainWorld(tab.id, mapping.nextButtonSelector);
                    await new Promise(r => setTimeout(r, 2000));
                }
            }
            updateStatus("Automation Complete! ✅", "green");
            showNotification("Automation", "Process Fully Completed.");
        } catch (err) {
            updateStatus("Error: " + err.message, "red");
        } finally {
            isRunning = false;
            isPaused = false;
            updateBtnState('IDLE');
        }
    }
});

// --- INJECTED FUNCTIONS ---
async function injectScriptWithRetry(tabId, func, args = [], world = 'ISOLATED') {
    const res = await chrome.scripting.executeScript({ target: { tabId }, func, args, world });
    return res && res.length ? res[0].result : null;
}

async function executeAddButtonClick(tabId, selector) {
    return new Promise(resolve => {
        chrome.scripting.executeScript({
            target: { tabId }, world: 'MAIN',
            func: (sel) => {
                if (!sel.startsWith('ALL:')) {
                    let el = document.querySelector(sel) || document.getElementById(sel.replace('#', ''));
                    if (!el && !sel.startsWith('#')) el = document.getElementById('MainContent_' + sel);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el.style.border = "5px solid green";
                        setTimeout(() => {
                            el.click();
                            el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                        }, 200);
                        return { success: true, found: true };
                    }
                    return { success: false, found: false };
                }
                const textToFind = sel.replace('ALL:', '').toLowerCase().trim();
                const selectorQuery = 'a, span, .formfieldtablink, button, .datagrid_addrecordbutton, input[type="button"], input[type="submit"], input[type="image"], img[onclick], div[role="button"]';
                const allElems = Array.from(document.querySelectorAll(selectorQuery)).filter(e => e.offsetParent !== null && e.style.visibility !== 'hidden' && e.style.display !== 'none');
                let bestMatch = null;
                let bestScore = 0;
                allElems.forEach(el => {
                    let score = 0;
                    const txt = (el.innerText || el.value || el.alt || el.title || "").toLowerCase().trim();
                    const id = (el.id || "").toLowerCase();
                    const cls = (el.className || "").toLowerCase();
                    if (txt === textToFind) score += 100;
                    else if (txt.startsWith(textToFind + ' ')) score += 85;
                    else if (txt.includes(textToFind)) score += 50;
                    if (id.includes("addentry") || id.includes('btnadd') || cls.includes("addrecord")) { if (textToFind === 'add') score += 90; }
                    if (score > bestScore) { bestScore = score; bestMatch = el; }
                });
                if (bestMatch && bestScore > 0) {
                    bestMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    bestMatch.style.border = "5px solid red";
                    setTimeout(() => {
                        bestMatch.click();
                        bestMatch.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                    }, 200);
                    return { success: true, found: true };
                }
                return { success: false, found: false };
            },
            args: [selector]
        }, (res) => {
            if (chrome.runtime.lastError) resolve({ error: chrome.runtime.lastError.message });
            resolve(res && res[0] ? res[0].result : { error: "No result" });
        });
    });
}

function clickElementInMainWorld(tabId, selector) {
    return executeAddButtonClick(tabId, selector);
}

function detectCurrentPage(detectionList) {
    for (const item of detectionList) {
        let sel = item.selector.replace('ALL:', '');
        if (!sel.match(/[#\.\[]/)) sel = '#' + sel;
        if (document.querySelector(sel)) return item.name;
    }
    return null;
}

function waitForElementOnPage(selector, timeout) {
    return new Promise(resolve => {
        const findEl = () => {
            if (selector.startsWith('ALL:')) {
                const textToFind = selector.replace('ALL:', '').toLowerCase();
                const allElems = Array.from(document.querySelectorAll('a, span, .formfieldtablink, button, .datagrid_addrecordbutton, input[type="button"], input[type="submit"], input[type="image"], img[onclick], div[role="button"]'))
                    .filter(e => e.offsetParent !== null && e.style.visibility !== 'hidden' && e.style.display !== 'none');
                return allElems.find(l => (l.innerText || l.value || l.alt || l.title || "").toLowerCase().includes(textToFind));
            } else {
                let sel = selector.replace('ALL:', '');
                if (!sel.match(/[#\.\[]/)) sel = '#' + sel;
                const el = document.querySelector(sel);
                return (el && el.offsetParent !== null) ? el : null;
            }
        };
        if (findEl()) return resolve(true);
        const observer = new MutationObserver(() => { if (findEl()) { observer.disconnect(); resolve(true); } });
        observer.observe(document.body, { childList: true, subtree: true });
        setTimeout(() => { observer.disconnect(); resolve({ error: 'Timeout' }); }, timeout);
    });
}

async function fillPageWithData(data, fieldMap, rowIndex, fieldRules) {
    if (rowIndex === undefined) rowIndex = 0;
    if (!fieldRules) fieldRules = { ajaxTriggers: [], extraDelayFields: [] };

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    const waitForPageUpdate = () => {
        return new Promise((resolve) => {
            let updateDetected = false;
            const observer = new MutationObserver(() => {
                updateDetected = true;
                // console.log("📡 Page update detected!");
            });
            const mainContent = document.getElementById('ctl00_ContentPlaceHolder1_UpdatePanel1') || document.body;
            observer.observe(mainContent, {
                attributes: true,
                attributeFilter: ['disabled', 'class', 'style'],
                subtree: true,
                attributeOldValue: true
            });
            setTimeout(() => {
                observer.disconnect();
                resolve(updateDetected);
            }, 5000);
        });
    };

    const waitForEnabled = (element) => {
        if (!element || !element.disabled) return Promise.resolve(true);
        console.log(`[Observer] Waiting for ${element.id} to enable...`);
        return new Promise((resolve) => {
            const timeout = setTimeout(() => {
                observer.disconnect();
                console.warn(`[Observer] Timeout waiting for ${element.id}`);
                resolve(false);
            }, 5000);

            const observer = new MutationObserver(() => {
                if (!element.disabled) {
                    clearTimeout(timeout);
                    observer.disconnect();
                    console.log(`[Observer] ${element.id} is now enabled!`);
                    resolve(true);
                }
            });
            observer.observe(element, { attributes: true, attributeFilter: ['disabled'] });
        });
    };

    const cascadingFields = {
        // =========================================================
        // 1. CRITICAL: FIELDS THAT TRIGGER PAGE RELOADS
        // =========================================================

        // ADDRESS POSTCODES (These refresh the page -> Wipes "Class of Share")
        'Registered_Postcode': [],
        'Business_Postcode': [],
        'Director_Postcode': [],
        'Member_Postcode': [],         // <--- FIX FOR CLASS OF SHARES
        'Member_Corp_Postcode': [],    // <--- FIX FOR CORPORATE MEMBERS
        'Branch_Postcode': [],

        // NATIONALITY (Refreshes page to load Race -> Wipes "Race/Gender")
        'Director_Nationality': ['Director_Race', 'Director_Gender'],
        'Member_Nationality': ['Member_Race', 'Member_Gender'],

        // IC / NRIC (Refreshes page to auto-fill DOB/Gender)
        'Director_NRIC': ['Director_Name', 'Director_Gender'],
        'Member_New_IC': ['Member_Name', 'Member_Gender'],

        // =========================================================
        // 2. STANDARD CASCADING DROPDOWNS
        // =========================================================

        // Registered Address
        'Registered_Country': ['Registered_State', 'Registered_City', 'Registered_Postcode'],
        'Registered_State': ['Registered_City', 'Registered_Postcode'],

        // Business Address
        'Business_Country': ['Business_State', 'Business_City', 'Business_Postcode'],
        'Business_State': ['Business_City', 'Business_Postcode'],

        // Director Address
        'Director_Country': ['Director_State', 'Director_City', 'Director_Postcode'],
        'Director_State': ['Director_City', 'Director_Postcode'],

        // Member Address (Individual)
        'Member_Country': ['Member_State', 'Member_City', 'Member_Postcode'],
        'Member_State': ['Member_City', 'Member_Postcode'],

        // Member Address (Body Corporate)
        'Member_Corp_Country': ['Member_Corp_State', 'Member_Corp_City', 'Member_Corp_Postcode'],
        'Member_Corp_State': ['Member_Corp_City', 'Member_Corp_Postcode'],

        // Branch Address
        'Branch_Country': ['Branch_State', 'Branch_City', 'Branch_Postcode'],
        'Branch_State': ['Branch_City', 'Branch_Postcode'],

        // Other Triggers
        'Business_Code': [],
        'Member_Type': [],  // Body Corporate Type change
        'Member_ID_Type': [],
        'Director_ID_Type': []
    };
    const setFieldValue = async (selector, value, key) => {
        if (!selector) return false;

        // 1. Handle Radios
        if (selector.startsWith("RADIO:")) {
            const baseId = selector.replace("RADIO:", "");
            let el = document.getElementById(baseId + "_" + value);
            if (!el) {
                const labels = document.querySelectorAll(`label[for^="${baseId}"]`);
                const targetLabel = Array.from(labels).find(l => l.innerText.trim().toLowerCase() === String(value).toLowerCase());
                if (targetLabel) el = document.getElementById(targetLabel.getAttribute('for'));
            }
            if (el) { el.click(); return true; }
            return false;
        }

        let el = document.querySelector(selector) || document.getElementById(selector.replace('#', ''));
        if (!el && !selector.startsWith('#')) el = document.getElementById('MainContent_' + selector);

        // FALLBACK: Search by Label Text
        if (!el && key) {
            const cleanKey = key.replace(/Director_|Member_|Branch_|Corp_/, '').replace(/_/g, ' ');
            const labels = Array.from(document.querySelectorAll('label, span.Label, td.Label'));
            const targetLabel = labels.find(l => {
                const text = l.innerText.trim().toLowerCase();
                return text === cleanKey.toLowerCase() || text.includes(cleanKey.toLowerCase());
            });

            if (targetLabel) {
                console.log(`[Fill] Found potential label match: "${targetLabel.innerText.trim()}"`);
                const forId = targetLabel.getAttribute('for');
                if (forId) {
                    el = document.getElementById(forId);
                } else {
                    el = targetLabel.nextElementSibling?.querySelector('input, select, textarea') ||
                        targetLabel.parentElement?.nextElementSibling?.querySelector('input, select, textarea');
                }
            }
        }

        if (!el) {
            console.error(`[Fill] Element NOT FOUND: ${selector} (Key: ${key})`);
            return false;
        }

        // WAIT FOR ENABLED
        if (el.disabled) {
            console.log(`[Fill] Field ${selector} is disabled, waiting up to 5s...`);
            await waitForEnabled(el);
        }

        // FIX: FORCE ENABLE READ-ONLY FIELDS
        if (el.readOnly) {
            console.log(`[Fill] 🔓 Removing ReadOnly from ${key} to force entry...`);
            el.removeAttribute('readonly');
            el.readOnly = false;
            el.style.backgroundColor = "#fff";
        }

        if (el.disabled) {
            console.warn(`[Fill] Skipping field ${selector} (ID: ${el.id}) - Disabled: ${el.disabled}`);
            return 'skipped';
        }

        // --- ddlGroup / CONTAINER DRILL-DOWN ---
        let baseElement = el;
        if (selector.includes('_ddlGroup') || el.tagName === 'DIV' || el.tagName === 'SPAN') {
            const hiddenValue = el.querySelector('input[type="hidden"][id$="_Value"]');
            const hiddenInput = el.querySelector('input[type="hidden"][id$="_Input"]');
            const innerSelect = el.querySelector('select');
            const innerInput = el.querySelector('input:not([type="hidden"])');

            if (hiddenValue) el = hiddenValue;
            else if (hiddenInput) el = hiddenInput;
            else if (innerSelect) el = innerSelect;
            else if (innerInput) el = innerInput;
        }

        console.log(`[Fill] Setting ${selector} to ${value} (Target Tag: ${el.tagName})`);
        el.focus();

        // 2. Handle Checkboxes
        if (el.type === 'checkbox') {
            const desired = !!value;
            if (el.checked !== desired) el.click();
        }
        // 3. Handle Selects
        else if (el.tagName === 'SELECT') {
            if (el.options.length <= 1 && value) {
                console.log(`[Fill] Waiting for items to load in SELECT ${selector}...`);
                await new Promise(res => {
                    let attempts = 0;
                    const itv = setInterval(() => {
                        if (el.options.length > 1 || attempts++ > 30) {
                            clearInterval(itv);
                            res();
                        }
                    }, 100);
                });
            }

            el.value = value;
            if (el.value !== String(value)) {
                const option = Array.from(el.options).find(opt =>
                    opt.value === value ||
                    opt.text.trim().toLowerCase() === String(value).trim().toLowerCase()
                );
                if (option) el.value = option.value;
            }
        }
        else {
            el.value = value;
        }

        ['input', 'change', 'blur'].forEach(ev => el.dispatchEvent(new Event(ev, { bubbles: true })));

        return new Promise(resolve => {
            const syncId = 'ssm_sync_' + Math.random().toString(36).substr(2, 9);
            const safetyTimeout = setTimeout(() => {
                console.warn(`[Sync] Safety timeout for ${selector}`);
                window.removeEventListener('message', handler);
                resolve(true);
            }, 6000);

            const handler = (event) => {
                if (event.data && event.data.type === 'SYNC_COMPLETE' && event.data.id === syncId) {
                    clearTimeout(safetyTimeout);
                    window.removeEventListener('message', handler);
                    resolve(true);
                }
            };
            window.addEventListener('message', handler);

            // =========================================================================
            // INJECTED SCRIPT: Handles Telerik, DatePickers, and RETRY LOGIC
            // =========================================================================
            const syncScript = `
        (async function() {
            const wait = (ms) => new Promise(res => setTimeout(res, ms));
            
            try {
                const el = document.getElementById('${el.id}') || document.querySelector('${selector}');
                const baseId = '${baseElement.id}' || '${selector}'.replace('#', '').replace('_ddlGroup', '');
                const val = ${JSON.stringify(value)};
                const selector = '${selector}';
                
                // ========== CRITICAL: Detect if this is actually a Telerik ComboBox ==========
                let isTelerikCombo = false;
                let combo = null;
                
                if (typeof $find !== 'undefined') {
                    const cleanId = baseId.replace('_ddlGroup', '');
                    
                    const generateFuzzy = (id) => {
                        if (!id) return [];
                        const variations = [id];
                        const prefixes = ['ctl00', 'ctl100', 'ct100', 'ct101', 'ct110'];
                        prefixes.forEach(p1 => {
                            prefixes.forEach(p2 => {
                                if (id.includes(p1)) variations.push(id.replace(p1, p2));
                            });
                        });
                        variations.push(id.replace(/ctl?1?\d\d_/, ''));
                        return [...new Set(variations)];
                    };

                    let possibleIds = [
                        ...generateFuzzy(baseId),
                        ...generateFuzzy(cleanId),
                        ...generateFuzzy(el.id),
                        ...generateFuzzy(el.id.replace('_Input', '').replace('_Value', ''))
                    ];
                    possibleIds = [...new Set(possibleIds)];
                    
                    // Strategy 1: Standard $find
                    for (let attempt = 0; attempt < 3; attempt++) {
                        for (const pid of possibleIds) {
                            combo = $find(pid);
                            if (combo && (combo.get_items || combo.set_value)) break;
                        }
                        if (combo && (combo.get_items || combo.set_value)) break;
                        await wait(200);
                    }
                    
                    if (combo && (typeof combo.get_items === 'function' || typeof combo.set_value === 'function')) {
                        isTelerikCombo = true;
                    }
                }

                console.log('[Sync] Field:', selector, ' (ID:', el.id, ')');
                
                // ========== PATH A: DATE PICKER ==========
                if (typeof $find !== 'undefined' && '${key}'.includes('Date')) {
                    const datePicker = $find(baseId) || $find(el.id.replace('_dateInput', ''));
                    if (datePicker && datePicker.set_selectedDate) {
                        console.log('[Sync] Detected Telerik DatePicker. Setting date:', val);
                        const parts = val.split('/');
                        if (parts.length === 3) {
                            const d = new Date(parts[2], parts[1]-1, parts[0]);
                            datePicker.set_selectedDate(d);
                        }
                    }
                }

                // ========== PATH B: TELERIK COMBOBOX (RETRY LOOP) ==========
                if (isTelerikCombo && combo) {
                    console.log('[Sync] Using Telerik method with RETRY...');
                    
                    const setTelerik = async () => {
                        const comboId = combo.get_id();
                        const inputEl = document.getElementById(comboId + '_Input');
                        
                        combo.clearSelection();
                        if (inputEl) {
                            inputEl.focus();
                            inputEl.value = val;
                        }
                        
                        // Match Item
                        const items = combo.get_items();
                        let item = combo.findItemByText(val) || combo.findItemByValue(val);
                        
                        if (!item && items.get_count() > 0) {
                            for(let i=0; i<items.get_count(); i++) {
                                let it = items.getItem(i);
                                if (it.get_text().includes(val)) { item = it; break; }
                            }
                        }

                        if (item) {
                            item.select();
                            combo.set_value(item.get_value());
                            combo.set_text(item.get_text());
                            return true;
                        } 
                        return false;
                    };

                    // RETRY LOGIC (3 Attempts)
                    let success = false;
                    for(let i=0; i<3; i++) {
                        success = await setTelerik();
                        if(success && combo.get_value()) break;
                        
                        console.warn('[Sync] Telerik set failed/empty. Retrying...', i+1);
                        await wait(800 + (i*500)); // Progressive wait
                    }
                    
                    if (!success) {
                        console.error('[Sync] Failed to set Telerik value after retries.');
                        combo.set_text(val); // Last resort
                    }
                }
                // ========== PATH C: REGULAR SELECT/INPUT ==========
                else {
                    console.log('[Sync] Using standard field method...');
                    if (el.tagName === 'SELECT') {
                        el.value = val;
                        if (el.value !== String(val)) {
                            const options = Array.from(el.options);
                            const bestOption = options.find(opt => opt.value === String(val) || opt.text.includes(String(val)));
                            if (bestOption) el.value = bestOption.value;
                        }
                    } else {
                        el.value = val;
                    }
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                }

                // ========== FIX: Strict Mode Safe PostBack ==========
                const isCascading = ${JSON.stringify(Object.keys(cascadingFields))}.includes('${key}');
                
                if (isCascading || selector.includes('_ddlGroup')) {
                    const fieldId = el ? el.id : baseId;
                    await wait(800);
                    console.log('[Sync] Triggering PostBack for:', fieldId);
                    
                    setTimeout(() => {
                        try { if (typeof __doPostBack === 'function') __doPostBack(fieldId, ''); } catch(e2) {}
                    }, 100);
                    
                    await wait(2500);
                }
                
            } catch (e) {
                console.error("[Sync] Error:", e.message);
            }
            
            window.postMessage({ type: 'SYNC_COMPLETE', id: '${syncId}' }, '*');
        })();
    `;
            const scriptEl = document.createElement('script');
            scriptEl.textContent = syncScript;
            (document.head || document.documentElement).appendChild(scriptEl);
            scriptEl.remove();
        });
    };

    try {
        const keys = fieldMap.__fieldOrder || Object.keys(fieldMap);
        const filteredKeys = keys.filter(k => k !== '__fieldOrder');

        let stats = { success: 0, failed: 0, skipped: 0 };

        for (let key of filteredKeys) {
            const sel = fieldMap[key];
            const val = data[key];

            console.log(`[Fill] Processing Field: ${key} | Selector: ${sel} | Value: ${val}`);

            if (val === undefined || (!sel.startsWith("RADIO:") && val === "")) {
                console.warn(`[Fill] Skipping invalid/empty value for ${key}`);
                continue;
            }

            const res = await setFieldValue(sel, val, key);

            if (res === true) {
                stats.success++;
                console.log(`[Fill] Successfully set ${key}`);

                const ajax = (fieldRules.ajaxTriggers || []).find(r =>
                    (r.selectorContains && sel.includes(r.selectorContains)) ||
                    (r.keyEquals && key === r.keyEquals)
                );

                if (ajax) {
                    if (ajax.waitForAjax) await waitForPageUpdate();
                    if (ajax.postDelay) await delay(ajax.postDelay);
                } else {
                    const delayRule = (fieldRules.extraDelayFields || []).find(r => {
                        if (Array.isArray(r.selectorContains)) return r.selectorContains.some(s => sel.includes(s));
                        return r.selectorContains && sel.includes(r.selectorContains);
                    });
                    if (delayRule) await delay(delayRule.delay);
                }
            } else if (res === 'skipped') {
                stats.skipped++;
            } else {
                stats.failed++;
                console.error(`[Fill] FAILED to find field for ${key} (${sel})`);
            }
        }
        return { success: (stats.failed === 0), ...stats };
    } catch (err) {
        return { success: false, error: err.message };
    }
}