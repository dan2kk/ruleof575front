<template>
  <div class="time-block" :style="blockHeight" @click="clickEvent()">
    <div class="timeblockContent notosanskr-normal-black-12px"> 
      {{ this.timeblockData.content }}
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "TimeBlock",
    props: ["timeblockData"],
    computed: {
      blockHeight() {
        return {
          '--height' : `${(this.timeblockData.end - this.timeblockData.start) * 40}px`
        }
      }
    },
    methods:{
      clickEvent(){
        console.log("ADSSAD");
      }
    }
  };
  
  </script>
  
  <style lang="sass">
  @import '../../../../variables'
  .sendBtn
    font-size: 13px 
    background: $orange-yellow
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
  .sendBtn:hover
    .svg-wrapper
      animation: fly-1 0.6s ease-in-out infinite alternate 
    .svg
      transform: translateX(1.2em) rotate(45deg) scale(1.1) 
    .span
      transform: translateX(5em)
  .sendBtn:active
    transform: scale(0.95)
  
  .time-block
    align-items: center
    background-color: $timeblock-background
    display: flex
    flex-direction: column
    height: var(--height)
    width: 60px
    border-style: solid
    border-width: 0px
    border-color: $pippin
    position: relative
    
  .time-block:hover
    transform: scale(1.1)
    border: 1px solid
    border-color: $black
  
  @keyframes fly-1
    0%
      transform: translateY(0.1em)
    100%
      transform: translateY(-0.1em)
  
  .timeblockContent
    height: 20px
    line-height: normal
    text-align: center
    width: 60px
    position: relative
    
  </style>
  