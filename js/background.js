chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1]

        console.log(33333)

        console.log(queryParameters)
        const urlParameters = new URLSearchParams(queryParameters);
        
        console.log(urlParameters)

        chrome.tabs.sendMessage(tabId, {
            videoId: urlParameters.get("v"),
        });
    }
})
