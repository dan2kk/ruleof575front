<template>
  <div class="textbox-4">
    <div class="cart-3">
      <div class="text-7 valign-text-middle notosanskr-normal-white-12px">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textbox",
  props: ["text"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-4,
.textbox-5
  background-color: $silver
  border: 1px solid
  border-color: $white
  height: 30px
  min-width: 100px

.cart-3,
.cart-4
  align-items: flex-start
  border-radius: 5px
  display: flex
  height: 24px
  position: relative
  top: 3px
  width: 100px

.text-7,
.text-8
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center
</style>
