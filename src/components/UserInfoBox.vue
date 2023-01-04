<template>
  <div class="user-info-box-1">
    <textbox :text="textbox1Props.text" />
    <textbox :text="textbox2Props.text" />
    <textbox :text="textbox3Props.text" />
    <textbox :text="textbox4Props.text" />
  </div>
</template>

<script>
import Textbox from "./Textbox";
export default {
  name: "UserInfoBox",
  components: {
    Textbox,
  },
  props: ["textbox1Props", "textbox2Props", "textbox3Props", "textbox4Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.user-info-box-1,
.user-info-box-8puNkL
  align-items: flex-start
  background-color: $silver
  display: flex
  height: 60px
  position: relative
  width: 400px
</style>
