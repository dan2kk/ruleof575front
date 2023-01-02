<template>
  <div :class="[`textbox-17`, className || ``]">
    <div class="smallwhite-cart-3">
      <div class="smallwhite-text-2 valign-text-middle notosanskr-normal-white-12px">{{ smallwhiteText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textbox3",
  props: ["smallwhiteText", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-17
  background-color: $lily
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 150px

.smallwhite-cart-3
  align-items: flex-start
  border-radius: 5px
  display: flex
  height: 32px
  position: relative
  top: 4px
  width: 150px

.smallwhite-text-2
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center

.textbox-17.textbox-16,
.textbox-17.textbox-16-1,
.textbox-17.textbox-16-2,
.textbox-17.textbox-16-3,
.textbox-17.textbox-16-4
  min-width: 50px

.textbox-17.textbox-16-1 .smallwhite-cart-3,
.textbox-17.textbox-16-2 .smallwhite-cart-3,
.textbox-17.textbox-16-3 .smallwhite-cart-3,
.textbox-17.textbox-16-4 .smallwhite-cart-3,
.textbox-17.textbox-16 .smallwhite-cart-3
  width: 50px
</style>
