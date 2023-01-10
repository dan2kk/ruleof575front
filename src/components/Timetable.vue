<template>
  <div :class="[`timetable`, className || ``]">
    <timeline :blocknumArray= this.blocknumTable[0] :textArray = this.textTable[0] :posy = 0 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[1] :textArray = this.textTable[1] :posy = 1 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[2] :textArray = this.textTable[2] :posy = 2 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[3] :textArray = this.textTable[3] :posy = 3 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[4] :textArray = this.textTable[4] :posy = 4 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[5] :textArray = this.textTable[5] :posy = 5 v-on:passInfo="receiveInfoAndUpdate"/>
  </div>
</template>

<script>
import { VueElement } from "vue";
import vueConfig from "vue.config";
import Timeline from "./Timeline";
export default {
  name: "Timetable",
  components: {
    Timeline,
  },
  props: [ ],
  data() {
    return {
      selectedDateTime: [],
      a: 1,
      blocknumTable: [
      [7,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,1,1,1,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1]],
      textTable: [
      ["?", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00+"],
      ["월요일", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",],
      ["화요일", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",],
      ["수요일", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",],
      ["목요일", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",],
      ["금요일", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".",]]
    }
  },
  methods: {
    receiveInfoAndUpdate(blocknum, text, posx, posy)
    {
      this.blocknumTable[posy][posx] = blocknum;
      this.textTable[posy][posx] = text;
    },
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
