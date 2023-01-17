<template>
  <div class="time-block" :style="blcokStyle" @click="clickEvent()">
    <div class="time-block-content notosanskr-normal-black-12px"> 
      {{ this.timeblockData.content }}
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "TimeBlock",
    props: ["timeblockData"],
    computed: {
      blcokStyle() {
        let color
        switch (this.timeblockData.blockKind) {
          case "block":
            if (this.timeblockData.isSelected) {
              color = `#bdbdbd`
            }
            else {
              color = `#f0f0f0`
            }
            break;
          case "lecBlock":
            color =  `${this.$store.getters.getColorList[this.timeblockData.colorIdx]}`
            break;
          case "dayBlock":
            color = `#e0e0e0`
            break;
          case "hourBlock":
            color = `#e0e0e0`
            break;
          default:
            color = `#ff00d6`
            break;
        }
        return {
          '--height' : `${(this.timeblockData.end - this.timeblockData.start) * 40}px`,
          '--color' : color
        }
      }
    },
    methods:{
      clickEvent(){
        let timeLines
        let timeLine
        console.log(this.timeblockData.blockKind)

        switch(this.timeblockData.blockKind){
          case "block":
            this.timeblockData.isSelected = !this.timeblockData.isSelected
            alert(this.timeblockData.isSelected)
            break
          case "lecBlock":
            alert("1") // 미완
            break
          case "dayBlock":
            console.log(this.timeblockData.content)
            this.timeblockData.isSelected = !this.timeblockData.isSelected
            timeLines = this.$store.getters.getTimeLines
            timeLine = timeLines[this.timeblockData.content] 

            timeLine.forEach(x=> {
              if(this.timeblockData.isSelected != x.isSelected && x.blockKind =="block") {
                x.isSelected = this.timeblockData.isSelected
              }
            })
            break
          case "hourBlock":
            //console.log(this.$store.getters.getTimeblockLists)
            this.timeblockData.isSelected = !this.timeblockData.isSelected
            timeLines = this.$store.getters.getTimeLines
            
            for(let x in timeLines){
              //console.log(x)
              timeLines[x].forEach(y =>{
                if(Math.floor(y.start) == this.timeblockData.start && y.blockKind == "block"
                  && this.timeblockData.isSelected != y.isSelected) {
                  y.isSelected = this.timeblockData.isSelected
                  console.log(y.isSelected)
                }
              })
            }
            break
          case "sendBtn":
            timeLines = this.$store.getters.getTimeLines
            for(let x in timeLines){
              timeLines[x].forEach(y=> {
                if(y.blockKind == "block" && y.isSelected) {
                  this.$store.commit("addSelectedTimes", {day: x, data: y})
                }
              })
            }
            //백엔드 보내는 부분 추가
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
    
  .time-block:hover
    transform: scale(1.0)
    border: 2px solid
    border-color: $black
  
  @keyframes fly-1
    0%
      transform: translateY(0.1em)
    100%
      transform: translateY(-0.1em)
  
  .time-block-content
    height: 20px
    line-height: normal
    text-align: center
    width: 60px
    position: relative
    
  </style>
  