<template>
  <div class="course-info-record"><textbox-title :content="textboxTitleProps.content" /></div>
</template>

<script>
import TextboxTitle from "./TextboxTitle";
export default {
  name: "CourseInfoRecordTmiInfo",
  components: {
    TextboxTitle,
  },
  props: ["textboxTitleProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.course-info-record
  align-items: center
  background-color: $orange-yellow
  border: 3px solid
  border-color: $white
  display: flex
  height: 50px
  min-width: 400px
  position: relative
</style>
