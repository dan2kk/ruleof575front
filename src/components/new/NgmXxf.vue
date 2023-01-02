<template>
  <div :class="[`view-1-1`, className || ``]">
    <div class="text-1 notosanskr-normal-black-12px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "NgmXxf",
  props: ["children", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-1-1
  align-items: flex-start
  background-color: $quill-gray
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $white
  border-left-style: solid
  border-left-width: 1px
  border-right-style: solid
  border-right-width: 1px
  display: flex
  flex-direction: column
  width: fit-content

.text-1
  height: 40px
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  text-align: center
  width: 60px

.view-1-1.view-2,
.view-1-1.view-2-1
  height: 60px
  margin-bottom: -40.00px

.view-1-1.view-4,
.view-1-1.view-4-1
  height: 60px
</style>
