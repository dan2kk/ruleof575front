export const fillTBL = (lecListInTT) => {
    let lecInTTIdx = 0;
    let len = lecListInTT.length;

    let ret = [];
    
    let head = 9; 
    let tail = 9;

    let lecStart;
    let lecEnd;
    let lecName;
    let lecColorIdx;
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
        }
        else {
            lecStart = 22;
        }

        while(tail < lecStart) {
            if(head != tail) {
                ret.push({start: head, end: tail, isInTable: false, content : "", blockkind: "block", checked: "false"});
            }
            head = tail;
            tail = parseInt(head) + 1;
        }

        if(tail >= 22) {
            break;
        }

        if(head != lecStart) {
            ret.push({start: head, end: lecStart, isInTable: false, content : "", blockkind: "block", checked: "false"});
        }
        ret.push({start: lecStart, end: lecEnd, isInTable: true, content : lecName, blockkind: "courseblock", colorIdx: lecColorIdx})
        head = tail = lecEnd;
    }

    return ret;
};
