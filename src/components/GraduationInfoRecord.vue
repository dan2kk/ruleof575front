<template>
  <div class="graduation-info-record-1">
    <textbox2 :text="textbox21Props.text" :className="textbox21Props.className" />
    <textbox2 :text="textbox22Props.text" :className="textbox22Props.className" />
    <textbox2 :text="textbox23Props.text" :className="textbox23Props.className" />
    <textbox2 :text="textbox24Props.text" :className="textbox24Props.className" />
    <textbox2 :text="textbox25Props.text" :className="textbox25Props.className" />
    <textbox2 :text="textbox26Props.text" :className="textbox26Props.className" />
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
export default {
  name: "GraduationInfoRecord",
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
