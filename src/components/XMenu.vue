<template>
  <div class="menu">
    <div class="cart-1">
      <textbox-menu-tab
        :textbox1Props="textboxMenuTabProps.textbox1Props"
        :textbox2Props="textboxMenuTabProps.textbox2Props"
        :textbox3Props="textboxMenuTabProps.textbox3Props"
        :textbox4Props="textboxMenuTabProps.textbox4Props"
      />
      <div class="view-6"><login-button /></div>
    </div>
  </div>
</template>

<script>
import TextboxMenuTab from "./TextboxMenuTab";
import LoginButton from "./LoginButton";
export default {
  name: "XMenu",
  components: {
    TextboxMenuTab,
    LoginButton,
  },
  props: ["textboxMenuTabProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.menu
  align-items: stretch
  display: flex
  position: absolute
  flex-direction: column
  height: 600px
  max-width: 400px

.cart-1
  align-items: flex-start
  align-self: stretch
  background-color: $bon-jour
  display: fix
  flex: 1
  flex-direction: column
  position: absolute
  max-width: 400px

.view-6
  align-items: center
  background-color: $bon-jour-2
  display: flex
  flex-direction: column
  height: 500px
  justify-content: center
  position: reltaive
  width: 400px
</style>
