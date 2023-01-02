<template>
  <div class="text_label-3 valign-text-middle notosanskr-bold-white-20px">{{ text_Label }}</div>
</template>

<script>
export default {
  name: "TextLabel",
  props: ["text_Label"],
};
</script>

<style lang="sass">
.text_label-3
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -3.00px
  text-align: center
</style>
