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
import { assertTSAnyKeyword } from "@babel/types";

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
    async sendTimeTable(){
      try {
        let result= this.$store.getters.getDateTime
        for(let key in result) {
            result[key].sort((a, b) => { return a.start - b.start});
        }
        console.log(result)
        let date = await axios.post('/test', {times: result, stu_id: this.$store.getters.getUserID})
        
      } 
      catch (error) {
        console.log(error)
      }
    },
    async sendLoginInfo(){
      alert("receive login event to Start.vue")
      try{
        let timetabledata = (await axios.get('/list/init', {params: {stu_id: this.$store.getters.getUserID}})).data
        for(let i=0; i< timetabledata.length;i++){
          this.$store.commit("addTimetable", timetabledata[i])
          //console.log(timetabledata[i])
          if(timetabledata[i].state == 1){ //시간표에 추가해야 할 것들
            //console.log(timetabledata[i])
            for(let j=0 ; j< timetabledata[i].요일.length; j++){
              let day = 0
              switch(timetabledata[i].요일[j]){
                case '월': 
                  day=1 
                  break
                case '화': 
                  day=2
                  break
                case '수': 
                  day=3
                  break
                case '목': 
                  day=4
                  break
                case '금': 
                  day=5
                  break
                default:
                  alert("null")
                  continue
              }
              let startTime = Number(timetabledata[i].시작시간[j].slice(0, -6))
              let endTime = Number(timetabledata[i].끝시간[j].slice(0, -6))
              let startHalf = (timetabledata[i].시작시간[j].slice(-5, -3) != '00')
              let endHalf = (timetabledata[i].끝시간[j].slice(-5, -3) != '00')
              //console.log(startTime+" "+endTime+" "+startHalf+" "+endHalf)
              for(let k=startTime - 8; k < endTime -8; k++){
                this.$store.getters.getBlocknumTable[day][k] = timetabledata[i].수업번호
              }
              //if(startHalf) this.$store.getters.getBlocknumTable[day][startTime-8] = 3
              //if(endHalf) this.$store.getters.getBlocknumTable[day][endTime-8] = 2
              if(startHalf){
                if(this.$store.getters.getBlocknumTable[day][startTime-8] != 1){ //이미 반칸
                  this.$store.getters.getBlocknumTable[day][startTime-8] = timetabledata[i].수업번호
                }
                else this.$store.getters.getBlocknumTable[day][startTime-8] = 3
              }
              if(endHalf){
                if(this.$store.getters.getBlocknumTable[day][endTime-8] != 1){ //이미 반칸
                  this.$store.getters.getBlocknumTable[day][endTime-8] = timetabledata[i].수업번호
                }
                else this.$store.getters.getBlocknumTable[day][endTime-8] = 2
              } 
            }
          }
        }
        this.$store.commit("initBnum")
      }
      catch(err){
        alert(err)
      }
    },
    async sendCourseInfo(number){ //미완
      alert("receive course event to Start.vue")
      try{
        let coursedata = (await(axios.get('/details', {params: {lec_num: number}}))).data
        this.$refs.xmenu.getCourseInfo(coursedata)
      }
      catch(err){
        console.log(err)
      }
    }
  },
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
