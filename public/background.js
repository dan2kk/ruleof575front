let loginInfo = null

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab);
    if (request.type === "extension"){
        if(request.param === "wanted"){
            sendResponse({data: loginInfo});
        }
        else if(request.param === "grad"){
            sendResponse({data: "import2"});
        }
        else{
            console.log("error! wrong param")
        }
    }
    else if (request.type === "content_script") {
        loginInfo = request.data
        sendResponse('loginInfo saved');
    }
})
