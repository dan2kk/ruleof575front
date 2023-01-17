<template>
  <div>
    <div class="timeblock" :style="blockStyle" @click="clickEvent()">
      <div class="timeblockContent notosanskr-normal-black-12px"> {{ this.timeblockData.content }}</div>
    </div>
  </div>
</template>
  
<script>

  export default {
    name: "Timeblock",
    props: ["timeblockData"],
    computed: {
      blockStyle() {
        var temp
        switch (this.timeblockData.blockkind)
        {
          case "block":
            if (this.timeblockData.isclicked)
            {
              temp = `#bdbdbd`
            }
            else
            {
              temp = `#f0f0f0`
            }
            break;
          case "courseblock":
              temp =  `${this.$store.getters.getColorList[this.timeblockData.colorIdx]}`
              break;
          case "dayblock":
            temp = `#e0e0e0`
            break;
          case "hourblock":
            temp = `#e0e0e0`
            break;
          default:
            temp = `#ff00d6`
            break;
        }
        return {
          '--height' : `${(this.timeblockData.end - this.timeblockData.start) * 40}px`,
          '--color'  : temp,
        }
      },
    },
    methods:{
      clickEvent(){
        switch(this.timeblockData.blockkind){
          case "block":
            this.timeblockData.isclicked = !this.timeblockData.isclicked
            alert(this.timeblockData.isclicked)
            break
          case "courseblock":
            alert("1") // 미완
            break
          case "dayblock":
            console.log(this.timeblockData.content)
            this.timeblockData.isclicked = !this.timeblockData.isclicked
            this.$store.getters.getTimeblockLists[this.timeblockData.content].forEach(x=> 
            {if(this.timeblockData.isclicked != x.isclicked && x.blockkind =="block"){
                x.isclicked = this.timeblockData.isclicked
                console.log(x.isclicked)
            }})
            break
          case "hourblock":
            //console.log(this.$store.getters.getTimeblockLists)
            this.timeblockData.isclicked = !this.timeblockData.isclicked
            for(let x in this.$store.getters.getTimeblockLists){
              //console.log(x)
              this.$store.getters.getTimeblockLists[x].forEach(y=>{
                if(Math.floor(y.start) == this.timeblockData.start && y.blockkind == "block"
                && this.timeblockData.isclicked != y.isclicked){
                  y.isclicked = this.timeblockData.isclicked
                  console.log(y.isclicked)
                }
              })
            }
            this.timeblockData.isclicked = !this.timeblockData.isclicked
            break
          case "sendbox":
            for(let x in this.$store.getters.getTimeblockLists){
              //console.log(x)
              this.$store.getters.getTimeblockLists[x].forEach(y=>{
                if(y.blockkind == "block" && y.isclicked){
                  this.$store.commit("clickDateTime", {day: x, data: y})
              }})
            }
            break
          default: 
           alert("error")
           break
        }
      }
    }
  };
  
  </script>
  
  <style lang="sass">
  @import '../../variables'
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
  
  .timeblock
    align-items: center
    background-color: var(--color)
    display: flex
    flex-direction: column
    height: var(--height)
    width: 65px
    border-style: none none solid
    border-width: 2px
    border-color: $white
    position: relative
    overflow: hidden
    
  .timeblock:hover
    transform: scale(1.0)
    border: 2px solid
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
  