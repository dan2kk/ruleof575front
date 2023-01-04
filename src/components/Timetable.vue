<template>
  <div :class="[`timetable`, className || ``]">
    <timeline v-bind="timeline1Props"/>
    <timeline v-bind="timeline2Props" v-on:timeboxclicked="timelineevent1"/>
    <timeline v-bind="timeline3Props" v-on:timeboxclicked="timelineevent2"/>
    <timeline v-bind="timeline4Props" v-on:timeboxclicked="timelineevent3"/>
    <timeline v-bind="timeline5Props" v-on:timeboxclicked="timelineevent4"/>
    <timeline v-bind="timeline6Props" v-on:timeboxclicked="timelineevent5"/>
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
  methods: {
    timelineevent1(time){
      alert("picked time and date is monday and time " + time)
    },
    timelineevent2(time){
      alert("picked time and date is tuesday and time " + time)
    },
    timelineevent3(time){
      alert("picked time and date is wedensday and time " + time)
    },
    timelineevent4(time){
      alert("picked time and date is thursday and time " + time)
    },
    timelineevent5(time){
      alert("picked time and date is friday and time " + time)
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
  height: 540px
  margin-left: 79px
  margin-top: 330px
  position: relative
  width: 400px

.timetable.timetable-1,
.timetable.timetable-2
  margin-left: unset
  margin-top: unset
</style>
