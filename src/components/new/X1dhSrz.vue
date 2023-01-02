<template>
  <div class="property-1-3">
    <div class="overlap-group1">
      <div class="cart-13">
        <view
          :view51Props="viewProps.view51Props"
          :view52Props="viewProps.view52Props"
          :view53Props="viewProps.view53Props"
          :view54Props="viewProps.view54Props"
        />
      </div>
      <div class="view-37"><view3 :className="view3Props.className" :sp1mVkProps="view3Props.sp1mVkProps" /></div>
    </div>
  </div>
</template>

<script>
import View from "./View";
import View3 from "./View3";
export default {
  name: "X1dhSrz",
  components: {
    View,
    View3,
  },
  props: ["viewProps", "view3Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-3
  align-items: flex-start
  border: 2px solid
  border-color: $white
  display: flex
  margin-top: 49px
  width: 400px

.overlap-group1
  height: 600px
  position: relative
  width: 400px

.cart-13
  align-items: flex-start
  background-color: #ffdfde
  display: flex
  height: 600px
  left: 0
  min-width: 400px
  position: absolute
  top: 0

.view-37
  align-items: flex-start
  background-color: #ffe0de
  display: flex
  height: 550px
  left: 0
  min-width: 400px
  position: absolute
  top: 50px
</style>
