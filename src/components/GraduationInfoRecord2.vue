<template>
  <div class="graduation-info-record-1">
    <textbox2 :className="textbox21Props.className" :text1Props="textbox21Props.text1Props" />
    <textbox2 :className="textbox22Props.className" :text1Props="textbox22Props.text1Props" />
    <textbox2 :className="textbox23Props.className" :text1Props="textbox23Props.text1Props" />
    <textbox2 :className="textbox24Props.className" :text1Props="textbox24Props.text1Props" />
    <textbox2 :className="textbox25Props.className" :text1Props="textbox25Props.text1Props" />
    <textbox2 :className="textbox26Props.className" :text1Props="textbox26Props.text1Props" />
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
export default {
  name: "GraduationInfoRecord2",
  components: {
    Textbox2,
  },
  props: ["textbox21Props", "textbox22Props", "textbox23Props", "textbox24Props", "textbox25Props", "textbox26Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.graduation-info-record-1
  align-items: flex-start
  background-color: $tutu
  border: 3px solid
  border-color: $white
  display: flex
  position: relative
  width: 400px
</style>
