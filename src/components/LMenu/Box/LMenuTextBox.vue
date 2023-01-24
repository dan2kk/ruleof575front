<template>
  <div class="l-menu-text-box">
    <div class="l-menu-text-box-cart">
      <div class="l-menu-text-box-text valign-text-middle notosanskr-normal-white-12px">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoTextBox",
  props: ["text"],
};
</script>

<style lang="sass">
@import '../../../../variables'

.l-menu-text-box
  background-color: $error-color
  border: 1px solid
  border-color: $white
  height: 30px
  min-width: 100px

.l-menu-text-box-cart
  align-items: flex-start
  border-radius: 5px
  display: flex
  height: 24px
  position: relative
  top: 3px
  width: 100px

.l-menu-text-box-text
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center
</style>
