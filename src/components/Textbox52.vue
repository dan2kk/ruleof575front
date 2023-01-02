<template>
  <div class="textbox">
    <div class="smallwhite-cart">
      <div class="smallwhite-text valign-text-middle notosanskr-normal-white-12px">이름</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textbox52",
};
</script>

<style lang="sass">
@import '../../variables'

.textbox,
.textbox-1
  background-color: $silver
  border: 3px solid
  border-color: $white
  height: 30px
  min-width: 100px

.smallwhite-cart,
.smallwhite-cart-1
  align-items: flex-start
  border-radius: 5px
  display: flex
  height: 24px
  position: relative
  top: 3px
  width: 100px

.smallwhite-text,
.smallwhite-text-1
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center
</style>
