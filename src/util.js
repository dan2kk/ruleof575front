export const fillTL = (lecs) => {
    let ret = []

    let lecIdx = 0
    let len = lecs.length
    
    let head = 9 
    let tail = 9

    let lecStart
    let lecEnd
    let lecContent
    let lecColor
    let lec_num
    let lecNum
    
    while(1) {
        if(lecIdx < len) {
            lecStart = lecs[lecIdx].start
            lecEnd = lecs[lecIdx].end
            lecContent = lecs[lecIdx].content
            lecNum = lecs[lecIdx].lecNum
            lecColor = lecs[lecIdx].color
            lecIdx++
        }
        else {
            lecStart = 22
        }

        while(tail < lecStart) {
            if(head != tail) {
                ret.push({
                    start: head, 
                    end: tail, 
                    content : "",
                    color: 0,
                    lecNum : 0,
                    blockKind: "block",
                    isSelected: false
                })
            }
            head = tail
            tail = parseInt(head) + 1
        }
        if(tail >= 22) {
            break
        }

        if(head != lecStart) {
            ret.push({
                start: head, 
                end: lecStart, 
                content : "",
                color: 0,
                lecNum : 0,
                blockKind: "block",
                isSelected: false
            })
        }
        ret.push({
            start: lecStart,
            end: lecEnd, 
            content: lecContent,
            lecNum: lecNum,
            color: lecColor,
            blockKind: "lecBlock",
            isSelected: false
        })

        head = tail = lecEnd
    }

    return ret
}

export const timeToNum = (startTime, endTime) => {
    let startNum
    let endNum
    let startHalf
    let endHalf

    startNum = Number(startTime.slice(0, -6))
    endNum = Number(endTime.slice(0, -6))
    startHalf = (startTime.slice(-5, -3) != '00')
    endHalf = (endTime.slice(-5, -3) != '00')

    if(startHalf) {
        startNum += 0.5
    }
    if(endHalf) {
        endNum += 0.5
    }

    return {
        start : startNum,
        end : endNum
    }
}

export const processLec = (lec, day) => {
    let ret = []

    let curDay
    let startToEnd

    for(let i = 0; i < lec.요일.length; i++) {
        curDay = lec.요일[i]

        if(curDay == '시간미지정강좌' || curDay != day || lec.시작시간[i] == null) {
            continue
        }

        startToEnd = timeToNum(lec.시작시간[i], lec.끝시간[i])

        ret.push({
            start : startToEnd.start,
            end : startToEnd.end,
            content : lec.과목명,
            lecNum : lec.수업번호,
            color : lec.color
        })
    }
    return ret
}

const gradNameDic = {
    '졸업학점' : ["졸업학점"],
    '핵심교양' : ["핵심교양"],
    '글로벌언어와문화영역' : ["글로벌언어와문화영역"],
    '언어와표현영역(글로벌언어와문화영역)' : ["글로벌언어와문화영역"],
    '외국어영역(언어와표현,글로벌언어와문화)' : ["글로벌언어와문화영역"],
    '사회와세계영역' : ["사회와세계영역"],
    '인문과예술영역' : ["인문과예술영역"],
    "고전읽기영역" : ["고전읽기영역"],
    '미래산업과창업영역' : ["미래산업과창업영역"],
    '비지니스와리더쉽영역(미래산업과창업영역)' : ["미래산업과창업영역"],
    '과학과기술영역' : ["과학과기술영역"],
    '소프트웨어영역' : ["소프트웨어영역"],
    '과학과기술영역(과학과기술,소프트웨어영역)' : ["과학과기술영역", "소프트웨어영역"],
    '영어전용강좌수' : ["영어전용강좌수"]
}

export const transformGradName = (gradName) => {
    return gradNameDic[gradName] 
}

export const getGradNames = ()  => {
    return Object.keys(gradNameDic)
}

export const fieldOrder = [
    "가상대학영역",
    "고전읽기영역",
    "과학과기술영역",
    "글로벌언어와문화영역",
    "미래산업과창업영역",
    "사회와세계영역",
    "소프트웨어영역",
    "인문과예술영역",
    "일반영역",
    "영역없음"
]

export const dayOrder = [
    "월",
    "화",
    "수",
    "목",
    "금",
    "시간미지정강좌"
]
