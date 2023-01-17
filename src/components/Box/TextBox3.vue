<template>
  <div class="text-box3">
    <div class="text-box3-cart">
      <div class="text-box3-text valign-text-middle notosanskr-normal-white-12px">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextBox3",
  props: ["text"],
};
</script>

<style lang="sass">
@import '../../../variables'

.text-box3
  background-color: $silver
  border: 1px solid
  border-color: $white
  height: 30px
  min-width: 100px

.text-box3-cart
  align-items: flex-start
  border-radius: 5px
  display: flex
  height: 24px
  position: relative
  top: 3px
  width: 100px

.text-box3-text
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center
</style>
