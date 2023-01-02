<template>
  <div class="property-1">
    <div class="cart-1">
      <view
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <div class="view-22"><view3 :sp1mVkProps="view3Props.sp1mVkProps" /></div>
    </div>
  </div>
</template>

<script>
import View from "./View";
import View3 from "./View3";
export default {
  name: "QlPzu1",
  components: {
    View,
    View3,
  },
  props: ["viewProps", "view3Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1
  align-items: flex-start
  border: 2px solid
  border-color: $white
  display: flex
  height: 600px
  margin-top: 38px
  width: 400px

.cart-1
  align-items: flex-start
  background-color: $solitude
  display: flex
  flex-direction: column
  min-height: 600px
  position: relative
  width: 400px

.view-22
  background-color: $solitude
  border-left-style: solid
  border-left-width: 3px
  height: 550px
  position: relative
  width: 400px
</style>
