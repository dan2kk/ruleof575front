<template>
  <div :class="[`timetable`]">
    <timeline :day = 0 />
    <timeline :day = 1 />
    <timeline :day = 2 />
    <timeline :day = 3 />
    <timeline :day = 4 />
    <timeline :day = 5 />
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
  props: [ ],
  methods: {
    onMounted()
      {
        this.$store.mutations.setTimeblockLists(state, day);
      }
  },
};

</script>

<style lang="sass">
@import '../../variables'

.sendBtn
    font-size: 13px 
    background: $orange-yellow
    color: white 
    display: flex 
    align-items: center 
    border: none 
    border-radius: 4px 
    overflow: hidden
    height: 40px
    width: 60px
    transition: all 0.2s
    .span
      display: block 
      margin-left: 0.3em 
      transition: all 0.3s ease-in-out 
    .svg
      display: block 
      transform-origin: center center 
      transition: transform 0.3s ease-in-out 
.sendBtn:hover
  .svg-wrapper
    animation: fly-1 0.6s ease-in-out infinite alternate 
  .svg
    transform: translateX(1.2em) rotate(45deg) scale(1.1) 
  .span
    transform: translateX(5em)
.sendBtn:active
  transform: scale(0.95)

.timetable
  align-items: center
  background-color: $white
  display: flex
  gap: 2px
  height: 520px
  position: relative
  width: 400px
  border-style: solid
  border-color: white
  border-width: 1px

</style>
