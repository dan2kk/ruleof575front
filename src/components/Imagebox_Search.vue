<template>
  <div :class="[`textbox4-2-1`, className || ``]">
    <div class="cart-2"><img class="icon-buttons-1-1" :src="src" alt="IconButtons" /></div>
  </div>
</template>

<script>
export default {
  name: "Imagebox_Search",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox4-2-1
  align-items: center
  background-color: $pippin
  border: 1px solid
  border-color: $white
  display: flex
  height: 40px
  width: 50px
.textbox4-2-1.blue
  background-color: $solitude

.cart-2
  align-items: center
  border-radius: 5px
  display: flex
  flex: 1
  height: 40px
  justify-content: center
  width: 50px

.icon-buttons-1-1
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease

.icon-buttons-1-1:hover
  transform: scale(1.1)
</style>