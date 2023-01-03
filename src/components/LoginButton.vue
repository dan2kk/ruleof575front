<template>
  <div class="login-button">
    <cart />
  </div>
</template>

<script>
import Cart from "./Cart";
export default {
  name: "LoginButton",
  components: {
    Cart,
  },
};
</script>

<style lang="sass">
@import '../../variables'

.login-button,
.login-button-GW4Xzp
  align-items: center
  background-color: $nobel
  border: 4px solid
  border-color: $white
  display: flex
  height: 34px
  justify-content: center
  position: relative
  width: 140px
</style>
