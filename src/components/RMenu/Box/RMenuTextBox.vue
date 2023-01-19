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

.r-menu-text-box
  background-color: var(--color)
  border: 1px solid
  border-color: $white
  display: flex
  width: var(--width)
  height: 40px

.r-menu-text-box-cart
  align-items: flex-start
  border-radius: 5px
  display: flex
  flex: 1
  height: 40px
  width: 150px

.r-menu-text-box-text
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center

</style>
