// popup.js - Single-file, robust version

// PART 1: CONFIGURATION (formerly fieldMappings.js)
// =================================================================
const pageMappings = {
    MakAsas: {
        waitForElement: '#MainContent_ddlPenyata',
        nextButtonSelector: '#MainContent_btnNext',
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
    Perniagaan: {
        waitForElement: '#MainContent_txtKodAktiviti_1',
        nextButtonSelector: '#MainContent_btnNext',
        fields: {
            "B1_Row1_Business_Activity_Code": "MainContent_txtKodAktiviti_1",
            "B1_Row1_Core_Income_Activity_Yes": "MainContent_ddlCIGA_1",
            "B1_Row1_Business_Activity_Status_Active": "MainContent_ddlStatus_1",
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

    startButton.addEventListener('click', runFullAutomation);

    function updateStatus(message, color = "black") {
        statusDiv.textContent = message;
        statusDiv.style.color = color;
        console.log(`[Popup Status] ${message}`);
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

        updateStatus("Starting automation...", "blue");
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

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
                updateStatus(`FATAL ERROR on page '${pageName}': ${error.message}`, "red");
                return;
            }
        }
        updateStatus("Automation completed successfully!", "green");
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