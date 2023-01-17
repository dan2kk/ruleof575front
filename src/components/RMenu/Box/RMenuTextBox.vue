<template>
  <div :class="[`r-menu-text-box`, boxStyle, size || ``]">
    <div class="r-menu-text-box-cart">
      <div class="r-menu-text-box-text valign-text-middle notosanskr-normal-black-12px" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RMenuTextBox",
  props: ["text", "boxStyle", "size"],
};
</script>

<style lang="sass">
@import '../../../../variables'

.r-menu-text-box
  background-color: $error-color
  border: 1px solid
  border-color: $white
  display: flex
  width: 150px
  height: 40px

.r-menu-text-box-cart
  align-items: flex-start
  border-radius: 5px
  display: flex
  flex: 1
  height: 40px
  width: 150px

.r-menu-text-box-text
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center

/*빨강 영역*/
.r-menu-text-box.red
  background-color: $pippin

.r-menu-text-box.red.big
  width: 150px

.r-menu-text-box.red.small
  width: 50px

.r-menu-text-box.red.medium
  width: 100px
/*파랑 영역*/
.r-menu-text-box.blue
  background-color: $solitude

.r-menu-text-box.blue.big
  width: 150px

.r-menu-text-box.blue.small
  width: 50px

.r-menu-text-box.blue.medium
  width: 100px
/*노랑 영역*/

.r-menu-text-box.yellow
  background-color: $geraldine

.r-menu-text-box.yellow.big
  width: 150px

.r-menu-text-box.yellow.small
  width: 50px

.r-menu-text-box.yellow.medium
  width: 100px

/*보라 영역*/
.r-menu-text-box.purple
  background-color: $tutu

.r-menu-text-box.purple.big
  width: 150px

.r-menu-text-box.purple.small
  width: 50px

.r-menu-text-box.purple.medium
  width: 100px

</style>
