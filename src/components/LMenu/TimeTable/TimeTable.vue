<template>
  <div class="time-table-cart">
    <div class="time-table">
      <TimeLine :day = 0 />
      <TimeLine :day = 1 />
      <TimeLine :day = 2 />
      <TimeLine :day = 3 />
      <TimeLine :day = 4 />
      <TimeLine :day = 5 />
    </div>
    <div class = "non-time-lec">
      시간미지정강좌 넣을곳
    </div>
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

.time-table-cart
  align-items: flex-start
  background-color: $white
  height: 520px
  position: relative
  width: 400px
  overflow-x: hidden
  overflow-y: overlay

.time-table-cart::-webkit-scrollbar 
  width : 2px

.time-table-cart::-webkit-scrollbar-thumb
    background-color: rgba(0,0,0)
    height: 95%

.time-table
  align-items: flex-start
  display: flex
  height: 750px
  gap: 8px
  position: relative
  
.non-time-lec
  align-items: center
  height: 30px
  position: relative
  background-color: $error-color

</style>
