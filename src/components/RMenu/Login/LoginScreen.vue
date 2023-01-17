<template>
  <div class="login-screen">
    <div class="login-btn" @click="onClick">
      <div class="login-btn-cart">
        <div class="login-btn-text valign-text-middle notosanskr-normal-white-12px">{{ "Log In"}}</div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "LoginScreen",
  methods: {
    onClick(){

      //웹 크롤링
      this.$emit("login-req")
    }
  }

};
</script>

<style lang="sass">
@import '../../../../variables'

.login-screen
  align-items: center
  align-self: flex-start
  background-color: $bon-jour
  display: flex
  flex-direction: column
  height: 550px
  justify-content: center
  position: relative
  width: 400px
  border-style: solid
  border-width: 1px
  border-color: $white

.login-btn
  align-items: center
  background-color: $nobel
  border-color: $white
  display: flex
  justify-content: center
  width: 140px

.login-btn-cart
  align-items: flex-start
  align-self: stretch
  background-color: $silver
  border: 4px solid
  border-color: $white
  display: flex
  flex: 1
  height: 40px
  width: 140px

.login-btn-text
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center


</style>
