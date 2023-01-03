<template>
  <div class="menu">
    <div class="cart">
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
  align-items: flex-start
  display: flex
  position: absolute
  flex-direction: column
  height: 600px
  max-width: 400px

.cart
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
  height: 450px
  justify-content: center
  position: reltaive
  width: 400px
.login-button:hover 
  transform: scale(1.2)
</style>
