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
        waitForElement: '#MainContent_btnHKO',
        nextButtonSelector: '#MainContent_btnHKO',
        fields: {}
    },

    MakOfc: {
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
        waitForElement: '#MainContent_btnHKP',
        nextButtonSelector: '#MainContent_btnHKP',
        fields: {}
    },

    MakSya_Pemunya: {
        waitForElement:'#MainContent_btnPemunya',
         nextButtonSelector: '#MainContent_btnPemunya',
        fields: {}
    },

    MakPemunya:{
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
        waitForElement:'#MainContent_btnTuntutanIn',
        nextButtonSelector: '#MainContent_btnTuntutanIn',
        fields: {}
    },
    
    Tuntutan:{
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
            "F7a_Ultimate_Holding_Entity_Name": "MainContent_txtG5b_NamaMuktamad",
            "F7b_Country_of_Residence_UHE": "ddlNegMastautin"
        }
    },


    MakSya_Final: {
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
        // "Auditor_City",
        "Auditor_Email",
        "Auditor_Telephone_no",
        "Auditor_TIN"
    ],
    fields: {
        // ✅ FIXED: Registered Address (NOW WORKING)
        "D3_Has_Financial_Account_Outside_Malaysia": "MainContent_ddlIntKew",
        "D4_Subject_to_AEOI":"MainContent_ddlPerLabuan",
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
        // "Auditor_City": "txtS2_Bandar",
        "Auditor_Email": "txtS5",
        "Auditor_Telephone_no": "MainContent_txtS3",
        "Auditor_TIN": "MainContent_txtS4"
    }
},

    // 3. Tax Agent (The Disabled Field Page)
    MakTaxAgent: {
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
    MakSubstantif: {
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


    Cukai: {
        nextButtonSelector: '#MainContent_btnSave',
        fields: {
            "B5_Zakat_Paid": "MainContent_txtRebat"
        }
    },
}

const pageSequence = [
    'MakAsas_Trigger','MakAsas_Fill',
    'MakSya_Top','MakOfc',
    'MakSya_Syer','MakSyer',
    'MakSya_Pemunya','MakPemunya',
    'MakSya_Kewangan','Kewangan',
    'MakSya_Fin',
    'MakSya_Subsid_Fill','MakSya_Subsid_Click','MakSubsid',
    'MakSya_Payment_Fill','MakSya_Payment_Click','MakPayment',
    'MakSya_Tuntutan','Tuntutan',
    'MakLain_Fill', 'MakLain_Click',
    'MakLain_Reporting',
    'MakLain_NonReporting_Part1',
    'MakLain_NonReporting_Part2', 
    'MakSya_Final', 'MakTaxAgent',
    'MakSubstantif',
    'Cukai'
];


// =================================================================
// PART 2: MAIN LOGIC
// =================================================================
document.addEventListener('DOMContentLoaded', function() {
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
        const jsonStr = jsonInput ? jsonInput.value : "";
        if (!jsonStr) return updateStatus("Error: Paste JSON first.", "red");

        let formData;
        try { 
            formData = JSON.parse(jsonStr); 
        } catch (e) { 
            return updateStatus("Error: Invalid JSON.", "red"); 
        }

        // --- DATA TRANSFORMATION ---
        formData.Generated_Incentive_List = [];
        const addIncentiveRow = (code, amount) => {
            if (code && String(code).trim() !== "") {
                formData.Generated_Incentive_List.push({
                    "Incentive_Code": code,
                    "Amount_Claimed": amount
                });
            }
        };
        addIncentiveRow(formData.C12_Row1_Incentive_Code, formData.C12_Row1_Amount_Claimed);
        addIncentiveRow(formData.C12_Row2_Incentive_Code, formData.C12_Row2_Amount_Claimed);
        addIncentiveRow(formData.C12_Row3_Incentive_Code, formData.C12_Row3_Amount_Claimed);
        // ---------------------------

        updateStatus("Starting...", "blue");
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        const tab = tabs[0];

        for (let i = 0; i < pageSequence.length; i++) {
            const pageName = pageSequence[i];
            const mapping = pageMappings[pageName];

            if (mapping.shouldSkip && mapping.shouldSkip(formData)) {
                updateStatus('[' + pageName + '] Skipping (Condition met).');
                continue; 
            }

            if (i > 0) {
                updateStatus('Waiting 3s for ' + pageName + '...');
                await sleep(3000);
            }

            try {
                if (mapping.waitForElement) {
                    await injectScriptWithRetry(tab.id, waitForElementOnPage, [mapping.waitForElement, 15000]);
                }

                // === REPEATER LOGIC ===
                if (mapping.repeaterKey) {
                    const items = formData[mapping.repeaterKey] || [];
                    
                    if (items.length > 0 && mapping.saveButtonSelector) {
                        updateStatus('[' + pageName + '] Found ' + items.length + ' items. Starting Loop...');
                        
                        for (let j = 0; j < items.length; j++) {
                            updateStatus('[' + pageName + '] Processing Item ' + (j + 1) + '/' + items.length + '...');
                            
                            // ✅ CHANGED: Use fieldOrder if available, otherwise Object.keys
                            const dynamicFields = {};
                            const fieldKeys = mapping.fieldOrder || Object.keys(mapping.fields);
                            
                            for (let k = 0; k < fieldKeys.length; k++) {
                                const key = fieldKeys[k];
                                const val = mapping.fields[key];
                                
                                if (val.indexOf("ALL:") === 0) {
                                    dynamicFields[key] = val;
                                } 
                                else if (val.indexOf('_0') !== -1) {
                                    dynamicFields[key] = val.replace(/_0(?=$|[^0-9])/, '_' + j);
                                } 
                                else {
                                    dynamicFields[key] = val;
                                }
                            }

                            // ✅ ADDED: Pass the field order to the filler
                            dynamicFields.__fieldOrder = fieldKeys;

                            // 2. CALCULATE SAVE BUTTON ID (Strict: ctl00 -> ctl01)
                            const idxStr = j < 10 ? '0' + j : '' + j;
                            let dynamicSaveBtn = mapping.saveButtonSelector;
                            
                            if (dynamicSaveBtn.indexOf("ctl00_link") !== -1) {
                                dynamicSaveBtn = dynamicSaveBtn.replace("ctl00_link", 'ctl' + idxStr + '_link');
                            }
                            else {
                                const lastIndex = dynamicSaveBtn.lastIndexOf("ctl00");
                                if (lastIndex > 0) {
                                    dynamicSaveBtn = dynamicSaveBtn.substring(0, lastIndex) + 
                                                     'ctl' + idxStr + 
                                                     dynamicSaveBtn.substring(lastIndex + 5);
                                }
                            }

                            // A. Fill Form
                            await injectScriptWithRetry(tab.id, fillPageWithData, [items[j], dynamicFields, j]);
                            await sleep(500);
                            
                            // B. Save (Exact ID Mode)
                            updateStatus('[' + pageName + '] Saving Item ' + (j+1) + '...');
                            await triggerAspSave(tab.id, dynamicSaveBtn, 0); // Pass 0 because ID is exact
                            
                            // C. Wait for Reload
                            updateStatus('[' + pageName + '] Waiting for server response...');
                            await sleep(5000); 
                        }
                    } else if (items.length > 0) {
                        await injectScriptWithRetry(tab.id, fillPageWithData, [items[0], mapping.fields, 0]);
                    }
                } 
                // === NORMAL PAGE LOGIC ===

                else {
                    if (Object.keys(mapping.fields).length > 0) {
                        const normalFields = mapping.fields;
                        
                        // ✅ ADD: Pass fieldOrder for non-repeater pages too
                        if (mapping.fieldOrder) {
                            normalFields.__fieldOrder = mapping.fieldOrder;
                        }
                        
                        await injectScriptWithRetry(tab.id, fillPageWithData, [formData, normalFields, 0]);
                    }
                }

                if (mapping.nextButtonSelector) {
                    updateStatus('[' + pageName + '] Clicking Button...');
                    await injectScriptWithRetry(tab.id, clickElement, [mapping.nextButtonSelector]);
                } else {
                    updateStatus('[' + pageName + '] No button to click. Moving to next step...');
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
                await new Promise(function(r) { setTimeout(r, 2000); });
            } else { 
                throw err; 
            }
        }
    }
}

function injectScript(tabId, func, args) {
    if (!args) args = [];
    return new Promise(function(resolve, reject) {
        chrome.scripting.executeScript({ target: { tabId: tabId }, func: func, args: args }, function(res) {
            if (chrome.runtime.lastError) return reject(new Error(chrome.runtime.lastError.message));
            if (res && res[0] && res[0].result && res[0].result.error) return reject(new Error(res[0].result.error));
            resolve();
        });
    });
}

// =================================================================
// PART 4: BROWSER CONTEXT FUNCTIONS (UPDATED)
// =================================================================

// ✅ REPLACED: fillPageWithData (Strictly Sequential)
function fillPageWithData(data, fieldMap, rowIndex) {
    if (rowIndex === undefined) rowIndex = 0;
    
    const delay = function(ms) { 
        return new Promise(function(res) { setTimeout(res, ms); }); 
    };

    const waitForPageUpdate = function() {
        return new Promise(function(resolve) {
            let updateDetected = false;
            const observer = new MutationObserver(function(mutations) {
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
            setTimeout(function() {
                observer.disconnect();
                resolve(updateDetected);
            }, 5000);
        });
    };

    const setFieldValue = function(selector, value, fieldKey) {
        // SAFETY CHECK: If selector is undefined, stop.
        if (!selector) {
            console.warn('[Fill] ⚠️ Selector is missing for key: ' + fieldKey);
            return false;
        }

        // STRATEGY A: ALL
        if (selector.indexOf("ALL:") === 0) {
            const cleanSelector = selector.replace("ALL:", "");
            const allElements = document.querySelectorAll(cleanSelector);
            if (allElements.length === 0) return false;
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
        if (!el && selector.indexOf('MainContent_') === -1 && selector.indexOf('#') === -1) {
            el = document.getElementById('MainContent_' + selector);
        }
        if (!el) {
            let finalSelector = selector;
            if (selector.indexOf('#') === -1 && selector.indexOf('[') === -1) {
                finalSelector = '#' + selector;
            }
            try { el = document.querySelector(finalSelector); } catch(e) {}
        }
        
        if (!el) {
            console.warn('[Fill] Field not found: ' + selector);
            return false;
        }

        if (el.disabled || el.readOnly) {
            console.log('[Fill] Skipping Disabled Field: ' + selector);
            return true; 
        }

        console.log('[Fill] Setting ' + el.id + ' to: ' + value);
        
        el.focus();
        el.value = value;
        
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
            } catch(e) {}
        }
        
        return true;
    };

    return new Promise(function(resolve) {
        (async function() {
            const keys = fieldMap.__fieldOrder || Object.keys(fieldMap);
            let count = 0;
            
            console.log('📋 Processing fields in order:', keys);
            
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                
                // 🛑 SAFETY FIX: Skip if key is empty/undefined (Fixes the comma issue)
                if (!key || key === '__fieldOrder') continue;
                
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

                const success = setFieldValue(sel, jsonValue, key);
                
                if (success) {
                    // === SPECIAL DELAY LOGIC ===
                    if (sel.indexOf("ddlKod") !== -1 || key === "Business_Activity_Code") {
                        console.log("🔄 Activity Code detected. Waiting for AJAX update...");
                        const updated = await waitForPageUpdate();
                        
                        if (updated) {
                            console.log("✅ Page updated! Waiting 2s...");
                            await delay(2000);
                        } else {
                            console.log("⚠️ No update detected, waiting 5s...");
                            await delay(5000);
                        }
                        
                        let retries = 0;
                        while (retries < 20) {
                            const dependentId = 'MainContent_RptSubs_ddlTeras_' + rowIndex;
                            const teras = document.getElementById(dependentId);
                            if (teras && !teras.disabled) {
                                console.log("✅ Dependent fields enabled!");
                                break;
                            }
                            await delay(250);
                            retries++;
                        }
                    } 
                    else if (sel.indexOf("ddlTeras") !== -1 || sel.indexOf("ddlStatus") !== -1 || sel.indexOf("ddlSub") !== -1) {
                        console.log("⏳ Dependent field filled. Waiting 3s...");
                        await delay(3000);
                    }
                    else {
                        // await delay(700); 
                    }
                    count++;
                }
            }
            resolve({ success: true, filled: count });
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
    return new Promise(function(resolve, reject) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            world: 'MAIN',
            func: function(sel) {
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
        }, function(res) {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError.message));
            } else {
                resolve(res);
            }
        });
    });
}

function waitForElementOnPage(selector, timeout) {
    return new Promise(function(resolve) {
        let finalSelector = selector;
        if (selector.indexOf('ALL:') !== -1) finalSelector = selector.replace('ALL:', '');
        
        if (finalSelector.indexOf('#') === -1 && finalSelector.indexOf('[') === -1) {
            finalSelector = '#' + finalSelector;
        }

        if (document.querySelector(finalSelector)) return resolve(true);
        const int = setInterval(function() {
            if (document.querySelector(finalSelector)) { 
                clearInterval(int); 
                resolve(true); 
            }
        }, 500);
        setTimeout(function() { 
            clearInterval(int); 
            resolve({ error: 'Timeout: ' + finalSelector }); 
        }, timeout);
    });
}

function triggerAspSave(tabId, selector) {
    return new Promise(function(resolve, reject) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            world: 'MAIN',
            func: function(sel) {
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
        }, function(res) {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError.message));
            } else {
                resolve(res);
            }
        });
    });
}
