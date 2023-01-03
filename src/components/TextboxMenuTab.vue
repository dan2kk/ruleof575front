<template>
  <div class="textbox-menu-tab">
    <textbox :titleText="textbox1Props.titleText" />
    <textbox :titleText="textbox2Props.titleText" :className="textbox2Props.className" />
    <textbox :titleText="textbox3Props.titleText" :className="textbox3Props.className" />
    <textbox :titleText="textbox4Props.titleText" :className="textbox4Props.className" />
  </div>
</template>

<script>
import Textbox from "./Textbox";
export default {
  name: "TextboxMenuTab",
  components: {
    Textbox,
  },
  props: ["textbox1Props", "textbox2Props", "textbox3Props", "textbox4Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-menu-tab
  align-items: flex-start
  background-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  max-height: 50px
  width: 350px
  position: absolute
</style>
