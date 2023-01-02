<template>
  <div class="property-1-1">
    <div class="cart-5">
      <view
        :className="viewProps.className"
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <div class="view-21">
        <course-info-record-tmi-info :textboxTitleProps="courseInfoRecordTMIInfoProps.textboxTitleProps" />
      </div>
    </div>
  </div>
</template>

<script>
import View from "./View";
import CourseInfoRecordTmiInfo from "./CourseInfoRecordTmiInfo";
export default {
  name: "XMenu4",
  components: {
    View,
    CourseInfoRecordTmiInfo,
  },
  props: ["viewProps", "courseInfoRecordTMIInfoProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-1
  align-items: center
  border: 2px solid
  border-color: $white
  display: flex
  height: 600px
  justify-content: center
  margin-top: 35px
  width: 400px

.cart-5
  align-items: flex-start
  background-color: #ffefc6
  display: flex
  flex-direction: column
  min-height: 600px
  position: relative
  width: 400px

.view-21
  align-items: center
  background-color: $orange-yellow
  border-bottom-style: solid
  border-bottom-width: 3px
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-right-style: solid
  border-right-width: 3px
  display: flex
  height: 50px
  position: relative
  width: 400px
</style>
