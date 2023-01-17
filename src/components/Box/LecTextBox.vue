<template>
  <div :class="[`lec-text-box`, boxStyle, size || ``]">
    <div class="lec-text-box-cart">
      <div class="lec-text-box-text valign-text-middle notosanskr-normal-black-12px" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LecTextBox",
  props: ["text", "boxStyle", "size"],
};
</script>

<style lang="sass">
@import '../../variables'

.lec-text-box
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
.lec-text-box.red
  background-color: $pippin

.lec-text-box.red.big
  width: 150px

.lec-text-box.red.small
  width: 50px

.lec-text-box.red.medium
  width: 100px
/*파랑 영역*/
.lec-text-box.blue
  background-color: $solitude

.lec-text-box.blue.big
  width: 150px

.lec-text-box.blue.small
  width: 50px

.lec-text-box.blue.medium
  width: 100px
/*노랑 영역*/

.lec-text-box.yellow
  background-color: $geraldine

.lec-text-box.yellow.big
  width: 150px

.lec-text-box.yellow.small
  width: 50px

.lec-text-box.yellow.medium
  width: 100px

/*보라 영역*/
.lec-text-box.purple
  background-color: $tutu

.lec-text-box.purple.big
  width: 150px

.lec-text-box.purple.small
  width: 50px

.lec-text-box.purple.medium
  width: 100px

</style>
