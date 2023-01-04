<template>
  <div class="login-button-1">
    <div class="cart">
      <div class="input-id valign-text-middle notosanskr-normal-white-12px">{{ children }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginButton4",
  props: ["children"],
};
</script>

<style lang="sass">
@import '../../variables'
.login-button-1:hover
  transform: scale(1.2)
.login-button-1,
.login-button-4xfPZA
  align-items: center
  background-color: $nobel
  border: 4px solid
  border-color: $white
  display: flex
  height: 34px
  justify-content: center
  width: 140px

.cart,
.cart-ioLP29
  align-items: flex-start
  align-self: stretch
  background-color: $silver
  border: 4px solid
  border-color: $white
  display: flex
  flex: 1
  margin-bottom: -2.00px
  margin-left: -2.00px
  margin-right: -2.00px
  margin-top: -2.00px

.input-id,
.input-id-LLMuUq
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center
</style>
