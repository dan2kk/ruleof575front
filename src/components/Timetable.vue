<template>
  <div :class="[`timetable`, className || ``]">
    <timeline v-bind="timeline1Props" />
    <timeline v-bind="timeline2Props" />
    <timeline v-bind="timeline3Props" />
    <timeline v-bind="timeline4Props" />
    <timeline v-bind="timeline5Props" />
    <timeline v-bind="timeline6Props" />
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
