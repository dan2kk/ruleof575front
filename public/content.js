//console.log("ASDSDASD")
let elements = document.querySelectorAll('#snb > ul > li')
let loginInfo = document.querySelectorAll('#logo-area> div > div > span')
let hashArray = [
    "#!UDMxOTEzMCRAXnN1Z2FuZy8kQF4kQF5NMzE4Njc3JEBe7KG47JeF7IKs7KCV7KGw7ZqMJEBeTTMxODY3NyRAXmZiM2VjOTI1OTE3OGNmMmFmMmQ3ZDQ3Y2IxOTlmZGUyMTViNWU4ZWQ1ZGI2MGI4ZTZjOTk3NTgyZTQ2YzIzOWM=", //졸업사정
    "#!UDMxMDI5OCRAXnN1Z2FuZy8kQF4kQF5NMDA4OTU4JEBe7Z2s66ed7IiY7JeFJEBeTTAwODk1OCRAXjFkOThmNjkxN2Y2YzAzMTg1YTcwYWQ4NzBkYzBiOGYxY2FhNzJkN2MyOWY1ZDVmZjNmZTMxNjY4NTg5MjU3NTY=", //희망수업
    "#!UDMxNTM2NSRAXnN1Z2FuZy8kQF4wJEBeTTAwNjYzMiRAXuyImOqwleyLoOyyrSRAXk0wMDY2MzIkQF5mNjcwYWU1NWI5YTkzZmJkMzE3YTJkYjFmYTU3OTZlNTJkOWUzMDk0YmQ1MDJmMmE5Zjg3OTg0NWNkNjZmZGIz", //수강신청
    "#!UDMyMTYwOSRAXnN1Z2FuZy8kQF4kQF5NMzIwNDE3JEBe6riw67O47IiY7JeFJEBeTTMyMDQxNyRAXjhmNjg1Y2RhZmFlMzM3ZjE4MTZmM2YzYjY4OWRkNzM3MzI2N2E2Y2IyN2FkZDc0MDM3YWM0MmU1YjU2OGIwZGQ=" //기본수업
] // 졸사, 희망, 수강, 기본수업 해시값
console.log(loginInfo)
//console.log(elements)

if(elements.length == 16) { //로그인 성공후 메뉴창
    elements[15].insertAdjacentHTML('beforebegin', '<li id="test"><a style="cursor: pointer"> 도우미 </a></li>')
    
    let btn = document.getElementById("test");
    btn.addEventListener("click", () => {
        let tt = document.getElementById('qwer')

        //console.log(tt)
        
        if(tt == null) {
            let temp = document.querySelector("#content-wrap")
            let temp2 = document.createElement("iframe")
            temp2.id = "qwer"
            temp2.src = chrome.runtime.getURL('./index.html')
            temp2.width = `800px`
            temp2.height = `800px`
            temp2.style.top = '86px'
            temp2.style.right = '0px'
            temp2.style.position = 'absolute'
            temp2.style.zIndex = '10'
            console.log(temp2)
            temp.insertBefore(temp2, temp.firstChild)
        }
        else {
            console.log(tt.style)
            if(tt.style.display != 'none') {
                document.getElementById('qwer').style.display = 'none'
            }
            else {
                document.getElementById('qwer').style.display = 'block'
            }
        }
        
    });
}
if(loginInfo.length == 3){ //로그인 성공시 로그인 정보
    let stuInfo = {
        stuNum: loginInfo[0].innerHTML,
        stuGrad : loginInfo[1].innerHTML,
        stuName : loginInfo[2].innerHTML
    };
    (async () => {
        const response = await chrome.runtime.sendMessage({type: "content_script", data: stuInfo});
        // do something with response here, not outside the function
        console.log(response);
    })();   
}
function locationHashChanged() { //창이동 트리거 이벤트
    if(location.hash == hashArray[0]){
        console.log("졸업사정")
    }
    else if(location.hash == hashArray[1]){
        console.log("희망수업")
    }
    else if(location.hash == hashArray[2]){
        console.log("수강신청")
    }
    else if(location.hash == hashArray[3]){
        console.log("기본수업")
    }
  }
  
  window.onhashchange = locationHashChanged;