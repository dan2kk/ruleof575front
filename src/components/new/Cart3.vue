<template>
  <div :class="[`cart-10`, className || ``]">
    <div class="text_label-10 valign-text-middle notosanskr-normal-black-12px">{{ text_Label }}</div>
  </div>
</template>

<script>
export default {
  name: "Cart3",
  props: ["text_Label", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.cart-10
  align-items: center
  border: 4px solid
  border-color: $white
  border-radius: 5px
  display: flex
  height: 54px
  justify-content: center
  margin-bottom: -2.00px
  margin-top: -2.00px
  width: 64px

.text_label-10
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center

.cart-10.cart-11
  opacity: 0.8

.cart-10.cart-12
  margin-right: -2.00px
  opacity: 0.8
</style>
