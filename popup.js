// =================================================================
// PART 1: CONFIGURATION (DATA & MAPPINGS)
// =================================================================

    const pageMappings = {
   // --- PAGE 1: SPLIT INTO TWO STEPS ---

    // STEP 1A: Fill the dropdowns that cause a Page Reload (PostBack)
    MakAsas_Trigger: {
        waitForElement: '#MainContent_ddlPenyata', 
        nextButtonSelector: null, // Don't click Next yet!
        
        // Remove the comma at the start of fieldOrder if you had one!
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
    MakAsas_Fill: {
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

    MakSya_Top: {
         shouldSkip: (data) => !data.c3Rows || data.c3Rows.length === 0,
        waitForElement: '#MainContent_btnHKO',
        nextButtonSelector: '#MainContent_btnHKO',
        fields: {}
    },

    MakOfc: {
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

    MakSyer: {        
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

    MakSya_Syer: {
        shouldSkip: (data) => !data.c4Rows || data.c4Rows.length === 0,
        waitForElement: '#MainContent_btnHKP',
        nextButtonSelector: '#MainContent_btnHKP',
        fields: {}
    },

    MakSya_Pemunya: {
        shouldSkip: (data) => !data.c5Rows || data.c5Rows.length === 0,
        waitForElement:'#MainContent_btnPemunya',
         nextButtonSelector: '#MainContent_btnPemunya',
        fields: {}
    },

    MakPemunya:{
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

    MakSya_Kewangan: {
        waitForElement:'#MainContent_btnMakKewangan',
         nextButtonSelector: '#MainContent_btnMakKewangan',
        fields: {}
    },

    Kewangan: {
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

     MakSya_Fin: {
        waitForElement:'#MainContent_ddlSyktKaitan',
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

     MakSya_Subsid_Fill: {
        nextButtonSelector: null,
        fieldOrder: ["C10_Has_Subsidiary_Outside_Labuan"],
        fields: {
            "C10_Has_Subsidiary_Outside_Labuan": 'MainContent_ddlSyktSubsidiari'
        }
    },

     MakSya_Subsid_Click: {
        shouldSkip: (data) => data.C10_Has_Subsidiary_Outside_Labuan !== '1',
        nextButtonSelector: '#btnSyktSubsidiari',
        fields: {}
    },

     MakSubsid: {
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

    MakSya_Payment_Fill: {
        nextButtonSelector: null,
        fieldOrder: ["C11_Received_Payments_from_Malaysian_Resident"],
        fields: {
            "C11_Received_Payments_from_Malaysian_Resident": 'MainContent_ddlTerimaMastautin'
        }
    },

    MakSya_Payment_Click: {
        shouldSkip: (data) => data.C11_Received_Payments_from_Malaysian_Resident !== '1',
        nextButtonSelector: '#bntTerimaMastautin',
        fields: {}
    },

    MakPayment: {
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

    MakSya_Tuntutan: {
        shouldSkip: (data) => !data.Generated_Incentive_List || data.Generated_Incentive_List.length === 0,
        waitForElement:'#MainContent_btnTuntutanIn',
        nextButtonSelector: '#MainContent_btnTuntutanIn',
        fields: {}
    },
    
    Tuntutan:{
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

    MakLain_Fill: {
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

    MakLain_Click: {
        shouldSkip: (data) => data.D1_Subject_to_CbCR !== '1',
        waitForElement: '#MainContent_ddlRcbcrb',
        nextButtonSelector: '#MainContent_btnEntiti', 
        fields: {}
    },

   MakLain_Reporting: {
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

    MakLain_NonReporting: {
        shouldSkip: (data) => data.D1_Subject_as !== '2',
        waitForElement: '#MainContent_txtG5b_NamaMNE', 
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "F1_Reporting_Entity_Name",
            "F2_TIN",
            "F3_Country_of_Residence",
            "F4_Accounting_Period_From",
            "F4_Accounting_Period_To",
            "F5_MNE_Group_Name",
            "F6_Status_of_Reporting_Entity",
            "F7a_Ultimate_Holding_Entity_Name",
            "F7b_Country_of_Residence_UHE"
        ],
        fields: {
            "F1_Reporting_Entity_Name": "MainContent_txtG5b_NamaMNE",
            "F2_TIN": "txtG5b_NoCukaiPelapor",
            "F3_Country_of_Residence": "ddlNegPelapor",
            "F4_Accounting_Period_From": "MainContent_txtG5b_Tempoh_Akaun_Mula",
            "F4_Accounting_Period_To": "MainContent_txtG5b_Tempoh_Akaun_Tutup",
            "F5_MNE_Group_Name": "MainContent_txtNamaPelapor",
            "F6_Status_of_Reporting_Entity": "MainContent_ddlStatus",
            "F7a_Ultimate_Holding_Entity_Name":"MainContent_txtG5b_NamaMuktamad",
            "F7b_Country_of_Residence_UHE": "ddlNegMastautin"
        }
    },

    MakLain_NonReporting_Part1: {
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

    MakLain_NonReporting_Part2: {
        shouldSkip: (data) => data.D1_Subject_as !== '2',
        waitForElement: '#MainContent_txtG5b_NamaMuktamad', 
        nextButtonSelector: '#MainContent_btnNext',
        fieldOrder: [
            "F7a_Ultimate_Holding_Entity_Name",
            "F7b_Country_of_Residence_UHE"
        ],
        fields: {
            "C1_Registered_Address_line1": "MainContent_txtDaftar_Alamat1",
            "C1_Registered_Address_line2": "MainContent_txtDaftar_Alamat2",
            "Telephone_no": "txtNotel",
            "Email": "txtEmelDaftar"
            // ... etc.
        }
    },
    // Add more page objects here...
};

// The sequence of pages to process.
const pageSequence = ['MakAsas', 'Perniagaan'];


// PART 2: POPUP LOGIC AND ORCHESTRATOR
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    const statusDiv = document.getElementById('msg');
    const jsonInput = document.getElementById('jsonData');
    const startButton = document.getElementById('startBtn');

    if(startButton) startButton.addEventListener('click', runFullAutomation);

    function updateStatus(message, color) {
        if (!color) color = "black";
        if(statusDiv) {
            statusDiv.textContent = message;
            statusDiv.style.color = color;
        }
        console.log('[Extension Log] ' + message);
    }

    function sleep(ms) { 
        return new Promise(function(r) { setTimeout(r, ms); }); 
    }

    async function runFullAutomation() {
        const jsonStr = jsonInput.value;
        if (!jsonStr) {
            updateStatus("Error: Please paste JSON data first.", "red");
            return;
        }
        let formData;
        try {
            formData = JSON.parse(jsonStr);
        } catch (e) {
            updateStatus("Error: Invalid JSON format.", "red");
            return;
        }

        updateStatus("Starting...", "blue");
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];

        for (let i = 0; i < pageSequence.length; i++) {
            const pageName = pageSequence[i];
            const mapping = pageMappings[pageName];

            try {
                updateStatus(`[${i + 1}] Waiting for page: ${pageName}...`);
                await injectScript(tab.id, waitForElementOnPage, [mapping.waitForElement, 15000]);

                updateStatus(`[${i + 1}] Filling page: ${pageName}...`);
                await injectScript(tab.id, fillPageWithData, [formData, mapping.fields]);
                
                if (i < pageSequence.length - 1) {
                    updateStatus(`[${i + 1}] Clicking 'Next'...`);
                    await injectScript(tab.id, clickElement, [mapping.nextButtonSelector]);
                }
            } catch (error) {
                updateStatus('FATAL ERROR: ' + error.message, "red");
                console.error(error);
                return;
            }
        }
        updateStatus("Automation Done!", "green");
    }
});

function injectScript(tabId, func, args = []) {
    return new Promise((resolve, reject) => {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: func,
            args: args,
        }, (injectionResults) => {
            if (chrome.runtime.lastError) {
                return reject(new Error(chrome.runtime.lastError.message));
            }
            // Check the result of the injected script
            if (injectionResults && injectionResults[0] && injectionResults[0].result) {
                const result = injectionResults[0].result;
                if (result.error) {
                    return reject(new Error(result.error));
                }
            }
            resolve();
        });
    });
}


// PART 3: INJECTABLE FUNCTIONS (These run inside the LHDN page)
// =================================================================

function waitForElementOnPage(selector, timeout) {
    console.log(`[LHDN Page] Waiting for element: ${selector}`);
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                clearTimeout(timer);
                console.log(`[LHDN Page] Found element: ${selector}`);
                resolve(true);
            }
        }, 500);

        const timer = setTimeout(() => {
            clearInterval(interval);
            console.error(`[LHDN Page] TIMEOUT: Element '${selector}' not found.`);
            // IMPORTANT: We don't reject here. We resolve with an error object.
            // This is because the result needs to be JSON-serializable to pass back.
            resolve({ error: `Element '${selector}' did not appear within ${timeout / 1000}s.` });
        }, timeout);
    });
}

function clickElement(selector) {
    console.log(`[LHDN Page] Attempting to click: ${selector}`);
    const element = document.querySelector(selector);
    if (element) {
        element.click();
        return { success: true };
    } else {
        return { error: `Button with selector '${selector}' not found.` };
    }
}

function fillPageWithData(data, fieldMap) {
    console.log(`[LHDN Page] Starting to fill ${Object.keys(fieldMap).length} fields...`);
    const setFieldValue = (domId, value) => {
        const el = document.getElementById(domId);
        if (!el) {
             console.warn(`[LHDN Page] Element with ID '${domId}' not found. Skipping.`);
             return;
        }
        el.value = value;
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));
    };

    for (const [jsonKey, domId] of Object.entries(fieldMap)) {
        const value = data[jsonKey];
        if (value !== null && value !== undefined && value !== "") {
             setFieldValue(domId, value);
        }
    }
    return { success: true };
}