<template>
  <div class="timeline-1">
    <timeblock4 :blocknum = this.blocknumArray[0] :timetext = this.textArray[0] :posx = this.posx :posy = 0 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[1] :timetext = this.textArray[1] :posx = this.posx :posy = 1 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[2] :timetext = this.textArray[2] :posx = this.posx :posy = 2 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[3] :timetext = this.textArray[3] :posx = this.posx :posy = 3 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[4] :timetext = this.textArray[4] :posx = this.posx :posy = 4 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[5] :timetext = this.textArray[5] :posx = this.posx :posy = 5 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[6] :timetext = this.textArray[6] :posx = this.posx :posy = 6 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[7] :timetext = this.textArray[7] :posx = this.posx :posy = 7 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[8] :timetext = this.textArray[8] :posx = this.posx :posy = 8 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[9] :timetext = this.textArray[9] :posx = this.posx :posy = 9 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[10] :timetext = this.textArray[10] :posx = this.posx :posy = 10 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[11] :timetext = this.textArray[11] :posx = this.posx :posy = 11 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[12] :timetext = this.textArray[12] :posx = this.posx :posy = 12 v-on:sendInfo = "passInfo"/>
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
    passInfo(blockno, blocktext, posx, posy)
    {
      this.$emit("passInfo", blockno, blocktext, posx, posy);
    }
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
