import { createStore } from 'vuex'
import { fillTBL } from '../util'

export default createStore({
  state: {
    userTimetable:[],
    isChanged: false,
    isChecked: true,
    user: {stu_id: "MC0GCCqGSIb3DQIJAyEAw3Dp40VErGHCGs9EEpg0vHCTsO+Q8/tCYa8dNZrXg2k=", username: "한관희", major: "컴퓨터소프트웨어학부", grade: "3학년"},
    grad: [],
    selectedDateTime: { 월:[], 화:[], 수:[], 목:[], 금:[]},
    recommList: [],

    lecsInTable: {
      월 : [],
      화 : [],
      수 : [],
      목 : [],
      금 : []
    },
    
    timeblockLists: {
      시간 : [  
        { start: 0, end: 1, isInTT: false, content: null, blockkind: "sendbox"},
        { start: 9, end: 10, isInTT: false, content: '09:00', blockkind: "timeblock"},
        { start: 10, end: 11, isInTT: false, content: '10:00', blockkind: "timeblock" },
        { start: 11, end: 12, isInTT: false, content: '11:00', blockkind: "timeblock" },
        { start: 12, end: 13, isInTT: false, content: '12:00', blockkind: "timeblock" },
        { start: 13, end: 14, isInTT: false, content: '13:00', blockkind: "timeblock" },
        { start: 14, end: 15, isInTT: false, content: '14:00', blockkind: "timeblock" },
        { start: 15, end: 16, isInTT: false, content: '15:00', blockkind: "timeblock" },
        { start: 16, end: 17, isInTT: false, content: '16:00', blockkind: "timeblock" },
        { start: 17, end: 18, isInTT: false, content: '17:00', blockkind: "timeblock" },
        { start: 18, end: 19, isInTT: false, content: '18:00', blockkind: "timeblock" },
        { start: 19, end: 20, isInTT: false, content: '19:00', blockkind: "timeblock" },
        { start: 20, end: 21, isInTT: false, content: '20:00+', blockkind: "timeblock"}
      ],
      월 : [ ],
      화 : [ ],
      수 : [ ], 
      목 : [ ], 
      금 : [ ]
    }
  },
  getters: {
    getTimetable(state){
      return state.userTimetable
    },
    getIsChange(state){
      return state.isChanged
    },
    getIsChecked(state) {
      return state.isChecked;
    },
    getUserID(state){
      return state.user.stu_id
    },
    getGrad(state){
      return state.grad
    },
    getDateTime(state){
      return state.selectedDateTime
    },
    getTextTable(state){
      return state.textTable
    },
    getBlocknumTable(state){
      return state.blocknumTable
    },
    getRecommend(state){
      return state.recommList
    },
    getLecture(state){
      return state.lectureInfo
    },
    getTimeblockLists(state) {
      return state.timeblockLists;
    },
    getLecsInTable(state) {
      return state.lecsInTable;
    }
  },
  mutations: {
    addTimetable(state, res){
      if(state.userTimetable.findIndex((x)=> x.수업번호 == res.수업번호) == -1){
        state.userTimetable.push(res)
      }
    },
    setIsChanged(state, tf){
      state.isChanged = tf
    },
    addGrad(state, res){
      if(state.grad.findIndex((x)=> (x.이수명 == res.이수명) &&(x.전공구분명 == res.전공구분명)) == -1){
        state.grad.push(res)
      }
    },
    clickDateTime(state, res){
      let temp = state.selectedDateTime[res.day].findIndex((x)=>(x.start == res.start))
      if(temp == -1) state.selectedDateTime[res.day].push(res.data)
    },
    changeBnum(state, data){
      state.blocknumTable[data.x][data.y] = data.dat
    },
    changeText(state, data){
      state.textTable[data.x][data.y] = data.dat
    },
    changeLec(state, res){
      state.lectureInfo = res
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
    addToLecsInTable(state, lec) {
      state.lecsInTable[lec.day].push(lec.info);
    },
    sortLecsInTable(state, day) {
        state.lecsInTable[day] = state.lecsInTable[day].sort((a, b) => {
          return a.start - b.start;
        });
    },
    setTimeblockLists(state, day) {
      state.timeblockLists[day] = fillTBL(state.lecsInTable[day])
      state.timeblockLists[day].unshift({ start: 0, end: 1, isInTT: false, content: day, blockkind: "dayblock", isclicked: false})
    }
  },
  actions: {
  },
  modules: {
  }
})
