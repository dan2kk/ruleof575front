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
<<<<<<< HEAD
    // while(tail <= 20) {
    //     if(lecInTTIdx < len) {
    //         lecStart = lecListInTT[lecInTTIdx].start;
    //         lecEnd = lecListInTT[lecInTTIdx].end;
    //     }
    //     else {
    //         lecStart = -1;
    //     }
        
    //     if(tail == lecStart) {
    //         if(head != tail) {
    //             ret.push({start: head, end: tail, isInTable: false});
    //         }
    //         ret.push({start: lecStart, end: lecEnd, isInTable: true});
    //         lecInTTIdx++;
    //         head = tail = lecEnd;
    //     }
    //     else {
    //         if(head != tail && tail % 1 == 0) {
    //             ret.push({start: head, end: tail, isInTable: false});
    //             head = tail;
    //         }
    //         else {
    //             tail += 0.5;
    //         }
    //     }
    // }

    while(1) {
        if(lecInTTIdx < len) {
            lecStart = lecListInTT[lecInTTIdx].start;
            lecEnd = lecListInTT[lecInTTIdx].end;
            lecName = lecListInTT[lecInTTIdx].content;
            lecColorIdx = lecListInTT[lecInTTIdx].colorlist;
            lecInTTIdx++;
=======

    while(1) {
        if(lecIdx < len) {
            lecStart = lecsInTable[lecIdx].start;
            lecEnd = lecsInTable[lecIdx].end;
            lecName = lecsInTable[lecIdx].content
            lecColorIdx = lecsInTable[lecIdx].colorIdx
            lecIdx++;
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645
        }
        else {
            lecStart = 22;
        }

        while(tail < lecStart) {
            if(head != tail) {
<<<<<<< HEAD
                ret.push({start: head, end: tail, isInTable: false, content : "", blockkind: "block", checked: "false"});
=======
                ret.push({
                    start: head, 
                    end: tail, 
                    content : "",
                    blockKind: "block",
                    isSelected: false,
                    colorIdx: 0
                });
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645
            }
            head = tail;
            tail = parseInt(head) + 1;
        }

        if(tail >= 22) {
            break;
        }

        if(head != lecStart) {
<<<<<<< HEAD
            ret.push({start: head, end: lecStart, isInTable: false, content : "", blockkind: "block", checked: "false"});
        }
        ret.push({start: lecStart, end: lecEnd, isInTable: true, content : lecName, blockkind: "courseblock", colorIdx: lecColorIdx})
=======
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

>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645
        head = tail = lecEnd;
    }

    return ret;
};
<<<<<<< HEAD
=======

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
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645
