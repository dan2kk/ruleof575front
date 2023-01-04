<template>
  <div :class="[`initial-menu`, className || ``]">
  <login-button4 :children="loginButtonProps.children" @click="login()"/></div>
</template>

<script>
import LoginButton4 from "./LoginButton4";
export default {
  name: "InitialMenu",
  components: {
    LoginButton4,
  },
  props: ["className", "loginButtonProps"],
  methods: {
    login(){
      alert("logined")
      this.$emit("loginf")
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.initial-menu
  align-items: center
  align-self: flex-start
  background-color: $bon-jour
  display: flex
  flex-direction: column
  height: 550px
  justify-content: center
  margin-left: 10px
  position: relative
  width: 400px

.login-button4:hover
  transform: scale(1.2)

.initial-menu.initial-menu-1
  align-self: unset
  margin-left: unset
</style>
