<template>
  <div :class="[`textbox-1`, className || ``]">
    <div class="text-2 valign-text-middle notosanskr-bold-white-18px">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "Titlebox",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-1
  border: 1px solid
  border-color: $white
  height: 40px
  width: 400px
  position: relative
  align-items: stretch
.textbox-1.red
  background-color: #ED8B85
.textbox-1.blue
  background-color: #B2C3E1
.text-2
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 400px
  top: -5px
</style>
