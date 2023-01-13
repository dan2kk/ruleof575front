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
      ["월요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["화요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["수요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["목요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["금요일", "", "", "", "", "", "", "", "", "", "", "", "",]],
    blocknumTable: [
        [7,8,8,8,8,8,8,8,8,8,8,8,8],
        [8,1,1,1,1,1,1,1,1,1,1,1,1],
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
    },
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
    clickCourse(state, res){ // res.day, res.time
      let temp = null
      
    },
    changeBnum(state, data){
      state.blocknumTable[data.x][data.y] = data.dat
    },
    changeText(state, data){
      state.textTable[data.x][data.y] = data.dat
    },
    initBnum(state){
      for(let i=1 ; i< state.blocknumTable.length;i++){
        for(let j=1; j< state.blocknumTable[i].length; j++){
          if(state.blocknumTable[i][j] < 7){
            state.blocknumTable[i][j] = 7 - state.blocknumTable[i][j] //클릭된 상태 만들기
            let data1 = {start: 0, end: 0}
            switch(state.blocknumTable[i][j]){
              case 6: // 풀칸 클릭 가능
                data1.start = j + 8
                data1.end = j + 1 + 8
                break;
              case 5:  // 아랫칸 클릭 가능
                data1.start = j + 0.5 + 8
                data1.end = j + 1 + 8
                break;
              case 4:  // 윗칸 클릭 가능
                data1.start = j + 8
                data1.end = j + 0.5 + 8
                break;
              default:
                console.log(i + "/"+ j + "/"+ state.blocknumTable[i][j])
            }
            let day1 = null
            switch(i){
              case 1:
                day1 = '월'
                break;
              case 2:
                day1 = '화'
                break;
              case 3:
                day1 = '수'
                break;
              case 4:
                day1 = '목'
                break;
              case 5:
                day1 = '금'
                break;
              default:
                console.log("init table err!")
                break;
            }
            let temp = state.selectedDateTime[day1].findIndex((x)=>(x.start == data1.start))
            if(temp != -1){ //array 에 없을시
              state.selectedDateTime[day1].push(data1)
            }
          }
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
