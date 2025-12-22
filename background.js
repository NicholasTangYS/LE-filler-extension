chrome.action.onClicked.addListener((tab) => {
    // Open the side panel for the current window
    chrome.sidePanel.open({ windowId: tab.windowId });
});
