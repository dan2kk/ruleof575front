<template>
  <div :class="[`text-1 notosanskr-normal-black-12px`, className || ``]" v-html="text1"></div>
</template>

<script>
export default {
  name: "Text1",
  props: ["text1", "className"],
};
</script>

<style lang="sass">
.text-1
  height: 40px
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  text-align: center
  width: 60px

.text-1.e-text
  flex: 1
  margin-top: -2.00px
  width: unset

.text-1.text_label
  height: unset
  margin-top: unset
  width: fit-content

.text-1.text_label-1
  align-self: stretch
  flex: 1
  height: unset
  width: unset
</style>
