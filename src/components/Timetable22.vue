<template>
  <div class="timetable screen">
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
  name: "Timetable22",
  components: {
    Timeline,
  },
  props: ["timeline1Props", "timeline2Props", "timeline3Props", "timeline4Props", "timeline5Props", "timeline6Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.timetable
  align-items: flex-start
  background-color: $white
  border: 1px none
  display: flex
  gap: 8px
  height: 100vh
  min-height: 540px
  min-width: 400px
  position: relative
  width: 100%
</style>
