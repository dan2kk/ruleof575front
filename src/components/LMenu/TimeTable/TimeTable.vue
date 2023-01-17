<template>
  <div class="time-table">
    <TimeLine :day = 월 />
    <TimeLine :day = 화 />
    <TimeLine :day = 수 />
    <TimeLine :day = 목 />
    <TimeLine :day = 금 />
    <TimeLine :day = 토 />
  </div>

</template>

<script>
import TimeLine from "./TimeLine";
export default {
  name: "TimeTable",
  components: {
    TimeLine
  }
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


</style>
