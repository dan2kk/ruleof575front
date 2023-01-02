<template>
  <div class="property-1">
    <div class="cart-4">
      <view
        :className="viewProps.className"
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <div class="view-16"></div>
      <div class="view-17">
        <course-list-record
          :view31Props="courseListRecordProps.view31Props"
          :view32Props="courseListRecordProps.view32Props"
          :view33Props="courseListRecordProps.view33Props"
        />
      </div>
      <gyoyang-table v-bind="gyoyangTableProps" />
    </div>
  </div>
</template>

<script>
import View from "./View";
import CourseListRecord from "./CourseListRecord";
import GyoyangTable from "./GyoyangTable";
export default {
  name: "XMenu3",
  components: {
    View,
    CourseListRecord,
    GyoyangTable,
  },
  props: ["viewProps", "courseListRecordProps", "gyoyangTableProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1
  align-items: center
  border: 2px solid
  border-color: $white
  display: flex
  justify-content: center
  margin-top: 38px
  width: 400px

.cart-4
  align-items: flex-start
  background-color: $solitude
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px

.view-16
  background-color: $solitude
  border-left-style: solid
  border-left-width: 3px
  height: 83.33%
  left: 0
  position: absolute
  top: 16.67%
  width: 100%

.view-17
  align-items: center
  background-color: $pigeon-post
  border-bottom-style: solid
  border-bottom-width: 3px
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-right-style: solid
  border-right-width: 3px
  display: flex
  height: 40px
  justify-content: center
  position: relative
  width: 400px
</style>
