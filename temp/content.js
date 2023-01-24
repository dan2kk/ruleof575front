console.log("ASDSDASD")
let elements = document.querySelectorAll('#snb > ul > li')
console.log(elements)

if(elements.length == 16) {
    elements[15].insertAdjacentHTML('beforebegin', '<li id="test">TEST </li>')
    
    let btn = document.getElementById("test");
    btn.addEventListener("click", () => {
        let tt = document.getElementById('qwer')

        console.log(tt)
        
        if(tt == null) {
            let temp = document.querySelector("#content-wrap")
            let temp2 = document.createElement("iframe")
            temp2.id = "qwer"
            temp2.src = chrome.runtime.getURL('./index.html')
            temp2.width = `1000px`
            temp2.height = `800px`
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