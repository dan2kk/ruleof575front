<template>
  <div :class="[`x`, className || ``]"><cart :viewProps="cartProps.viewProps" /></div>
</template>

<script>
import Cart from "./Cart";
export default {
  name: "X3eHZw8",
  components: {
    Cart,
  },
  props: ["className", "cartProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.x
  align-items: flex-start
  border: 3px solid
  border-color: $white
  display: flex
  height: 600px
  position: relative
  width: 400px

.x.view-5
  background-color: $white
  border-color: unset
  left: 400px
  position: absolute
  top: 0
</style>
