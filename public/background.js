chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
    if (request.type === "hello") sendResponse({farewell: "goodbye"});
    if (request.type === "goodbye") sendResponse({farewell: "goodbye"});
})
  