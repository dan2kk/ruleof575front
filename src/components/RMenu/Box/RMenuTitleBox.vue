<template>
  <div :style="setStyle" :class="[`r-menu-title-box valign-text-middle notosanskr-bold-white-18px` , color, size || ``,]" >
      <slot></slot>
  </div>

</template>

<script>
export default {
  name: "ListTitleBox",
  props: ["text", "color", "size"],
  computed:{
    setStyle(){
      let color
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
          '--color' : color
        }
      }
      else return{
        '--width' : `400px`,
        '--color' : color
      }
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.r-menu-title-box
  border: 1px solid
  border-color: $white
  height: 40px
  width: var(--width)
  position: relative
  background-color: var(--color)
  align-items: center



</style>