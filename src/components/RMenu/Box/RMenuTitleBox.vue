<template>
  <div :class="[`r-menu-title-box`, boxStyle || ``]">
    <div class="r-menu-title-box-text valign-text-middle notosanskr-bold-white-18px" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTitleBox",
  props: ["boxStyle"],
};
</script>

<style lang="sass">
@import '../../../../variables'

.r-menu-title-box
  border: 1px solid
  border-color: $white
  height: 40px
  width: 400px
  position: relative
  align-items: stretch

.r-menu-title-box.redBold
  background-color: #ED8B85

.r-menu-title-box.blueBold
  background-color: $pigeon-post

.r-menu-title-box.yellowBold
  background-color: $orange-yellow
  
.r-menu-title-box.purpleBold
  background-color: $lily


.r-menu-title-box-text
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 400px
  top: -5px
</style>
