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
      dateTime: [{time : 0},{date : 0}]
    }
  },
  methods: {
    timelineevent1(time){
      alert("picked time and date is monday and time " + time)
      this.dateTime.time = time
      this.dateTime.date = 1
      this.$emit("selectTable", this.dateTime)
    },
    timelineevent2(time){
      alert("picked time and date is tuesday and time " + time)
      this.dateTime.time = time
      this.dateTime.date = 2
      this.$emit("selectTable", this.dateTime)
    },
    timelineevent3(time){
      alert("picked time and date is wedensday and time " + time)
      this.dateTime.time = time
      this.dateTime.date = 3
      this.$emit("selectTable", this.dateTime)
    },
    timelineevent4(time){
      alert("picked time and date is thursday and time " + time)
      this.dateTime.time = time
      this.dateTime.date = 4
      this.$emit("selectTable", this.dateTime)
    },
    timelineevent5(time){
      alert("picked time and date is friday and time " + time)
      this.dateTime.time = time
      this.dateTime.date = 5
      this.$emit("selectTable", this.dateTime)
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
