import { createStore } from 'vuex'

export default createStore({
  state: {
    userTimetable:[],
    isChanged: false,
    user: {stu_id: "MC0GCCqGSIb3DQIJAyEAw3Dp40VErGHCGs9EEpg0vHCTsO+Q8/tCYa8dNZrXg2k=", username: "한관희", major: "컴퓨터소프트웨어학부", grade: "3학년"},
    grad: [{이수명: "이수명", 기준: "기준", 이수: "이수",변동: "변동", 합계: "합계", 잔여: "잔여"}],
    selectedDateTime: { 월:[], 화:[], 수:[], 목:[], 금:[]},
    textTable: [
      ["?", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00+"],
      ["월요일", "소프트웨어공학", "", "", "", "", "", "", "", "", "", "", "",],
      ["화요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["수요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["목요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["금요일", "", "", "", "", "", "", "", "", "", "", "", "",]],
    blocknumTable: [
        [7,8,8,8,8,8,8,8,8,8,8,8,8],
        [8,9,9,2,1,1,1,1,1,1,1,1,1],
        [8,1,1,1,1,1,1,1,1,1,1,1,1],
        [8,1,1,1,1,1,1,1,1,1,1,1,1],
        [8,1,1,1,1,1,1,1,1,1,1,1,1],
        [8,1,1,1,1,1,1,1,1,1,1,1,1]],
  },
  getters: {
    getTimetable(state){
      return state.userTimetable
    },
    getIsChange(state){
      return state.isChanged
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
    }
  },
  mutations: {
    addTimetable(state, res){
      if(state.userTimetable.findIndex((x)=> x.수업번호 == res.수업번호) == -1){
        state.userTimetable.push(res)
      }
    },
    toggleSwitch(state, tf){
      state.isChanged = tf
    },
    addGrad(state, res){
      if(state.grad.findIndex((x)=> (x.이수명 == res.이수명) &&(x.전공구분명 == res.전공구분명)) == -1){
        state.grad.push(res)
      }
    },
    clickDateTime(state, res){
      let temp = state.selectedDateTime[res.day].findIndex((x)=>(x.start == res.data.start))
      if(temp != -1){ // array 존재시
        state.selectedDateTime[res.day].splice(temp, 1)
        console.log("delete "+res.day+ " " + res.data)
      }
      else{ //array 에 없을시
        state.selectedDateTime[res.day].push(res.data)
        console.log("add "+res.day+" " + res.data)
      }
    },
    changeBnum(state, data){
      state.blocknumTable[data.x][data.y] = data.dat
    },
    changeText(state, data){
      state.textTable[data.x][data.y] = data.dat
    }
  },
  actions: {
  },
  modules: {
  }
})
