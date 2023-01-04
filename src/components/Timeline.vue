<template>
  <div class="timeline-1">
    <timeblock4 :children="timeblock1Props.children" />
    <timeblock4 :children="timeblock2Props.children" />
    <timeblock4 :children="timeblock3Props.children" />
    <timeblock4 :children="timeblock4Props.children" />
    <timeblock4 :children="timeblock5Props.children" />
    <timeblock4 :children="timeblock6Props.children" />
    <timeblock4 :children="timeblock7Props.children" />
    <timeblock4 :children="timeblock8Props.children" />
    <timeblock4 :children="timeblock9Props.children" />
    <timeblock4 :children="timeblock10Props.children" />
    <timeblock4 :children="timeblock11Props.children" />
    <timeblock4 :children="timeblock12Props.children" />
    <timeblock4 :children="timeblock13Props.children" :className="timeblock13Props.className" />
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
  ],
  method:{
    
  }
};
</script>

<style lang="sass">
.timeline-1,
.timeline-2
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 540px
  position: relative
  width: 60px
</style>
