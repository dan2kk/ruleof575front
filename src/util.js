export const fillTL = (lecs) => {
    let lecIdx = 0;
    let len = lecs.length;

    let ret = [];
    
    let head = 9; 
    let tail = 9;

    let lecStart;
    let lecEnd;
    let lecName;
    let lecColor;
    let lec_num;
    let lecNum;
    
    while(1) {
        if(lecIdx < len) {
            lecStart = lecs[lecIdx].start;
            lecEnd = lecs[lecIdx].end;
            lecName = lecs[lecIdx].content
            lecColor = lecs[lecIdx].color
            lecNum = lecs[lecIdx].lecNum
            lecIdx++;
        }
        else {
            lecStart = 22;
        }

        while(tail < lecStart) {
            if(head != tail) {
                ret.push({
                    start: head, 
                    end: tail, 
                    content : "",
                    blockKind: "block",
                    isSelected: false,
                    color: 0
                });
            }
            head = tail;
            tail = parseInt(head) + 1;
        }
        if(tail >= 22) {
            break;
        }

        if(head != lecStart) {
            ret.push({
                start: head, 
                end: lecStart, 
                content : "",
                blockKind: "block",
                isSelected: false,
                color: 0
            });
        }
        ret.push({
            start: lecStart,
            end: lecEnd, 
            content: lecName,
            blockKind: "lecBlock",
            isSelected: false,
            color: lecColor,
            lecNum: lecNum
        })

        head = tail = lecEnd;
    }

    return ret;
};

export const processLec = (lec, idx) => {
    let startTime = Number(lec.시작시간[idx].slice(0, -6))
    let endTime = Number(lec.끝시간[idx].slice(0, -6))
    let startHalf = (lec.시작시간[idx].slice(-5, -3) != '00')
    let endHalf = (lec.끝시간[idx].slice(-5, -3) != '00')

    if(startHalf) {
    startTime += 0.5;
    }
    if(endHalf) {
    endTime += 0.5;
    }

    let lecToAdd = {
        start : startTime,
        end : endTime,
        content : lec.과목명,
        lecNum : lec.수업번호
    }

    return lecToAdd;
}
