<template>
  <div class="textbox-10">
    <div class="title-text-2 valign-text-middle notosanskr-bold-white-18px">{{ titleText }}</div>
  </div>
</template>

<script>
export default {
  name: "Textbox6",
  props: ["titleText"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-10
  background-color: $pigeon-post
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 400px
  position: relative

.title-text-2
  height: 21px
  left: 130px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 7px
  width: 141px
</style>
