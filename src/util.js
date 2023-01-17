export const fillTL = (lecsInTable) => {
    let lecIdx = 0;
    let len = lecsInTable.length;

    let ret = [];
    
    let head = 9; 
    let tail = 9;

    let lecStart;
    let lecEnd;
    let lecName;
    let lecColorIdx;

    while(1) {
        if(lecIdx < len) {
            lecStart = lecsInTable[lecIdx].start;
            lecEnd = lecsInTable[lecIdx].end;
            lecName = lecsInTable[lecIdx].content
            lecColorIdx = lecsInTable[lecIdx].colorIdx
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
                    colorIdx: 0
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
                colorIdx: 0
            });
        }
        ret.push({
            start: lecStart,
            end: lecEnd, 
            content: lecName,
            blockKind: "lecBlock",
            isSelected: false,
            colorIdx: lecColorIdx
        })

        head = tail = lecEnd;
    }

    return ret;
};

export const temp = (lec, idx) => {
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
    }

    return lecToAdd;
} 