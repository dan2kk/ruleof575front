import { createStore } from 'vuex'
import { fillTL, parseLectime, processLec, fieldOrder } from '@/util'
import { getGradNames, dayOrder } from '@/util'
import axios from "axios"

export default createStore({
  state: {
    isLogined: false,
    userInfo: {stuId: null, userName: null, major: null, grade: null},
    // userInfo: {stuId: "2018007947", userName: "김병주", major: "컴퓨터소프트웨어학부", grade: "3학년"},

    gradInfo : null,
    isChanged: false,
    isOnlyInGradShow: true,
    isNonTimeHidden : true,
    curScreen: 0,
    
    lecList:[],
    recommList: [],
    gradList: [],
    shadowList: [[],[],[],[],[]],
    lecDetailsLeft: {state: false},
    lecDetailsRight: {state: false},
    searchModal: {state: false},
    hackData : {최소학점: 0, 최대학점 : 0, 신청학점: 0, 시간표학점: 0, 수강과목수: 0},
    selectedTimes: { 
      월:[], 
      화:[], 
      수:[], 
      목:[], 
      금:[]
    },
    timeLines: {
      시간 : [  
        { start: 0, end: 1, content: null, blockKind: "sendBtn"},
        { start: 9, end: 10, content: '09:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 10, end: 11, content: '10:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 11, end: 12, content: '11:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 12, end: 13, content: '12:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 13, end: 14, content: '13:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 14, end: 15, content: '14:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 15, end: 16, content: '15:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 16, end: 17, content: '16:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 17, end: 18, content: '17:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 18, end: 19, content: '18:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 19, end: 20, content: '19:00', blockKind: "hourBlock", isSelected : false, colorIdx: 0},
        { start: 20, end: 21, content: '20:00+', blockKind: "hourBlock", isSelected : false, colorIdx: 0}
      ],
      월 : [ ],
      화 : [ ],
      수 : [ ], 
      목 : [ ], 
      금 : [ ]
    },
    colorIdx : 0,//Math.floor(Math.random() * 32),
    colorList: [
      `#ffb3b7`, `#fedcdd`, `#dbe5f1`, `#a5bcde`, `#7d9dcd`, `#ffa970`, `#ffd77f`, 
      `#edf3c3`, `#acd8d9`, `#7fbcff`, `#a9e5cc`, `#dcedc1`, `#fed2b5`, `#ffaba7`, 
      `#ff8b94`, `#94cfc9`, `#6db3bf`, `#4699b7`, `#20566e`, `#183641`, `#cde4d2`, 
      `#d2e1a8`, `#d8de7e`, `#deda52`, `#aacd67`, `#b9c8e7`, `#8fbae5`, `#6e91e3`, 
      `#7978c6`, `#8b55a9`, `#f1a8bc`, `#eee58a`, `#c4ecb0`
    ],
    majorData: ["간호학과", "간호학과(야)","건설환경공학과","건축공학부","건축학부","경영학부","경제금융학부",
    "관광학부","관현악과","교육공학과","교육학과","국악과","국어교육과","국어국문학과","국제학부","기계공학부",
    "데이터사이언스전공","데이터사이언스학과","데이터사이언스학부","도시공학과","독어독문학과","무용학과",
    "물리학과","미디어커뮤니케이션학과","미래자동차공학과","바이오메디컬공학전공","사학과","사회학과","산업공학과",
    "산업융합학부","생명공학과","생명과학과","생체공학전공","성악과","수학과","수학교육과","스포츠매니지먼트전공",
    "스포츠사이언스전공","스포츠산업학과","식품영양학과","신소재공학부","실내건축디자인학과","심리뇌과학과","심리뇌과학전공",
    "에너지공학과","연극영화학과","영어교육과","영어영문학과","원자력공학과","유기나노공학과","융합전자공학부","응용미술교육과",
    "응용시스템전공","의류학과","의예과","의학과","자원환경공학과","작곡과","전기공학전공","정보시스템학과","정보융합전공",
    "정책학과","정치외교학과","중어중문학과","철학과","체육학과","컴퓨터소프트웨어학부","파이낸스경영학과",
    "피아노과","행정학과","화학공학과","화학과"]
  },
  
  getters: {
    getIsLogined(state) {
      return state.isLogined
    },
    getUserInfo(state) {
      return state.userInfo
    },
    getStuId(state) {
      return state.userInfo.stuId
    },
    getGrade(state) {
      return state.userInfo.grade
    },
    getCurScreen(state) {
      return state.curScreen
    },
    getIsChanged(state){
      return state.isChanged
    },
    getIsOnlyInGradShow(state) {
      return state.isOnlyInGradShow
    },
    getIsNonTimeHidden(state) {
      return state.isNonTimeHidden
    },
    getLecList(state) {
      return state.lecList
    },
    getRecommList(state) {
      return state.recommList
    },
    getGradList(state){
      return state.gradList
    },
    getSelectedTimes(state){
      return state.selectedTimes
    },
    getTimeLines(state) {
      return state.timeLines
    },
    getLecDetailsLeft(state){
      return state.lecDetailsLeft
    },
    getLecDetailsRight(state){
      return state.lecDetailsRight
    },
    getShadowList(state){
      return state.shadowList
    },
    getColorList(state) {
      return state.colorList
    },
    getColor(state) {
      return state.colorList[state.colorIdx]
    },
    getSearchModal(state){
      return state.searchModal
    },
    getHackData(state){
      return state.hackData
    },
    getMajorData(state){
      return state.majorData
    },
  },
  mutations: {
    setUserInfo(state, data) { 
      state.userInfo.stuId = data.stuNum.trim()
      state.userInfo.userName = data.stuName.trim()
      state.userInfo.grade = data.stuGrad.trim()
    },
    setUserMajor(state, major) {
      state.userInfo.major = major
      console.log(state.userInfo)
    },
    setUserGrade(state, grade) {
      state.userInfo.grade = grade
      console.log(state.userInfo)
    },
    seTimetableHackjum(state, hackjum) {
      state.hackData.시간표학점 += hackjum
    },

    loginMain(state){
      if(state.userInfo.stuId != null) {
        state.isLogined = true;
        this.dispatch("fetchLecList")
        this.dispatch("fetchGradList")
        state.curScreen = 1
      }
    },


    setIsChanged(state, tf){
      state.isChanged = tf
    },
    setCurScreen(state, screenNum) {
      state.curScreen = screenNum
    },


    setUpLecList(state, lecList) {
      try{
        console.log(state.userInfo);

        let parsedLT

        for(let lec of lecList) {
          parsedLT = parseLectime(lec.수업시간);
          lec.수업시간 = parsedLT.수업시간
          lec.요일 = parsedLT.요일
          lec.시작시간 = parsedLT.시작시간
          lec.끝시간 = parsedLT.끝시간

          if(lec.isInTable == 1) {
            state.hackData.시간표학점 += lec.학점
            state.hackData.수강과목수 += 1
            lec['color'] = state.colorList[state.colorIdx]
            this.commit("setNextColor")
          }
          this.commit("addLecList", lec)
        }
        this.commit("setUpTimeLines", '월')
        this.commit("setUpTimeLines", '화')
        this.commit("setUpTimeLines", '수')
        this.commit("setUpTimeLines", '목')
        this.commit("setUpTimeLines", '금')
      }
      catch(err){
        alert(err)
      }
    },
    addLecList(state, lecToAdd){
      if(state.lecList.findIndex((x)=> x.수업번호 == lecToAdd.수업번호) == -1){
        state.lecList.push(lecToAdd)
      }
    },
    delLecList(state, lecToDel) {
      let lecIdx = state.lecList.findIndex((x) => x.수업번호 == lecToDel.수업번호) 
      if(lecIdx != -1) {
        state.lecList.splice(lecIdx, 1);
      }
    },

    setGradList(state, gradRecList){

      try{
        let gradNames = getGradNames();
        
        for(let gradRec of gradRecList) {

          if(!gradNames.includes(gradRec.이수명)) {
            continue
          }
          
          // if(typeof gradRec.기준 != 'string') {
          //   if(gradRec.기준 != null){
          //     gradRec.기준= gradRec.기준.slice(0, -3)
          //   }

          //   if(gradRec.이수 != null){
          //     gradRec.이수= gradRec.이수.slice(0, -3)
          //   }

          // }

          if(gradRec.이수 == null || gradRec.이수 == ''){
            gradRec.이수= '0'
          }

          gradRec.변동 = '0'
          gradRec.합계 = '0'
          gradRec.잔여 = '0'
          let idx = state.gradList.findIndex((x)=> (x.이수명 == gradRec.이수명) && (x.전공구분명 == gradRec.전공구분명))
          if(idx == -1) {
            state.gradList.push(gradRec)
          }
          else{
            state.gradList[idx] = gradRec
          }

        }
      }
      catch(err){
        alert(err)
      }
    },
    calGradStat(state, lecList) {
      let gradData = {
        '졸업학점' : 0,
        '핵심교양' : 0,
        '글로벌언어와문화영역' : 0,
        '언어와표현영역(글로벌언어와문화영역)' : 0,
        '외국어영역(언어와표현,글로벌언어와문화)' : 0,
        '사회와세계영역' : 0,
        '인문과예술영역' : 0,
        "고전읽기영역" : 0,
        '미래산업과창업영역' : 0,
        '비지니스와리더쉽영역(미래산업과창업영역)' : 0,
        '과학과기술영역' : 0,
        '소프트웨어영역' : 0,
        '과학과기술영역(과학과기술,소프트웨어영역)' : 0,
        '영어전용강좌수' : 0
      }

      try{
        for(let lec of lecList) {
          gradData['졸업학점'] += lec.학점
          switch(lec.이수구분코드명){
            case "핵심교양":
              gradData['핵심교양'] += lec.학점
              switch(lec.영역코드명){
                case "글로벌언어와문화영역":
                  gradData['글로벌언어와문화영역'] += lec.학점
                  gradData['언어와표현영역(글로벌언어와문화영역)'] += lec.학점
                  gradData['외국어영역(언어와표현,글로벌언어와문화)'] += lec.학점
                  break
                case "사회와세계영역":
                  gradData['사회와세계영역'] += lec.학점
                  break
                  case "인문과예술영역":
                    gradData['인문과예술영역'] += lec.학점
                    break
                case "고전읽기영역":
                  gradData['고전읽기영역'] += lec.학점
                  break
                case "미래산업과창업영역":
                  gradData['미래산업과창업영역'] += lec.학점
                  gradData['비지니스와리더쉽영역(미래산업과창업영역)'] += lec.학점
                  break
                case "과학과기술영역":
                  gradData['과학과기술영역'] += lec.학점
                  gradData['과학과기술영역(과학과기술,소프트웨어영역)'] += lec.학점
                  break
                case "소프트웨어영역":
                  gradData['소프트웨어영역'] += lec.학점
                  gradData['과학과기술영역(과학과기술,소프트웨어영역)'] += lec.학점
                  break
                }
              break;
            default:
              console.log("교양 X")
              break;
          }
          if(lec.영어전용){
            gradData['영어전용강좌수'] += 1
          }
        }
        console.log(gradData);
      }
      catch(err){
        alert(err)
      }

      for(let gradRec of state.gradList) {
        gradRec.변동 = Number(gradData[gradRec.이수명])
        gradRec.합계 = Number(gradRec.변동) + Number(gradRec.이수)
        gradRec.잔여 = Number(gradRec.기준) - Number(gradRec.합계)
        if(gradRec.잔여 < 0) {
          gradRec.잔여 = 0
        }
      }
    },
    

    addSelectedTimes(state, res){
      let temp = state.selectedTimes[res.day].findIndex((x)=>(x.start == res.data.start))
      if(temp == -1) {
        state.selectedTimes[res.day].push(res.data)
      }
    },
    clearSelectedTimes(state) {
      state.selectedTimes['월'].length = 0
      state.selectedTimes['화'].length = 0
      state.selectedTimes['수'].length = 0
      state.selectedTimes['목'].length = 0
      state.selectedTimes['금'].length = 0
    },


    setIsOnlyInGradShow(state) {
      if (state.isOnlyInGradShow) {
        state.isOnlyInGradShow = false;
      }
      else {
        state.isOnlyInGradShow = true;
      }
    },

    setIsNonTimeHidden(state) {
      if(state.isNonTimeHidden) {
        state.isNonTimeHidden = false
      }
      else {
        state.isNonTimeHidden = true
      }
    },

    addRecommList(state, lecs) {
      state.recommList.push(lecs)
    },
    //Delete from recommend list
    delRecommList(state, lecToDel) {
      let fieldIdx = state.recommList.findIndex((x) => x.영역코드명 == lecToDel.영역코드명);

      if(fieldIdx != -1) {
          let lecList = state.recommList[fieldIdx].수업목록;
          let lecIdx = lecList.findIndex((x) => x.수업번호 == lecToDel.수업번호);
    
          if(lecIdx != -1) {
            state.recommList[fieldIdx].수업목록.splice(lecIdx, 1);
          }
      }
    },


    clearRecommList(state) {
      state.recommList.length = 0;
    },
    sortRecommList(state) {
      state.recommList = state.recommList.sort((a, b) => fieldOrder.indexOf(a.영역코드명) - fieldOrder.indexOf(b.영역코드명));
    },
    setIsRecommShow(state, fieldNmae) {
      let fieldIdx = state.recommList.findIndex(x => x.영역코드명 == fieldNmae)
      if(fieldIdx != -1) {
        if(state.recommList[fieldIdx].isRecommShow == false) {
          state.recommList[fieldIdx].isRecommShow = true
        }
        else {
          state.recommList[fieldIdx].isRecommShow = false
        }
      }
    },



    setUpTimeLines(state, day) {

      if(day == '시간미지정강좌' || day == '집중수업') {
        return
      }

      let prevSelected = [];
      let lecsInTable = [];
      let processed;
      for(let block of state.timeLines[day]) {
        if(block.isSelected && block.blockKind == "block") {
          prevSelected.push( {
            start : block.start,
            end : block.end
          })
        }
      }

      for(let lec of state.lecList) {
        if(lec.isInTable == 0) {
          continue;
        }
        processed = processLec(lec, day)
        for(let p of processed) {
          lecsInTable.push(p);
        }
      }

      lecsInTable = lecsInTable.sort((a,b) => { return a.start - b.start });

      state.timeLines[day] = fillTL(lecsInTable)
      state.timeLines[day].unshift({ start: 0, end: 0.5, content: day, blockKind: "dayBlock", isSelected: false})
      

      let prevIdx = 0;
      let newIdx = 1;
      let newTimeLine = state.timeLines[day]

      while(prevIdx < prevSelected.length && newIdx < newTimeLine.length) {

        if(newTimeLine[newIdx].start == prevSelected[prevIdx].start || newTimeLine[newIdx].end == prevSelected[prevIdx].end) {
          if(newTimeLine[newIdx].blockKind == "block") {
            newTimeLine[newIdx].isSelected = true
          }
          prevIdx ++;
          newIdx++
        }
        else if(newTimeLine[newIdx].start >= prevSelected[prevIdx].start) {
          prevIdx++;
        }
        else {
          newIdx++;
        }
      }
    },



    setLecDetails(state, details){ //수업정보 데이터 불러오기
      try{
        details["state"] = true
        if(state.lecDetailsLeft["state"]){
          state.lecDetailsRight = details
        }
        else{
          state.lecDetailsLeft = details
        }
      }
      catch(err){
        console.log(err)
      }
    },

    async setSearchModal(state)
    {
      try{
        if(!state.searchModal["state"]){
          state.searchModal["state"] = true
        }
        else{
          state.searchModal["state"] = false
        }
      }
      catch(err){
        console.log(err)
      }
    },
    


    addShadowLec(state, lecData){

      let curDay
      let processed

      for(let i=0; i<5;i++){
        state.shadowList[i].length = 0
      }
      for(let j=0 ; j< lecData.요일.length; j++){    
        curDay =lecData.요일[j]
        
        if(curDay == '시간미지정강좌' || curDay == '집중수업') {
          continue;
        }

        processed = processLec(lecData, curDay)

        for(let p of processed) {
          switch(curDay){
            case '월':
              state.shadowList[0].push(p)
              break
            case '화':
              state.shadowList[1].push(p)
              break
            case '수':
              state.shadowList[2].push(p)
              break
            case '목':
              state.shadowList[3].push(p)
              break
            case '금':
              state.shadowList[4].push(p)
              break
          }
        }
      }
    },
    clearShadowLec(state){
      for(let i=0; i<5;i++){
        state.shadowList[i].length = 0
      }
    },


    setNextColor(state) {
      let nextIdx = state.colorIdx
      let nextColor

      while(1) {
        //nextIdx = (nextIdx + Math.floor(Math.random() * 32)) % state.colorList.length
        nextIdx = (nextIdx + 1) % state.colorList.length
        nextColor = state.colorList[nextIdx] 
        if(state.lecList.findIndex(lec => (lec.isInTable == 1) && (lec.color == nextColor)) == -1) {
          break
        }
      }      
      state.colorIdx = nextIdx
    },
    setHackInfo(state, hackInfo) {
      state.hackData.최소학점 = hackInfo.최소학점
      state.hackData.최대학점 = hackInfo.최대학점
    }
  },
  actions: {
    crawlingGradData(context){
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {type: "import", data: "grad"}, async function(response) {
            let gradData = response.data
            context.commit("setGradList", gradData)
            let stuId = context.getters.getStuId
            let gradList = context.getters.getGradList
            await axios.post('http://3.37.249.210:1324/grad/update', {list: gradList, stu_id: stuId})
            await context.dispatch("fetchGradStat")
      });})
    },
    crawlingWantedData(context){
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {type: "import", data: "wanted"}, function(response) {
          let wantedData = response.data
          context.commit("setUpLecList", wantedData)
      });})
    },

    async loginReq(context) {
        const response = await chrome.runtime.sendMessage({type: "extension", param: "login_info"});
        console.log(response.stuData, response.hackData)
        context.commit("setUserInfo", response.stuData)
        context.commit("setHackInfo", response.hackData)
    },

    async changeScreen(context, screenNum) {      
      if(context.getters.getIsChanged){
        try {
          let data = []
          let lecList = context.getters.getLecList
          let stuId = context.getters.getStuId
          for(let lec of lecList){
            data.push({수업번호: lec.수업번호, isInTable : lec.isInTable})
          }
          await axios.post('http://3.37.249.210:1324/list/update', {list: data, stu_id: stuId})
          context.commit('setIsChanged', false)
        }
        catch(err) {
            console.log(err)
        }
      }
      if(screenNum == 4){
        await context.dispatch("fetchGradStat")
      }
      context.commit("setCurScreen", screenNum);
    },
    async fetchLecList(context) {
      let stuId = context.getters.getStuId
      let lecList = (await axios.get('http://3.37.249.210:1324/list/init', {params: {stu_id: stuId}})).data.list
      context.commit("setUpLecList", lecList)
    },
    async fetchGradList(context) {
      let stuId = context.getters.getStuId
      let gradList = (await axios.get('http://3.37.249.210:1324/grad/init', {params: {stu_id: stuId}})).data.grads
      console.log(gradList)
      context.commit("setGradList", gradList)
    },
    
    async fetchGradStat(context) {
      let stuId = context.getters.getStuId
      let lecList = (await axios.get('http://3.37.249.210:1324/grad/view', {params: {stu_id: stuId}})).data.list
      context.commit("calGradStat", lecList)
    },
    async fetchLecDetails(context, lecNum) {
      let details = (await axios.get('http://3.37.249.210:1324/details', {params: {lec_num: lecNum}})).data
      details.prev_infos.forEach( prev_info => {
        prev_info.희망수업세부정보.sort((a,b) => { return b.학생수 - a.학생수} )
      })
      context.commit("setLecDetails", details)
    },
    async fetchRecommList(context) {
      let selectedTimes = context.state.selectedTimes
      for(let day in selectedTimes) {
          selectedTimes[day].sort((a, b) => { return a.start - b.start});
      }
      let recommList = (await axios.post('http://3.37.249.210:1324/recommend', {time_blocks: selectedTimes})).data
      for(let recomms of recommList) {
        recomms['isRecommShow'] = true

        let parsedLT
        recomms.수업목록.forEach(lec => {
          parsedLT = parseLectime(lec.수업시간);
          lec.수업시간 = parsedLT.수업시간
          lec.요일 = parsedLT.요일
          lec.시작시간 = parsedLT.시작시간
          lec.끝시간 = parsedLT.끝시간
        })

        recomms.수업목록 = recomms.수업목록.sort((a, b) => {
            return dayOrder.indexOf(a.요일[0]) - dayOrder.indexOf(b.요일[0]) 
        });

        context.commit("addRecommList", recomms)
      }
      context.commit("sortRecommList")
    }
  },
  modules: {
  }
})