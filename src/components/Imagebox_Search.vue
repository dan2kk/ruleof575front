<template>
  <div :class="[`imagebox`, color || ``]">
    <div class="cart-imagebox">
      <img class="icon-buttons-1-1" :src="src" alt="IconButtons" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Imagebox_Search",
  props: ["src", "color"],
};
</script>

<style lang="sass">
@import '../../variables'


.imagebox
  align-items: center
  display: flex
  height: 40px
  width: 50px

.imagebox.red
  background-color: $pippin

.imagebox.blue
  background-color: $solitude

.cart-imagebox
  align-items: center
  display: flex
  flex: 1
  height: 40px
  justify-content: center
  width: 50px
  border: 1px solid
  border-color: $white

.icon-buttons-1-1
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease

.icon-buttons-1-1:hover
  transform: scale(1.1)
</style>