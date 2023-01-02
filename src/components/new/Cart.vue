<template>
  <div class="cart">
    <view
      :view51Props="viewProps.view51Props"
      :view52Props="viewProps.view52Props"
      :view53Props="viewProps.view53Props"
      :view54Props="viewProps.view54Props"
    />
    <div class="view-6"><c7-ey0-g /></div>
  </div>
</template>

<script>
import View from "./View";
import C7Ey0G from "./C7Ey0G";
export default {
  name: "Cart",
  components: {
    View,
    C7Ey0G,
  },
  props: ["viewProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.cart,
.cart-Xd51XX
  align-items: flex-start
  background-color: $bon-jour
  display: flex
  flex-direction: column
  min-height: 600px
  position: relative
  width: 400px

.view-6,
.view-WODZJa
  background-color: $bon-jour-2
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  height: 550px
  position: relative
  width: 400px
</style>
