<template>
  <div :style="setStyle" v-html="text" :class="[`r-menu-title-box-m valign-text-middle` , color, size || ``, fontsize || ``,]" >
  </div>

</template>

<script>
export default {
  name: "ModTitleBox",
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

.r-menu-title-box-m
  border: 1px solid
  border-color: $white
  height: 48px
  width: var(--width)
  position: relative
  background-color: var(--color)
  color: $white
  font-family: "Noto Sans KR", Helvetica
  font-size: var(--fontsize)
  font-style: normal
  font-weight: 700
  align-items: center


</style>