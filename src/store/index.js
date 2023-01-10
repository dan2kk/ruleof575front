import { createStore } from 'vuex'

export default createStore({
  state: {
    userTimetable:[],
    isChanged: false
  },
  getters: {
    getTimetable: function(state){
      return state.userTimetable
    },
    getIsChange(state){
      return state.isChanged
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
    }
  },
  actions: {
  },
  modules: {
  }
})
