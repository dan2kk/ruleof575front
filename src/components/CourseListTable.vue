<template>
  <div class="course-list-table">
    <course-list-record2
      :textbox21Props="courseListRecord21Props.textbox21Props"
      :textbox22Props="courseListRecord21Props.textbox22Props"
      :textbox23Props="courseListRecord21Props.textbox23Props"
      :textbox421Props="courseListRecord21Props.textbox421Props"
      :textbox422Props="courseListRecord21Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord22Props.textbox21Props"
      :textbox22Props="courseListRecord22Props.textbox22Props"
      :textbox23Props="courseListRecord22Props.textbox23Props"
      :textbox421Props="courseListRecord22Props.textbox421Props"
      :textbox422Props="courseListRecord22Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord23Props.textbox21Props"
      :textbox22Props="courseListRecord23Props.textbox22Props"
      :textbox23Props="courseListRecord23Props.textbox23Props"
      :textbox421Props="courseListRecord23Props.textbox421Props"
      :textbox422Props="courseListRecord23Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord24Props.textbox21Props"
      :textbox22Props="courseListRecord24Props.textbox22Props"
      :textbox23Props="courseListRecord24Props.textbox23Props"
      :textbox421Props="courseListRecord24Props.textbox421Props"
      :textbox422Props="courseListRecord24Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord25Props.textbox21Props"
      :textbox22Props="courseListRecord25Props.textbox22Props"
      :textbox23Props="courseListRecord25Props.textbox23Props"
      :textbox421Props="courseListRecord25Props.textbox421Props"
      :textbox422Props="courseListRecord25Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord26Props.textbox21Props"
      :textbox22Props="courseListRecord26Props.textbox22Props"
      :textbox23Props="courseListRecord26Props.textbox23Props"
      :textbox421Props="courseListRecord26Props.textbox421Props"
      :textbox422Props="courseListRecord26Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord27Props.textbox21Props"
      :textbox22Props="courseListRecord27Props.textbox22Props"
      :textbox23Props="courseListRecord27Props.textbox23Props"
      :textbox421Props="courseListRecord27Props.textbox421Props"
      :textbox422Props="courseListRecord27Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord28Props.textbox21Props"
      :textbox22Props="courseListRecord28Props.textbox22Props"
      :textbox23Props="courseListRecord28Props.textbox23Props"
      :textbox421Props="courseListRecord28Props.textbox421Props"
      :textbox422Props="courseListRecord28Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord29Props.textbox21Props"
      :textbox22Props="courseListRecord29Props.textbox22Props"
      :textbox23Props="courseListRecord29Props.textbox23Props"
      :textbox421Props="courseListRecord29Props.textbox421Props"
      :textbox422Props="courseListRecord29Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord210Props.textbox21Props"
      :textbox22Props="courseListRecord210Props.textbox22Props"
      :textbox23Props="courseListRecord210Props.textbox23Props"
      :textbox421Props="courseListRecord210Props.textbox421Props"
      :textbox422Props="courseListRecord210Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord211Props.textbox21Props"
      :textbox22Props="courseListRecord211Props.textbox22Props"
      :textbox23Props="courseListRecord211Props.textbox23Props"
      :textbox421Props="courseListRecord211Props.textbox421Props"
      :textbox422Props="courseListRecord211Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord212Props.textbox21Props"
      :textbox22Props="courseListRecord212Props.textbox22Props"
      :textbox23Props="courseListRecord212Props.textbox23Props"
      :textbox421Props="courseListRecord212Props.textbox421Props"
      :textbox422Props="courseListRecord212Props.textbox422Props"
    />
    <course-list-record2
      :textbox21Props="courseListRecord213Props.textbox21Props"
      :textbox22Props="courseListRecord213Props.textbox22Props"
      :textbox23Props="courseListRecord213Props.textbox23Props"
      :textbox421Props="courseListRecord213Props.textbox421Props"
      :textbox422Props="courseListRecord213Props.textbox422Props"
    />
  </div>
</template>

<script>
import CourseListRecord2 from "./CourseListRecord2";
export default {
  name: "CourseListTable",
  components: {
    CourseListRecord2,
  },
  props: [
    "courseListRecord21Props",
    "courseListRecord22Props",
    "courseListRecord23Props",
    "courseListRecord24Props",
    "courseListRecord25Props",
    "courseListRecord26Props",
    "courseListRecord27Props",
    "courseListRecord28Props",
    "courseListRecord29Props",
    "courseListRecord210Props",
    "courseListRecord211Props",
    "courseListRecord212Props",
    "courseListRecord213Props",
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
  position: relative
  width: 400px
</style>
