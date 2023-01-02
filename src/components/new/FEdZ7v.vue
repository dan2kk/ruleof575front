<template>
  <div class="property-1-1">
    <div class="cart-3">
      <view
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <div class="view-32">
        <div class="view-33"></div>
      </div>
    </div>
  </div>
</template>

<script>
import View from "./View";
export default {
  name: "FEdZ7v",
  components: {
    View,
  },
  props: ["viewProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-1
  align-items: flex-start
  border: 2px solid
  border-color: $white
  display: flex
  height: 600px
  margin-top: 35px
  width: 400px

.cart-3
  align-items: flex-start
  background-color: $egg-white
  display: flex
  flex-direction: column
  min-height: 600px
  position: relative
  width: 400px

.view-32
  background-color: $egg-white
  height: 550px
  width: 400px

.view-33
  background-color: $orange-yellow
  border-bottom-style: solid
  border-bottom-width: 3px
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-right-style: solid
  border-right-width: 3px
  height: 50px
  width: 400px
</style>
