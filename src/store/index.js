import { createStore } from 'vuex'

export default createStore({
  state: {
    userTimetable:[],
    selectedDateTime: { 월:[], 화:[], 수:[], 목:[], 금:[]},
    isChanged: false,
    user: {stu_id: "MC0GCCqGSIb3DQIJAyEAw3Dp40VErGHCGs9EEpg0vHCTsO+Q8/tCYa8dNZrXg2k=", username: "한관희", major: "컴퓨터소프트웨어학부", grade: "3학년"},
    grad: [{이수명: "이수명", 기준: "기준", 이수: "이수",변동: "변동", 합계: "합계", 잔여: "잔여"}]
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
      console.log(state.selectedDateTime) //test code
      console.log(state.selectedDateTime[res.day]) //test code
    }
  },
  actions: {
  },
  modules: {
  }
})
