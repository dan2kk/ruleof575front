<template>
  <div class="view-7">
    <view5 :children="view51Props.children" />
    <view5 :children="view52Props.children" :className="view52Props.className" />
    <view5 :children="view53Props.children" :className="view53Props.className" />
    <view5 :children="view54Props.children" :className="view54Props.className" />
  </div>
</template>

<script>
import View5 from "./View5";
export default {
  name: "View",
  components: {
    View5,
  },
  props: ["view51Props", "view52Props", "view53Props", "view54Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-7,
.view-v8Zkxp
  align-items: center
  background-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  height: 50px
  position: relative
  width: 400px
</style>
