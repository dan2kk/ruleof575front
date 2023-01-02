<template>
  <div class="property-1-menu-login">
    <div class="cart-3">
      <view
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <div class="view-7"><login-button /></div>
    </div>
  </div>
</template>

<script>
import View from "./View";
import LoginButton from "./LoginButton";
export default {
  name: "XMenu222",
  components: {
    View,
    LoginButton,
  },
  props: ["viewProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-menu-login
  align-items: center
  border: 3px solid
  border-color: $white
  display: flex
  flex-direction: column
  gap: 10px
  width: fit-content

.cart-3
  background-color: $bon-jour
  height: 600px
  min-width: 400px
  position: relative

.view-7
  align-items: center
  background-color: $bon-jour-2
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  height: 550px
  justify-content: center
  left: 0
  position: absolute
  top: 50px
  width: 400px
</style>
