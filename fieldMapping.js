// fieldMappings.js

// This object holds all the information for each page you want to automate.
// You will need to add mappings for Page 2, Page 3, etc.
export const pageMappings = {
    // ---- PAGE 1: Maklumat Asas (Basic Information) ----
    MakAsas: {
        // A unique selector to confirm we are on the correct page before filling.
        waitForElement: '#MainContent_ddlPenyata',
        // The CSS selector for the 'Next' button on this page.
        nextButtonSelector: '#MainContent_btnNext',
        // The mapping of your JSON keys to the HTML element IDs for this page.
        fields: {
            "FS_in_Foreign_Currency_Yes": "MainContent_ddlPenyata",
            "Change_of_Accounting_Period_No": "MainContent_ddlTkrTempoh",
            "Types_of_exchange_of_accounting_periods": "MainContent_ddlJnsTempoh",
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
        }
    },

    // ---- PAGE 2: Maklumat Perniagaan (Business Information) ----
    Perniagaan: {
        // **ACTION REQUIRED**: Find a unique element ID on the second page.
        // Right-click an input field on Page 2 and "Inspect" to find its ID.
        waitForElement: '#MainContent_txtKodAktiviti_1',
        // **ACTION REQUIRED**: Find the 'Next' button's ID on Page 2.
        nextButtonSelector: '#MainContent_btnNext', 
        // **ACTION REQUIRED**: Add your JSON key-to-ID mappings for Page 2 here.
        fields: {
            "B1_Row1_Business_Activity_Code": "MainContent_txtKodAktiviti_1",
            "B1_Row1_Core_Income_Activity_Yes": "MainContent_ddlCIGA_1",
            "B1_Row1_Business_Activity_Status_Active": "MainContent_ddlStatus_1",
            "B1_Row1_No_of_Employees": "MainContent_txtBilPekerjaFT_1",
            "B1_Row1_Annual_Operating_Expenditure": "MainContent_txtAOE_1",
            // ... add all other fields for Page 2 ...
        }
    },

    // ---- PAGE 3: Maklumat Kewangan (Financial Information) ----
    Kewangan: {
        waitForElement: '#MainContent_txtJualan', // Example ID
        nextButtonSelector: '#MainContent_btnNext',
        fields: {
            "Pnl_Sales_Turnover": "MainContent_txtJualan",
            "Pnl_Gross_Profit_Loss": "MainContent_txtKeuntunganKasar",
            // ... etc ...
        }
    }
    // Add more page objects as needed...
};