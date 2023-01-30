<template>
  <div class="login-screen">
    <div class="login-btn" @click="clickEvent">
      <div class="login-btn-cart">
        <div class="login-btn-text valign-text-middle notosanskr-bold-white-20px">{{ "Log In"}}</div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "LoginScreen",
  methods: {
    async clickEvent(){
      //await this.$store.dispatch("loginReq")
      this.$store.commit("loginMain")
      if(this.$store.getters.getIsLogined == false) {
        alert("로그인 실패하셨습니다.")
      }
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
  height: 100%
  justify-content: center
  position: relative
  width: 100%
  border-style: solid
  border-width: 1px
  border-color: $white
  border-bottom-right-radius: 15px
  border-bottom-left-radius: 15px
.login-btn
  align-items: center
  border-color: $white
  display: flex
  justify-content: center

.login-btn-cart
  align-items: flex-start
  align-self: stretch
  background-color: #437eb4
  border: 4px solid
  border-color: $white
  border-radius: 100px
  display: flex
  flex: 1
  width: 200px
  height: 50px


.login-btn-text
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center


</style>
