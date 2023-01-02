<template>
  <div :class="[`cart-6`, className || ``]">
    <div class="text_label-8 valign-text-middle notosanskr-normal-white-12px">{{ text_Label }}</div>
  </div>
</template>

<script>
export default {
  name: "Cart2",
  props: ["text_Label", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.cart-6
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

.text_label-8
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center

.cart-6.cart-7
  align-items: center
  border: 4px solid
  border-color: $white
  border-radius: 5px
  display: flex
  height: 54px
  justify-content: center
  margin-bottom: -2.00px
  margin-top: -2.00px
  opacity: 0.8
  width: 64px

.cart-6.cart-8
  align-items: center
  border: 4px solid
  border-color: $white
  border-radius: 5px
  display: flex
  height: 54px
  justify-content: center
  margin-bottom: -2.00px
  margin-right: -2.00px
  margin-top: -2.00px
  opacity: 0.8
  width: 64px
</style>
