<template>
  <div class="start screen">
    <user-info-time-table
      :className="userInfoTimeTableProps.className"
      :userInfoBoxProps="userInfoTimeTableProps.userInfoBoxProps"
      :timetableProps="userInfoTimeTableProps.timetableProps"
      v-on:sendDateandTime="sendTimeTable"
    />
    <x-menu 
      :textboxMenuTabProps="xMenuProps.textboxMenuTabProps" 
      :initialMenuProps="xMenuProps.initialMenuProps"
      v-on:logined="sendLoginInfo"
    />
  </div>
</template>

<script>
import UserInfoTimeTable from "./UserInfoTimeTable";
import XMenu from "./XMenu";
export default {
  name: "Start",
  components: {
    UserInfoTimeTable,
    XMenu,
  },
  props: ["userInfoTimeTableProps", "xMenuProps"],
  methods: {
    sendTimeTable(array){
      for(let i=0; i< array.length; i++){
        alert("array"+i+ "th elements = "+array[i].selectDate + " "+ array[i].selectTime)
      }
    },
    sendLoginInfo(user){
      alert("receive login event to Start.vue")
      alert(user.number+ " "+user.username+ " "+user.major+" "+user.grade)
    }
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
