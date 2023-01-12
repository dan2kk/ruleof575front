<template>
  <div class="timeline-1">
    <timeblock4  :posx = this.posx :posy = 0 v-on:sendboxclicked="sendTable(posx, posy)" />
    <timeblock4  :posx = this.posx :posy = 1 />
    <timeblock4  :posx = this.posx :posy = 2 />
    <timeblock4  :posx = this.posx :posy = 3 />
    <timeblock4  :posx = this.posx :posy = 4 />
    <timeblock4  :posx = this.posx :posy = 5 />
    <timeblock4  :posx = this.posx :posy = 6 />
    <timeblock4  :posx = this.posx :posy = 7 />
    <timeblock4  :posx = this.posx :posy = 8 />
    <timeblock4  :posx = this.posx :posy = 9 />
    <timeblock4  :posx = this.posx :posy = 10 />
    <timeblock4  :posx = this.posx :posy = 11 />
    <timeblock4  :posx = this.posx :posy = 12 />
  </div>
</template>

<script>
import Timeblock4 from "./Timeblock4";
export default {
  name: "Timeline",
  components: {
    Timeblock4,
  },
  props: [
    "blocknumArray",
    "textArray",
    "posx"
  ],
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
.timeline-1,
.timeline-2
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 520px
  position: relative
  width: 60px
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
