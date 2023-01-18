import { createStore } from 'vuex'
import { fillTL, processLec } from '@/util'
import axios from "axios"

export default createStore({
  state: {
    isLogined: false,

    userInfo: {stuId: "MC0GCCqGSIb3DQIJAyEAw3Dp40VErGHCGs9EEpg0vHCTsO+Q8/tCYa8dNZrXg2k=", userName: "한관희", major: "컴퓨터소프트웨어학부", grade: "3학년"},
    isChanged: false,
    isChecked: true,
    curScreen: 0,

    lecList:[],
    recommList: [],
    gradList: [],
<<<<<<< HEAD
    lecDetail1: {state:false},
    lecDetail2: {state:false},
    shadowList: [[],[],[],[],[]],
=======
    lecDetailsLeft: {state: false},
    lecDetailsRight: {state: false},
>>>>>>> 842dfd80f314a63a2ccac7e265945303336ba29d

    selectedTimes: { 
      월:[], 
      화:[], 
      수:[], 
      목:[], 
      금:[]
    },
    
    lecsInTable: {
      월 : [],
      화 : [],
      수 : [],
      목 : [],
      금 : []
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
    colorList: [
      "#ffb3b7", "#fedcdd", "#dbe5f1", "#a5bcde", "#7d9dcd", "#ffa970", "#ffd77f", 
      "#edf3c3", "#acd8d9", "#7fbcff", "#a9e5cc", "#dcedc1", "#fed2b5", "#ffaba7", 
      "#ff8b94", "#94cfc9", "#6db3bf", "#4699b7", "#20566e", "#183641", "#cde4d2", 
      "#d2e1a8", "#d8de7e", "#deda52", "#aacd67", "#b9c8e7", "#8fbae5", "#6e91e3", 
      "#7978c6", "#8b55a9", "#f1a8bc", "#eee58a", "#c4ecb0"
    ]
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
    getCurScreen(state) {
      return state.curScreen
    },
    getIsChange(state){
      return state.isChanged
    },
    getIsChecked(state) {
      return state.isChecked
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
    getLecsInTable(state) {
      return state.lecsInTable
    },
    getTimeLines(state) {
      return state.timeLines
    },
    getColorList(state) {
      return state.colorList
    },
    getLecDetailsLeft(state){
      return state.lecDetailsLeft
    },
<<<<<<< HEAD
    getLecDetail2(state){
      return state.lecDetail2
    },
    getShadowLec(state){
      return state.shadowList
=======
    getLecDetailsRight(state){
      return state.lecDetailsRight
>>>>>>> 842dfd80f314a63a2ccac7e265945303336ba29d
    }
  },


  mutations: {
    setIsLogined(state, tf) {
      state.isLogined = tf
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
    setIsChanged(state, tf){
      state.isChanged = tf
    },
    setCurScreen(state, screenNum) {
      state.curScreen = screenNum
    },
    async changeScreen(state, screenNum) {      
      if(state.isChanged){
        let data = []
        let temp = state.lecList

        for(let i = 0 ; i< temp.length; i++){
          data.push({수업번호: temp[i].수업번호, value: temp[i].value})
        }
        try {
          await axios.post('/list/update', {list: data, stu_id: state.stuId})
          state.isChanged = false;
        }
        catch(err) {
            console.log(err)
        }
      }
      if(screenNum == 4){
        this.commit("setUpGradList")
      }
      state.curScreen = screenNum
    },

    addGradList(state, record){
      if(state.gradList.findIndex((x)=> (x.이수명 == record.이수명) && (x.전공구분명 == record.전공구분명)) == -1) {
        state.gradList.push(record)
      }
    },
    async setUpGradList(state) {
      let gradData = {}

      for(let i=1; i < state.gradList.length; i++){
        gradData[state.gradList[i].이수명] = 0;
      }
      try{
        let lecList = (await axios.get('/grad/view', {params: {stu_id: state.userInfo.stuId}})).data.list
        
        for(let lec of lecList) {
          gradData.졸업학점 += lec.학점
          switch(lec.이수구분코드명){
            case "전공심화": 
            case "전공핵심":
              gradData.전공학점 += lec.학점
              break;
            case "핵심교양":
              gradData.핵심교양 += lec.학점
              switch(lec.영역코드명){
                case "인문과예술영역":
                  gradData.인문과예술영역 += lec.학점
                  break
                case "사회와세계영역":
                  gradData.사회와세계영역 += lec.학점
                  break
                case "미래산업과창업영역":
                  gradData.미래산업과창업영역 += lec.학점
                  break
                case "글로벌언어와문화영역":
                  gradData.글로벌언어와문화영역 += lec.학점
                  break
                case "과학과기술영역":
                  gradData.과학과기술영역 += lec.학점
                  break
                case "고전읽기영역":
                  gradData.고전읽기영역 += lec.학점
                  break
                }
              break;
            default:
              console.log("이수구분코드명 없는것!")
              break;
          }
          if(lec.영어전용){
            gradData.영어전용강좌수 += 1
          }
          switch(lec.이수단위){
            case "100단위": case "200단위": case "300단위":
              gradData["100~300단위"] += lec.학점
              break;
            case "400단위":
              gradData["400단위"] += lec.학점
              break;
            default:
              console.log('단위부분 에러')
              break;
          }
        }
      }
      catch(err){
        alert(err)
      }

      for(let i=1; i< state.gradList.length; i++){
        state.gradList[i].변동 = Number(gradData[state.gradList[i].이수명])
        state.gradList[i].합계 = Number(state.gradList[i].변동) + Number(state.gradList[i].이수)
        state.gradList[i].잔여 = Number(state.gradList[i].기준) - Number(state.gradList[i].합계)
        if(state.gradList[i].잔여 < 0) state.gradList[i].잔여 = 0
      }
    },

    addSelectedTimes(state, res){
      // let temp = state.selectedTimes[res.day].findIndex( (x) => (x.start == res.data.start))
      // if(temp != -1){ // array 존재시
      //   state.selectedTimes[res.day].splice(temp, 1)
      //   console.log("delete "+res.day + " " + res.data)
      // }
      // else{ //array 에 없을시
      //   state.selectedTimes[res.day].push(res.data)
      //   console.log("add "+res.day + " " + res.data)
      // }
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
    addRecommList(state, lecs) {
      state.recommList.push(lecs)
    },
    //Delete from recommend list
    delRecommList(state, lecToDel) {
      let filedIdx = state.recommList.findIndex((x) => x.영역코드명 == lecToDel.영역코드명);

      if(filedIdx != -1) {
          let lecList = state.recommList[filedIdx].수업목록;
          let lecIdx = lecList.findIndex((x) => x.수업번호 == lecToDel.수업번호);
    
          if(lecIdx != -1) {
            state.recommList[filedIdx].수업목록.splice(lecIdx, 1);
          }
      }
    },
    clearRecommList(state) {
      state.recommList.length = 0;
    },

    addLecsInTable(state, lec) {
      state.lecsInTable[lec.day].push(lec.info);
    },
    sortLecsInTable(state, day) {
      state.lecsInTable[day] = state.lecsInTable[day].sort((a, b) => {
        return a.start - b.start;
      });
    },
    setUpTimeLines(state, day) {
      state.timeLines[day] = fillTL(state.lecsInTable[day])
      state.timeLines[day].unshift({ start: 0, end: 0.5, content: day, blockKind: "dayBlock", isSelected: false})
    },

    async addLecDetails(state, lecNum){ //수업정보 데이터 불러오기
      try{
        let details = (await axios.get('/details', {params: {lec_num: lecNum}})).data
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
<<<<<<< HEAD
      console.log(number)
    },
    addShadowLec(state, lecDat){
      for(let i=0; i<5;i++){
        state.shadowList[i].length = 0
      }
      for(let j=0 ; j< lecDat.요일.length; j++){              
        if(lecDat.요일[j] == '시간미지정강좌') {
          continue;
        }
        switch(lecDat.요일[j]){
          case '월':
            state.shadowList[0].push(processLec(lecDat, j))
            break
          case '화':
            state.shadowList[1].push(processLec(lecDat, j))
            break
          case '수':
            state.shadowList[2].push(processLec(lecDat, j))
            break
          case '목':
            state.shadowList[3].push(processLec(lecDat, j))
            break
          case '금':
            state.shadowList[4].push(processLec(lecDat, j))
            break
        }
      }
    },
=======
    }
>>>>>>> 842dfd80f314a63a2ccac7e265945303336ba29d
  },
  actions: {
  },
  modules: {
  }
})
