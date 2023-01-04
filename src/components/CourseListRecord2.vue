<template>
  <div class="course-list-record-1">
    <textbox2 :text="textbox21Props.text" :className="textbox21Props.className" />
    <textbox2 :text="textbox22Props.text" :className="textbox22Props.className" />
    <textbox2 :text="textbox23Props.text" :className="textbox23Props.className" />
    <textbox422 :src="textbox421Props.src" :className="textbox421Props.className" />
    <textbox422 :src="textbox422Props.src" :className="textbox422Props.className" />
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
import Textbox422 from "./Textbox422";
export default {
  name: "CourseListRecord2",
  components: {
    Textbox2,
    Textbox422,
  },
  props: ["textbox21Props", "textbox22Props", "textbox23Props", "textbox421Props", "textbox422Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.course-list-record-1
  align-items: flex-start
  background-color: $pippin
  border: 3px solid
  border-color: $white
  display: flex
  position: relative
  width: 400px
</style>
