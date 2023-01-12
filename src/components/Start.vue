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
            result[key].sort((a, b) => { return a.start - b.start; });
        }
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
          console.log(timetabledata[i])
        }
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
