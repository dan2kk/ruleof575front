<template>
  <div :style="length" :class="[`r-menu-title-box valign-text-middle notosanskr-bold-white-18px`, boxStyle, size || ``]">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ListTitleBox",
  props: ["boxStyle", "size"],
  computed:{
    length(){
      if (this.size != undefined){
        return{
          '--width' : `${(this.size)}px`
        }
      }
      else return{
        '--width' : `400px`
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

.r-menu-title-box.redBold
  background-color: #ED8B85

.r-menu-title-box.blueBold
  background-color: $pigeon-post

.r-menu-title-box.yellowBold
  background-color: $orange-yellow

.r-menu-title-box.purpleBold
  background-color: $lily

</style>