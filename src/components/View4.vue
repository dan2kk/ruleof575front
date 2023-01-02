<template>
  <div :class="[`view-25-1`, className || ``]"><img class="icon-buttons-3" :src="src" alt="Icon Buttons" /></div>
</template>

<script>
export default {
  name: "View4",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-25-1
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 40px
  justify-content: center
  width: 50px

.icon-buttons-3
  height: 35px
  min-width: 35px

.view-25-1.view-25-2 .icon-buttons-3,
.view-25-1.view-25 .icon-buttons-3
  height: 27.5px
</style>
