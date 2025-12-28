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
            "Director_Nationality": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_66723223-1087-4340-9750-6a05e24c29df_ddlGroup",
            "Director_Gender": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rbaa9fc419-8743-40f7-8104-a5e8ccd495e2",
            "Director_Race": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_ec6fc49e-cc18-472d-83b5-79469176378e_ddlGroup",
            "Director_Address_Line1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_86316498-5c4e-4f0f-8c68-ddaf0cc17f8a",
            "Director_Address_Line2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_a615f8cf-e1cf-4a37-9755-e5da08d0e74e",
            "Director_Address_Line3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0e5b0214-7221-4384-93f4-00d3c40f06f5",
            "Director_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c940b933-255d-4f1a-b62e-50a16c354728_ddlGroup",
            "Director_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_43b81177-33e9-4e60-8438-e6d877f0d01d_ddlGroup",
            "Director_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_f3775431-be3d-4223-bedd-094192b152d1_ddlGroup",
            "Director_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_98936665-2a29-450f-a78c-0fc753086eb0_ddlGroup",
            "Director_Email": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_1615903f-84de-4029-85a9-a4d19cc03681",
            "Director_Mobile": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_364cd6dc-5687-4f4b-b6e3-ae3d40ef1e68",
            "Director_Office": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_af44fa3c-55d1-407d-944d-5d34ce3860eb",
            "Director_Fax": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_fcd8abb1-ad58-4589-9876-e1a7f721af28",
            "Director_Compliance_Checkbox": "#ctl00_ContentPlaceHolder1_FormEngine1_cl1d7945cd-95c5-470a-9d62-f949c869910a_1",
            "Director_Also_Member_Checkbox": "#ctl00_ContentPlaceHolder1_FormEngine1_cl258e89d8-9993-41bb-a53d-27038e9c60e0_1"
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
            "Member_Promoter_Type", "Member_New_Or_Existing",
            "Member_ID_Type", "Member_New_IC", "Member_Name", "Member_DOB",
            "Member_Nationality", "Member_Gender", "Member_Race",
            "Member_Address_Line1", "Member_Address_Line2", "Member_Address_Line3",
            "Member_Country", "Member_State", "Member_City", "Member_Postcode",
            "Member_Email", "Member_Mobile", "Member_Office", "Member_Fax",
            "Member_Price_Per_Share", "Member_Number_Of_Shares", "Member_Class_Of_Shares",
            "Member_Compliance_Checkbox"
        ],
        fields: {
            "Member_Promoter_Type": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rb60f0186e-8260-496e-b7d1-e94ef88e798f",
            "Member_New_Or_Existing": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rb049630b2-4d10-4ed3-bb25-8664fd373650",
            "Member_ID_Type": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_78453472-aae3-4613-bc75-a8315a6b0933_ddlGroup",
            "Member_New_IC": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_00f606c7-3c72-4d9d-bc32-9cb77085698b",
            "Member_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_981d115a-939a-4171-8930-74567be43e33",
            "Member_DOB": "#ctl00_ContentPlaceHolder1_FormEngine1_ctl103_txtDate",
            "Member_Nationality": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_50ca7246-8149-43c3-98fc-d4039867c295_ddlGroup",
            "Member_Gender": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_11307ed3-911a-4939-9d95-aec0dc1f6815_ddlGroup",
            "Member_Race": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_c95781a5-8ed5-43a9-9599-73e72e1c9598_ddlGroup",
            "Member_Address_Line1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_dc2f20bd-e0d4-42ea-a4b3-d58676646535",
            "Member_Address_Line2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_7f4d7f55-154a-4d2d-944a-10f5451e04cf",
            "Member_Address_Line3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_dc7e5c54-758c-4f81-9afb-a67503ef974b",
            "Member_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_41a6b0c6-30c1-4cd4-8f77-ec07ade33967_ddlGroup",
            "Member_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_ec798b1b-68ca-426c-897b-ed554cc3c829_ddlGroup",
            "Member_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_5b045e41-01f1-4f18-a68f-9a997f642674_ddlGroup",
            "Member_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_9f7f041d-932d-4318-91ac-d8204646092e_ddlGroup",
            "Member_Email": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_e005beeb-99ad-4f51-8742-0f074d207d62",
            "Member_Mobile": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_ae56f4f2-5381-4202-b25c-89a385203f19",
            "Member_Office": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_452b4507-7407-4def-9192-3860010ca4cd",
            "Member_Fax": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_b70954b9-8e10-48e0-bb74-be481878be7b",
            "Member_Price_Per_Share": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_a4725b2a-3782-4785-9776-f8f7f3eca44f",
            "Member_Number_Of_Shares": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_35e5bd3e-51ed-4590-902c-396407d8afd9",
            "Member_Class_Of_Shares": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_78f7e250-70f0-4dc6-ab3e-28954203ae8d_ddlGroup",
            "Member_Compliance_Checkbox": "#ctl00_ContentPlaceHolder1_FormEngine1_cl91fe61d1-6625-450f-a3ff-a9314de691f1_1"
        }
    },

    // =========================================================================
    // NEW: Employee Information Form (Single Object)
    // =========================================================================
    Agency_Form: {
        waitForElement: '#ctl00_ContentPlaceHolder1_FormEngine1_UpdatePanel1',
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
            "Has_Employees": "RADIO:ctl00_ContentPlaceHolder1_FormEngine1_rbbe7c9126-11f8-472d-8646-68194aade993",
            "Num_Fulltime_Local_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0b7d797c-9ef1-424a-85d1-16ee71115858",
            "Num_Fulltime_Foreign_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_3cb397fb-c529-4d64-94e8-89c07217edba",
            "Num_Parttime_Local_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0137ce81-e01d-407b-8b5e-049830502123",
            "Num_Parttime_Foreign_Employee": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_43292415-dc86-4f38-8e6c-0e27f428416d",
            "Total_Num_Employees": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_6626508d-8c10-4389-9a2f-e8d128b789ae",
            "Employee_Start_Date": "#ctl00_ContentPlaceHolder1_FormEngine1_ctl178_txtDate",
            "Branch_Address_Line1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_0ca8b618-202d-4566-aebe-9c3f58223689",
            "Branch_Address_Line2": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_edac1b55-6677-400a-8bf8-be922377a06f",
            "Branch_Address_Line3": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_5374823a-e95e-450f-90e4-7d2fb74464c2",
            "Branch_Country": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_f3391b5c-4869-42b7-a367-1736b429074d_ddlGroup",
            "Branch_State": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_d0c6487e-d450-42f0-a006-031f822cc269_ddlGroup",
            "Branch_City": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_9921764d-5853-41c3-8837-d1a293699709_ddlGroup",
            "Branch_Postcode": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_cc6d4ea2-97b7-4c3d-bc81-2736b00609ff_ddlGroup",
            "Branch_Phone_Number": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_304e280d-855f-4638-a28a-78f7e260fb1e",
            "Branch_Fax_Number": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_98f7e230-7050-4dc6-ab3e-28954203ae8d",
            "Agency_Contact_Person": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_11307ed3-911a-4939-9d95-aec0dc1f6815",
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
            {
                keyEquals: 'Registered_Country',
                waitForAjax: true,
                postDelay: 3000  // ✅ Increased - cascading needs time
            },
            {
                keyEquals: 'Registered_State',
                waitForAjax: true,
                postDelay: 2500
            },
            {
                keyEquals: 'Registered_City',
                waitForAjax: true,
                postDelay: 2000
            },
            {
                keyEquals: 'Business_Country',
                waitForAjax: true,
                postDelay: 3000
            },
            {
                keyEquals: 'Business_State',
                waitForAjax: true,
                postDelay: 2500
            },
            {
                keyEquals: 'Business_City',
                waitForAjax: true,
                postDelay: 2000
            },
            {
                selectorContains: '_ddlGroup',
                waitForAjax: true,
                postDelay: 2000  // ✅ Default for all dropdowns
            }
        ],
        extraDelayFields: [],
    },

    enableSmartJump: true,
    pageSequence: ['Incorp_Form', 'Business_Code_Form', 'Directors_Form', 'Members_Form', 'Agency_Form'],
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
        console.log("%c🚀 AUTOMATION SCRIPT VERSION: FIX_V3 (Force Click + Data Fix)", "color: white; background: green; font-size: 16px; padding: 10px;");
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

                await new Promise(r => setTimeout(r, 500));

                if (mapping.repeaterKey) {
                    const items = formData[mapping.repeaterKey] || [];

                    // Loop through each item in the repeater
                    for (let j = 0; j < items.length; j++) {
                        if (!isRunning) throw new Error("Stopped by user.");

                        updateStatus(`Processing ${pageName} item ${j + 1}/${items.length}...`, "blue");

                        // Step 1: Click the Add button to open the form (With Retry)
                        if (mapping.addButtonSelector) {
                            let formOpened = false;
                            const firstFieldKey = (mapping.fieldOrder && mapping.fieldOrder.length > 0) ? mapping.fieldOrder[0] : null;
                            const firstFieldSelector = firstFieldKey ? mapping.fields[firstFieldKey] : null;

                            for (let attempt = 1; attempt <= 3; attempt++) {
                                updateStatus(`[Attempt ${attempt}] Clicking 'Add' button...`, "blue");

                                // Ensure button is there
                                await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.addButtonSelector, 5000]);
                                const clickRes = await clickElementInMainWorld(tab.id, mapping.addButtonSelector);
                                console.log(`[Auto] Click Result for ${mapping.addButtonSelector}:`, clickRes);
                                await new Promise(r => setTimeout(r, 2000)); // Wait for postback/modal

                                if (firstFieldSelector || mapping.saveButtonSelector) {
                                    // Check if form opened by looking for FIRST FIELD or SAVE BUTTON
                                    const visibilityCheck = await injectScriptWithRetry(tab.id, (sel1, sel2) => {
                                        const getEl = (s) => document.querySelector(s) || document.getElementById(s.replace('#', ''));

                                        const el1 = sel1 ? getEl(sel1) : null;
                                        const el2 = sel2 ? getEl(sel2) : null;

                                        const isVisible = (e) => e && e.offsetParent !== null;

                                        let result = { found: false, visible: false, reason: "Neither found" };

                                        if (el1 && isVisible(el1)) return { found: true, visible: true, el: 'Field: ' + sel1 };
                                        if (el2 && isVisible(el2)) return { found: true, visible: true, el: 'SaveBtn: ' + sel2 };

                                        if (el1) result = { found: true, visible: false, reason: "Field hidden" };
                                        else if (el2) result = { found: true, visible: false, reason: "SaveBtn hidden" };

                                        return result;
                                    }, [firstFieldSelector, mapping.saveButtonSelector]);

                                    console.log(`[Auto] Form Open Check:`, visibilityCheck);

                                    if (visibilityCheck && visibilityCheck.visible) {
                                        formOpened = true;
                                        break; // Success!
                                    } else {
                                        console.warn(`[Attempt ${attempt}] Form check failed.`, visibilityCheck);
                                    }
                                } else {
                                    // If no fields to check, just assume it worked (fallback)
                                    formOpened = true;
                                    break;
                                }
                            }

                            if (!formOpened) {
                                throw new Error(`Failed to open form for ${pageName} after 3 attempts. Check 'Add' button selector or page responsiveness.`);
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

                            // Step 4: Verify Return to List View (P1)
                            // We wait for the 'Add' button to become visible again, signifying the modal/page has closed.
                            if (mapping.addButtonSelector) {
                                await updateStatus("Waiting for return to List View...", "blue");
                                await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.addButtonSelector, 15000]);
                                await new Promise(r => setTimeout(r, 1000)); // Stabilization delay
                            } else {
                                await new Promise(r => setTimeout(r, 2500)); // Fallback delay
                            }
                        }
                    }
                } else {
                    const fields = { ...mapping.fields };
                    if (mapping.fieldOrder) fields.__fieldOrder = mapping.fieldOrder;

                    updateStatus(`Stabilizing ${pageName}...`, "blue");
                    await new Promise(r => setTimeout(r, 1500)); // Give page time to initialize scripts

                    const fillResult = await injectScriptWithRetry(tab.id, fillPageWithData, [formData, fields, 0, SITE_CONFIG.fieldRules], 'MAIN');
                    console.log(`[Auto] Fill Result for ${pageName}:`, fillResult);

                    if (fillResult && !fillResult.success) {
                        updateStatus(`Error filling ${pageName}: ${fillResult.error}`, "red");
                        updateChecklistStatus(pageName, 'failed');
                        throw new Error(`Filling failed for ${pageName}: ${fillResult.error}`);
                    }

                    if (fillResult && fillResult.skipped > 0) {
                        updateStatus(`Warning: ${fillResult.skipped} fields were skipped (Disabled/ReadOnly) in ${pageName}`, "orange");
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

// --- INJECTED FUNCTIONS (Generally Reusable) ---
async function injectScriptWithRetry(tabId, func, args = [], world = 'ISOLATED') {
    const res = await chrome.scripting.executeScript({ target: { tabId }, func, args, world });
    return res && res.length ? res[0].result : null;
}

// --- REFACTORED: Single Function to Find & Click 'Add' Button ---
async function executeAddButtonClick(tabId, selector) {
    return new Promise(resolve => {
        chrome.scripting.executeScript({
            target: { tabId }, world: 'MAIN',
            func: (sel) => {
                // STRATEGY 1: Direct ID/Selector Match (Standard)
                if (!sel.startsWith('ALL:')) {
                    let el = document.querySelector(sel) || document.getElementById(sel.replace('#', ''));
                    // Fallback for ASP.NET IDs
                    if (!el && !sel.startsWith('#')) el = document.getElementById('MainContent_' + sel);

                    if (el) {
                        console.log(`[Auto] Direct ID match for '${sel}':`, el);
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        el.style.border = "5px solid green"; // Green for direct ID
                        setTimeout(() => {
                            el.click();
                            el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                        }, 200);
                        return { success: true, found: true, method: 'direct' };
                    }
                    console.warn(`[Auto] Direct ID match failed for '${sel}'`);
                    return { success: false, found: false, method: 'direct' };
                }

                // STRATEGY 2: Fuzzy Text/Add Button Search (ALL:...)
                const textToFind = sel.replace('ALL:', '').toLowerCase().trim();
                const selectorQuery = 'a, span, .formfieldtablink, button, .datagrid_addrecordbutton, input[type="button"], input[type="submit"], input[type="image"], img[onclick], div[role="button"]';

                // 1. Finder Logic
                const allElems = Array.from(document.querySelectorAll(selectorQuery))
                    .filter(e => e.offsetParent !== null && e.style.visibility !== 'hidden' && e.style.display !== 'none');

                let bestMatch = null;
                let bestScore = 0;

                allElems.forEach(el => {
                    let score = 0;
                    const txt = (el.innerText || el.value || el.alt || el.title || "").toLowerCase().trim();
                    const id = (el.id || "").toLowerCase();
                    const cls = (el.className || "").toLowerCase();

                    // Scoring
                    if (txt === textToFind) score += 100;
                    else if (txt.startsWith(textToFind + ' ')) score += 85;
                    else if (txt.includes(textToFind)) score += 50;

                    if (id.includes("addentry") || id.includes('btnadd') || cls.includes("addrecord")) {
                        if (textToFind === 'add') score += 90;
                    }

                    if (score > bestScore) {
                        bestScore = score;
                        bestMatch = el;
                    }
                });

                // 2. Click Logic
                if (bestMatch && bestScore > 0) {
                    console.log(`[Auto] executing ONE-SHOT click on:`, bestMatch);
                    bestMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    bestMatch.style.border = "5px solid red"; // Visual Confirmation

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
    // Legacy wrapper kept for compatibility with other parts if needed, 
    // but main loop will use executeAddButtonClick
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
                // FIXED: Added 'span' and verified visibility logic matches clickElementInMainWorld
                const allElems = Array.from(document.querySelectorAll('a, span, .formfieldtablink, button, .datagrid_addrecordbutton, input[type="button"], input[type="submit"], input[type="image"], img[onclick], div[role="button"]'))
                    .filter(e => {
                        return e.offsetParent !== null && e.style.visibility !== 'hidden' && e.style.display !== 'none';
                    });

                const found = allElems.find(l => {
                    const txt = (l.innerText || l.value || l.alt || l.title || "").toLowerCase();
                    return txt.includes(textToFind);
                });

                if (found) console.log(`[Auto] WaitForElement found: ${selector}`, found);
                return found;
            } else {
                let sel = selector.replace('ALL:', '');
                if (!sel.match(/[#\.\[]/)) sel = '#' + sel;
                const el = document.querySelector(sel);
                if (el) {
                    if (el.offsetParent !== null) return el;
                    console.log(`[Auto] WaitForElement: Found ${sel} but it is HIDDEN (offsetParent is null)`);
                }
                return null;
            }
        };

        if (findEl()) return resolve(true);
        const observer = new MutationObserver(() => { if (findEl()) { observer.disconnect(); resolve(true); } });
        observer.observe(document.body, { childList: true, subtree: true });
        setTimeout(() => {
            observer.disconnect();
            console.warn(`[Auto] WaitForElement TIMEOUT: ${selector}`);
            resolve({ error: 'Timeout' });
        }, timeout);
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
                console.log("📡 Page update detected!");
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

    const setFieldValue = async (selector, value) => {
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

        if (!el) {
            console.error(`[Fill] Element NOT FOUND: ${selector}`);
            return false;
        }

        // WAIT FOR ENABLED: Some fields (Telerik) disable themselves while loading.
        if (el.disabled) {
            console.log(`[Fill] Field ${selector} is disabled, waiting up to 5s...`);
            await waitForEnabled(el);
        }

        if (el.disabled || el.readOnly) {
            console.warn(`[Fill] Skipping field ${selector} (ID: ${el.id}) - Disabled: ${el.disabled}, ReadOnly: ${el.readOnly}`);
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
            // WAIT FOR ITEMS: If it's a cascading dropdown, items might not be loaded yet.
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

        // --- DECOUPLED SYNC (CLEARS STACK TO AVOID STRICT ERRORS) ---
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

            // Replace the syncScript section (around line 730-860) with this:

            // FIXED VERSION: Proper field type detection + Strict mode fix + Cascading wait

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
                combo = $find(baseId) || $find(baseId + '_ddlGroup');
                if (!combo && el) {
                    const possibleIds = [
                        el.id.replace('_Input', '').replace('_Value', ''),
                        el.id.replace('_ddlGroup', ''),
                        baseId.replace('_ddlGroup', '')
                    ];
                    for (const pid of possibleIds) {
                        combo = $find(pid);
                        if (combo) break;
                    }
                }
                
                // Check if it has Telerik ComboBox methods
                if (combo && combo.get_items && typeof combo.get_items === 'function') {
                    isTelerikCombo = true;
                }
            }
            
            console.log('[Sync] Field:', selector);
            console.log('[Sync] Is Telerik ComboBox:', isTelerikCombo);
            console.log('[Sync] Value:', val);
            
            // ========== PATH A: TELERIK COMBOBOX (with autocomplete) ==========
            if (isTelerikCombo && combo) {
                console.log('[Sync] Using Telerik autocomplete method...');
                
                const comboId = combo.get_id();
                const inputEl = document.getElementById(comboId + '_Input');
                const valueEl = document.getElementById(comboId + '_Value');
                
                if (!inputEl) {
                    console.error('[Sync] ❌ Input element not found!');
                    window.postMessage({ type: 'SYNC_COMPLETE', id: '${syncId}' }, '*');
                    return;
                }
                
                // Step 1: Clear
                combo.clearSelection();
                combo.set_text('');
                combo.set_value('');
                if (inputEl) inputEl.value = '';
                if (valueEl) valueEl.value = '';
                await wait(200);
                
                // Step 2: Type into field
                inputEl.focus();
                await wait(150);
                
                const searchText = String(val).trim();
                inputEl.value = '';
                
                for (let i = 0; i < searchText.length; i++) {
                    inputEl.value += searchText[i];
                    inputEl.dispatchEvent(new Event('input', { bubbles: true }));
                    await wait(30);
                }
                
                inputEl.dispatchEvent(new Event('input', { bubbles: true }));
                inputEl.dispatchEvent(new Event('change', { bubbles: true }));
                
                console.log('[Sync] Typed:', searchText);
                await wait(1500); // Wait for filtering
                
                // Step 3: Open dropdown if needed
                let dropdownVisible = false;
                const dropdownEl = combo.get_dropDownElement ? combo.get_dropDownElement() : 
                                   document.getElementById(comboId + '_DropDown');
                
                if (dropdownEl) {
                    dropdownVisible = dropdownEl.style.display !== 'none' && 
                                    dropdownEl.style.visibility !== 'hidden';
                }
                
                if (!dropdownVisible && combo.showDropDown) {
                    combo.showDropDown();
                    await wait(400);
                }
                
                // Step 4: Find and select item
                const items = combo.get_items();
                const itemCount = items.get_count();
                
                console.log('[Sync] Items available:', itemCount);
                
                let item = null;
                const searchLower = searchText.toLowerCase();
                
                // Exact match first
                for (let i = 0; i < itemCount; i++) {
                    const it = items.getItem(i);
                    const text = (it.get_text() || '').trim();
                    const value = (it.get_value() || '').trim();
                    
                    if (text === searchText || value === searchText) {
                        item = it;
                        console.log('[Sync] ✓ Exact match:', text);
                        break;
                    }
                }
                
                // Fuzzy match
                if (!item && itemCount > 0) {
                    let bestMatch = null;
                    let bestScore = 0;
                    
                    for (let i = 0; i < itemCount; i++) {
                        const it = items.getItem(i);
                        const text = (it.get_text() || '').toLowerCase().trim();
                        const value = (it.get_value() || '').toLowerCase().trim();
                        
                        let score = 0;
                        if (text === searchLower || value === searchLower) score = 100;
                        else if (text.startsWith(searchLower)) score = 90;
                        else if (text.includes(searchLower)) score = 70;
                        
                        if (score > bestScore) {
                            bestScore = score;
                            bestMatch = it;
                        }
                    }
                    
                    if (bestMatch && bestScore >= 70) {
                        item = bestMatch;
                        console.log('[Sync] ✓ Fuzzy match:', item.get_text());
                    }
                }
                
                if (!item) {
                    console.error('[Sync] ❌ No match found');
                    window.postMessage({ type: 'SYNC_COMPLETE', id: '${syncId}' }, '*');
                    return;
                }
                
                // Select item
                const targetValue = item.get_value();
                const targetText = item.get_text();
                
                // Click item element (most reliable)
                const itemElement = item.get_element();
                if (itemElement) {
                    itemElement.click();
                    await wait(200);
                }
                
                // API selection
                combo.trackChanges();
                item.select();
                combo.set_value(targetValue);
                combo.set_text(targetText);
                combo.commitChanges();
                
                // Force DOM
                if (valueEl) valueEl.value = targetValue;
                if (inputEl) inputEl.value = targetText;
                
                if (combo.hideDropDown) combo.hideDropDown();
                await wait(200);
                
                if (inputEl) inputEl.blur();
                await wait(400);
                
                console.log('[Sync] ✅ Selection complete:', targetText);
            }
            // ========== PATH B: REGULAR SELECT/INPUT ==========
            else {
                console.log('[Sync] Using standard field method...');
                
                if (el.tagName === 'SELECT') {
                    el.value = val;
                    if (el.value !== String(val)) {
                        const option = Array.from(el.options).find(opt =>
                            opt.value === val ||
                            opt.text.trim().toLowerCase() === String(val).trim().toLowerCase()
                        );
                        if (option) el.value = option.value;
                    }
                } else {
                    el.value = val;
                }
                
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
                el.dispatchEvent(new Event('blur', { bubbles: true }));
                
                console.log('[Sync] ✅ Standard field set');
            }

            // ========== FIX: Strict Mode Safe PostBack ==========
            // Only trigger for _ddlGroup fields (cascading dropdowns)
            if (selector.includes('_ddlGroup')) {
                const fieldId = el ? el.id : baseId;
                
                await wait(1000);
                console.log('[Sync] Triggering PostBack for:', fieldId);
                
                // Use setTimeout to escape strict mode context
                setTimeout(() => {
                    try {
                        if (typeof __doPostBack === 'function') {
                            __doPostBack(fieldId, '');
                        } else {
                            console.warn('[Sync] __doPostBack not available');
                        }
                    } catch (e) {
                        console.warn('[Sync] PostBack error (non-critical):', e.message);
                    }
                }, 100);
                
                // Wait for postback to complete
                await wait(2000);
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
        let keys = fieldMap.__fieldOrder || Object.keys(fieldMap);
        keys = keys.filter(k => k !== '__fieldOrder');

        let stats = { success: 0, failed: 0, skipped: 0 };

        const cascadingFields = {
            'Registered_Country': ['Registered_State', 'Registered_City', 'Registered_Postcode'],
            'Registered_State': ['Registered_City', 'Registered_Postcode'],
            'Business_Country': ['Business_State', 'Business_City', 'Business_Postcode'],
            'Business_State': ['Business_City', 'Business_Postcode']
        };
        for (let key of keys) {
            const sel = fieldMap[key];
            const val = data[key];

            console.log(`[Fill] Processing Field: ${key} | Selector: ${sel} | Value: ${val}`);

            if (val === undefined || (!sel.startsWith("RADIO:") && val === "")) {
                console.warn(`[Fill] Skipping invalid/empty value for ${key}`);
                continue;
            }

            const res = await setFieldValue(sel, val);
            // setFieldValue returns: true (success), false (not found), 'skipped' (disabled)
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