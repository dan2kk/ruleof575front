<template>
  <div :class="[`textbox-2`, className || ``]">
    <div class="title-text valign-text-middle notosanskr-bold-white-18px">{{ titleText }}</div>
  </div>
</template>

<script>
export default {
  name: "Textbox",
  props: ["titleText", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-2
  background-color: $geraldine
  border: 3px solid
  border-color: $white
  height: 50px
  min-width: 100px
  position: relative

.title-text
  height: 26px
  left: 16px
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 9px

.textbox-2.textbox-3-textbox-menu-tab
  background-color: $pigeon-post
  cursor: pointer
  transition: all 0.2s ease
.textbox-2.textbox-1:hover,
.textbox-2.textbox-2:hover,
.textbox-2.textbox-3:hover,
.textbox-2.textbox-4:hover,
.textbox-2.textbox-5:hover
  transform: scale(1.1)

.textbox-2.textbox-4
  background-color: $orange-yellow
  cursor: pointer
  transition: all 0.2s ease

.textbox-2.textbox-5
  background-color: $lily
  cursor: pointer
  transition: all 0.2s ease

.textbox-2.textbox-7
  background-color: $pigeon-post

.textbox-2.textbox-8
  background-color: $orange-yellow

.textbox-2.textbox-9
  background-color: $lily
</style>
