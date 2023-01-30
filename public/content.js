//console.log("ASDSDASD")
var elements = document.querySelectorAll('#snb > ul > li')
var loginInfo = document.querySelectorAll('#logo-area> div > div > span')
var stuNum = 0
var arrayIndex = []
var lecArray = []
let hashArray = [
    "#!UDMxOTEzMCRAXnN1Z2FuZy8kQF4kQF5NMzE4Njc3JEBe7KG47JeF7IKs7KCV7KGw7ZqMJEBeTTMxODY3NyRAXmZiM2VjOTI1OTE3OGNmMmFmMmQ3ZDQ3Y2IxOTlmZGUyMTViNWU4ZWQ1ZGI2MGI4ZTZjOTk3NTgyZTQ2YzIzOWM=", //졸업사정
    "#!UDMxMDI5OCRAXnN1Z2FuZy8kQF4kQF5NMDA4OTU4JEBe7Z2s66ed7IiY7JeFJEBeTTAwODk1OCRAXjFkOThmNjkxN2Y2YzAzMTg1YTcwYWQ4NzBkYzBiOGYxY2FhNzJkN2MyOWY1ZDVmZjNmZTMxNjY4NTg5MjU3NTY=", //희망수업
    "#!UDMxNTM2NSRAXnN1Z2FuZy8kQF4wJEBeTTAwNjYzMiRAXuyImOqwleyLoOyyrSRAXk0wMDY2MzIkQF5mNjcwYWU1NWI5YTkzZmJkMzE3YTJkYjFmYTU3OTZlNTJkOWUzMDk0YmQ1MDJmMmE5Zjg3OTg0NWNkNjZmZGIz", //수강신청
    "#!UDMyMTYwOSRAXnN1Z2FuZy8kQF4kQF5NMzIwNDE3JEBe6riw67O47IiY7JeFJEBeTTMyMDQxNyRAXjhmNjg1Y2RhZmFlMzM3ZjE4MTZmM2YzYjY4OWRkNzM3MzI2N2E2Y2IyN2FkZDc0MDM3YWM0MmU1YjU2OGIwZGQ=" //기본수업
] // 졸사, 희망, 수강, 기본수업 해시값


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
            temp2.width = `1200px`
            temp2.height = `960px`
            temp2.style.top = '86px'
            temp2.style.right = '0px'
            temp2.style.position = 'absolute'
            temp2.style.zIndex = '10'
            //console.log(temp2)
            temp.insertBefore(temp2, temp.firstChild)
        }
        else {
            //console.log(tt.style)
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
    stuNum = stuInfo.stuNum
    let hackJum = {최소학점: 0, 최대학점: 0, 신청학점: 0}
    hackJum.최소학점 = document.querySelectorAll('#edMinHakjeom')[0].value;
    hackJum.최대학점 = document.querySelectorAll('#edMaxHakjeom')[0].value;
    hackJum.신청학점 = document.querySelectorAll('#edSincheongHakjeom')[0].value;
    stuInfo.stuGrad = stuInfo.stuGrad.slice(1,2);
    //console.log(stuInfo)
    //console.log(hackJum);
    (async () => {
        const response = await chrome.runtime.sendMessage({type: "content_script", stuData: stuInfo, hackjum: hackJum});
        // do something with response here, not outside the function
        //console.log(response);
    })();   
}
chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
      console.log("content-script event handler")
      if(request.type == "import"){
        if(request.data == "wanted"){
            let wantedInfo = await getItems(1)
            sendResponse({data: wantedInfo})
        }
        if(request.data =="grad"){
            let jolupInfo = await getItems(0);
            sendResponse({data:jolupInfo})
        }
        if(request.data == "sugang"){
            let sgscInfo = await getItems(2)
            sendResponse({data: sgscInfo})
        }
      }
      else if(request.type == "export"){
        if(request.data == "wanted"){
            arrayIndex = request.array
            let exportData = await putItems(1)
            sendResponse(exportData)
        }
        else if(request.data == "pref"){
            lecArray = request.array
            let exportData = await putItems(2)
            sendResponse(exportData)
        }
    }
      else{
        sendResponse("error")
      }
    }
);
  function getItems(idx) {
    return new Promise(function(resolve, reject) {
        let url = window.location
        if(url.hash != hashArray[idx]) {
            url.replace("https://portal.hanyang.ac.kr/sugang/sulg.do"+hashArray[idx])}
        let returnData = []
        let data
        //hackJum.최소학점 = document.querySelectorAll('#edMinHakjeom')
        if(idx == 0){ //졸업사정 불러오기
            data = document.querySelectorAll('#gdDtl1 > tbody > tr')
            for(let x of data){
                let temp = []
                for(let y of x.textContent.split("\n")){
                    temp.push(y.trim())
                }
                let recData ={이수명: temp[1], 기준: temp[2], 이수: temp[4], 이수여부: temp[5]}
                //console.log(temp[1])
                //console.log(recData)
                returnData.push(recData)
            }
        }
        else if(idx == 1){ //희망수업 불러오기
            data = document.querySelectorAll('#gdMain > tbody > tr')
            for(let x of data){
                let temp = []
                for(let y of x.textContent.split("\n")){
                    temp.push(y.trim())
                }
                let recData ={과목명: temp[11], 수업번호: temp[9], 대표교강사명: temp[19], 강좌유형: temp[23],
                    수업시간: temp[25], isInTable : 0, 요일: [], 시작시간: [], 끝시간: []
                }
                returnData.push(recData)
            }
        }
        //console.log(returnData)
        resolve(returnData)
    });
  };
  function putItems(idx) {
    return new Promise(async function(resolve, reject) {
        //let url = window.location
        //if(url.hash != hashArray[idx]) {
        //    url.replace("https://portal.hanyang.ac.kr/sugang/sulg.do"+hashArray[idx])}
        let returnData = []
        if(idx == 0){ //졸업사정 불러오기
            data = document.querySelectorAll('#gdDtl1 > tbody > tr')
            resolve(returnData)
        }
        else if(idx == 1){ //희망수업 내보내기
            var wantedData = document.querySelectorAll('#gdMain > tbody > tr')
            var wantedTable = document.querySelector('#gdMain > tbody')
            console.log(wantedData)
            console.log(arrayIndex)
            let exportData = []
            for(let i =0; i< arrayIndex.length; i++){
                exportData.push(wantedData[arrayIndex[i]-1])
                console.log(arrayIndex[i]-1)
            }
            console.log(exportData)
            for(let j =0; j< arrayIndex.length; j++){
                wantedTable.appendChild(exportData[j])
                console.log(exportData[j])
                console.log(j)
            }
            console.log(wantedTable)
            resolve(returnData)
        }
    });
  };