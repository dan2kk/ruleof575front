<template>
  <div class="timeline-1">
    <timeblock4 :blocknum = this.blocknumArray[0] :text = this.textArray[0] :posy = this.posy :posx = 0 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[1] :text = this.textArray[1] :posy = this.posy :posx = 1 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[2] :text = this.textArray[2] :posy = this.posy :posx = 2 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[3] :text = this.textArray[3] :posy = this.posy :posx = 3 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[4] :text = this.textArray[4] :posy = this.posy :posx = 4 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[5] :text = this.textArray[5] :posy = this.posy :posx = 5 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[6] :text = this.textArray[6] :posy = this.posy :posx = 6 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[7] :text = this.textArray[7] :posy = this.posy :posx = 7 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[8] :text = this.textArray[8] :posy = this.posy :posx = 8 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[9] :text = this.textArray[9] :posy = this.posy :posx = 9 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[10] :text = this.textArray[10] :posy = this.posy :posx = 10 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[11] :text = this.textArray[11] :posy = this.posy :posx = 11 v-on:sendInfo = "passInfo"/>
    <timeblock4 :blocknum = this.blocknumArray[12] :text = this.textArray[12] :posy = this.posy :posx = 12 v-on:sendInfo = "passInfo"/>
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
      clicked: [],
      column: []
    }
  },
  methods:{
    timeboxclick(time){
        if(this.clickedProps[time-8]=='1'){
          alert('clicked time is '+ time);
          this.clickedProps[time-8] = '1';
          this.$emit("timeboxclicked", time);
        }
        else if(this.clickedProps[time-8]=='6'){
          alert('clicked time is '+ time);
          this.clickedProps[time-8] = '1';
          this.$emit("timeboxclicked", time);
        }
    },
    sendboxclick(){
      if(this.clickedProps[0]=='6'){
        alert('send box clicked')
        this.$emit("sendboxclicked")
      }
    },
    passInfo(blocknum, text, posx, posy)
    {
      this.$emit("passInfo", blocknum, text, posx, posy);
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
