var loginInfo = null

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab);
    if (request.type === "extension"){
        if(request.param === "login_info"){
            console.log(loginInfo)
            sendResponse({data: loginInfo});
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
