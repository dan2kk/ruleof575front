<template>
  <div :class="[`view-29-1`, className || ``]">
    <div class="text_label-6 valign-text-middle notosanskr-normal-white-12px" v-html="text_Label"></div>
  </div>
</template>

<script>
export default {
  name: "View4",
  props: ["text_Label", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-29-1
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 52px
  justify-content: center
  left: 150px
  position: absolute
  top: 0
  width: 52px

.text_label-6
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  text-align: center

.view-29-1.view-30
  left: 300px

.view-29-1.view-31
  left: 350px
</style>
