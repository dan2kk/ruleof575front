<template>
  <div :class="[`timetable`, className || ``]">
    <timeline :clickedProps=false v-bind="timeline1Props"/>
    <timeline :clickedProps=true v-bind="timeline2Props" v-on:timeboxclicked="timelineevent1"/>
    <timeline :clickedProps=true v-bind="timeline3Props" v-on:timeboxclicked="timelineevent2"/>
    <timeline :clickedProps=true v-bind="timeline4Props" v-on:timeboxclicked="timelineevent3"/>
    <timeline :clickedProps=true v-bind="timeline5Props" v-on:timeboxclicked="timelineevent4"/>
    <timeline :clickedProps=true v-bind="timeline6Props" v-on:timeboxclicked="timelineevent5"/>
  </div>
</template>

<script>
import { onMounted } from "vue";
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
      selectedDateTime: [{time : 0},{date : 0}],
      timeArray: [[],[],[],[],[]]
    }
  },
  methods: {
    timelineevent1(time){
      alert("picked time and date is 월요일 and time " + time)
      var temp = {selectTime: time, selectDate: 1}
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
      var temp = {selectTime: time, selectDate: 2}
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
      var temp = {selectTime: time, selectDate: 3}
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
      var temp = {selectTime: time, selectDate: 4}
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
      var temp = {selectTime: time, selectDate: 5}
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
  onMounted(){
    for(let i=0; i<5;i++){
      for(let j=0; j< 12; j++){
        this.timeArray[i].push(1)
      }
    }
    
  }
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


</style>
