<template>
  <div :class="[`menubox-1`, className || ``]">
    <div class="text-menubox valign-text-middle notosanskr-bold-white-18px" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menubox",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.menubox-1
  border: 1px solid
  border-color: $white
  height: 50px
  width: 100px
  position: relative
  align-items: stretch

.menubox-1.red
  background-color: $geraldine

.menubox-1.blue
  background-color: $pigeon-post

.menubox-1.yellow
  background-color: $orange-yellow
  
.menubox-1.purple
  background-color: $lily

.text-menubox
  height: 50px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 100px
  top: -5px
</style>
