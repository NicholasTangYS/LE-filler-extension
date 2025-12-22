// =================================================================
// PART 1: CONFIGURATION (DATA & MAPPINGS)
// =================================================================

const pageMappings = {
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
            "Change_of_Accounting_Period_No": "MainContent_ddlTkrTempoh",
            "FS_in_Foreign_Currency_Yes": "MainContent_ddlPenyata"
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
            "Currency_Reported": "MainContent_ddlJnsMatawang",
            "Currency_Exchange_Rate": "MainContent_txtRate",
            "Business_Status_In_Operation": "MainContent_ddlStatus_pern",
            "Record_keeping": "MainContent_ddlRekod",
            "Type_of_Labuan_entity": "MainContent_ddlEntitiLabuan",
            "Incorp_under": "MainContent_ddlAktivitiEntiti",
            "Accounting_Period_From": "MainContent_txtTarikhMula",
            "Accounting_Period_To": "MainContent_txtTarikhTutup",
            "Basis_Period_From": "MainContent_txtTarikhMulaAsas",
            "Basis_Period_To": "MainContent_txtTarikhTutupAsas",
            "Types_of_exchange_of_accounting_periods": "MainContent_ddlJnsTempoh"
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
            "Name": "MainContent_RptPekongsi_txtNama_0",
            "Claim_PUA_419_2011": "MainContent_RptPekongsi_ddlMenuntutPUA_0",
            "Designation": "MainContent_RptPekongsi_ddlJenisJawatan_0",
            "Country": 'ALL:select[id*="ddlNegara"]',
            "Address1": "MainContent_RptPekongsi_txtAlamat1_0",
            "Address2": "MainContent_RptPekongsi_txtAlamat2_0",
            "Postcode": "MainContent_RptPekongsi_txtPoskod_0",
            "Town": "MainContent_RptPekongsi_txtBandar_0",
            "ID_type": "MainContent_RptPekongsi_ddlJenisPengenalan_0",
            "ID_Passport_No": "MainContent_RptPekongsi_txtNoPengenalan_0",
            "Date_of_Birth": "MainContent_RptPekongsi_txtTkh_Lahir_0",
            "TIN": "MainContent_RptPekongsi_txtNo_Cukai_0",
            "Telephone_No": "MainContent_RptPekongsi_txtTelefon_0",
            "Salary_Bonus": "MainContent_RptPekongsi_txtGaji_0",
            "Fees_Commission_Allowances": "ctl00$MainContent$RptPekongsi$ctl00$txtKomisen",
            "Total_Loan_to_Officer": "MainContent_RptPekongsi_txtKpdPengarah_0",
            "Total_Loan_from_Officer": "MainContent_RptPekongsi_txtDariPengarah_0"
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
            "Name_of_Shareholder_Partner": "MainContent_RptPekongsi_txtNama_0",
            "Country": 'ALL:select[id*="ddlNegara"]',
            "Address1": "MainContent_RptPekongsi_txtAlamat1_0",
            "Address2": "MainContent_RptPekongsi_txtAlamat2_0",
            "Postcode": "MainContent_RptPekongsi_txtPoskod_0",
            "Town": "MainContent_RptPekongsi_txtBandar_0",
            "ID_type": "MainContent_RptPekongsi_ddlJenisPengenalan_0",
            "ID_Passport_Reg_No": "MainContent_RptPekongsi_txtNoPengenalan_0",
            "Date_of_Birth": "MainContent_RptPekongsi_txtTkh_Lahir_0",
            "Country_of_Origin": "MainContent_RptPekongsi_ddlNeg_Asal_0",
            "TIN": "MainContent_RptPekongsi_txtNoCukai_0",
            "Direct_Shareholding_Percentage": 'MainContent_RptPekongsi_txtSyer_Langsung_0',
            "Dividends_Received_in_Basis_Period": "MainContent_RptPekongsi_txtDividenSyer_0"
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
            "Name": "MainContent_RptPekongsi_txtNama_0",
            "TIN": "MainContent_RptPekongsi_txtNo_Cukai_0",
            "Shareholding_Percentage": "MainContent_RptPekongsi_txtPegSyer_0",
            "Salary_Bonus": "MainContent_RptPekongsi_txtGaji_0",
            "Dividends_Received_in_Basis_Period": "MainContent_RptPekongsi_txtDividen_0",
            "Total_Loan_from_Owner": "MainContent_RptPekongsi_txtKpdPemunya_0",
            "Total_Loan_to_Owner": "MainContent_RptPekongsi_txtDariPemunya_0",
            "Country": 'ALL:select[id*="ddlNegara"]',
            "Address1": "MainContent_RptPekongsi_txtAlamat1_0",
            "Address2": "MainContent_RptPekongsi_txtAlamat2_0",
            "Postcode": "MainContent_RptPekongsi_txtPoskod_0",
            "Town": "MainContent_RptPekongsi_txtBandar_0",
            "ID_type": "MainContent_RptPekongsi_ddlJenisPengenalan_0",
            "ID_Passport_No": "MainContent_RptPekongsi_txtNoPengenalan_0",
            "Date_of_Birth": "MainContent_RptPekongsi_txtTkh_Lahir_0",
            "Telephone_No": "MainContent_RptPekongsi_txtTelefon_0",
            "Fees_Commission_Allowance": "MainContent_RptPekongsi_txtKomisen_0"
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
            "C6a_Has_Related_Company": "MainContent_ddlSyktKaitan",
            "C6b_Number_of_Related_Companies_Qualifying_Activity": "MainContent_txtBilSyktKaitan",
            "C7a_Derived_Income_from_Non_Labuan_Activity": "MainContent_ddlBknLabuan",
            "C7b_Total_Income_from_Non_Labuan_Activity": "MainContent_txtJumBknLabuan",
            "C8a_Derived_Income_from_IP": "MainContent_ddlPendRoyalti",
            "C8b_Total_Income_from_IP": "MainContent_txtJumPendRoyalti",
        }
    },

    Subsidiary_P1: {
        waitForElement: '#MainContent_ddlSyktSubsidiari',
        nextButtonSelector: null,
        fieldOrder: ["C10_Has_Subsidiary_Outside_Labuan"],
        fields: {
            "C10_Has_Subsidiary_Outside_Labuan": 'MainContent_ddlSyktSubsidiari'
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
            "Name": "MainContent_RptPekongsi_txtNama_0",
            "Registration_No": "MainContent_RptPekongsi_txtNoDaftar_0",
            "TIN": "MainContent_RptPekongsi_txtNoCukai_0",
            "Have_Transactions": "MainContent_RptPekongsi_ddlTransaksi_0"
        }
    },

    Payment_P1: {
        waitForElement: '#MainContent_ddlTerimaMastautin',
        nextButtonSelector: null,
        fieldOrder: ["C11_Received_Payments_from_Malaysian_Resident"],
        fields: {
            "C11_Received_Payments_from_Malaysian_Resident": 'MainContent_ddlTerimaMastautin'
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
            "Name_of_taxpayer": "MainContent_RptPekongsi_txtNamaPembayar_0",
            "TIN": "MainContent_RptPekongsi_txtNoTINPembayar_0",
            "Type_of_payment_received": "MainContent_RptPekongsi_ddljenis_bayaran_0",
            "Payment_Related_to": "MainContent_RptPekongsi_ddlsykt_berkaitan_0",
            "Amount": "MainContent_RptPekongsi_txtNamaPembayar_0"
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
            "Incentive_Code": "MainContent_rptInsentif_txtJenisInsentif_0",
            "Amount_Claimed": "MainContent_rptInsentif_txtInsentifTuntut_0"
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
            "D1_Subject_to_CbCR": "MainContent_ddlRcbcra",
            "D1_Subject_as": "MainContent_ddlRcbcrb"
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
            // ✅ FIXED: Registered Address (NOW WORKING)
            "D3_Has_Financial_Account_Outside_Malaysia": "MainContent_ddlIntKew",
            "D4_Subject_to_AEOI": "MainContent_ddlPerLabuan",
            "C1_Registered_Address_line1": "MainContent_txtDaftar_Alamat1",
            "C1_Registered_Address_line2": "MainContent_txtDaftar_Alamat2",
            "Email": "txtEmelDaftar",
            "C1_Correspondence_Address_line1": "MainContent_txtF1_Alamat1",
            "C1_Correspondence_Address_line2": "MainContent_txtF1_Alamat2",
            "C1_Postcode": "txtF1_Poskod",
            "C1_City": "txtF1_Bandar",
            "C1_State": "ddlDaftar_Negeri",
            "C2_Address_Is_Tax_Agent_or_Trust_Co": "ddlF1_Status",
            "Auditor_Name": "MainContent_txtS1_Nama",
            "Auditor_Country": "ddlS2_Negara",
            "Auditor_Address_line1": "MainContent_txtS2_Alamat1",
            "Auditor_Address_line2": "MainContent_txtS2_Alamat2",
            "Auditor_Postcode": "txtS2_Poskod",
            "Auditor_City": "txtS2_Bandar",
            "Auditor_Email": "txtS5",
            "Auditor_Telephone_no": "MainContent_txtS3",
            "Auditor_TIN": "MainContent_txtS4"
        }
    },

    // 3. Tax Agent (The Disabled Field Page)
    TaxAgent_Info: {
        // LOGIC: Skip this whole page if the declarant is a Director (Designation "2")
        // Adjust the logic if "2" means something else, but based on your request:
        shouldSkip: (data) => data.Declarant_Designation === '2',

        waitForElement: '#MainContent_txtT2_Alamat1',
        nextButtonSelector: '#MainContent_btnNext',

        fields: {
            "Declarant_Address_line1": "MainContent_txtT2_Alamat1",
            "Declarant_Address_line2": "MainContent_txtT2_Alamat2",
            "Declarant_Postcode": "txtT2_Poskod",
            "Declarant_Telephone_no": "MainContent_txtT3",
            "Declarant_Email": "txtT6",
        }
    },

    // Added this back because it was missing
    Substantive_Info: {
        // This ID triggers the 2-second delay in the filler function
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
            "Business_Activity_Code": "MainContent_RptSubs_ddlKod_0",
            "Core_Income_Activity_Yes": "MainContent_RptSubs_ddlSub_Utama_0",
            "Business_Activity_Status_Active": "MainContent_RptSubs_ddlSub_Niaga_0",
            "No_of_Employees": "MainContent_RptSubs_txtSub_Full_0",
            "Annual_Operating_Expenditure": "MainContent_RptSubs_txtSub_Belanja_0",
            "Annual_Operating_Expenditure_MAS": "MainContent_RptSubs_txtSub_Operasi_0",
            "Compliance_with_FPEC": "MainContent_RptSubs_ddlSub_Patuh_0",
            "Compliance_with_CML": "MainContent_RptSubs_ddlSub_Kawal_0",
            "No_of_Employees_Malaysia": "MainContent_RptSubs_txtSub_Part_0",
            "No_of_Related_Company": "MainContent_RptSubs_txtSub_Kaitan_0",
            "Comply_Substantive_Yes": "MainContent_RptSubs_ddlSub_Syarat_0",
            "Amount_of_Net_Loss": "MainContent_RptSubs_txtSub_Rugi_0",
            "Net_Profits_ex_IP": "MainContent_RptSubs_txtSub_Untung_0"
        }
    },


    Tax_Payable: {
        waitForElement: '#MainContent_txtRebat',
        nextButtonSelector: '#MainContent_btnSave',
        fields: {
            "B5_Zakat_Paid": "MainContent_txtRebat"
        }
    },

    Declaration_Page: {
        waitForElement: 'input[value="Tandatangan & hantar"]',
        nextButtonSelector: null,
        fields: {}
    }
}

const pageSequence = [

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
];


document.addEventListener('DOMContentLoaded', function () {
    const statusDiv = document.getElementById('msg');
    const jsonInput = document.getElementById('jsonData');
    const startButton = document.getElementById('startBtn');
    const stopButton = document.getElementById('stopBtn');
    const startStepSelect = document.getElementById('startStep');
    const progressBarFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progressText');
    const stepCounter = document.getElementById('stepCounter');
    const progressContainer = document.getElementById('progressContainer');

    function updateProgress(current, total) {
        if (!progressContainer || !progressBarFill || !progressText) return;

        progressContainer.style.display = 'block';
        const percent = Math.round((current / total) * 100);

        progressBarFill.style.width = percent + '%';
        progressText.textContent = percent + '%';

        if (stepCounter) {
            stepCounter.textContent = `Step ${current} / ${total}`;
        }
    }

    // INTERNAL CHECKLIST LOGIC
    const checklistContainer = document.getElementById('checklistContainer');

    // Toggle checklist on progress container click
    if (progressContainer) {
        progressContainer.style.cursor = 'pointer';
        progressContainer.onclick = function (e) {
            // Don't toggle if clicking inside the checklist itself (e.g. valid text selection)
            if (e.target.closest('#checklistContainer')) return;

            if (checklistContainer.style.display === 'none' || checklistContainer.innerHTML === '') {
                checklistContainer.style.display = 'block';
            } else {
                checklistContainer.style.display = 'none';
            }
        };
    }

    function initInternalChecklist(pageList, startIndex) {
        if (!checklistContainer) return;

        checklistContainer.innerHTML = ''; // Clear
        checklistContainer.style.display = 'none'; // Initially hidden

        pageList.forEach((pageName, index) => {
            const item = document.createElement('div');
            item.id = 'chk_' + pageName;

            // Set initial state
            let statusClass = 'pending';
            let iconText = '●';

            if (index < startIndex) {
                statusClass = 'success';
                item.className = `checklist-item success`;
                iconText = '✓';
            } else {
                item.className = `checklist-item pending`;
            }

            item.innerHTML = `
                <div class="checklist-icon">${iconText}</div>
                <div style="flex:1">${index + 1}. ${pageName}</div>
            `;

            checklistContainer.appendChild(item);
        });
    }

    function updateInternalChecklistStatus(pageName, status, failedCount) {
        const item = document.getElementById('chk_' + pageName);
        if (!item) return;

        // Reset classes
        item.className = 'checklist-item ' + status;

        const iconDiv = item.querySelector('.checklist-icon');
        const textDiv = item.querySelector('div[style="flex:1"]');

        if (status === 'processing') {
            iconDiv.textContent = '⏳';
        } else if (status === 'success') {
            iconDiv.textContent = '✓';
            // Clean text if needed
            if (textDiv.textContent.includes('failed') || textDiv.textContent.includes('Skipped')) {
                textDiv.textContent = textDiv.textContent.split(' (')[0];
            }
        } else if (status === 'failed') {
            iconDiv.textContent = '✗';
            if (failedCount) {
                textDiv.textContent = textDiv.textContent.split(' (')[0] + ` (${failedCount} fields failed)`;
            }
        } else if (status === 'skipped') {
            iconDiv.textContent = '⊘';
            textDiv.textContent = textDiv.textContent.split(' (')[0] + ' (Skipped)';
        }
    }

    // ============================================================
    // 1. POPULATE DROPDOWN (Create options first)
    // ============================================================
    if (startStepSelect) {
        pageSequence.forEach((step, index) => {
            const option = document.createElement('option');
            option.value = step;
            option.text = `${index + 1}. ${step}`;
            startStepSelect.appendChild(option);
        });
    }

    // ============================================================
    // 2. STORAGE RESTORE (JSON & Last Page)
    // ============================================================
    // We load 'savedAutomationJson' AND 'lastSavedStep' together
    chrome.storage.session.get(['savedAutomationJson', 'lastSavedStep'], function (result) {

        // A. Restore JSON (Fixes the empty box issue)
        if (result.savedAutomationJson && jsonInput) {
            jsonInput.value = result.savedAutomationJson;
            console.log("JSON restored from storage.");
        }

        // B. Restore Dropdown Selection
        if (result.lastSavedStep && startStepSelect) {
            startStepSelect.value = result.lastSavedStep;
            // Visual confirmation
            if (statusDiv && result.lastSavedStep) {
                statusDiv.textContent = "Resumed from last saved step: " + result.lastSavedStep;
                statusDiv.style.color = "blue";
                statusDiv.style.fontSize = "16px";
                statusDiv.style.fontWeight = "bold";
            }
        }
    });

    // ============================================================
    // 3. STORAGE SAVE LISTENER (Critical for JSON persistence)
    // ============================================================
    // This watches for any typing or pasting in the text box
    if (jsonInput) {
        jsonInput.addEventListener('input', function () {
            const currentData = jsonInput.value;
            chrome.storage.session.set({ 'savedAutomationJson': currentData }, function () {
                console.log("JSON saved to storage");
            });
        });
    }

    // Attach Click Listener
    if (startButton) startButton.addEventListener('click', runFullAutomation);
    if (stopButton) stopButton.addEventListener('click', stopAutomation);

    let isRunning = false;
    function stopAutomation() {
        if (isRunning) {
            isRunning = false;
            updateStatus("STOPPING... Please wait for current step to finish.", "red");
            if (stopButton) stopButton.disabled = true;
            if (stopButton) stopButton.innerText = "Stopping...";
        }
    }


    // ... Helper functions (updateStatus, sleep) go here ... 
    function updateStatus(message, color) {
        if (!color) color = "black";
        if (statusDiv) {
            statusDiv.textContent = message;
            statusDiv.style.color = color;
        }
        console.log('[Extension Log] ' + message);
    }

    function sleep(ms) {
        return new Promise(function (r) { setTimeout(r, ms); });
    }

    function showNotification(title, message) {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png', // Fallback if no icon, but usually works with default
            title: title,
            message: message,
            priority: 2
        });
    }

    async function runFullAutomation() {
        const jsonStr = jsonInput ? jsonInput.value : "";
        if (!jsonStr) return updateStatus("Error: Paste JSON first.", "red");

        let formData;
        try { formData = JSON.parse(jsonStr); }
        catch (e) { return updateStatus("Error: Invalid JSON.", "red"); }

        // --- DATA TRANSFORMATION (Keep your existing code here) ---
        formData.Generated_Incentive_List = [];
        const addIncentiveRow = (code, amount) => {
            if (code && String(code).trim() !== "") {
                formData.Generated_Incentive_List.push({ "Incentive_Code": code, "Amount_Claimed": amount });
            }
        };
        if (formData.C12_Row1_Incentive_Code) addIncentiveRow(formData.C12_Row1_Incentive_Code, formData.C12_Row1_Amount_Claimed);
        if (formData.C12_Row2_Incentive_Code) addIncentiveRow(formData.C12_Row2_Incentive_Code, formData.C12_Row2_Amount_Claimed);
        if (formData.C12_Row3_Incentive_Code) addIncentiveRow(formData.C12_Row3_Incentive_Code, formData.C12_Row3_Amount_Claimed);
        // ---------------------------

        // 1. DETERMINE START INDEX
        const selectedStepName = startStepSelect ? startStepSelect.value : pageSequence[0];
        let startIndex = pageSequence.indexOf(selectedStepName);
        if (startIndex === -1) startIndex = 0;

        updateStatus(`Starting Automation from: ${selectedStepName} (Step ${startIndex + 1})...`, "blue");

        // 2a. INIT PROGRESS BAR
        if (progressContainer) {
            updateProgress(Math.max(0, startIndex), pageSequence.length);
        }

        // 2. LOCK UI
        if (startStepSelect) startStepSelect.disabled = true;
        if (startButton) {
            startButton.style.display = 'none'; // Hide Start
            startButton.disabled = true;
        }
        if (stopButton) {
            stopButton.style.display = 'block'; // Show Stop
            stopButton.disabled = false;
            stopButton.innerHTML = '<span>⏹</span> Stop Automation';
        }

        isRunning = true;

        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];

        try {
            // ============================================================
            // SMART START: Check if we are on a different page than selected
            // ============================================================
            updateStatus("Checking current page...", "blue");

            // Build simple detection list for the browser
            const mainPageSections = new Set([
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
                'Registerd_And_Auditor_Address', 'TaxAgent_Info'
            ]);

            const detectionList = [];
            for (const name of pageSequence) {
                // FILTER: For the "Main Page" group, only detect Officer_P1 or the internal P2/P3 pages
                if (mainPageSections.has(name)) {
                    const isOfficerP1 = (name === 'Officer_Info_P1');
                    const isPart2Or3 = (name.endsWith('_P2') || name.endsWith('_P3'));
                    if (!isOfficerP1 && !isPart2Or3) {
                        continue; // Skip detection (e.g. Shareholder_P1, LE_Info) so it defaults to Officer_P1
                    }
                }

                const map = pageMappings[name];
                if (map && map.waitForElement) {
                    detectionList.push({ name: name, selector: map.waitForElement });
                }
            }

            const detectedPage = await injectScriptWithRetry(tab.id, function (list) {
                // Browser context
                for (const item of list) {
                    let sel = item.selector;
                    if (sel.indexOf('ALL:') !== -1) sel = sel.replace('ALL:', '');
                    if (sel.indexOf('#') === -1 && sel.indexOf('[') === -1) sel = '#' + sel;

                    if (document.querySelector(sel)) {
                        return item.name;
                    }
                }
                return null;
            }, [detectionList]);

            if (detectedPage && detectedPage !== selectedStepName) {
                const newIndex = pageSequence.indexOf(detectedPage);
                if (newIndex !== -1) {
                    console.log(`[Smart Start] Detected ${detectedPage} instead of ${selectedStepName}. Jumping.`);
                    updateStatus(`Smart Jump: Detected [${detectedPage}]. Starting there!`, "green");
                    showNotification("Smart Start", `Jumped to detected page: ${detectedPage}`);

                    // Update Start Index
                    startIndex = newIndex;

                    // Update Dropdown for visual consistency
                    if (startStepSelect) startStepSelect.value = detectedPage;
                    await sleep(1500); // Let user see the message
                }
            }

            // ============================================================
            // INITIALIZE PAGE PROGRESS CHECKLIST
            // ============================================================
            initInternalChecklist(pageSequence, startIndex);

            for (let i = startIndex; i < pageSequence.length; i++) {
                if (!isRunning) {
                    throw new Error("Stopped by user.");
                }

                // UPDATE PROGRESS
                updateProgress(i + 1, pageSequence.length);
                const pageName = pageSequence[i];
                const mapping = pageMappings[pageName];

                // ============================================================
                // UPDATE UI & SAVE PROGRESS TO STORAGE
                // ============================================================
                if (startStepSelect) startStepSelect.value = pageName;

                // SAVE TO STORAGE: If user closes popup now, this remembers where we were
                chrome.storage.session.set({ 'lastSavedStep': pageName });
                // ============================================================

                // Check Condition Skip
                if (mapping.shouldSkip && mapping.shouldSkip(formData)) {
                    updateStatus('[' + pageName + '] Skipping (Condition met).');
                    updateInternalChecklistStatus(pageName, 'skipped');
                    continue;
                }

                // Check Wait Element Skip
                if (mapping.waitForElement) {
                    let waitKey = null;
                    for (const key in mapping.fields) {
                        if (mapping.fields[key] === mapping.waitForElement) {
                            waitKey = key;
                            break;
                        }
                    }
                    if (waitKey && (!formData[waitKey] || formData[waitKey] === "")) {
                        updateStatus('[' + pageName + '] Skipping (Data for wait element is empty).');
                        updateInternalChecklistStatus(pageName, 'skipped');
                        continue;
                    }
                }

                // Mark page as processing
                updateInternalChecklistStatus(pageName, 'processing');

                if (i > startIndex) {
                    updateStatus('Waiting 3s for ' + pageName + '...');
                    await sleep(3000);
                }

                // ... (Keep existing injection/repeater logic here) ...
                if (mapping.waitForElement) {
                    const waitResult = await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.waitForElement, 15000]);
                    if (waitResult && waitResult.error) {
                        let errorMsg = `Timeout waiting for ${pageName}. Are you on the right page?`;

                        // NEW: Check for validation errors on the page (e.g. Invalid TIN)
                        try {
                            const pageErrors = await injectScriptWithRetry(tab.id, checkForValidationErrors);
                            if (pageErrors) {
                                errorMsg = `🚨 PAGE ERROR DETECTED: ${pageErrors}`;
                                updateStatus("❌ " + pageErrors, "red");
                                showNotification("Page Error", pageErrors);
                            }

                            // CHECK 2: Field Mismatches (Did server clear invalid fields?)
                            // Pass current fields map to only check relevant fields
                            const mismatches = await injectScriptWithRetry(tab.id, checkInputPersistence, [formData, mapping.fields]);
                            if (mismatches) {
                                const additionalInfo = `\n⚠️ Potential Invalid Fields (Values Changed/Cleared): ${mismatches}`;
                                errorMsg += additionalInfo;
                                console.warn(additionalInfo);
                            }

                        } catch (e) {
                            console.log("Error checking for page errors:", e);
                        }

                        // Smart Suggestion for Split Pages
                        if (pageName.endsWith('_P2')) {
                            const p1Name = pageName.replace('_P2', '_P1');
                            errorMsg += `\nSuggestion: You might need to go back to [${p1Name}] manually.`;
                        }

                        throw new Error(errorMsg);
                    }
                }

                if (mapping.repeaterKey) {
                    // ... (Your existing repeater logic) ...
                    // Shortened for brevity, paste your actual repeater code here
                    const items = formData[mapping.repeaterKey] || [];
                    if (items.length > 0 && mapping.saveButtonSelector) {
                        for (let j = 0; j < items.length; j++) {
                            // ... repeater loop logic ...
                            // NOTE: You can't easily save sub-step (repeater index) without complex logic.
                            // Saving the Page Name is usually enough.
                            const dynamicFields = {};
                            const fieldKeys = mapping.fieldOrder || Object.keys(mapping.fields);
                            dynamicFields.__fieldOrder = fieldKeys;

                            for (let k = 0; k < fieldKeys.length; k++) {
                                const key = fieldKeys[k];
                                const val = mapping.fields[key];
                                if (val.indexOf("ALL:") === 0 || val.indexOf("INDEXED:") === 0) {
                                    dynamicFields[key] = val;
                                } else if (val.indexOf('_0') !== -1) {
                                    dynamicFields[key] = val.replace(/_0(?=$|[^0-9])/, '_' + j);
                                } else {
                                    dynamicFields[key] = val;
                                }
                            }
                            const idxStr = j < 10 ? '0' + j : '' + j;
                            let dynamicSaveBtn = mapping.saveButtonSelector;
                            if (dynamicSaveBtn.indexOf("ctl00_link") !== -1) {
                                dynamicSaveBtn = dynamicSaveBtn.replace("ctl00_link", 'ctl' + idxStr + '_link');
                            } else {
                                const lastCtl = dynamicSaveBtn.lastIndexOf("ctl00");
                                if (lastCtl !== -1) {
                                    dynamicSaveBtn = dynamicSaveBtn.substring(0, lastCtl) + 'ctl' + idxStr + dynamicSaveBtn.substring(lastCtl + 5);
                                }
                            }
                            await injectScriptWithRetry(tab.id, fillPageWithData, [items[j], dynamicFields, j]);
                            await sleep(500);
                            await triggerAspSave(tab.id, dynamicSaveBtn, 0);
                            await sleep(5000);
                        }
                    } else if (items.length > 0) {
                        await injectScriptWithRetry(tab.id, fillPageWithData, [items[0], mapping.fields, 0]);
                    }
                } else {
                    // Normal Logic
                    let fillResult = null;
                    if (Object.keys(mapping.fields).length > 0) {
                        const normalFields = mapping.fields;
                        if (mapping.fieldOrder) normalFields.__fieldOrder = mapping.fieldOrder;
                        fillResult = await injectScriptWithRetry(tab.id, fillPageWithData, [formData, normalFields, 0]);
                    }

                    // Check for failed fields
                    if (fillResult && fillResult.failed && fillResult.failed.length > 0) {
                        updateStatus(`[${pageName}] ⚠️ ${fillResult.failed.length} field(s) failed to fill. Please fill manually.`, 'orange');

                        // Update page progress as failed
                        updateInternalChecklistStatus(pageName, 'failed', fillResult.failed.length);

                        // Show checklist on the page
                        await injectScriptWithRetry(tab.id, showFailedFieldsChecklist, [fillResult.failed, pageName]);

                        // Show notification
                        showNotification('Manual Action Required', `${fillResult.failed.length} fields on ${pageName} need manual filling`);

                        // STOP automation - don't click next button
                        throw new Error(`Validation failed on ${pageName}: ${fillResult.failed.length} field(s) could not be filled. Please fill them manually and restart automation from this step.`);
                    }
                }

                // Mark page as successful
                updateInternalChecklistStatus(pageName, 'success');

                if (mapping.nextButtonSelector) {
                    updateStatus('[' + pageName + '] Clicking Button...');
                    await injectScriptWithRetry(tab.id, clickElement, [mapping.nextButtonSelector]);
                }
            }

            // ============================================================
            // FINISHED: CLEAR SAVED STEP (So next time it starts from 1)
            // ============================================================
            updateStatus("Automation Done!", "green");
            showNotification("LHDN Automation", "Automation Completed Successfully!");

            // FINAL PROGRESS
            updateProgress(pageSequence.length, pageSequence.length);

            chrome.storage.session.remove('lastSavedStep');
            if (startStepSelect) startStepSelect.selectedIndex = 0;

        } catch (error) {
            if (error.message === "Stopped by user.") {
                updateStatus("Automation STOPPED by user.", "orange");
                showNotification("LHDN Automation", "Automation Stopped.");
            } else {
                updateStatus('FATAL ERROR: ' + error.message, "red");
                showNotification("LHDN Automation", "Error: " + error.message);
                console.error(error);
            }
        } finally {
            if (startStepSelect) startStepSelect.disabled = false;

            // Reset Buttons
            if (startButton) {
                startButton.style.display = 'block';
                startButton.disabled = false;
            }
            if (stopButton) {
                stopButton.style.display = 'none';
            }
            isRunning = false;
        }
    }
});

// =================================================================
// PART 3: INJECTOR UTILITIES
// =================================================================
async function injectScriptWithRetry(tabId, func, args, maxRetries) {
    if (!args) args = [];
    if (!maxRetries) maxRetries = 5;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await injectScript(tabId, func, args);
        } catch (err) {
            const isNav = err.message.indexOf("Frame with ID 0 was removed") !== -1 ||
                err.message.indexOf("The tab was closed") !== -1;
            if (isNav && attempt < maxRetries) {
                await new Promise(function (r) { setTimeout(r, 2000); });
            } else {
                throw err;
            }
        }
    }
}

function injectScript(tabId, func, args) {
    if (!args) args = [];
    return new Promise(function (resolve, reject) {
        chrome.scripting.executeScript({ target: { tabId: tabId }, func: func, args: args }, function (res) {
            if (chrome.runtime.lastError) return reject(new Error(chrome.runtime.lastError.message));
            // Return the result of the function execution
            resolve(res && res[0] ? res[0].result : null);
        });
    });
}

// =================================================================
// PART 4: BROWSER CONTEXT FUNCTIONS
// =================================================================
// OPTIMIZED: Uses MutationObserver to detect element addition (Instant in bg)
function waitForElementOnPage(selector, timeout) {
    return new Promise(function (resolve) {
        let finalSelector = selector;
        if (selector.indexOf('ALL:') !== -1) finalSelector = selector.replace('ALL:', '');

        if (finalSelector.indexOf('#') === -1 && finalSelector.indexOf('[') === -1) {
            finalSelector = '#' + finalSelector;
        }

        if (document.querySelector(finalSelector)) return resolve(true);

        const observer = new MutationObserver(function (mutations) {
            if (document.querySelector(finalSelector)) {
                observer.disconnect();
                resolve(true);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        setTimeout(function () {
            observer.disconnect();
            // If it timed out, check one last time just in case
            if (document.querySelector(finalSelector)) {
                resolve(true);
            } else {
                resolve({ error: 'Timeout: ' + finalSelector });
            }
        }, timeout);
    });
}




// Display checklist of failed fields on the page
function showFailedFieldsChecklist(failedFields, pageName) {
    // Remove existing checklist if any
    const existing = document.getElementById('autoFillChecklist');
    if (existing) existing.remove();

    if (!failedFields || failedFields.length === 0) return;

    // Create checklist container
    const checklist = document.createElement('div');
    checklist.id = 'autoFillChecklist';
    checklist.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #fff3cd;
        border: 3px solid #ff6b6b;
        border-radius: 8px;
        padding: 20px;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 999999;
        font-family: Arial, sans-serif;
    `;

    // Create header
    const header = document.createElement('div');
    header.style.cssText = `
        font-size: 18px;
        font-weight: bold;
        color: #d32f2f;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    `;
    header.innerHTML = `
        <span style="font-size: 24px; margin-right: 8px;">⚠️</span>
        Fields Need Manual Filling
    `;

    // Create page name
    const pageInfo = document.createElement('div');
    pageInfo.style.cssText = `
        font-size: 14px;
        color: #666;
        margin-bottom: 15px;
        font-weight: bold;
    `;
    pageInfo.textContent = `Page: ${pageName}`;

    // Create instruction
    const instruction = document.createElement('div');
    instruction.style.cssText = `
        font-size: 13px;
        color: #333;
        margin-bottom: 15px;
        padding: 10px;
        background: #fff;
        border-radius: 4px;
        border-left: 4px solid #ff9800;
    `;
    instruction.textContent = 'The following fields could not be filled automatically. Please fill them manually before proceeding.';

    // Create list
    const list = document.createElement('ul');
    list.style.cssText = `
        margin: 0;
        padding-left: 20px;
        max-height: 300px;
        overflow-y: auto;
    `;

    failedFields.forEach(function (field) {
        const item = document.createElement('li');
        item.style.cssText = `
            margin-bottom: 8px;
            color: #333;
            font-size: 13px;
        `;

        const fieldLabel = document.createElement('strong');
        fieldLabel.textContent = field.fieldName.replace(/_/g, ' ');
        fieldLabel.style.color = '#d32f2f';

        const fieldValue = document.createElement('div');
        fieldValue.style.cssText = `
            font-size: 11px;
            color: #666;
            margin-top: 2px;
            font-family: monospace;
        `;
        fieldValue.textContent = `Value: ${field.value}`;

        item.appendChild(fieldLabel);
        item.appendChild(fieldValue);
        list.appendChild(item);
    });

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ Close';
    closeBtn.style.cssText = `
        margin-top: 15px;
        padding: 8px 16px;
        background: #d32f2f;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
        width: 100%;
        font-weight: bold;
    `;
    closeBtn.onmouseover = function () { this.style.background = '#b71c1c'; };
    closeBtn.onmouseout = function () { this.style.background = '#d32f2f'; };
    closeBtn.onclick = function () { checklist.remove(); };

    // Assemble checklist
    checklist.appendChild(header);
    checklist.appendChild(pageInfo);
    checklist.appendChild(instruction);
    checklist.appendChild(list);
    checklist.appendChild(closeBtn);

    // Add to page
    document.body.appendChild(checklist);
}

// ULTIMATE FILLER: Strict Sequence + Dynamic Waiting
function fillPageWithData(data, fieldMap, rowIndex) {
    if (rowIndex === undefined) rowIndex = 0;

    const delay = function (ms) {
        return new Promise(function (res) { setTimeout(res, ms); });
    };

    // Keep your specific observer logic
    const waitForPageUpdate = function () {
        return new Promise(function (resolve) {
            let updateDetected = false;
            const observer = new MutationObserver(function (mutations) {
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
            setTimeout(function () {
                observer.disconnect();
                resolve(updateDetected);
            }, 5000);
        });
    };

    const setFieldValue = function (selector, value, fieldKey) {
        // SAFETY CHECK: If selector is undefined, stop.
        if (!selector) {
            console.warn('[Fill] ⚠️ Selector is missing for key: ' + fieldKey);
            return false;
        }
        // STRATEGY A: ALL
        if (selector.indexOf("ALL:") === 0) {
            const cleanSelector = selector.replace("ALL:", "");
            const allElements = document.querySelectorAll(cleanSelector);
            if (allElements.length === 0) {
                console.warn('[Fill] No elements found for ALL: ' + cleanSelector);
                return false;
            }
            console.log('[Fill] BLASTING ' + allElements.length + ' elements with value: ' + value);
            for (let i = 0; i < allElements.length; i++) {
                const el = allElements[i];
                if (!el.disabled && !el.readOnly) {
                    el.value = value;
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
            return true;
        }

        // STRATEGY B: STANDARD FILLER
        let el = document.getElementById(selector);

        // Fallback IDs
        if (!el && selector.indexOf('MainContent_') === -1 && selector.indexOf('#') === -1) {
            el = document.getElementById('MainContent_' + selector);
        }
        if (!el) {
            let finalSelector = selector;
            if (selector.indexOf('#') === -1 && selector.indexOf('[') === -1) {
                finalSelector = '#' + selector;
            }
            try { el = document.querySelector(finalSelector); } catch (e) { }
        }

        if (!el) {
            console.warn('Field not found: ' + selector);
            return false;
        }

        // --- CONDITION HANDLER: Skip if disabled ---
        if (el.disabled || el.readOnly) {
            console.log('[Fill] Skipping Disabled Field: ' + selector);
            return true;
        }

        console.log('Setting ' + el.id + ' to: ' + value);

        el.focus();
        el.value = value;

        // Your specific event sequence
        el.dispatchEvent(new Event('focus', { bubbles: true }));
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));

        if (el.tagName === 'SELECT') {
            el.dispatchEvent(new Event('mousedown', { bubbles: true }));
            el.dispatchEvent(new Event('mouseup', { bubbles: true }));
            el.dispatchEvent(new Event('click', { bubbles: true }));
            if (el.onchange) el.onchange();
        }

        if (typeof __doPostBack !== 'undefined') {
            try {
                const eventTarget = el.id || selector;
                __doPostBack(eventTarget, '');
            } catch (e) { }
        }

        return true;
    };

    // NEW: Efficient Observer-based waiter (Works fast in background)
    const waitForEnabled = function (element) {
        if (!element.disabled) return Promise.resolve(true);
        console.log(`[Observer] Waiting for ${element.id} to enable...`);
        return new Promise(function (resolve) {
            // Failsafe timeout in case it never enables (5s)
            const timeout = setTimeout(() => {
                observer.disconnect();
                console.warn(`[Observer] Timeout waiting for ${element.id}`);
                resolve(false);
            }, 5000);

            const observer = new MutationObserver(function () {
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

    return new Promise(function (resolve) {
        (async function () {
            // 1. GET KEYS IN STRICT ORDER
            let keys = fieldMap.__fieldOrder || Object.keys(fieldMap);
            keys = keys.filter(function (k) { return k !== '__fieldOrder'; });

            let count = 0;
            let failedFields = [];

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const sel = fieldMap[key];

                // 🛑 SAFETY FIX: Skip if selector is missing (Fixes mismatch between Order and Fields)
                if (!sel) {
                    console.warn('⚠️ Field "' + key + '" is in fieldOrder but NOT in fields map. Skipping.');
                    continue;
                }

                const jsonValue = data[key];

                if (jsonValue === undefined || jsonValue === null || jsonValue === "") {
                    continue;
                }

                console.log(`[Sequence ${i + 1}/${keys.length}] Processing: ${key}`);

                // 2. SET VALUE
                const success = setFieldValue(sel, jsonValue, key);

                // Track failed fields
                if (!success) {
                    failedFields.push({
                        fieldName: key,
                        selector: sel,
                        value: jsonValue
                    });
                }

                // 3. HANDLE DELAYS & DEPENDENCIES
                if (success) {
                    // Reduce arbitrary delays to minimum needed for DOM updates

                    if (sel.indexOf("ddlKod") !== -1 || key === "Business_Activity_Code") {
                        console.log("🔄 Activity Code detected. Waiting for AJAX update...");
                        const updated = await waitForPageUpdate(); // This uses MutationObserver already

                        // Small buffer for potential rendering
                        await delay(200);

                        // NEW: Wait for dependent field efficiently
                        const dependentId = 'MainContent_RptSubs_ddlTeras_' + rowIndex;
                        const teras = document.getElementById(dependentId);

                        if (teras) {
                            await waitForEnabled(teras);
                        } else {
                            // If element not found yet (rare), fall back to short wait
                            await delay(1000);
                        }
                    }
                    else if (sel.indexOf("ddlTeras") !== -1 || sel.indexOf("ddlStatus") !== -1 || sel.indexOf("ddlSub") !== -1) {
                        // These often trigger small postbacks, wait for re-enable if disabled
                        // or just a small buffer if we can't identify exact target
                        await delay(500);
                    }
                    else {
                        // Standard field: no delay needed
                        // await delay(50);
                    }
                    count++;
                }
            }
            resolve({ success: true, filled: count, failed: failedFields });
        })();
    });
}

function clickElement(selector) {
    const el = document.querySelector(selector);
    if (!el) {
        console.error('[Page] Button not found: ' + selector);
        return { error: 'Button ' + selector + ' not found.' };
    }
    console.log('[Page] Found ' + selector + '. Clicking...');
    el.click();
    return { success: true };
}

function triggerAspSave(tabId, selector) {
    return new Promise(function (resolve, reject) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            world: 'MAIN',
            func: function (sel) {
                const el = document.querySelector(sel);
                if (!el) {
                    console.error('[Main World] Save button not found: ' + sel);
                    return { error: 'Save button not found' };
                }
                console.log('[Main World] Found button. Clicking...');
                el.click();
                return { success: true };
            },
            args: [selector],
        }, function (res) {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError.message));
            } else {
                resolve(res);
            }
        });
    });
}

function checkForValidationErrors() {
    // 1. Common ASP.NET Validation Summary
    const summary = document.querySelector('.validation-summary-errors');
    if (summary && summary.innerText && summary.innerText.trim()) return summary.innerText.trim();

    // 2. Specific Label Errors (Red text) - This catches most ASP.NET validators and custom messages
    // We look for spans/labels/divs with inline red color or specific error classes
    const candidates = document.querySelectorAll(
        'span[style*="color:Red"], span[style*="color: red"], ' +
        'label[style*="color:Red"], label[style*="color: red"], ' +
        'div[style*="color:Red"], div[style*="color: red"], ' +
        '.text-danger, .error-message, .validation-error'
    );

    for (let i = 0; i < candidates.length; i++) {
        const el = candidates[i];
        // Check if visible
        if (el.offsetParent !== null) {
            const text = el.innerText.trim();
            // Filter out empty or common non-error labels (like '*') if necessary
            if (text.length > 3 && text !== '*') {
                return text;
            }
        }
    }

    return null;
}

function checkInputPersistence(data, fieldMap) {
    let mismatches = [];
    let keys = Object.keys(fieldMap);

    // Filter out internal keys
    keys = keys.filter(k => k !== '__fieldOrder');

    for (let key of keys) {
        const selector = fieldMap[key];
        const expectedValue = data[key];

        // Skip if expected value is empty/null (we didn't fill it)
        if (expectedValue === undefined || expectedValue === null || expectedValue === "") continue;

        let el = document.getElementById(selector);
        // Fallback selector logic (same as setFieldValue)
        if (!el && selector.indexOf('MainContent_') === -1 && selector.indexOf('#') === -1) {
            el = document.getElementById('MainContent_' + selector);
        }
        if (!el) {
            let finalSelector = selector;
            if (selector.indexOf('#') === -1 && selector.indexOf('[') === -1) {
                finalSelector = '#' + selector;
            }
            try { el = document.querySelector(finalSelector); } catch (e) { }
        }

        if (el) {
            const actualValue = el.value;
            // Simple comparison - Check if values are radically different
            // e.g. Expected "123", Actual "" (Cleared by server = Error)
            // e.g. Expected "ABC", Actual "ABC" (OK)

            // Normalize: trim strings
            const normExpected = String(expectedValue).trim();
            const normActual = String(actualValue).trim();

            if (normActual !== normExpected) {
                // Ignore subtle formatting differences if possible, but for now strict check
                // If actual is EMPTY but expected was NOT -> Definite error
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