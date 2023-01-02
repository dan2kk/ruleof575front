<template>
  <div :class="[`view-16`, className || ``]">
    <div class="cart-2"><div class="text_label-3 valign-text-middle notosanskr-normal-white-12px">로그인</div></div>
  </div>
</template>

<script>
export default {
  name: "C7Ey0G",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-16
  align-items: center
  background-color: $nobel
  border: 4px solid
  border-color: $white
  display: flex
  height: 38px
  justify-content: center
  left: 128px
  position: relative
  top: 256px
  width: 144px

.cart-2
  align-items: flex-start
  align-self: stretch
  background-color: $royal-blue
  border: 4px solid
  border-color: $white
  border-radius: 5px
  display: flex
  flex: 1
  margin-left: -2.00px
  margin-top: -2.00px

.text_label-3
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center

.view-16.view-18
  left: 0
  position: absolute
  top: 0
  width: 64px

.view-16.view-18 .cart-2,
.view-16.view-19 .cart-2,
.view-16.view-20 .cart-2,
.view-16.view-21 .cart-2
  background-color: $silver

.view-16.view-19
  left: 60px
  position: absolute
  top: 0

.view-16.view-20
  left: 200px
  position: absolute
  top: 0
  width: 64px

.view-16.view-21
  left: 260px
  position: absolute
  top: 0
</style>
