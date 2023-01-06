<template>
  <div class="course-list-table">
    <course-list-record
      :textbox21Props="courseListRecord1Props.textbox21Props"
      :textbox22Props="courseListRecord1Props.textbox22Props"
      :textbox23Props="courseListRecord1Props.textbox23Props"
      :imagebox_Add1Props="courseListRecord1Props.imagebox_Add1Props"
      :imagebox_SearchProps="courseListRecord1Props.imagebox_SearchProps"
    />
  </div>
</template>

<script>
import CourseListRecord from "./CourseListRecord";
export default {
  name: "CourseListTable",
  components: {
    CourseListRecord,
  },
  props: [
    "courseListRecord1Props",

  ],
};
</script>

<style lang="sass">
@import '../../variables'

.course-list-table
  align-items: center
  background-color: $pippin
  display: flex
  flex-direction: column
  height: 550px
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
  border-width : 1px
  border-color : white
  border-style: solid
</style>
