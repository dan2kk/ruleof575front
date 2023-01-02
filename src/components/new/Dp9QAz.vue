<template>
  <div class="view-41">
    <div class="view-container-1">
      <c7-ey0-g :className="c7Ey0G1Props.className" />
      <c7-ey0-g :className="c7Ey0G2Props.className" />
      <c7-ey0-g :className="c7Ey0G3Props.className" />
      <c7-ey0-g :className="c7Ey0G4Props.className" />
    </div>
  </div>
</template>

<script>
import C7Ey0G from "./C7Ey0G";
export default {
  name: "Dp9QAz",
  components: {
    C7Ey0G,
  },
  props: ["c7Ey0G1Props", "c7Ey0G2Props", "c7Ey0G3Props", "c7Ey0G4Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-41
  align-items: flex-start
  background-color: $silver
  border-bottom-style: solid
  border-bottom-width: 3px
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-top-style: solid
  border-top-width: 3px
  display: flex
  height: 106px
  left: -3px
  min-width: 406px
  position: fixed
  top: -3px

.view-container-1
  height: 38px
  margin-left: -2px
  margin-top: -1px
  position: relative
  width: 404px
</style>
