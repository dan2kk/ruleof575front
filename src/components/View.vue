<template>
  <div :class="[`view-8`, className || ``]">
    <view5 :textLabelProps="view51Props.textLabelProps" />
    <view5 :className="view52Props.className" :textLabelProps="view52Props.textLabelProps" />
    <view5 :className="view53Props.className" :textLabelProps="view53Props.textLabelProps" />
    <view5 :className="view54Props.className" :textLabelProps="view54Props.textLabelProps" />
  </div>
</template>

<script>
import View5 from "./View5";
export default {
  name: "View",
  components: {
    View5,
  },
  props: ["className", "view51Props", "view52Props", "view53Props", "view54Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-8
  align-items: center
  background-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  height: 50px
  left: 0
  position: absolute
  top: 0
  width: 400px

.view-8.view-9,
.view-8.view-10,
.view-8.tab-bar,
.view-8.view-11
  left: unset
  position: relative
  top: unset
</style>
