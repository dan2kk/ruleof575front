<template>
  <div :class="[`textbox-normal`, className, size || ``]">
    <div class="cart-1">
      <div class="text-3 valign-text-middle notosanskr-normal-black-12px" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textbox2",
  props: ["text", "className", "size"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-normal
  background-color: $error-color
  border: 1px solid
  border-color: $white
  display: flex
  width: 150px
  height: 40px

.cart-1
  align-items: flex-start
  border-radius: 5px
  display: flex
  flex: 1
  height: 40px
  width: 150px

.text-3
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center

/*빨강 영역*/
.textbox-normal.red
  background-color: $pippin

.textbox-normal.red.big
  width: 150px

.textbox-normal.red.small
  width: 50px

.textbox-normal.red.medium
  width: 100px
/*파랑 영역*/
.textbox-normal.blue
  background-color: $solitude

.textbox-normal.blue.big
  width: 150px

.textbox-normal.blue.small
  width: 50px

.textbox-normal.blue.medium
  width: 100px
/*노랑 영역*/

.textbox-normal.yellow
  background-color: $geraldine

.textbox-normal.yellow.big
  width: 150px

.textbox-normal.yellow.small
  width: 50px

.textbox-normal.yellow.medium
  width: 100px

/*보라 영역*/
.textbox-normal.purple
  background-color: $tutu

.textbox-normal.purple.big
  width: 150px

.textbox-normal.purple.small
  width: 50px

.textbox-normal.purple.medium
  width: 100px

</style>
