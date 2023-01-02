<template>
  <div class="graduation-info-record">
    <textbox3 :smallwhiteText="textbox31Props.smallwhiteText" />
    <textbox3 :smallwhiteText="textbox32Props.smallwhiteText" :className="textbox32Props.className" />
    <textbox3 :smallwhiteText="textbox33Props.smallwhiteText" :className="textbox33Props.className" />
    <textbox3 :smallwhiteText="textbox34Props.smallwhiteText" :className="textbox34Props.className" />
    <textbox3 :smallwhiteText="textbox35Props.smallwhiteText" :className="textbox35Props.className" />
    <textbox3 :smallwhiteText="textbox36Props.smallwhiteText" :className="textbox36Props.className" />
  </div>
</template>

<script>
import Textbox3 from "./Textbox3";
export default {
  name: "GraduationInfoRecord",
  components: {
    Textbox3,
  },
  props: ["textbox31Props", "textbox32Props", "textbox33Props", "textbox34Props", "textbox35Props", "textbox36Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.graduation-info-record
  align-items: flex-start
  background-color: $lily
  border-bottom-style: solid
  border-bottom-width: 3px
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-right-style: solid
  border-right-width: 3px
  display: flex
  height: 40px
  justify-content: space-between
  position: relative
  width: 400px
</style>
