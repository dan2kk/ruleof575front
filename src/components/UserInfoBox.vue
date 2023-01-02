<template>
  <div :class="[`user-info-box`, className || ``]">
    <textbox52 />
    <textbox52 />
    <textbox52 />
    <textbox52 />
  </div>
</template>

<script>
import Textbox52 from "./Textbox52";
export default {
  name: "UserInfoBox",
  components: {
    Textbox52,
  },
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.user-info-box
  align-items: flex-start
  align-self: stretch
  background-color: $silver
  display: flex
  height: 60px
  position: relative

.user-info-box.user-info-box-1
  align-self: unset
  width: 400px
</style>
