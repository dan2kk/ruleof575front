<template>
  <div class="time-line">
    <TimeBlock :timeblockData="element" v-for="element in this.timeLines" :key="element.수업번호"/>
  </div>
</template>

<script>
import TimeBlock from "./TimeBlock";
export default {
  name: "TimeLine",
  components: {
    TimeBlock
  },
  props: [
    "day"
  ],
  computed: {
    timeLines() {
      if(this.day == 0) {
        return this.$store.getters.getTimeLines.시간;
      }
      else if(this.day == 1){
        return this.$store.getters.getTimeLines.월;
      }
      else if(this.day == 2){
        return this.$store.getters.getTimeLines.화;
      }
      else if(this.day == 3){
        return this.$store.getters.getTimeLines.수;
      }
      else if(this.day == 4){
        return this.$store.getters.getTimeLines.목;
      }
      else if(this.day == 5){
        return this.$store.getters.getTimeLines.금;
      }
    }
  }
};

</script>

<style lang="sass">
@import '../../../../variables'
.time-line
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 780px
  position: relative
  width: 60px


@keyframes fly-1
  0%
    transform: translateY(0.1em)
  100%
    transform: translateY(-0.1em)

</style>
