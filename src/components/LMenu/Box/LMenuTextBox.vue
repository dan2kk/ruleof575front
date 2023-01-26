<template>
  <div class="l-menu-text-box">
    <div class="l-menu-text-box-text valign-text-middle notosanskr-normal-white-14px">
      {{ text }}
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
  align-items: flex-start
  display: flex
  height: 24px
  position: relative
  width: 150px
  border: 1px solid
  border-color: $white

.l-menu-text-box-text
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  text-align: center
</style>
