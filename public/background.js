chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
    if (request.type === "import"){
        if(request.param === "wanted"){
            sendResponse({data: "import1"});
        }
        else if(request.param === "grad"){
            sendResponse({data: "import2"});
        }
        else{
            console.log("error! wrong param")
        }
    }
    else if (request.type === "goodbye") {
        sendResponse({data: "goodbye2"});
    }
})
  