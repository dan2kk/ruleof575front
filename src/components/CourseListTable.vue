<template>
  <div class="course-list_table-cart-7">
    <course-list-record2
      :text11Props="courseListRecord21Props.text11Props"
      :text12Props="courseListRecord21Props.text12Props"
      :text13Props="courseListRecord21Props.text13Props"
      :view41Props="courseListRecord21Props.view41Props"
      :view42Props="courseListRecord21Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord22Props.text11Props"
      :text12Props="courseListRecord22Props.text12Props"
      :text13Props="courseListRecord22Props.text13Props"
      :view41Props="courseListRecord22Props.view41Props"
      :view42Props="courseListRecord22Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord23Props.text11Props"
      :text12Props="courseListRecord23Props.text12Props"
      :text13Props="courseListRecord23Props.text13Props"
      :view41Props="courseListRecord23Props.view41Props"
      :view42Props="courseListRecord23Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord24Props.text11Props"
      :text12Props="courseListRecord24Props.text12Props"
      :text13Props="courseListRecord24Props.text13Props"
      :view41Props="courseListRecord24Props.view41Props"
      :view42Props="courseListRecord24Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord25Props.text11Props"
      :text12Props="courseListRecord25Props.text12Props"
      :text13Props="courseListRecord25Props.text13Props"
      :view41Props="courseListRecord25Props.view41Props"
      :view42Props="courseListRecord25Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord26Props.text11Props"
      :text12Props="courseListRecord26Props.text12Props"
      :text13Props="courseListRecord26Props.text13Props"
      :view41Props="courseListRecord26Props.view41Props"
      :view42Props="courseListRecord26Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord27Props.text11Props"
      :text12Props="courseListRecord27Props.text12Props"
      :text13Props="courseListRecord27Props.text13Props"
      :view41Props="courseListRecord27Props.view41Props"
      :view42Props="courseListRecord27Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord28Props.text11Props"
      :text12Props="courseListRecord28Props.text12Props"
      :text13Props="courseListRecord28Props.text13Props"
      :view41Props="courseListRecord28Props.view41Props"
      :view42Props="courseListRecord28Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord29Props.text11Props"
      :text12Props="courseListRecord29Props.text12Props"
      :text13Props="courseListRecord29Props.text13Props"
      :view41Props="courseListRecord29Props.view41Props"
      :view42Props="courseListRecord29Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord210Props.text11Props"
      :text12Props="courseListRecord210Props.text12Props"
      :text13Props="courseListRecord210Props.text13Props"
      :view41Props="courseListRecord210Props.view41Props"
      :view42Props="courseListRecord210Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord211Props.text11Props"
      :text12Props="courseListRecord211Props.text12Props"
      :text13Props="courseListRecord211Props.text13Props"
      :view41Props="courseListRecord211Props.view41Props"
      :view42Props="courseListRecord211Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord212Props.text11Props"
      :text12Props="courseListRecord212Props.text12Props"
      :text13Props="courseListRecord212Props.text13Props"
      :view41Props="courseListRecord212Props.view41Props"
      :view42Props="courseListRecord212Props.view42Props"
    />
    <course-list-record2
      :text11Props="courseListRecord213Props.text11Props"
      :text12Props="courseListRecord213Props.text12Props"
      :text13Props="courseListRecord213Props.text13Props"
      :view41Props="courseListRecord213Props.view41Props"
      :view42Props="courseListRecord213Props.view42Props"
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

.course-list_table-cart-7::-webkit-scrollbar
  display: none
  width: 0

.course-list_table-cart-7
  align-items: center
  background-color: $pippin
  display: flex
  flex-direction: column
  height: 510px
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
</style>
