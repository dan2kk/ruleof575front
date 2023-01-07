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




















  
.textbox-normal.textbox2-2,
.textbox-normal.textbox2-2-1,
.textbox-normal.textbox2-2-10,
.textbox-normal.textbox2-2-11,
.textbox-normal.textbox2-2-12,
.textbox-normal.textbox2-2-13,
.textbox-normal.textbox2-2-2,
.textbox-normal.textbox2-2-3,
.textbox-normal.textbox2-2-4,
.textbox-normal.textbox2-2-5,
.textbox-normal.textbox2-2-6,
.textbox-normal.textbox2-2-7,
.textbox-normal.textbox2-2-8,
.textbox-normal.textbox2-2-9,
.textbox-normal.textbox2-2-1 .cart-1,
.textbox-normal.textbox2-2-2 .cart-1,
.textbox-normal.textbox2-2-3 .cart-1,
.textbox-normal.textbox2-2-4 .cart-1,
.textbox-normal.textbox2-2-5 .cart-1,
.textbox-normal.textbox2-2-6 .cart-1,
.textbox-normal.textbox2-2-7 .cart-1,
.textbox-normal.textbox2-2-8 .cart-1,
.textbox-normal.textbox2-2-9 .cart-1,
.textbox-normal.textbox2-2-10 .cart-1,
.textbox-normal.textbox2-2-11 .cart-1,
.textbox-normal.textbox2-2-12 .cart-1,
.textbox-normal.textbox2-2-13 .cart-1,
.textbox-normal.textbox2-2 .cart-1,
.textbox-normal.textbox-2-1 .cart-1,
.textbox-normal.textbox-2-2 .cart-1,
.textbox-normal.textbox-2-3 .cart-1,
.textbox-normal.textbox-2-4 .cart-1,
.textbox-normal.textbox-2-5 .cart-1,
.textbox-normal.textbox-2-6 .cart-1,
.textbox-normal.textbox-2-7 .cart-1,
.textbox-normal.textbox-2-8 .cart-1,
.textbox-normal.textbox-2-9 .cart-1,
.textbox-normal.textbox-2-10 .cart-1,
.textbox-normal.textbox-2-11 .cart-1,
.textbox-normal.textbox-2-12 .cart-1,
.textbox-normal.textbox-2-13 .cart-1,
.textbox-normal.textbox-2-14 .cart-1,
.textbox-normal.textbox-2-15 .cart-1,
.textbox-normal.textbox-2-16 .cart-1,
.textbox-normal.textbox-2-17 .cart-1,
.textbox-normal.textbox-2-18 .cart-1,
.textbox-normal.textbox-2-19 .cart-1,
.textbox-normal.textbox-2-20 .cart-1,
.textbox-normal.textbox-2-21 .cart-1,
.textbox-normal.textbox-2-22 .cart-1,
.textbox-normal.textbox-2-23 .cart-1,
.textbox-normal.textbox-2-24 .cart-1,
.textbox-normal.textbox-2-25 .cart-1,
.textbox-normal.textbox-2-26 .cart-1,
.textbox-normal.textbox-2-27 .cart-1,
.textbox-normal.textbox-2-28 .cart-1,
.textbox-normal.textbox-2-29 .cart-1,
.textbox-normal.textbox-2-30 .cart-1,
.textbox-normal.textbox-2-31 .cart-1,
.textbox-normal.textbox-2-32 .cart-1,
.textbox-normal.textbox-2-33 .cart-1,
.textbox-normal.textbox-2-34 .cart-1,
.textbox-normal.textbox-2-35 .cart-1,
.textbox-normal.textbox-2-36 .cart-1,
.textbox-normal.textbox-2-37 .cart-1,
.textbox-normal.textbox-2-38 .cart-1,
.textbox-normal.textbox-2-39 .cart-1,
.textbox-normal.textbox-2-40 .cart-1,
.textbox-normal.textbox-2-41 .cart-1,
.textbox-normal.textbox-2-42 .cart-1,
.textbox-normal.textbox-2-43 .cart-1,
.textbox-normal.textbox-2-44 .cart-1,
.textbox-normal.textbox-2-45 .cart-1,
.textbox-normal.textbox-2-46 .cart-1,
.textbox-normal.textbox-2-47 .cart-1,
.textbox-normal.textbox-2-48 .cart-1,
.textbox-normal.textbox-2-49 .cart-1,
.textbox-normal.textbox-2-50 .cart-1,
.textbox-normal.textbox-2-51 .cart-1,
.textbox-normal.textbox-2-52 .cart-1,
.textbox-normal.textbox-2-53 .cart-1,
.textbox-normal.textbox-2-54 .cart-1,
.textbox-normal.textbox-2-55 .cart-1,
.textbox-normal.textbox-2-56 .cart-1,
.textbox-normal.textbox-2-57 .cart-1,
.textbox-normal.textbox-2-58 .cart-1,
.textbox-normal.textbox-2-59 .cart-1,
.textbox-normal.textbox-2-60 .cart-1,
.textbox-normal.textbox-2-61 .cart-1,
.textbox-normal.textbox-2-62 .cart-1,
.textbox-normal.textbox-2-63 .cart-1,
.textbox-normal.textbox-2-64 .cart-1,
.textbox-normal.textbox-2-65 .cart-1,
.textbox-normal.textbox-2-66 .cart-1,
.textbox-normal.textbox-2-67 .cart-1,
.textbox-normal.textbox-2-68 .cart-1,
.textbox-normal.textbox-2-69 .cart-1,
.textbox-normal.textbox-2-70 .cart-1,
.textbox-normal.textbox-2-71 .cart-1,
.textbox-normal.textbox-2-72 .cart-1,
.textbox-normal.textbox-2-73 .cart-1,
.textbox-normal.textbox-2-74 .cart-1,
.textbox-normal.textbox-2 .cart-1,
.textbox-normal.textbox2-3-1 .cart-1,
.textbox-normal.textbox2-3-2 .cart-1,
.textbox-normal.textbox2-3-3 .cart-1,
.textbox-normal.textbox2-3-4 .cart-1,
.textbox-normal.textbox2-3-5 .cart-1,
.textbox-normal.textbox2-3-6 .cart-1,
.textbox-normal.textbox2-3-7 .cart-1,
.textbox-normal.textbox2-3-8 .cart-1,
.textbox-normal.textbox2-3-9 .cart-1,
.textbox-normal.textbox2-3-10 .cart-1,
.textbox-normal.textbox2-3-11 .cart-1,
.textbox-normal.textbox2-3-12 .cart-1,
.textbox-normal.textbox2-3 .cart-1
  width: 50px

.textbox-normal.textbox3-2,
.textbox-normal.textbox3-2-1,
.textbox-normal.textbox3-2-10,
.textbox-normal.textbox3-2-11,
.textbox-normal.textbox3-2-12,
.textbox-normal.textbox3-2-13,
.textbox-normal.textbox3-2-2,
.textbox-normal.textbox3-2-3,
.textbox-normal.textbox3-2-4,
.textbox-normal.textbox3-2-5,
.textbox-normal.textbox3-2-6,
.textbox-normal.textbox3-2-7,
.textbox-normal.textbox3-2-8,
.textbox-normal.textbox3-2-9,
.textbox-normal.textbox3-2-1 .cart-1,
.textbox-normal.textbox3-2-2 .cart-1,
.textbox-normal.textbox3-2-3 .cart-1,
.textbox-normal.textbox3-2-4 .cart-1,
.textbox-normal.textbox3-2-5 .cart-1,
.textbox-normal.textbox3-2-6 .cart-1,
.textbox-normal.textbox3-2-7 .cart-1,
.textbox-normal.textbox3-2-8 .cart-1,
.textbox-normal.textbox3-2-9 .cart-1,
.textbox-normal.textbox3-2-10 .cart-1,
.textbox-normal.textbox3-2-11 .cart-1,
.textbox-normal.textbox3-2-12 .cart-1,
.textbox-normal.textbox3-2-13 .cart-1,
.textbox-normal.textbox3-2 .cart-1,
.textbox-normal.textbox3-3-1 .cart-1,
.textbox-normal.textbox3-3-2 .cart-1,
.textbox-normal.textbox3-3-3 .cart-1,
.textbox-normal.textbox3-3-4 .cart-1,
.textbox-normal.textbox3-3-5 .cart-1,
.textbox-normal.textbox3-3-6 .cart-1,
.textbox-normal.textbox3-3-7 .cart-1,
.textbox-normal.textbox3-3-8 .cart-1,
.textbox-normal.textbox3-3-9 .cart-1,
.textbox-normal.textbox3-3-10 .cart-1,
.textbox-normal.textbox3-3-11 .cart-1,
.textbox-normal.textbox3-3-12 .cart-1,
.textbox-normal.textbox3-3 .cart-1
  width: 100px

.textbox-normal.textbox1-3
  background-color: $tutu
  height: 40px
  min-width: 150px
  width: unset

.textbox-normal.textbox-2,
.textbox-normal.textbox-2-1,
.textbox-normal.textbox-2-10,
.textbox-normal.textbox-2-11,
.textbox-normal.textbox-2-12,
.textbox-normal.textbox-2-13,
.textbox-normal.textbox-2-14,
.textbox-normal.textbox-2-15,
.textbox-normal.textbox-2-16,
.textbox-normal.textbox-2-17,
.textbox-normal.textbox-2-18,
.textbox-normal.textbox-2-19,
.textbox-normal.textbox-2-2,
.textbox-normal.textbox-2-20,
.textbox-normal.textbox-2-21,
.textbox-normal.textbox-2-22,
.textbox-normal.textbox-2-23,
.textbox-normal.textbox-2-24,
.textbox-normal.textbox-2-25,
.textbox-normal.textbox-2-26,
.textbox-normal.textbox-2-27,
.textbox-normal.textbox-2-28,
.textbox-normal.textbox-2-29,
.textbox-normal.textbox-2-3,
.textbox-normal.textbox-2-30,
.textbox-normal.textbox-2-31,
.textbox-normal.textbox-2-32,
.textbox-normal.textbox-2-33,
.textbox-normal.textbox-2-34,
.textbox-normal.textbox-2-35,
.textbox-normal.textbox-2-36,
.textbox-normal.textbox-2-37,
.textbox-normal.textbox-2-38,
.textbox-normal.textbox-2-39,
.textbox-normal.textbox-2-4,
.textbox-normal.textbox-2-40,
.textbox-normal.textbox-2-41,
.textbox-normal.textbox-2-42,
.textbox-normal.textbox-2-43,
.textbox-normal.textbox-2-44,
.textbox-normal.textbox-2-45,
.textbox-normal.textbox-2-46,
.textbox-normal.textbox-2-47,
.textbox-normal.textbox-2-48,
.textbox-normal.textbox-2-49,
.textbox-normal.textbox-2-5,
.textbox-normal.textbox-2-50,
.textbox-normal.textbox-2-51,
.textbox-normal.textbox-2-52,
.textbox-normal.textbox-2-53,
.textbox-normal.textbox-2-54,
.textbox-normal.textbox-2-55,
.textbox-normal.textbox-2-56,
.textbox-normal.textbox-2-57,
.textbox-normal.textbox-2-58,
.textbox-normal.textbox-2-59,
.textbox-normal.textbox-2-6,
.textbox-normal.textbox-2-60,
.textbox-normal.textbox-2-61,
.textbox-normal.textbox-2-62,
.textbox-normal.textbox-2-63,
.textbox-normal.textbox-2-64,
.textbox-normal.textbox-2-65,
.textbox-normal.textbox-2-66,
.textbox-normal.textbox-2-67,
.textbox-normal.textbox-2-68,
.textbox-normal.textbox-2-69,
.textbox-normal.textbox-2-7,
.textbox-normal.textbox-2-70,
.textbox-normal.textbox-2-71,
.textbox-normal.textbox-2-72,
.textbox-normal.textbox-2-73,
.textbox-normal.textbox-2-74,
.textbox-normal.textbox-2-8,
.textbox-normal.textbox-2-9
  background-color: $tutu
  height: 40px
  min-width: 50px
  width: unset

.textbox-normal.textbox1-4
  background-color: $pippin
  height: 40px
  min-width: 150px
  width: unset

.textbox-normal.textbox2-3,
.textbox-normal.textbox2-3-1,
.textbox-normal.textbox2-3-10,
.textbox-normal.textbox2-3-11,
.textbox-normal.textbox2-3-12,
.textbox-normal.textbox2-3-2,
.textbox-normal.textbox2-3-3,
.textbox-normal.textbox2-3-4,
.textbox-normal.textbox2-3-5,
.textbox-normal.textbox2-3-6,
.textbox-normal.textbox2-3-7,
.textbox-normal.textbox2-3-8,
.textbox-normal.textbox2-3-9
  background-color: $pippin
  height: 40px
  min-width: 50px
  width: unset

.textbox-normal.textbox3-3,
.textbox-normal.textbox3-3-1,
.textbox-normal.textbox3-3-10,
.textbox-normal.textbox3-3-11,
.textbox-normal.textbox3-3-12,
.textbox-normal.textbox3-3-2,
.textbox-normal.textbox3-3-3,
.textbox-normal.textbox3-3-4,
.textbox-normal.textbox3-3-5,
.textbox-normal.textbox3-3-6,
.textbox-normal.textbox3-3-7,
.textbox-normal.textbox3-3-8,
.textbox-normal.textbox3-3-9
  background-color: $pippin
  height: 40px
  min-width: 100px
  width: unset
</style>
