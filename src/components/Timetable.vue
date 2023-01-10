<template>
  <div :class="[`timetable`, className || ``]">
    <timeline :clickedProps="this.timeArray[0]" v-bind="timeline1Props" v-on:sendboxclicked="sendtimeevent"/>
    <timeline :clickedProps="this.timeArray[1]" v-bind="timeline2Props" v-on:timeboxclicked="timelineevent1"/>
    <timeline :clickedProps="this.timeArray[2]" v-bind="timeline3Props" v-on:timeboxclicked="timelineevent2"/>
    <timeline :clickedProps="this.timeArray[3]" v-bind="timeline4Props" v-on:timeboxclicked="timelineevent3"/>
    <timeline :clickedProps="this.timeArray[4]" v-bind="timeline5Props" v-on:timeboxclicked="timelineevent4"/>
    <timeline :clickedProps="this.timeArray[5]" v-bind="timeline6Props" v-on:timeboxclicked="timelineevent5"/>
  </div>
</template>

<script>
import Timeline from "./Timeline";
export default {
  name: "Timetable",
  components: {
    Timeline,
  },
  props: [
    "className",
    "timeline1Props",
    "timeline2Props",
    "timeline3Props",
    "timeline4Props",
    "timeline5Props",
    "timeline6Props",
  ],
  data() {
    return {
      selectedDateTime: [],
      timeArray: [
      ["6","4","4","4","4","4","4","4","4","4","4","4","4"],
      ["4","1","1","1","1","1","1","1","1","1","1","1","1"],
      ["4","1","1","1","1","1","1","1","1","1","1","1","1"],
      ["4","1","1","1","1","1","1","1","1","1","1","1","1"],
      ["4","1","1","1","1","1","1","1","1","1","1","1","1"],
      ["4","1","1","1","1","1","1","1","1","1","1","1","1"]]
    }
  },
  methods: {
    timelineevent1(time){
      alert("picked time and date is 월요일 and time " + time)
      var temp = {selectTime: time, selectDate: "월"}
      var index = this.selectedDateTime.findIndex(function(item){return (item.selectDate == temp.selectDate)&&(item.selectTime==temp.selectTime)})
      if(index != -1){
        alert("delete select Time and Date : Monday(1), "+ time)
        this.selectedDateTime.splice(index, 1)
        this.updateevent(2)
      }
      else{
        alert("add select Time and Date : 월요일(1), "+ time)
        this.selectedDateTime.push(temp)
        this.updateevent(1)
      }
      this.updateevent()
    },
    timelineevent2(time){
      alert("picked time and date is 화요일 and time " + time)
      var temp = {selectTime: time, selectDate: "화"}
      var index = this.selectedDateTime.findIndex(function(item){return (item.selectDate == temp.selectDate)&&(item.selectTime==temp.selectTime)})
      if(index != -1){
        alert("delete select Time and Date : 화요일(2), "+ time)
        this.selectedDateTime.splice(index, 1)
        this.updateevent(2)
      }
      else{
        alert("add select Time and Date : 화요일(2), "+ time)
        this.selectedDateTime.push(temp)
        this.updateevent(1)
      }
    },
    timelineevent3(time){
      alert("picked time and date is 수요일 and time " + time)
      var temp = {selectTime: time, selectDate: "수"}
      var index = this.selectedDateTime.findIndex(function(item){return (item.selectDate == temp.selectDate)&&(item.selectTime==temp.selectTime)})
      if(index != -1){
        alert("delete select Time and Date : 수요일(3), "+ time)
        this.selectedDateTime.splice(index, 1)
        this.updateevent(2)
      }
      else{
        alert("add select Time and Date : 수요일(3), "+ time)
        this.selectedDateTime.push(temp)
        this.updateevent(1)
      }
      this.updateevent()
    },
    timelineevent4(time){
      alert("picked time and date is 목요일 and time " + time)
      var temp = {selectTime: time, selectDate: "목"}
      var index = this.selectedDateTime.findIndex(function(item){return (item.selectDate == temp.selectDate)&&(item.selectTime==temp.selectTime)})
      if(index != -1){
        alert("delete select Time and Date : 목요일(4), "+ time)
        this.selectedDateTime.splice(index, 1)
        this.updateevent(2)
      }
      else{
        alert("add select Time and Date : 목요일(4), "+ time)
        this.selectedDateTime.push(temp)
        this.updateevent(1)
      }
      this.updateevent()
    },
    timelineevent5(time){
      alert("picked time and date is 금요일 and time " + time)
      var temp = {selectTime: time, selectDate: "금"}
      var index = this.selectedDateTime.findIndex(function(item){return (item.selectDate == temp.selectDate)&&(item.selectTime==temp.selectTime)})
      if(index != -1){
        alert("delete select Time and Date : 금요일(5), "+ time)
        this.selectedDateTime.splice(index, 1)
        this.updateevent(2)
      }
      else{
        alert("add select Time and Date : 금요일(5), "+ time)
        this.selectedDateTime.push(temp)
        this.updateevent(1)
      }
    },
    sendtimeevent(){
      alert("send selected time to UserInfoTimeTable")
      this.$emit("selectTable", this.selectedDateTime)
    },
    updateevent(number){
      var test = 0
    }
  },
};
</script>

<style lang="sass">
@import '../../variables'

.timetable
  align-items: center
  background-color: $white
  display: flex
  gap: 8px
  height: 520px
  position: relative
  width: 400px
  border-style: solid
  border-color: white
  border-width: 1px

</style>
