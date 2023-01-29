var loginInfo = null
var hackJum = null

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //console.log(sender.tab);
    if (request.type === "extension"){
        if(request.param === "login_info"){
            //console.log(loginInfo)
            //console.log(loginInfo, hackJum)
            sendResponse({stuData: loginInfo, hackData: hackJum});
        }
        else{
            console.log("error! wrong param")
        }
    }
    else if (request.type === "content_script") {
        loginInfo = request.stuData
        hackJum = request.hackjum
        sendResponse('loginInfo, hackJum saved');
    }
})
