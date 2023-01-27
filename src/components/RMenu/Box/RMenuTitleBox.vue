<template>
  <div :style="setStyle" :class="[`r-menu-title-box valign-text-middle` , color, size || ``, fontsize || ``,]" >
      <slot></slot>
  </div>

</template>

<script>
export default {
  name: "RMenuTitleBox",
  props: ["text", "color", "size", "fontsize"],
  computed:{
    setStyle(){
      let color
      let fontsize
      if (this.fontsize == undefined) fontsize = "20"
      else fontsize = this.fontsize
      switch(this.color)
      {
        case "red":
          color = `#ED8B85`
          break;
        case "blue":
          color = `#b2c3e1`
          break;
        case "yellow":
          color = `#f7d16c`
          break;
        case "darkYellow":
          color = `#eea900`
          break;
        case "purple":
          color = `#c49fbe`
          break;
        case "green":
          color = `#49c282`
          break;
        default:
          color = `#ff00d6`
          break;
      }
      if (this.size != undefined){
        return{
          '--width' : `${this.size}px`,
          '--color' : color,
          '--fontsize' : `${fontsize}px`,
        }
      }
      else return{
        '--width' : `600px`,
        '--color' : color,
        '--fontsize': `${fontsize}px`,
      }
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.r-menu-title-box
  height: 48px
  width: var(--width)
  position: relative
  background-color: var(--color)
  align-items: center
  color: $white
  font-family: "Noto Sans KR", Helvetica
  font-size: var(--fontsize)
  font-style: normal
  font-weight: 700
  border-left: 1px white solid
  border-right: 1px white solid

</style>