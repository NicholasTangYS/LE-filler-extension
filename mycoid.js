// =================================================================================
// PART 1: SITE CONFIGURATION (SSM SPECIFIC)
// =================================================================================

const SSM_MAPPINGS = {
    Incorp_Form: {
        waitForElement: '#ctl00_ContentPlaceHolder1_FormEngine1_mf_27597abd-dd68-43f3-8ad8-dcf734a83204',
        nextButtonSelector: null,
        fieldOrder: [
            "Proposed_Company_Name", "Lodging_Reference_No", "Single_Letters_Meaning", "Business_Description",
            "Address_1", "Email", "Office_Number", "Same_As_Above"
        ],
        fields: {
            "Proposed_Company_Name": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_27597abd-dd68-43f3-8ad8-dcf734a83204",
            "Lodging_Reference_No": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_bdf9c1e7-3251-4e71-ba04-d681d6e41c74",
            "Single_Letters_Meaning": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_f14088e5-389c-453e-bef5-3e97d113f41a",
            "Business_Description": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_773f3780-7707-464a-a1f9-989d74f82ec6",
            "Address_1": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_16e89a05-304d-4de7-832b-7ebab4229f9d",
            "Email": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_dd2f6f65-1175-479c-b091-27721b1c5b7b",
            "Office_Number": "#ctl00_ContentPlaceHolder1_FormEngine1_mf_90e413c2-f9a9-4bef-8083-b596f5c3cf20",
            "Same_As_Above": "#ctl00_ContentPlaceHolder1_FormEngine1_clb19ad51c-6533-4ef1-b9da-f662bdcf22b1_1"
        }
    }
};

const SITE_CONFIG = {
    dataPreProcessor: (formData) => formData,
    fieldRules: {
        ajaxTriggers: [
            {
                selectorContains: 'rbf9d737d1', // User Type radio
                waitForAjax: true,
                postDelay: 500
            },
            {
                selectorContains: 'mf_397b869c-f0c6-4dbf-b1eb-af52d18b61af_ddlGroup', // Nationality
                waitForAjax: true,
                postDelay: 800
            },
            {
                selectorContains: 'mf_97750af6-d13a-41e3-aef8-53aae8279f5d_ddlGroup', // Identification Type
                waitForAjax: true,
                postDelay: 800
            }
        ],
        extraDelayFields: []
    },
    enableSmartJump: true,
    pageSequence: ['Incorp_Form'],
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
            option.text = `${index + 1}. ${step} `;
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
        const jsonStr = jsonInput ? jsonInput.value : "";
        if (!jsonStr) return updateStatus("Error: Paste JSON first.", "red");
        let formData;
        try { formData = JSON.parse(jsonStr); } catch (e) { return updateStatus("Error: Invalid JSON.", "red"); }
        if (SITE_CONFIG.dataPreProcessor) formData = SITE_CONFIG.dataPreProcessor(formData);

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
                    for (let j = 0; j < items.length; j++) {
                        const dynFields = { ...mapping.fields };
                        const keys = mapping.fieldOrder || Object.keys(mapping.fields);
                        dynFields.__fieldOrder = keys;
                        for (let k of keys) { if (typeof dynFields[k] === 'string' && dynFields[k].includes('_0')) dynFields[k] = dynFields[k].replace(/_0/g, '_' + j); }
                        await injectScriptWithRetry(tab.id, fillPageWithData, [items[j], dynFields, j, SITE_CONFIG.fieldRules], 'MAIN');
                        if (mapping.saveButtonSelector) {
                            let btn = mapping.saveButtonSelector;
                            if (btn.includes('_0')) btn = btn.replace(/_0/g, '_' + j);
                            await clickElementInMainWorld(tab.id, btn);
                            await new Promise(r => setTimeout(r, 3000));
                        }
                    }
                } else {
                    const fields = { ...mapping.fields };
                    if (mapping.fieldOrder) fields.__fieldOrder = mapping.fieldOrder;
                    await injectScriptWithRetry(tab.id, fillPageWithData, [formData, fields, 0, SITE_CONFIG.fieldRules], 'MAIN');
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

function clickElementInMainWorld(tabId, selector) {
    return new Promise((resolve, reject) => {
        chrome.scripting.executeScript({
            target: { tabId }, world: 'MAIN', func: (sel) => {
                let el = document.querySelector(sel) || document.getElementById(sel.replace('#', ''));
                if (el) { el.click(); return { success: true }; }
                return { error: 'Not found' };
            }, args: [selector]
        }, (res) => {
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve(res[0].result);
        });
    });
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
        let sel = selector.replace('ALL:', '');
        if (!sel.match(/[#\.\[]/)) sel = '#' + sel;
        if (document.querySelector(sel)) return resolve(true);
        const observer = new MutationObserver(() => { if (document.querySelector(sel)) { observer.disconnect(); resolve(true); } });
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
                console.log("📡 Page update detected!");
            });
            // Look for SSM specific containers or body
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

    const setFieldValue = (selector, value) => {
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
        if (!el || el.disabled || el.readOnly) return !!el;

        el.focus();

        // 2. Handle Checkboxes
        if (el.type === 'checkbox') {
            el.checked = !!value;
        }
        // 3. Handle Selects
        else if (el.tagName === 'SELECT') {
            el.value = value;
            if (el.value !== String(value)) {
                const option = Array.from(el.options).find(opt =>
                    opt.value === value ||
                    opt.text.trim().toLowerCase() === String(value).trim().toLowerCase()
                );
                if (option) el.value = option.value;
            }
        }
        // 4. Handle Standard Text/Other
        else {
            el.value = value;
        }

        ['input', 'change', 'blur'].forEach(ev => el.dispatchEvent(new Event(ev, { bubbles: true })));

        // --- SELECT2 SUPPORT (REQUIRES MAIN WORLD) ---
        if (typeof jQuery !== 'undefined' && jQuery(el).data('select2')) {
            jQuery(el).trigger('change');
        } else if (el.tagName === 'SELECT' && el.onchange) {
            el.onchange();
        }

        if (typeof __doPostBack !== 'undefined') {
            try { __doPostBack(el.id || selector.replace('#', ''), ''); } catch (e) { }
        }
        return true;
    };

    try {
        let keys = fieldMap.__fieldOrder || Object.keys(fieldMap);
        keys = keys.filter(k => k !== '__fieldOrder');

        for (let key of keys) {
            const sel = fieldMap[key];
            const val = data[key];
            if (val === undefined || (!sel.startsWith("RADIO:") && val === "")) continue;

            const success = setFieldValue(sel, val);
            if (success) {
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
            }
        }
        return { success: true };
    } catch (err) {
        return { success: false, error: err.message };
    }
}
