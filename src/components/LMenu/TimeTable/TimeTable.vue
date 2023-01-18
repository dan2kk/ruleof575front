<template>
  <div class="time-table">
    <TimeLine :day = 0 />
    <TimeLine :day = 1 />
    <TimeLine :day = 2 />
    <TimeLine :day = 3 />
    <TimeLine :day = 4 />
    <TimeLine :day = 5 />
  </div>

</template>

<script>
<<<<<<< HEAD:src/components/Timetable.vue
import { onMounted } from "vue";
import Timeline from "./Timeline";
=======
import TimeLine from "./TimeLine";
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645:src/components/LMenu/TimeTable/TimeTable.vue
export default {
  name: "TimeTable",
  components: {
<<<<<<< HEAD:src/components/Timetable.vue
    Timeline,
  },
  props: [ ],
  methods: {
    onMounted()
      {
        this.$store.mutations.setTimeblockLists(state, day);
      }
  },
=======
    TimeLine
  }
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645:src/components/LMenu/TimeTable/TimeTable.vue
};

</script>

<style lang="sass">
@import '../../../../variables'

.time-table
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

<<<<<<< HEAD:src/components/Timetable.vue
.timetable
  align-items: center
  background-color: $white
  display: flex
  gap: 2px
  height: 520px
  position: relative
  width: 400px
=======
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645:src/components/LMenu/TimeTable/TimeTable.vue

</style>
