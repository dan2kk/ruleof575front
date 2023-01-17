import { createStore } from 'vuex'
import { fillTBL } from '@/util'

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
    
    lecsInTable: {
      월 : [],
      화 : [],
      수 : [],
      목 : [],
      금 : []
    },

    timeLines: {
      시간 : [  
        { start: 9, end: 10, isInTT: false, content: '09:00' },
        { start: 10, end: 11, isInTT: false, content: '10:00' },
        { start: 11, end: 12, isInTT: false, content: '11:00' },
        { start: 12, end: 13, isInTT: false, content: '12:00' },
        { start: 13, end: 14, isInTT: false, content: '13:00' },
        { start: 14, end: 15, isInTT: false, content: '14:00' },
        { start: 15, end: 16, isInTT: false, content: '15:00' },
        { start: 16, end: 17, isInTT: false, content: '16:00' },
        { start: 17, end: 18, isInTT: false, content: '17:00' },
        { start: 18, end: 19, isInTT: false, content: '18:00' },
        { start: 19, end: 20, isInTT: false, content: '19:00' }
      ],
      월 : [ ],
      화 : [ ],
      수 : [ ], 
      목 : [ ], 
      금 : [ ]
    }
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
    getLecsInTable(state) {
      return state.lecsInTable
    },
    getTimeLines(state) {
      return state.timeLines
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
      let temp = state.selectedTimes[res.day].findIndex( (x) => (x.start == res.data.start))
      if(temp != -1){ // array 존재시
        state.selectedTimes[res.day].splice(temp, 1)
        console.log("delete "+res.day + " " + res.data)
      }
      else{ //array 에 없을시
        state.selectedTimes[res.day].push(res.data)
        console.log("add "+res.day + " " + res.data)
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
    addLecsInTable(state, lec) {
      state.lecsInTable[lec.day].push(lec.info);
    },
    sortLecsInTable(state, day) {
        state.lecsInTable[day] = state.lecsInTable[day].sort((a, b) => {
          return a.start - b.start;
        });
    },
    setUpTimeLines(state, day) {
      state.timeblockLists[day] = fillTBL(state.lecsInTable[day]);
    }
  },
  actions: {
  },
  modules: {
  }
})
