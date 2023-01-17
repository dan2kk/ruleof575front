<template>
  <div :class="[`list-title-box`, boxStyle || ``]">
    <div class="list-title-box-text valign-text-middle notosanskr-bold-white-18px" >
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
@import '../../variables'

.list-title-box
  border: 1px solid
  border-color: $white
  height: 40px
  width: 400px
  position: relative
  align-items: stretch

.list-title-box.redBold
  background-color: #ED8B85

.list-title-box.blueBold
  background-color: $pigeon-post

.list-title-box.yellowBold
  background-color: $orange-yellow
  
.list-title-box.purpleBold
  background-color: $lily


.list-title-box-text
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 400px
  top: -5px
</style>
