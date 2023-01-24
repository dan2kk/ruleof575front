console.log("ASDSDASD")
let elements = document.querySelectorAll('#snb > ul > li')
console.log(elements)

if(elements.length == 16) {
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

  