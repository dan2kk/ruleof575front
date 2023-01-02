<template>
  <div :class="[`view-8-1`, className || ``]">
    <div class="text_label valign-text-middle notosanskr-bold-white-20px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "View5",
  props: ["children", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-8-1
  align-items: center
  background-color: $geraldine
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  height: 50px
  justify-content: center
  width: 100px

.text_label
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -3.00px
  text-align: center

.view-8-1.view-9
  background-color: $pigeon-post

.view-8-1.view-10
  background-color: $orange-yellow

.view-8-1.view-11
  background-color: $lily
  border-right-style: solid
  border-right-width: 3px

.view-8-1.view-13
  align-items: center
  background-color: $pigeon-post
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  height: 50px
  justify-content: center
  width: 100px

.view-8-1.view-14
  align-items: center
  background-color: $orange-yellow
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  height: 50px
  justify-content: center
  width: 100px

.view-8-1.view-15
  align-items: center
  background-color: $lily
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-right-style: solid
  border-right-width: 3px
  display: flex
  height: 50px
  justify-content: center
  width: 100px
</style>
