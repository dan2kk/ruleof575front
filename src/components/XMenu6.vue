<template>
  <div class="property-1-3">
    <div class="cart-7">
      <view
        :className="viewProps.className"
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <course-list-record
        :className="courseListRecordProps.className"
        :view31Props="courseListRecordProps.view31Props"
        :view32Props="courseListRecordProps.view32Props"
        :view33Props="courseListRecordProps.view33Props"
      />
      <course-list-table v-bind="courseListTableProps" />
    </div>
  </div>
</template>

<script>
import View from "./View";
import CourseListRecord from "./CourseListRecord";
import CourseListTable from "./CourseListTable";
export default {
  name: "XMenu6",
  components: {
    View,
    CourseListRecord,
    CourseListTable,
  },
  props: ["viewProps", "courseListRecordProps", "courseListTableProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-3
  align-items: center
  border: 2px solid
  border-color: $white
  display: flex
  justify-content: center
  margin-top: 49px
  width: 400px

.cart-7
  align-items: center
  background-color: #ffdfde
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px
</style>
