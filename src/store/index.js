import { createStore } from 'vuex'
import { fillTL } from '@/util'

export default createStore({
  state: {
    userInfo: {stuId: "MC0GCCqGSIb3DQIJAyEAw3Dp40VErGHCGs9EEpg0vHCTsO+Q8/tCYa8dNZrXg2k=", userName: "한관희", major: "컴퓨터소프트웨어학부", grade: "3학년"},

    isChanged: false,
    isChecked: true,

    lecList:[],
    recommList: [],
    gradList: [{이수명: "이수명", 기준: "기준", 이수: "이수",변동: "변동", 합계: "합계", 잔여: "잔여"}],

    selectedTimes: { 
      월:[], 
      화:[], 
      수:[], 
      목:[], 
      금:[]
    },
    
    lecsInTableList: {
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
    getUserInfo(state) {
      return state.userInfo
    },
    getStuId(state) {
      return state.userInfo.stuId
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
    getLecsInTableList(state) {
      return state.lecsInTableList
    },
    getTimeLines(state) {
      return state.timeLines
    },
    getColorList(state) {
      return state.colorList
    }
  },

  mutations: {
    addLecList(state, lec){
      if(state.lecList.findIndex((x)=> x.수업번호 == lec.수업번호) == -1){
        state.lecList.push(lec)
      }
    },
    setIsChanged(state, tf){
      state.isChanged = tf
    },
    addGradList(state, record){
      if(state.gradList.findIndex((x)=> (x.이수명 == record.이수명) && (x.전공구분명 == record.전공구분명)) == -1) {
        state.gradList.push(record)
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
    //Delete from recommend list
    delRecomm(state, lecToDel) {
      let filed_idx = state.recommList.findIndex((x) => x.영역코드명 == lecToDel.영역코드명);

      if(filed_idx != -1) {
          let lecList = state.recommList[filed_idx].수업목록;
          let lec_idx = lecList.findIndex((x) => x.수업번호 == lecToDel.수업번호);
    
          if(lec_idx != -1) {
            state.recommList[filed_idx].수업목록.splice(lec_idx, 1);
          }
      }
    },
    addLecsInTableList(state, lec) {
      state.lecsInTableList[lec.day].push(lec.info);
    },
    sortLecsInTableList(state, day) {
      state.lecsInTableList[day] = state.lecsInTableList[day].sort((a, b) => {
        return a.start - b.start;
      });
    },
    setUpTimeLines(state, day) {
      state.timeLines[day] = fillTL(state.lecsInTableList[day])
      state.timeLines[day].unshift({ start: 0, end: 1, content: day, blockKind: "dayBlock", isSelected: false})
    }
  },
  actions: {
  },
  modules: {
  }
})
