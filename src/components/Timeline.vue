<template>
  <div class="timeline-1">
    <button class='button' @click="sendboxclick" v-if="clickedProps[0] == '6'">
      <div class="svg-wrapper-1">
        <div class="svg-wrapper">
          <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
          </svg>
        </div>
      </div>
      <span class="span">Send</span>
    </button>
    <timeblock4 :children="timeblock1Props.children" v-if="clickedProps[0] != '6'"/>
    <timeblock4 class="timeblock1" :clickedState="clickedProps[1]" :children="timeblock2Props.children" @click="timeboxclick(9)"/>
    <timeblock4 class="timeblock2" :clickedState="clickedProps[2]" :children="timeblock3Props.children" @click="timeboxclick(10)"/>
    <timeblock4 class="timeblock3" :clickedState="clickedProps[3]" :children="timeblock4Props.children" @click="timeboxclick(11)"/>
    <timeblock4 class="timeblock4" :clickedState="clickedProps[4]" :children="timeblock5Props.children" @click="timeboxclick(12)"/>
    <timeblock4 class="timeblock5" :clickedState="clickedProps[5]" :children="timeblock6Props.children" @click="timeboxclick(13)"/>
    <timeblock4 class="timeblock6" :clickedState="clickedProps[6]" :children="timeblock7Props.children" @click="timeboxclick(14)"/>
    <timeblock4 class="timeblock7" :clickedState="clickedProps[7]" :children="timeblock8Props.children" @click="timeboxclick(15)"/>
    <timeblock4 class="timeblock8" :clickedState="clickedProps[8]" :children="timeblock9Props.children" @click="timeboxclick(16)"/>
    <timeblock4 class="timeblock9" :clickedState="clickedProps[9]" :children="timeblock10Props.children" @click="timeboxclick(17)"/>
    <timeblock4 class="timeblock10" :clickedState="clickedProps[10]" :children="timeblock11Props.children" @click="timeboxclick(18)"/>
    <timeblock4 class="timeblock11" :clickedState="clickedProps[11]" :children="timeblock12Props.children" @click="timeboxclick(19)"/>
    <timeblock4 class="timeblock12" :clickedState="clickedProps[12]" :children="timeblock13Props.children" @click="timeboxclick(20)"/>
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
    "timeblock1Props",
    "timeblock2Props",
    "timeblock3Props",
    "timeblock4Props",
    "timeblock5Props",
    "timeblock6Props",
    "timeblock7Props",
    "timeblock8Props",
    "timeblock9Props",
    "timeblock10Props",
    "timeblock11Props",
    "timeblock12Props",
    "timeblock13Props",
    "clickedProps",
    "selectedTime",
  ],
  data(){
    return{
      clicked: []
    }
  },
  methods:{
    timeboxclick(time){
        if(this.clickedProps[time-9]=='1'){
          alert('clicked time is '+ time);
          this.clickedProps[time-9] = '1';
          this.$emit("timeboxclicked", time);
        }
        else if(this.clickedProps[time-9]=='6'){
          alert('clicked time is '+ time);
          this.clickedProps[time-9] = '1';
          this.$emit("timeboxclicked", time);
        }
    },
    sendboxclick(){
      if(this.clickedProps[0]=='6'){
        alert('send box clicked')
        this.$emit("sendboxclicked")
      }
    }
  },
};
</script>

<style lang="sass">
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

.button
  font-size: 13px 
  background: #4169e1 
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
.button:hover
  .svg-wrapper
    animation: fly-1 0.6s ease-in-out infinite alternate 
  .svg
    transform: translateX(1.2em) rotate(45deg) scale(1.1) 
  .span
    transform: translateX(5em)
.button:active
  transform: scale(0.95)

@keyframes fly-1
  0%
    transform: translateY(0.1em)
  100%
    transform: translateY(-0.1em)

</style>
