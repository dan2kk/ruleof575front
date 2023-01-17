<template>
  <div class="timeline">
    <timeblock  :timeblockData="element" v-for="element in this.timeblockList"/>
  </div>
</template>

<script>
import Timeblock from "./Timeblock";
export default {
  name: "Timeline",
  components: {
    Timeblock,
  },
  props: [
    "day"
  ],
  computed: {
    timeblockList() {
      if(this.day == 0) {
        return this.$store.getters.getTimeblockLists.시간;
      }
      else if(this.day == 1){
        return this.$store.getters.getTimeblockLists.월;
      }
      else if(this.day == 2){
        return this.$store.getters.getTimeblockLists.화;
      }
      else if(this.day == 3){
        return this.$store.getters.getTimeblockLists.수;
      }
      else if(this.day == 4){
        return this.$store.getters.getTimeblockLists.목;
      }
      else if(this.day == 5){
        return this.$store.getters.getTimeblockLists.금;
      }
    }
  },
  data(){
    return{
    }
  },
  methods:{
  },
};
</script>

<style lang="sass">
@import '../../variables'
.timeline
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 520px
  position: relative
  width: 64px
  border: 2px solid
  border-color: #ffffff
.timeblock1,
.timeblock2,
.timeblock3,
.timeblock4,
.timeblock5,
.timeblock6,
.timeblock7,
.timeblock8,
.timeblock9,
.timeblock10,
.timeblock11,
.timeblock12,
.button
  cursor: pointer

.timeblock1:hover,
.timeblock2:hover,
.timeblock3:hover,
.timeblock4:hover,
.timeblock5:hover,
.timeblock6:hover,
.timeblock7:hover,
.timeblock8:hover,
.timeblock9:hover,
.timeblock10:hover,
.timeblock11:hover,
.timeblock12:hover,
.button:hover
  transform: scale(1.1)
  border: 1px solid
  border-color: #000000



@keyframes fly-1
  0%
    transform: translateY(0.1em)
  100%
    transform: translateY(-0.1em)

</style>
