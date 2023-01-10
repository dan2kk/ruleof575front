<template>
  <div class="start screen">
    <user-info-time-table
      :className="userInfoTimeTableProps.className"
      :userInfoBoxProps="userInfoTimeTableProps.userInfoBoxProps"
      :timetableProps="userInfoTimeTableProps.timetableProps"
      v-on:sendDateandTime="sendTimeTable"
    />
    <x-menu ref="xmenu"
      :textboxMenuTabProps="xMenuProps.textboxMenuTabProps" 
      :initialMenuProps="xMenuProps.initialMenuProps"
      :userTimetable="this.userTimetable"
      v-on:logined="sendLoginInfo"
    />
  </div>
</template>

<script>

import UserInfoTimeTable from "./UserInfoTimeTable";
import XMenu from "./XMenu";
import axios from 'axios';

export default {
  name: "Start",
  components: {
    UserInfoTimeTable,
    XMenu,
  },
  props: ["userInfoTimeTableProps", "xMenuProps"],
  data(){
    return{
      userTimetable: [{수업번호:null, 과목명:null, 대표교강사명:null, 수업시간:null, value:false}]
    }
  },
  methods: {
    async sendTimeTable(array){
      try {
        let date = await axios.post('/test', {data: array})
        alert(date.data.test)
      } catch (error) {
        console.log(error)
      }
    },
    async sendLoginInfo(user){
      alert("receive login event to Start.vue")
      alert(user.number+ " "+user.username+ " "+user.major+" "+user.grade)
      try{
        let timetabledata = (await axios.get('/list/login', {params: {stu_id: user.number}})).data
        this.userTimetable.pop() //초기데이터 삭제
        for(let i=0; i< timetabledata.length;i++){
          this.userTimetable.push(timetabledata[i])
          console.log(timetabledata[i])
          console.log(this.userTimetable[i])
        }
        this.$refs.xmenu.update1()
      }
      catch(err){
        console.log(err)
      }
    }
  },
  onCreated(){
    EventBus.$on('addCourse', (res)=> {
      if(this.userTimetable.findIndex((x)=> x.수업번호 == res.수업번호) == -1){
        this.userTimetable.push(res)
      }
    })
  }
};
</script>

<style lang="sass">
@import '../../variables'

.start
  align-items: flex-start
  background-color: $error-color
  border: 1px none
  display: flex
  height: 600px
  position: absolute
  width: 800px
</style>
