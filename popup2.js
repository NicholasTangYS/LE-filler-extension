// =================================================================================
// PART 1: SITE CONFIGURATION (LHDN SPECIFIC)
// =================================================================================

const LHDN_MAPPINGS = {
    // --- PAGE 1: SPLIT INTO TWO STEPS ---

    // STEP 1A: Fill the dropdowns that cause a Page Reload (PostBack)
    Basic_Info_P1: {
        waitForElement: '#MainContent_ddlPenyata',
        nextButtonSelector: null, // Don't click Next yet!

        fieldOrder: [
            "Change_of_Accounting_Period_No",
            "FS_in_Foreign_Currency_Yes"
        ],
        fields: {
            "Change_of_Accounting_Period_No": "#MainContent_ddlTkrTempoh",
            "FS_in_Foreign_Currency_Yes": "#MainContent_ddlPenyata"
        }
    },

    // STEP 1B: Fill the rest of the fields (After page reload)
    Basic_Info_P2: {
        // Wait for a field that appears/stays after reload (e.g. Start Date)
        waitForElement: '#MainContent_txtTarikhMula',

        // NOW click Next
        nextButtonSelector: '#MainContent_btnNext',

        fieldOrder: [
            "Currency_Reported",
            "Currency_Exchange_Rate",
            "Accounting_Period_From",
            "Accounting_Period_To",
            "Types_of_exchange_of_accounting_periods",
            "Basis_Period_From",
            "Basis_Period_To",
            "Record_keeping",
            "Business_Status_In_Operation",
            "Type_of_Labuan_entity",
            "Incorp_under"
        ],
        fields: {
            "Currency_Reported": "#MainContent_ddlJnsMatawang",
            "Currency_Exchange_Rate": "#MainContent_txtRate",
            "Business_Status_In_Operation": "#MainContent_ddlStatus_pern",
            "Record_keeping": "#MainContent_ddlRekod",
            "Type_of_Labuan_entity": "#MainContent_ddlEntitiLabuan",
            "Incorp_under": "#MainContent_ddlAktivitiEntiti",
            "Accounting_Period_From": "#MainContent_txtTarikhMula",
            "Accounting_Period_To": "#MainContent_txtTarikhTutup",
            "Basis_Period_From": "#MainContent_txtTarikhMulaAsas",
            "Basis_Period_To": "#MainContent_txtTarikhTutupAsas",
            "Types_of_exchange_of_accounting_periods": "#MainContent_ddlJnsTempoh"
        }
    },

    Officer_Info_P1: {
        shouldSkip: (data) => !data.c3Rows || data.c3Rows.length === 0,
        waitForElement: '#MainContent_btnHKO',
        nextButtonSelector: '#MainContent_btnHKO',
        fields: {}
    },

    Officer_Info_P2: {
        shouldSkip: (data) => !data.c3Rows || data.c3Rows.length === 0,
        waitForElement: '#MainContent_RptPekongsi_txtNama_0',
        repeaterKey: "c3Rows",
        saveButtonSelector: '#ctl00_MainContent_RptPekongsi_ctl00_linkPekongsiSave',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Name",
            "Claim_PUA_419_2011",
            "Designation",
            "Country",
            "Address1",
            "Address2",
            "Postcode",
            "Town",
            "ID_type",
            "ID_Passport_No",
            "Date_of_Birth",
            "TIN",
            "Telephone_No",
            "Salary_Bonus",
            "Fees_Commission_Allowances",
            "Total_Loan_to_Officer",
            "Total_Loan_from_Officer"
        ],
        fields: {
            "Name": "#MainContent_RptPekongsi_txtNama_0",
            "Claim_PUA_419_2011": "#MainContent_RptPekongsi_ddlMenuntutPUA_0",
            "Designation": "#MainContent_RptPekongsi_ddlJenisJawatan_0",
            "Country": 'ALL:select[id*="ddlNegara"]',
            "Address1": "#MainContent_RptPekongsi_txtAlamat1_0",
            "Address2": "#MainContent_RptPekongsi_txtAlamat2_0",
            "Postcode": "#MainContent_RptPekongsi_txtPoskod_0",
            "Town": "#MainContent_RptPekongsi_txtBandar_0",
            "ID_type": "#MainContent_RptPekongsi_ddlJenisPengenalan_0",
            "ID_Passport_No": "#MainContent_RptPekongsi_txtNoPengenalan_0",
            "Date_of_Birth": "#MainContent_RptPekongsi_txtTkh_Lahir_0",
            "TIN": "#MainContent_RptPekongsi_txtNo_Cukai_0",
            "Telephone_No": "#MainContent_RptPekongsi_txtTelefon_0",
            "Salary_Bonus": "#MainContent_RptPekongsi_txtGaji_0",
            "Fees_Commission_Allowances": "#ctl00$MainContent$RptPekongsi$ctl00$txtKomisen",
            "Total_Loan_to_Officer": "#MainContent_RptPekongsi_txtKpdPengarah_0",
            "Total_Loan_from_Officer": "#MainContent_RptPekongsi_txtDariPengarah_0"
        }
    },

    Shareholder_Info_P2: {
        shouldSkip: (data) => !data.c4Rows || data.c4Rows.length === 0,
        waitForElement: '#MainContent_RptPekongsi_txtNama_0',
        repeaterKey: "c4Rows",
        saveButtonSelector: '#ctl00_MainContent_RptPekongsi_ctl00_linkPekongsiSave',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Name_of_Shareholder_Partner",
            "Country",
            "Address1",
            "Address2",
            "Postcode",
            "Town",
            "ID_type",
            "ID_Passport_Reg_No",
            "Date_of_Birth",
            "Country_of_Origin",
            "TIN",
            "Direct_Shareholding_Percentage",
            "Dividends_Received_in_Basis_Period"
        ],
        fields: {
            "Name_of_Shareholder_Partner": "#MainContent_RptPekongsi_txtNama_0",
            "Country": 'ALL:select[id*="ddlNegara"]',
            "Address1": "#MainContent_RptPekongsi_txtAlamat1_0",
            "Address2": "#MainContent_RptPekongsi_txtAlamat2_0",
            "Postcode": "#MainContent_RptPekongsi_txtPoskod_0",
            "Town": "#MainContent_RptPekongsi_txtBandar_0",
            "ID_type": "#MainContent_RptPekongsi_ddlJenisPengenalan_0",
            "ID_Passport_Reg_No": "#MainContent_RptPekongsi_txtNoPengenalan_0",
            "Date_of_Birth": "#MainContent_RptPekongsi_txtTkh_Lahir_0",
            "Country_of_Origin": "#MainContent_RptPekongsi_ddlNeg_Asal_0",
            "TIN": "#MainContent_RptPekongsi_txtNoCukai_0",
            "Direct_Shareholding_Percentage": '#MainContent_RptPekongsi_txtSyer_Langsung_0',
            "Dividends_Received_in_Basis_Period": "#MainContent_RptPekongsi_txtDividenSyer_0"
        }
    },

    Shareholder_Info_P1: {
        shouldSkip: (data) => !data.c4Rows || data.c4Rows.length === 0,
        waitForElement: '#MainContent_btnHKP',
        nextButtonSelector: '#MainContent_btnHKP',
        fields: {}
    },

    Beneficial_Owner_Info_P1: {
        shouldSkip: (data) => !data.c5Rows || data.c5Rows.length === 0,
        waitForElement: '#MainContent_btnPemunya',
        nextButtonSelector: '#MainContent_btnPemunya',
        fields: {}
    },

    Beneficial_Owner_Info_P2: {
        shouldSkip: (data) => !data.c5Rows || data.c5Rows.length === 0,
        waitForElement: '#MainContent_RptPekongsi_txtNama_0',
        repeaterKey: "c5Rows",
        saveButtonSelector: '#ctl00_MainContent_RptPekongsi_ctl00_linkPekongsiSave',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Name",
            "TIN",
            "Shareholding_Percentage",
            "Salary_Bonus",
            "Dividends_Received_in_Basis_Period",
            "Total_Loan_from_Owner",
            "Total_Loan_to_Owner",
            "Country",
            "Address1",
            "Address2",
            "Postcode",
            "Town",
            "ID_type",
            "ID_Passport_No",
            "Date_of_Birth",
            "Telephone_No",
            "Fees_Commission_Allowance"
        ],
        fields: {
            "Name": "#MainContent_RptPekongsi_txtNama_0",
            "TIN": "#MainContent_RptPekongsi_txtNo_Cukai_0",
            "Shareholding_Percentage": "#MainContent_RptPekongsi_txtPegSyer_0",
            "Salary_Bonus": "#MainContent_RptPekongsi_txtGaji_0",
            "Dividends_Received_in_Basis_Period": "#MainContent_RptPekongsi_txtDividen_0",
            "Total_Loan_from_Owner": "#MainContent_RptPekongsi_txtKpdPemunya_0",
            "Total_Loan_to_Owner": "#MainContent_RptPekongsi_txtDariPemunya_0",
            "Country": 'ALL:select[id*="ddlNegara"]',
            "Address1": "#MainContent_RptPekongsi_txtAlamat1_0",
            "Address2": "#MainContent_RptPekongsi_txtAlamat2_0",
            "Postcode": "#MainContent_RptPekongsi_txtPoskod_0",
            "Town": "#MainContent_RptPekongsi_txtBandar_0",
            "ID_type": "#MainContent_RptPekongsi_ddlJenisPengenalan_0",
            "ID_Passport_No": "#MainContent_RptPekongsi_txtNoPengenalan_0",
            "Date_of_Birth": "#MainContent_RptPekongsi_txtTkh_Lahir_0",
            "Telephone_No": "#MainContent_RptPekongsi_txtTelefon_0",
            "Fees_Commission_Allowance": "#MainContent_RptPekongsi_txtKomisen_0"
        }
    },

    Financial_Info_P1: {
        waitForElement: '#MainContent_btnMakKewangan',
        nextButtonSelector: '#MainContent_btnMakKewangan',
        fields: {}
    },

    Financial_Info_P2: {
        waitForElement: '#txtL1',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Business_Activity_Code",
            "Type_of_business_activity",
            "Fp_Type_of_Labuan_entity",
            "Pnl_Sales_Turnover",
            "Pnl_Opening_Inventory",
            "Pnl_Cost_of_Purchases",
            "Pnl_Cost_of_Production",
            "Pnl_Closing_Inventory",
            "Pnl_Cost_of_Sales",
            "Pnl_Gross_Profit_Loss",
            "Pnl_Foreign_Currency_Exchange_Gain",
            "Pnl_Other_Business_Income",
            "Pnl_Other_Income",
            "Pnl_Non_Taxable_Profits",
            "Pnl_Interest_Expenditure",
            "Pnl_Professional_Fees",
            "Pnl_Technical_Fees_to_Non_Residents",
            "Pnl_Contract_Payments",
            "Pnl_Management_Fee",
            "Pnl_Salaries_Wages",
            "Pnl_Cost_of_Employee_Share_Options",
            "Pnl_Royalties",
            "Pnl_Rental_Lease",
            "Pnl_Maintenance_Repairs",
            "Pnl_Research_Development",
            "Pnl_Promotion_Advertisement",
            "Pnl_Travelling_Accommodation",
            "Pnl_Foreign_Currency_Exchange_Loss",
            "Pnl_Other_Expenditure",
            "Pnl_Total_Expenditure",
            "Pnl_Net_Profit_Loss",
            "Fp_Motor_Vehicles",
            "Fp_Plant_Equipment",
            "Fp_Land_Buildings",
            "Fp_Other_Non_Current_Assets",
            "Fp_Investments",
            "Fp_Total_Non_Current_Assets",
            "Fp_Cost_of_NCA_Acquired",
            "Fp_Trade_Debtors",
            "Fp_Other_Debtors",
            "Fp_Inventory",
            "Fp_Loans_to_Related_Entities",
            "Fp_Cash_in_Hand_Bank",
            "Fp_Other_Current_Assets",
            "Fp_Total_Current_Assets",
            "Fp_Total_Assets",
            "Fp_Loans_Bank_Overdrafts",
            "Fp_Trade_Creditors",
            "Fp_Other_Creditors",
            "Fp_Loans_from_Related_Entities",
            "Fp_Other_Current_Liabilities",
            "Fp_Total_Current_Liabilities",
            "Fp_Non_Current_Liabilities",
            "Fp_Total_Liabilities",
            "Fp_Issued_Paid_Up_Capital",
            "Fp_Profit_Loss_Appropriation",
            "Fp_Reserve_Account",
            "Fp_Total_Equity",
            "Fp_Total_Liabilities_and_Equity"
        ],
        fields: {
            "Business_Activity_Code": "txtL1",
            "Type_of_business_activity": "MainContent_txtL1A",
            "Fp_Type_of_Labuan_entity": "MainContent_txtL1B",
            "Pnl_Sales_Turnover": "MainContent_txtL2",
            "Pnl_Opening_Inventory": "MainContent_txtL3",
            "Pnl_Cost_of_Purchases": "MainContent_txtL4",
            "Pnl_Cost_of_Production": "MainContent_txtL4A",
            "Pnl_Closing_Inventory": "MainContent_txtL5",
            "Pnl_Cost_of_Sales": "txtL6",
            "Pnl_Gross_Profit_Loss": "txtL7",
            "Pnl_Foreign_Currency_Exchange_Gain": "MainContent_txtL51",
            "Pnl_Other_Business_Income": "MainContent_txtL8",
            "Pnl_Other_Income": "MainContent_txtL9",
            "Pnl_Non_Taxable_Profits": "MainContent_txtL10",
            "Pnl_Interest_Expenditure": "MainContent_txtL11",
            "Pnl_Professional_Fees": "MainContent_txtL12",
            "Pnl_Technical_Fees_to_Non_Residents": "MainContent_txtL12A",
            "Pnl_Contract_Payments": "MainContent_txtL13",
            "Pnl_Management_Fee": "MainContent_txtL13A",
            "Pnl_Salaries_Wages": "MainContent_txtL14",
            "Pnl_Cost_of_Employee_Share_Options": "MainContent_txtL14A",
            "Pnl_Royalties": "MainContent_txtL15",
            "Pnl_Rental_Lease": "MainContent_txtL16",
            "Pnl_Maintenance_Repairs": "MainContent_txtL17",
            "Pnl_Research_Development": "MainContent_txtL18",
            "Pnl_Promotion_Advertisement": "MainContent_txtL19",
            "Pnl_Travelling_Accommodation": "MainContent_txtL20",
            "Pnl_Foreign_Currency_Exchange_Loss": "MainContent_txtL52",
            "Pnl_Other_Expenditure": "MainContent_txtL21",
            "Pnl_Total_Expenditure": "txtL22",
            "Pnl_Net_Profit_Loss": "txtL23",
            "Fp_Motor_Vehicles": "MainContent_txtL25",
            "Fp_Plant_Equipment": "MainContent_txtL26",
            "Fp_Land_Buildings": "MainContent_txtL27",
            "Fp_Other_Non_Current_Assets": "MainContent_txtL28",
            "Fp_Investments": "MainContent_txtL30",
            "Fp_Total_Non_Current_Assets": "txtL29",
            "Fp_Cost_of_NCA_Acquired": "txtL29A",
            "Fp_Trade_Debtors": "MainContent_txtL31",
            "Fp_Other_Debtors": "MainContent_txtL32",
            "Fp_Inventory": "MainContent_txtL32A",
            "Fp_Loans_to_Related_Entities": "MainContent_txtL33",
            "Fp_Cash_in_Hand_Bank": "MainContent_txtL34",
            "Fp_Other_Current_Assets": "MainContent_txtL35",
            "Fp_Total_Current_Assets": "txtL36",
            "Fp_Total_Assets": "txtL37",
            "Fp_Loans_Bank_Overdrafts": "MainContent_txtL38",
            "Fp_Trade_Creditors": "MainContent_txtL39",
            "Fp_Other_Creditors": "MainContent_txtL40",
            "Fp_Loans_from_Related_Entities": "MainContent_txtL41",
            "Fp_Other_Current_Liabilities": "MainContent_txtL42",
            "Fp_Total_Current_Liabilities": "txtL43",
            "Fp_Non_Current_Liabilities": "MainContent_txtL44",
            "Fp_Total_Liabilities": "txtL45",
            "Fp_Issued_Paid_Up_Capital": "MainContent_txtL46",
            "Fp_Profit_Loss_Appropriation": "MainContent_txtL47",
            "Fp_Reserve_Account": "MainContent_txtL48",
            "Fp_Total_Equity": "txtL49",
            "Fp_Total_Liabilities_and_Equity": "txtL50"
        }
    },

    LE_Info: {
        waitForElement: '#MainContent_ddlSyktKaitan',
        nextButtonSelector: null,
        fieldOrder: [
            "C6a_Has_Related_Company",
            "C6b_Number_of_Related_Companies_Qualifying_Activity",
            "C7a_Derived_Income_from_Non_Labuan_Activity",
            "C7b_Total_Income_from_Non_Labuan_Activity",
            "C8a_Derived_Income_from_IP",
            "C8b_Total_Income_from_IP"
        ],
        fields: {
            "C6a_Has_Related_Company": "#MainContent_ddlSyktKaitan",
            "C6b_Number_of_Related_Companies_Qualifying_Activity": "#MainContent_txtBilSyktKaitan",
            "C7a_Derived_Income_from_Non_Labuan_Activity": "#MainContent_ddlBknLabuan",
            "C7b_Total_Income_from_Non_Labuan_Activity": "#MainContent_txtJumBknLabuan",
            "C8a_Derived_Income_from_IP": "#MainContent_ddlPendRoyalti",
            "C8b_Total_Income_from_IP": "#MainContent_txtJumPendRoyalti",
        }
    },

    Subsidiary_P1: {
        waitForElement: '#MainContent_ddlSyktSubsidiari',
        nextButtonSelector: null,
        fieldOrder: ["C10_Has_Subsidiary_Outside_Labuan"],
        fields: {
            "C10_Has_Subsidiary_Outside_Labuan": '#MainContent_ddlSyktSubsidiari'
        }
    },

    Subsidiary_P2: {
        shouldSkip: (data) => data.C10_Has_Subsidiary_Outside_Labuan !== '1',
        waitForElement: '#btnSyktSubsidiari',
        nextButtonSelector: '#btnSyktSubsidiari',
        fields: {}
    },

    Subsidiary_P3: {
        shouldSkip: (data) => data.C10_Has_Subsidiary_Outside_Labuan !== '1',
        waitForElement: '#MainContent_RptPekongsi_txtNama_0',
        repeaterKey: "c10Rows",
        saveButtonSelector: '#ctl00_MainContent_RptPekongsi_ctl00_linkPekongsiSave',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Name",
            "Registration_No",
            "TIN",
            "Have_Transactions"
        ],
        fields: {
            "Name": "#MainContent_RptPekongsi_txtNama_0",
            "Registration_No": "#MainContent_RptPekongsi_txtNoDaftar_0",
            "TIN": "#MainContent_RptPekongsi_txtNoCukai_0",
            "Have_Transactions": "#MainContent_RptPekongsi_ddlTransaksi_0"
        }
    },

    Payment_P1: {
        waitForElement: '#MainContent_ddlTerimaMastautin',
        nextButtonSelector: null,
        fieldOrder: ["C11_Received_Payments_from_Malaysian_Resident"],
        fields: {
            "C11_Received_Payments_from_Malaysian_Resident": '#MainContent_ddlTerimaMastautin'
        }
    },

    Payment_P2: {
        shouldSkip: (data) => data.C11_Received_Payments_from_Malaysian_Resident !== '1',
        waitForElement: '#bntTerimaMastautin',
        nextButtonSelector: '#bntTerimaMastautin',
        fields: {}
    },

    Payment_P3: {
        shouldSkip: (data) => data.C11_Received_Payments_from_Malaysian_Resident !== '1',
        waitForElement: '#MainContent_RptPekongsi_ddljenis_bayaran_0',
        repeaterKey: "c11Rows",
        saveButtonSelector: '#ctl00_MainContent_RptPekongsi_ctl00_linkPekongsiSave',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Name_of_taxpayer",
            "TIN",
            "Type_of_payment_received",
            "Payment_Related_to",
            "Amount"
        ],
        fields: {
            "Name_of_taxpayer": "#MainContent_RptPekongsi_txtNamaPembayar_0",
            "TIN": "#MainContent_RptPekongsi_txtNoTINPembayar_0",
            "Type_of_payment_received": "#MainContent_RptPekongsi_ddljenis_bayaran_0",
            "Payment_Related_to": "#MainContent_RptPekongsi_ddlsykt_berkaitan_0",
            "Amount": "#MainContent_RptPekongsi_txtNamaPembayar_0"
        }
    },

    Incentive_Claim_P1: {
        shouldSkip: (data) => !data.Generated_Incentive_List || data.Generated_Incentive_List.length === 0,
        waitForElement: '#MainContent_btnTuntutanIn',
        nextButtonSelector: '#MainContent_btnTuntutanIn',
        fields: {}
    },

    Incentive_Claim_P2: {
        shouldSkip: (data) => !data.Generated_Incentive_List || data.Generated_Incentive_List.length === 0,
        waitForElement: '#MainContent_rptInsentif_txtJenisInsentif_0',
        repeaterKey: "Generated_Incentive_List",
        saveButtonSelector: '#ctl00_MainContent_rptInsentif_ctl00_linkTuntutanSave',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Incentive_Code",
            "Amount_Claimed"
        ],
        fields: {
            "Incentive_Code": "#MainContent_rptInsentif_txtJenisInsentif_0",
            "Amount_Claimed": "#MainContent_rptInsentif_txtInsentifTuntut_0"
        }
    },

    Other_Info_P1: {
        waitForElement: '#MainContent_ddlRcbcra',
        nextButtonSelector: null,
        fieldOrder: [
            "D1_Subject_to_CbCR",
            "D1_Subject_as"
        ],
        fields: {
            "D1_Subject_to_CbCR": "#MainContent_ddlRcbcra",
            "D1_Subject_as": "#MainContent_ddlRcbcrb"
        }
    },

    Reporting_Entity_P1: {
        shouldSkip: (data) => data.D1_Subject_to_CbCR !== '1',
        waitForElement: '#MainContent_ddlRcbcrb',
        nextButtonSelector: '#MainContent_btnEntiti',
        fields: {}
    },

    Reporting_Entity_P2: {
        shouldSkip: (data) => data.D1_Subject_as !== '1',
        waitForElement: '#MainContent_txtG5b_NamaMNE',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "E1_MNE_Group_Name",
            "E2_Accounting_Period_From",
            "E2_Accounting_Period_To",
            "E3_Constituent_Entities_in_Malaysia",
            "E4_Constituent_Entities_outside_Malaysia"
        ],
        fields: {
            "E1_MNE_Group_Name": "MainContent_txtG5b_NamaMNE",
            "E2_Accounting_Period_From": "MainContent_txtG5b_Tempoh_Akaun_Mula",
            "E2_Accounting_Period_To": "MainContent_txtG5b_Tempoh_Akaun_Tutup",
            "E3_Constituent_Entities_in_Malaysia": "MainContent_txtG5b_Malaysia",
            "E4_Constituent_Entities_outside_Malaysia": "MainContent_txtG5b_LuarMalaysia",
        }
    },

    NonReporting_Entity_P1: {
        shouldSkip: (data) => data.D1_Subject_as !== '2',
        waitForElement: '#MainContent_txtG5b_NamaMNE',
        nextButtonSelector: null,
        fieldOrder: [
            "F1_Reporting_Entity_Name",
            "F2_TIN",
            "F3_Country_of_Residence",
            "F4_Accounting_Period_From",
            "F4_Accounting_Period_To",
            "F5_MNE_Group_Name",
            "F6_Status_of_Reporting_Entity"
        ],
        fields: {
            "F1_Reporting_Entity_Name": "MainContent_txtG5b_NamaMNE",
            "F2_TIN": "txtG5b_NoCukaiPelapor",
            "F3_Country_of_Residence": "ddlNegPelapor",
            "F4_Accounting_Period_From": "MainContent_txtG5b_Tempoh_Akaun_Mula",
            "F4_Accounting_Period_To": "MainContent_txtG5b_Tempoh_Akaun_Tutup",
            "F5_MNE_Group_Name": "MainContent_txtNamaPelapor",
            "F6_Status_of_Reporting_Entity": "MainContent_ddlStatus"
        }
    },

    NonReporting_Entity_P2: {
        shouldSkip: (data) => data.D1_Subject_as !== '2',
        waitForElement: '#MainContent_txtG5b_NamaMuktamad',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "F7a_Ultimate_Holding_Entity_Name",
            "F7b_Country_of_Residence_UHE"
        ],
        fields: {
            "F7a_Ultimate_Holding_Entity_Name": "MainContent_txtG5b_NamaMuktamad",
            "F7b_Country_of_Residence_UHE": "ddlNegMastautin"
        }
    },

    Registerd_And_Auditor_Address: {
        waitForElement: '#MainContent_ddlIntKew',
        nextButtonSelector: null,
        fieldOrder: [
            "D3_Has_Financial_Account_Outside_Malaysia",
            "D4_Subject_to_AEOI",
            "C1_Registered_Address_line1",
            "C1_Registered_Address_line2",
            "Email",
            "C1_Correspondence_Address_line1",
            "C1_Correspondence_Address_line2",
            "C1_Postcode",
            "C2_Address_Is_Tax_Agent_or_Trust_Co",
            "C1_City",
            "C1_State",
            "Auditor_Name",
            "Auditor_Country",
            "Auditor_Address_line1",
            "Auditor_Address_line2",
            "Auditor_Postcode",
            "Auditor_City",
            "Auditor_Email",
            "Auditor_Telephone_no",
            "Auditor_TIN"
        ],
        fields: {
            "D3_Has_Financial_Account_Outside_Malaysia": "#MainContent_ddlIntKew",
            "D4_Subject_to_AEOI": "#MainContent_ddlPerLabuan",
            "C1_Registered_Address_line1": "#MainContent_txtDaftar_Alamat1",
            "C1_Registered_Address_line2": "#MainContent_txtDaftar_Alamat2",
            "Email": "#txtEmelDaftar",
            "C1_Correspondence_Address_line1": "#MainContent_txtF1_Alamat1",
            "C1_Correspondence_Address_line2": "#MainContent_txtF1_Alamat2",
            "C1_Postcode": "#txtF1_Poskod",
            "C1_City": "#txtF1_Bandar",
            "C1_State": "#ddlDaftar_Negeri",
            "C2_Address_Is_Tax_Agent_or_Trust_Co": "#ddlF1_Status",
            "Auditor_Name": "#MainContent_txtS1_Nama",
            "Auditor_Country": "#ddlS2_Negara",
            "Auditor_Address_line1": "#MainContent_txtS2_Alamat1",
            "Auditor_Address_line2": "#MainContent_txtS2_Alamat2",
            "Auditor_Postcode": "#txtS2_Poskod",
            "Auditor_City": "#txtS2_Bandar",
            "Auditor_Email": "#txtS5",
            "Auditor_Telephone_no": "#MainContent_txtS3",
            "Auditor_TIN": "#MainContent_txtS4"
        }
    },

    TaxAgent_Info: {
        shouldSkip: (data) => data.Declarant_Designation === '2',
        waitForElement: '#MainContent_txtT2_Alamat1',
        nextButtonSelector: '#MainContent_btnNext',
        fields: {
            "Declarant_Address_line1": "#MainContent_txtT2_Alamat1",
            "Declarant_Address_line2": "#MainContent_txtT2_Alamat2",
            "Declarant_Postcode": "#txtT2_Poskod",
            "Declarant_Telephone_no": "#MainContent_txtT3",
            "Declarant_Email": "#txtT6",
        }
    },

    Substantive_Info: {
        waitForElement: '#MainContent_RptSubs_ddlKod_0',
        repeaterKey: "b1Rows",
        saveButtonSelector: '#ctl00_MainContent_RptSubs_ctl00_linkSubsSave',
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "Business_Activity_Code",
            "Core_Income_Activity_Yes",
            "Business_Activity_Status_Active",
            "No_of_Employees",
            "Annual_Operating_Expenditure",
            "Annual_Operating_Expenditure_MAS",
            "Compliance_with_FPEC",
            "Compliance_with_CML",
            "No_of_Employees_Malaysia",
            "No_of_Related_Company",
            "Comply_Substantive_Yes",
            "Amount_of_Net_Loss",
            "Net_Profits_ex_IP"
        ],
        fields: {
            "Business_Activity_Code": "#MainContent_RptSubs_ddlKod_0",
            "Core_Income_Activity_Yes": "#MainContent_RptSubs_ddlSub_Utama_0",
            "Business_Activity_Status_Active": "#MainContent_RptSubs_ddlSub_Niaga_0",
            "No_of_Employees": "#MainContent_RptSubs_txtSub_Full_0",
            "Annual_Operating_Expenditure": "#MainContent_RptSubs_txtSub_Belanja_0",
            "Annual_Operating_Expenditure_MAS": "#MainContent_RptSubs_txtSub_Operasi_0",
            "Compliance_with_FPEC": "#MainContent_RptSubs_ddlSub_Patuh_0",
            "Compliance_with_CML": "#MainContent_RptSubs_ddlSub_Kawal_0",
            "No_of_Employees_Malaysia": "#MainContent_RptSubs_txtSub_Part_0",
            "No_of_Related_Company": "#MainContent_RptSubs_txtSub_Kaitan_0",
            "Comply_Substantive_Yes": "#MainContent_RptSubs_ddlSub_Syarat_0",
            "Amount_of_Net_Loss": "#MainContent_RptSubs_txtSub_Rugi_0",
            "Net_Profits_ex_IP": "#MainContent_RptSubs_txtSub_Untung_0"
        }
    },

    Tax_Payable: {
        waitForElement: '#MainContent_txtRebat',
        nextButtonSelector: '#MainContent_btnSave',
        fields: {
            "B5_Zakat_Paid": "#MainContent_txtRebat"
        }
    },

    Declaration_Page: {
        waitForElement: 'input[value="Tandatangan & hantar"]',
        nextButtonSelector: null,
        fields: {}
    }
};

const SITE_CONFIG = {
    // 1. DATA PRE-PROCESSOR
    dataPreProcessor: (formData) => {
        formData.Generated_Incentive_List = [];
        const addIncentiveRow = (code, amount) => {
            if (code && String(code).trim() !== "") {
                formData.Generated_Incentive_List.push({ "Incentive_Code": code, "Amount_Claimed": amount });
            }
        };
        // Add your specific LHDN logic here
        if (formData.C12_Row1_Incentive_Code) addIncentiveRow(formData.C12_Row1_Incentive_Code, formData.C12_Row1_Amount_Claimed);
        if (formData.C12_Row2_Incentive_Code) addIncentiveRow(formData.C12_Row2_Incentive_Code, formData.C12_Row2_Amount_Claimed);
        if (formData.C12_Row3_Incentive_Code) addIncentiveRow(formData.C12_Row3_Incentive_Code, formData.C12_Row3_Amount_Claimed);

        return formData;
    },

    // 2. FIELD SPECIFIC RULES (AJAX, Delays, etc. - MUST BE SERIALIZABLE)
    fieldRules: {
        ajaxTriggers: [
            {
                selectorContains: 'ddlKod',
                keyEquals: 'Business_Activity_Code',
                waitForAjax: true,
                dependentSelectorPattern: '#MainContent_RptSubs_ddlTeras_{rowIndex}',
                postDelay: 200
            }
        ],
        extraDelayFields: [
            {
                selectorContains: ['ddlTeras', 'ddlStatus', 'ddlSub'],
                delay: 500
            }
        ]
    },

    // 3. SMART JUMP SETTINGS
    enableSmartJump: true,

    // 2. PAGE SEQUENCE
    pageSequence: [
        'Basic_Info_P1', 'Basic_Info_P2',
        'Officer_Info_P1', 'Officer_Info_P2',
        'Shareholder_Info_P1', 'Shareholder_Info_P2',
        'Beneficial_Owner_Info_P1', 'Beneficial_Owner_Info_P2',
        'Financial_Info_P1', 'Financial_Info_P2',
        'LE_Info',
        'Subsidiary_P1', 'Subsidiary_P2', 'Subsidiary_P3',
        'Payment_P1', 'Payment_P2', 'Payment_P3',
        'Incentive_Claim_P1', 'Incentive_Claim_P2',
        'Other_Info_P1',
        'Reporting_Entity_P1', 'Reporting_Entity_P2',
        'NonReporting_Entity_P1', 'NonReporting_Entity_P2',
        'Registerd_And_Auditor_Address', 'TaxAgent_Info',
        'Substantive_Info',
        'Tax_Payable',
        'Declaration_Page'
    ],

    // 3. MAPPINGS
    mappings: LHDN_MAPPINGS
};

// =================================================================================
// PART 2: Filler Engine (Reuse Module)
// =================================================================================

document.addEventListener('DOMContentLoaded', function () {
    // --- UI ELEMENTS ---
    const statusDiv = document.getElementById('msg');
    const jsonInput = document.getElementById('jsonData');
    const actionBtn = document.getElementById('actionBtn'); // THE DYNAMIC BUTTON
    const startStepSelect = document.getElementById('startStep');
    const progressBarFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progressText');
    const stepCounter = document.getElementById('stepCounter');
    const progressContainer = document.getElementById('progressContainer');
    const checklistContainer = document.getElementById('checklistContainer');

    let isRunning = false;
    let isPaused = false;

    // --- 1. INITIALIZATION ---
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
            // Immediate visual sync if container is visible
            initInternalChecklist(SITE_CONFIG.pageSequence, 0, currentChecklistStatuses);
        }
    });

    if (jsonInput) jsonInput.addEventListener('input', () => chrome.storage.session.set({ 'savedAutomationJson': jsonInput.value }));

    // --- BUTTON LOGIC ---
    actionBtn.addEventListener('click', () => {
        if (!isRunning) {
            // State: IDLE -> Start
            runFullAutomation();
        } else if (isRunning && !isPaused) {
            // State: RUNNING -> Stop
            stopAutomation();
        } else if (isRunning && isPaused) {
            // State: PAUSED -> Resume
            resumeAutomation();
        }
    });

    function stopAutomation() {
        isRunning = false;
        isPaused = false;
        updateStatus("STOPPING...", "red");
        updateBtnState('IDLE');
    }

    function resumeAutomation() {
        isPaused = false; // Release the lock
        updateStatus("Resuming...", "blue");
        updateBtnState('RUNNING');
    }

    // Controls Button Appearance
    function updateBtnState(state) {
        if (state === 'IDLE') {
            actionBtn.textContent = "▶ Start Automation";
            actionBtn.style.backgroundColor = "#64369F"; // Green
            actionBtn.disabled = false;
            if (startStepSelect) startStepSelect.disabled = false;
        }
        else if (state === 'RUNNING') {
            actionBtn.textContent = "⏹ Stop Automation";
            actionBtn.style.backgroundColor = "#f44336"; // Red
            actionBtn.disabled = false;
            if (startStepSelect) startStepSelect.disabled = true;
        }
        else if (state === 'PAUSED') {
            actionBtn.textContent = "▶ I Fixed It. Resume!";
            actionBtn.style.backgroundColor = "#ff9800"; // Orange
            actionBtn.disabled = false;
        }
    }

    // --- 2. HELPER FUNCTIONS ---
    function updateStatus(msg, color = "black") {
        if (statusDiv) { statusDiv.textContent = msg; statusDiv.style.color = color; }
        console.log('[Auto] ' + msg);
    }

    function showNotification(title, message) {
        chrome.notifications.create({ type: 'basic', iconUrl: 'icon.png', title: title, message: message, priority: 2 });
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
        checklistContainer.style.display = 'none';

        pageList.forEach((pageName, index) => {
            const item = document.createElement('div');
            item.id = 'chk_' + pageName;

            // Persistent logic: use saved status if available, else pending
            let status = savedStatuses[pageName] || 'pending';

            item.className = `checklist-item ${status}`;
            item.style.padding = "8px";
            item.style.borderBottom = "1px solid #f0f0f0";
            item.style.fontSize = "13px";

            // Map status to icon
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

            // Set background color based on status
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

        // Persist the status
        currentChecklistStatuses[pageName] = status;
        chrome.storage.session.set({ 'checklistStatuses': currentChecklistStatuses });

        let bgColor = "transparent";
        if (status === 'processing') bgColor = "#e3f2fd";
        if (status === 'success') bgColor = "#e8f5e9";
        if (status === 'warning') bgColor = "#fff3e0";
        if (status === 'failed') bgColor = "#ffebee";

        item.style.backgroundColor = bgColor;

        const iconSpan = item.querySelector('.checklist-icon');
        const errorDiv = item.querySelector('.error-detail');

        if (status === 'processing') {
            iconSpan.textContent = '⏳';
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (status === 'success') {
            iconSpan.textContent = '✓';
            iconSpan.style.color = "green";
            errorDiv.style.display = 'none';
        } else if (status === 'warning') {
            iconSpan.textContent = '⚠️';
            iconSpan.style.color = "orange";
            if (errorDetails.length > 0 || customMsg) {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = customMsg || `<b>Issues:</b><br/> ${errorDetails.join('<br/>')}`;
            }
        } else if (status === 'skipped') {
            iconSpan.textContent = '⊘';
            iconSpan.style.color = "gray";
        } else if (status === 'failed') {
            iconSpan.textContent = '🛑';
            iconSpan.style.color = "red";
            if (errorDetails.length > 0 || customMsg) {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = customMsg || `<b>Error:</b> ${errorDetails[0]}`;
            }
        }
    }

    function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

    // --- PAUSE LOGIC ---
    async function waitForUserIntervention(tabId, errorMessage, currentPage, previousPage) {
        isPaused = true;
        updateBtnState('PAUSED'); // Button becomes Orange "Resume"

        // Update Checklist UI
        updateChecklistStatus(currentPage, 'processing');
        if (previousPage) {
            updateChecklistStatus(previousPage, 'warning', [], `<b>⚠️ STUCK HERE:</b><br/>${errorMessage}`);
        }

        updateStatus(`🛑 Error. Fix manually & Click Resume.`, "red");
        showNotification("Automation Paused", errorMessage);

        // Wait loop
        while (isPaused && isRunning) {
            await sleep(500);
        }

        if (!isRunning) throw new Error("Stopped by user.");

        // Resume UI
        updateStatus(`Resuming search for ${currentPage}...`, "blue");
        if (previousPage) updateChecklistStatus(previousPage, 'success');
    }

    // --- 3. MAIN ENGINE ---
    async function runFullAutomation() {
        const jsonStr = jsonInput ? jsonInput.value : "";
        if (!jsonStr) return updateStatus("Error: Paste JSON first.", "red");

        let formData;
        try { formData = JSON.parse(jsonStr); } catch (e) { return updateStatus("Error: Invalid JSON.", "red"); }

        if (SITE_CONFIG.dataPreProcessor) formData = SITE_CONFIG.dataPreProcessor(formData);

        let startIndex = 0;
        const manualSelection = startStepSelect ? startStepSelect.value : SITE_CONFIG.pageSequence[0];
        startIndex = SITE_CONFIG.pageSequence.indexOf(manualSelection);
        if (startIndex === -1) startIndex = 0;

        // SET STATE TO RUNNING
        isRunning = true;
        isPaused = false;
        updateBtnState('RUNNING');

        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];

        try {
            // A. SMART JUMP
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
                        await sleep(1000);
                    }
                }
            }

            initInternalChecklist(SITE_CONFIG.pageSequence, startIndex, currentChecklistStatuses);

            // B. MAIN LOOP
            for (let i = startIndex; i < SITE_CONFIG.pageSequence.length; i++) {
                if (!isRunning) throw new Error("Stopped by user.");

                const pageName = SITE_CONFIG.pageSequence[i];
                const previousPageName = (i > 0) ? SITE_CONFIG.pageSequence[i - 1] : null;
                const mapping = SITE_CONFIG.mappings[pageName];

                updateProgress(i + 1, SITE_CONFIG.pageSequence.length);
                if (startStepSelect) startStepSelect.value = pageName;
                chrome.storage.session.set({ 'lastSavedStep': pageName });
                updateChecklistStatus(pageName, 'processing');

                if (mapping.shouldSkip && mapping.shouldSkip(formData)) {
                    updateStatus(`[${pageName}] Skipping.`);
                    updateChecklistStatus(pageName, 'skipped');
                    continue;
                }

                updateStatus(`[${pageName}] Processing...`);

                // 1. WAIT FOR PAGE LOAD (With Pause)
                if (mapping.waitForElement) {
                    let pageFound = false;
                    while (!pageFound && isRunning) {
                        const waitRes = await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.waitForElement, 15000]);

                        if (waitRes && waitRes.error) {
                            // Timeout / Error detected
                            const errorSelectors = SITE_CONFIG.errorCheck ? SITE_CONFIG.errorCheck.selectors : [];
                            const pageErrors = await injectScriptWithRetry(tab.id, checkForPageErrors, [errorSelectors]);

                            let msg = `Timeout: Can't find ${pageName}.`;
                            if (pageErrors) msg = `${pageErrors}`;

                            // PAUSE HERE
                            await waitForUserIntervention(tab.id, msg, pageName, previousPageName);
                        } else {
                            pageFound = true;
                        }
                    }
                }

                await sleep(500);

                // 2. FILL DATA
                let totalFailedFields = [];

                if (mapping.repeaterKey) {
                    const items = formData[mapping.repeaterKey] || [];
                    for (let j = 0; j < items.length; j++) {
                        const dynamicFields = {};
                        const fieldKeys = mapping.fieldOrder || Object.keys(mapping.fields);
                        dynamicFields.__fieldOrder = fieldKeys;

                        for (const key of fieldKeys) {
                            const val = mapping.fields[key];
                            if (typeof val === 'string' && val.includes('_0')) {
                                dynamicFields[key] = val.replace(/_0/g, '_' + j);
                            } else {
                                dynamicFields[key] = val;
                            }
                        }

                        const rowRes = await injectScriptWithRetry(tab.id, fillPageWithData, [items[j], dynamicFields, j, SITE_CONFIG.fieldRules]);
                        if (rowRes && rowRes.failed && rowRes.failed.length > 0) {
                            rowRes.failed.forEach(f => {
                                const name = f.label || f.fieldName;
                                totalFailedFields.push(`${name} (Row ${j + 1})`);
                            });
                        } else if (!rowRes) {
                            console.warn(`[${pageName}] Row ${j + 1} injection returned null.`);
                        }

                        let dynamicSaveBtn = mapping.saveButtonSelector;
                        if (dynamicSaveBtn && dynamicSaveBtn.includes('ctl00')) {
                            const idxStr = j < 10 ? '0' + j : '' + j;
                            dynamicSaveBtn = dynamicSaveBtn.replace(/ctl00_link/, `ctl${idxStr}_link`);
                        } else if (dynamicSaveBtn && dynamicSaveBtn.includes('_0')) {
                            dynamicSaveBtn = dynamicSaveBtn.replace(/_0/g, '_' + j);
                        }

                        await sleep(500);
                        if (dynamicSaveBtn) {
                            await clickElementInMainWorld(tab.id, dynamicSaveBtn);
                            await sleep(3000);
                        }
                    }
                } else {
                    if (Object.keys(mapping.fields).length > 0) {
                        const normalFields = mapping.fields;
                        if (mapping.fieldOrder) normalFields.__fieldOrder = mapping.fieldOrder;
                        const fillRes = await injectScriptWithRetry(tab.id, fillPageWithData, [formData, normalFields, 0, SITE_CONFIG.fieldRules]);

                        if (fillRes && fillRes.failed && fillRes.failed.length > 0) {
                            fillRes.failed.forEach(f => {
                                const name = f.label || f.fieldName;
                                totalFailedFields.push(name);
                            });
                        } else if (!fillRes) {
                            console.warn(`[${pageName}] Injection returned null. This usually happens after a page refresh.`);
                        }
                    }
                }

                updateChecklistStatus(pageName, 'success');

                // 3. CLICK NEXT
                if (mapping.nextButtonSelector) {
                    updateStatus(`[${pageName}] Clicking Next...`);
                    await clickElementInMainWorld(tab.id, mapping.nextButtonSelector);
                    await sleep(2000);
                }
            }

            const allSuccess = SITE_CONFIG.pageSequence.every(p => {
                const status = currentChecklistStatuses[p];
                return status === 'success' || status === 'skipped';
            });

            if (allSuccess) {
                updateStatus("Automation Fully Complete! ✅", "green");
                showNotification("Automation", "Process Fully Completed.");
            } else {
                updateStatus("Automation Finished (Some items pending review) ⚠️", "orange");
                showNotification("Automation", "Process Finished. Check checklist for pending items.");
            }
            chrome.storage.session.remove('lastSavedStep');
            if (startStepSelect) startStepSelect.selectedIndex = 0;

        } catch (err) {
            updateStatus("Error: " + err.message, "red");
            console.error(err);
        } finally {
            isRunning = false;
            isPaused = false;
            updateBtnState('IDLE'); // Reset button to Start
        }
    }
});

// ==========================================================
// INJECTED FUNCTIONS
// ==========================================================

async function injectScriptWithRetry(tabId, func, args = [], maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const res = await chrome.scripting.executeScript({ target: { tabId }, func, args });
            if (!res || res.length === 0) return null;
            return res[0].result;
        } catch (e) {
            if (i === maxRetries - 1) throw e;
            await new Promise(r => setTimeout(r, 1000));
        }
    }
    return null;
}

function clickElementInMainWorld(tabId, selector) {
    return new Promise((resolve, reject) => {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            world: 'MAIN',
            func: (sel) => {
                let el = document.querySelector(sel);
                if (!el && sel.indexOf('#') === -1) el = document.getElementById(sel);
                if (el) { el.click(); return { success: true }; }
                return { error: 'Not found' };
            },
            args: [selector]
        }, (res) => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve(res[0].result);
        });
    });
}

function detectCurrentPage(detectionList) {
    for (const item of detectionList) {
        let sel = item.selector.replace('ALL:', '');
        if (sel.indexOf('#') === -1 && sel.indexOf('[') === -1 && sel.indexOf('.') === -1) sel = '#' + sel;
        if (document.querySelector(sel)) return item.name;
    }
    return null;
}

function waitForElementOnPage(selector, timeout) {
    return new Promise(resolve => {
        let cleanSel = selector.replace('ALL:', '');
        if (cleanSel.indexOf('#') === -1 && cleanSel.indexOf('[') === -1 && cleanSel.indexOf('.') === -1) cleanSel = '#' + cleanSel;
        if (document.querySelector(cleanSel)) return resolve(true);
        const observer = new MutationObserver(() => {
            if (document.querySelector(cleanSel)) { observer.disconnect(); resolve(true); }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        setTimeout(() => { observer.disconnect(); resolve({ error: 'Timeout' }); }, timeout);
    });
}

function checkForPageErrors(errorSelectors) {
    if (!errorSelectors || errorSelectors.length === 0) return null;
    for (const sel of errorSelectors) {
        const els = document.querySelectorAll(sel);
        for (const el of els) {
            if (el.offsetParent !== null && el.innerText.trim().length > 2) {
                return el.innerText.trim();
            }
        }
    }
    return null;
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
            const mainContent = document.getElementById('MainContent') || document.body;
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

    const setFieldValue = (selector, value, fieldKey) => {
        if (!selector) return false;

        if (selector.startsWith("ALL:")) {
            const cleanSelector = selector.replace("ALL:", "");
            const allElements = document.querySelectorAll(cleanSelector);
            if (allElements.length === 0) return false;

            allElements.forEach(el => {
                if (!el.disabled && !el.readOnly) {
                    el.value = value;
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                }
            });
            return true;
        }

        let el = document.querySelector(selector);

        // Fallback Logic if not found
        if (!el) {
            let cleanId = selector;
            if (selector.startsWith('#')) cleanId = selector.substring(1);

            // Try as ID directly
            el = document.getElementById(cleanId);

            // Try with MainContent_ prefix
            if (!el && !cleanId.startsWith('MainContent_')) {
                el = document.getElementById('MainContent_' + cleanId);
            }

            // Final attempt as CSS selector (if not already tried)
            if (!el && !selector.startsWith('#') && !selector.startsWith('[')) {
                try { el = document.querySelector('#' + selector); } catch (e) { }
            }
        }

        if (!el || el.disabled || el.readOnly) return !!el;

        console.log('Setting ' + el.id + ' to: ' + value);
        el.focus();
        el.value = value;
        el.dispatchEvent(new Event('focus', { bubbles: true }));
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));

        if (el.tagName === 'SELECT') {
            el.dispatchEvent(new Event('click', { bubbles: true }));
            if (el.onchange) el.onchange();
        }

        if (typeof __doPostBack !== 'undefined') {
            try { __doPostBack(el.id || selector.replace('#', ''), ''); } catch (e) { }
        }

        return true;
    };

    try {
        let keys = fieldMap.__fieldOrder || Object.keys(fieldMap);
        keys = keys.filter(k => k !== '__fieldOrder');

        let count = 0;
        let failedFields = [];

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const sel = fieldMap[key];
            if (!sel) continue;

            const jsonValue = data[key];
            if (jsonValue === undefined || jsonValue === null || jsonValue === "") continue;

            const success = setFieldValue(sel, jsonValue, key);
            if (!success) {
                failedFields.push({ fieldName: key, selector: sel, value: jsonValue });
            } else {
                // APPLY GENERIC RULES
                const ajaxRule = (fieldRules.ajaxTriggers || []).find(r =>
                    (r.selectorContains && sel.includes(r.selectorContains)) ||
                    (r.keyEquals && key === r.keyEquals)
                );

                if (ajaxRule) {
                    if (ajaxRule.waitForAjax) await waitForPageUpdate();
                    if (ajaxRule.postDelay) await delay(ajaxRule.postDelay);
                    if (ajaxRule.dependentSelectorPattern) {
                        const depSel = ajaxRule.dependentSelectorPattern.replace('{rowIndex}', rowIndex);
                        const depEl = document.querySelector(depSel);
                        if (depEl) await waitForEnabled(depEl);
                        else await delay(1000);
                    }
                } else {
                    const delayRule = (fieldRules.extraDelayFields || []).find(r => {
                        if (Array.isArray(r.selectorContains)) return r.selectorContains.some(s => sel.includes(s));
                        return r.selectorContains && sel.includes(r.selectorContains);
                    });
                    if (delayRule) await delay(delayRule.delay);
                }
                count++;
            }
        }
        return { success: true, filled: count, failed: failedFields };
    } catch (err) {
        return { success: false, error: err.message, failed: [] };
    }
}

function checkInputPersistence(data, fieldMap) {
    let mismatches = [];
    let keys = Object.keys(fieldMap).filter(k => k !== '__fieldOrder');

    for (let key of keys) {
        const selector = fieldMap[key];
        const expectedValue = data[key];
        if (expectedValue === undefined || expectedValue === null || expectedValue === "") continue;

        let el = document.querySelector(selector);
        if (!el && selector.indexOf('#') === -1 && selector.indexOf('[') === -1) {
            el = document.getElementById(selector) || document.getElementById('MainContent_' + selector);
        }
        if (el) {
            const normExpected = String(expectedValue).trim();
            const normActual = String(el.value).trim();
            if (normActual !== normExpected) {
                if (normActual === "" && normExpected.length > 0) {
                    mismatches.push(`${key} (Value cleared by server)`);
                } else {
                    mismatches.push(`${key} (Expected: "${normExpected}", Actual: "${normActual}")`);
                }
            }
        }
    }
    return mismatches.length > 0 ? mismatches.join(', ') : null;
}
