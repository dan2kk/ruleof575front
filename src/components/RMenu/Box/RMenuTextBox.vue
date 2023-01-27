<template>
  <div :style = "setStyle" :class="[`r-menu-text-box`, color, size || ``, fontsize || ``, fontweight || ``]">
    <div class="r-menu-text-box-cart">
      <div class="r-menu-text-box-text" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RMenuTextBox",
  props: ["text", "color", "size", "fontsize", "fontweight"],
  computed:{
    setStyle(){
      let color
      let fontsize
      let fontweight
      if (this.fontsize == undefined) fontsize = "16"
      else fontsize = this.fontsize      
      if (this.fontweight == undefined) fontweight = "400"
      else fontweight = this.fontweight
      switch(this.color)
      {
        case "red":
          color = `#ffe0de`
          break;
        case "blue":
          color = `#e8f0ff`
          break;
        case "yellow":
          color = `#ffefc6`
          break;
        case "purple":
          color = `#ffe7fb`
          break;
        case "green":
          color = `#CCFFE4`
          break;
        case "light-grey":
          color = `#e0e0e0`
          break;
        case "darkYellow":
          color = `#eea900`
          break;
        default:
          color = this.color
          break;
      }

      var pattern1 = /[a-zA-Z]/
      var pattern2 =/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
      let itemPos
      if (pattern1.test(this.text)){
        if (this.text == null) {
          itemPos = `center`
        }
        else{
          switch(this.size)
          {
            case "150":
              if (this.text.length > 40)
                itemPos = `flex-start`
              else
                itemPos = `center`
              break;
            case "75":
              itemPos = `flex-start`
              break;
          }
        }
      }
      if (pattern2.test(this.text)){
        if (this.text == null) {
          itemPos = `center`
        }
        else{
          switch(this.size)
          {
            case "150":
              if (this.text.length > 26)
                itemPos = `flex-start`
              else
                itemPos = `center`
              break;
            case "75":
              itemPos = `center`
              break;
          }
        }
      }
      if (this.size != undefined){
        return{
          '--width' : `${this.size}px`,
          '--color' : color,
          '--itemPos' : itemPos,
          '--fontsize' : `${fontsize}px`,
          '--fontweight' : `${fontweight}`
        }
      }
      else return{
        '--width' : `600px`,
        '--color' : color,
        '--itemPos' : itemPos,
        '--fontsize' : `${fontsize}px`,
        '--fontweight' : `${fontweight}`
      }
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.r-menu-text-box
  background-color: var(--color)
  border: 1px solid
  border-color: $white
  display: flex
  width: var(--width)
  height: 40px
  overflow: hidden

.r-menu-text-box-cart
  align-items: var(--itemPos)
  border-radius: 5px
  display: flex
  flex: 1

.r-menu-text-box-text
  flex-direction: row
  flex: 1
  letter-spacing: 0
  line-height: normal
  text-align: center
  display: flex
  flex-direction: column
  justify-content: center
  color: $black
  font-family: "Noto Sans KR", Helvetica
  font-size: var(--fontsize)
  font-style: normal
  font-weight: var(--fontweight)
</style>
