<template>
  <div class="view-20">
    <div class="text_label-6 valign-text-middle notosanskr-normal-white-12px" v-html="text_Label"></div>
  </div>
</template>

<script>
export default {
  name: "View3",
  props: ["text_Label"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-20
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 40px
  justify-content: center
  width: 50px

.text_label-6
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  text-align: center
</style>
