var loginInfo = null
var gradData = null

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab);
    if (request.type === "extension"){
        if(request.param === "login_info"){
            console.log(loginInfo)
            sendResponse({data: loginInfo});
        }
        else if(request.param === "grad"){
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {type: "import", data: "grad"}, function(response) {
                    gradData = response.data
                    console.log("background received gradData")
                    console.log(gradData)
                    sendResponse({data: gradData})
                });
            })
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
