<template>
  <div class="timeline-1">
    <timeblock4 :children="timeblock1Props.children" />
    <timeblock4 class="timeblock1" :clickedState=this.clicked[0] :children="timeblock2Props.children" @click="timeboxclick(9)"/>
    <timeblock4 class="timeblock2" :clickedState=this.clicked[1] :children="timeblock3Props.children" @click="timeboxclick(10)"/>
    <timeblock4 class="timeblock3" :clickedState=this.clicked[2] :children="timeblock4Props.children" @click="timeboxclick(11)"/>
    <timeblock4 class="timeblock4" :clickedState=this.clicked[3] :children="timeblock5Props.children" @click="timeboxclick(12)"/>
    <timeblock4 class="timeblock5" :clickedState=this.clicked[4] :children="timeblock6Props.children" @click="timeboxclick(13)"/>
    <timeblock4 class="timeblock6" :clickedState=this.clicked[5] :children="timeblock7Props.children" @click="timeboxclick(14)"/>
    <timeblock4 class="timeblock7" :clickedState=this.clicked[6] :children="timeblock8Props.children" @click="timeboxclick(15)"/>
    <timeblock4 class="timeblock8" :clickedState=this.clicked[7] :children="timeblock9Props.children" @click="timeboxclick(16)"/>
    <timeblock4 class="timeblock9" :clickedState=this.clicked[8] :children="timeblock10Props.children" @click="timeboxclick(17)"/>
    <timeblock4 class="timeblock10" :clickedState=this.clicked[9] :children="timeblock11Props.children" @click="timeboxclick(18)"/>
    <timeblock4 class="timeblock11" :clickedState=this.clicked[10] :children="timeblock12Props.children" @click="timeboxclick(19)"/>
    <timeblock4 class="timeblock12" :clickedState=this.clicked[11] :children="timeblock13Props.children" @click="timeboxclick(20)"/>
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
      clickprops: false,
      clicked: []
    }
  },
  methods:{
    timeboxclick(time){
        if(this.clickedProps){
          if(this.clicked[time-9] == "false")
          {
            alert('clicked time is '+ time);
            this.$emit("timeboxclicked", time);
            this.clicked[time-9] = "true";
          }
          else{
            alert('clicked time is '+ time);
            this.$emit("timeboxclicked", time);
            this.clicked[time-9] = "false";
          }
        }
    },
    sendboxclick(){
      if(!this.clickedProps){
        alert('send box clicked')
        this.$emit("sendboxclicked")
      }
    }
  },
  mounted(){
    for(let i=0;i<12;i++){
      this.clicked.push("false")
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
.timeblock12
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
.timeblock12:hover
  transform: scale(1.1)
  border: 1px solid
  border-color: #000000
</style>
