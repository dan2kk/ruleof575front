<template>
  <div :style = "setStyle" :class="[`r-menu-text-box`, color, size || ``]">
    <div class="r-menu-text-box-cart">
      <div class="r-menu-text-box-text valign-text-middle notosanskr-normal-black-12px" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RMenuTextBox",
  props: ["text", "color", "size"],
  computed:{
    setStyle(){
      let color
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
        default:
          color = this.color
          break;
      }
      var pattern1 = /[a-zA-Z]/
      var pattern2 =/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
      let itemPos
      if (pattern1.test(this.text)){
        switch(this.size)
        {
          case "150":
            if (this.text.length > 40)
              itemPos = `flex-start`
            else
              itemPos = `center`
            break;
          case "50":
            if (this.text.length > 8)
              itemPos = `flex-start`
            else
              itemPos = `center`
        }
      }
      if (pattern2.test(this.text)){
        switch(this.size)
        {
          case "150":
            if (this.text.length > 26)
              itemPos = `flex-start`
            else
              itemPos = `center`
            break;
          case "50":
            if (this.text.length > 8)
              itemPos = `flex-start`
            else
              itemPos = `center`
        }
      }
      if (this.size != undefined){
        return{
          '--width' : `${this.size}px`,
          '--color' : color,
          '--itemPos' : itemPos
        }
      }
      else return{
        '--width' : `400px`,
        '--color' : color,
        '--itemPos' : itemPos
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

</style>
