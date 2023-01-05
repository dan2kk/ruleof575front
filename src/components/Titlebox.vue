<template>
  <div class="textbox-1">
    <div class="text-2 valign-text-middle notosanskr-bold-white-18px">수강생의 전공 비율</div>
  </div>
</template>

<script>
export default {
  name: "Titlebox",
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-1
  background-color: $pigeon-post
  border: 3px solid
  border-color: $white
  height: 40px
  width: 400px
  position: relative
  align-items: center
.text-2
  height: 26px
  left: 130px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 4px
  width: 150px
</style>
