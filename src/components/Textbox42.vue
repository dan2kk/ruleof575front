<template>
  <div class="textbox-3">
    <div class="text-4 valign-text-middle notosanskr-bold-white-18px">수강생의 전공 비율</div>
  </div>
</template>

<script>
export default {
  name: "Textbox42",
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-3
  background-color: $orange-yellow
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 400px
  position: relative

.text-4
  height: 21px
  left: 130px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 7px
  width: 141px
</style>
