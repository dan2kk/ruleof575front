<template>
  <div :class="[`timetable`]">
    <timeline :posx = 0 />
    <timeline :posx = 1 />
    <timeline :posx = 2 />
    <timeline :posx = 3 />
    <timeline :posx = 4 />
    <timeline :posx = 5 />
  </div>
</template>

<script>
import Timeline from "./Timeline";
export default {
  name: "Timetable",
  components: {
    Timeline,
  },
  props: [ ],
  methods: {
    
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
