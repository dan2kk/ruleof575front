<template>
  <div class="textbox-title">
    <div class="content valign-text-middle notosanskr-bold-white-18px">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "TextboxTitle",
  props: ["content"],
};
</script>

<style lang="sass">
.textbox-title
  align-items: center
  display: flex
  flex: 1
  height: 50px
  justify-content: center
  width: 400px

.content
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: fit-content
</style>
