<template>
  <div :class="[`textbox1`, className || ``]">
    <div class="text valign-text-middle notosanskr-bold-white-18px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Textbox1",
  props: ["children", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox1
  background-color: $geraldine
  border: 1px solid
  border-color: $white
  height: 50px
  min-width: 100px
  position: relative

.text
  height: 40px
  left: 0
  letter-spacing: 0
  line-height: normal
  position: absolute
  text-align: center
  top: 2px
  width: 100px

.textbox1.textbox2
  background-color: $pigeon-post

.textbox1.textbox3
  background-color: $orange-yellow

.textbox1.textbox4
  background-color: $lily
  
.textbox1.textbox1-1
  background-color: $geraldine
  cursor: pointer
  transition: all 0.2s ease
.textbox1.textbox2-1
  background-color: $pigeon-post
  cursor: pointer
  transition: all 0.2s ease
.textbox1.textbox1-1:hover,
.textbox1.textbox2-1:hover,
.textbox1.textbox3-1:hover,
.textbox1.textbox4-1:hover
  transform: scale(1.1)

.textbox1.textbox3-1
  background-color: $orange-yellow
  cursor: pointer
  transition: all 0.2s ease

.textbox1.textbox4-1
  background-color: $lily
  cursor: pointer
  transition: all 0.2s ease
</style>
