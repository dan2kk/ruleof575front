<template>
  <div :class="[`timeblock-1-1`, className || ``]">
    <div class="text-5 notosanskr-normal-black-12px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Timeblock4",
  props: ["children", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.timeblock-1-1
  align-items: flex-start
  background-color: $quill-gray
  display: flex
  flex-direction: column
  height: 40px
  width: 60px

.text-5
  height: 40px
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  text-align: center
  width: 60px

.timeblock-1-1.timeblock13,
.timeblock-1-1.timeblock13-2,
.timeblock-1-1.timeblock13-1,
.timeblock-1-1.timeblock13-1-1
  flex: 1
  height: unset
</style>
