<template>
  <div class="course-list-record-1">
    <textbox2 :text="textbox21Props.text" :className="textbox21Props.className" />
    <textbox2 :text="textbox22Props.text" :className="textbox22Props.className" />
    <textbox2 :text="textbox23Props.text" :className="textbox23Props.className" />
    <imagebox_Search :src="imagebox_Add1Props.src" :className="imagebox_Add1Props.className" />
    <imagebox_Search :src="imagebox_SearchProps.src" :className="imagebox_SearchProps.className" />
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
import Imagebox_Search from "./Imagebox_Search";
export default {
  name: "CourseListRecord",
  components: {
    Textbox2,
    Imagebox_Search,
  },
  props: ["textbox21Props", "textbox22Props", "textbox23Props", "imagebox_Add1Props", "imagebox_SearchProps"],
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
