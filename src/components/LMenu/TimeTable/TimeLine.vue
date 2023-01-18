<template>
  <div class="time-line">
    <TimeBlock :timeblockData="element" v-for="element in this.timeLines" :key="element.수업번호"/>
    <div class="shadowbox" :style="blcokStyle(element)" v-for="element in this.shadowLines"/>
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
    },
    shadowLines(){
      return this.$store.getters.getShadowLec[this.day - 1];
    },
    blcokStyle(element){
      let height = 
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
  height: 520px
  position: relative
  width: 60px


</style>
