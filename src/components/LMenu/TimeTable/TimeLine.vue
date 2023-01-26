<template>
  <div class="time-line" :style="setWidth">
    <TimeBlock :timeBlockData="element" v-for="element in this.timeLines" :key="element.수업번호"/>
    <div 
      class="shadowbox" :style="blockStyle(item)" v-for="item in this.shadowLines" :key="item">
    </div>
  </div>
</template>

<script>
import TimeBlock from "./TimeBlock";
export default {
  name: "TimeLine",
  components: {
    TimeBlock
  },
  props: ["day"],
  computed: {
    setWidth(){
      let temp
      if (this.day== 0) temp = `10%`
      else temp = `18%`
      return { '--width': temp}
    },
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
      if(this.day == 0) return null
      return this.$store.getters.getShadowList[(this.day-1)];
    },
    blockStyle(){
      return (item) => {return {
        '--height' : `${(item.end - item.start) * 96}px`,
        '--top': `${((item.start - 9) * 96) + 48}px`,
      }}
    }
  },
};

</script>

<style lang="sass">
@import '../../../../variables'
.time-line
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 150%
  position: relative
  width: var(--width)
.shadowbox
  height: var(--height)
  width: 100%
  top: var(--top)
  opacity: 0.5
  background-color: black
  position: absolute
  z-index: 10

</style>
