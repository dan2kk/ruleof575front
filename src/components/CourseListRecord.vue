<template>
  <div :class="[`course-list_-record`, className || ``]">
    <div class="view-container">
      <div class="view-18"><div class="text_label-4 valign-text-middle notosanskr-normal-white-12px">과목명</div></div>
      <view3 :text_Label="view31Props.text_Label" />
      <div class="view-19">
        <div class="text_label-5 valign-text-middle notosanskr-normal-white-12px">수업 시간</div>
      </div>
      <view3 :text_Label="view32Props.text_Label" />
      <view3 :text_Label="view33Props.text_Label" />
    </div>
  </div>
</template>

<script>
import View3 from "./View3";
export default {
  name: "CourseListRecord",
  components: {
    View3,
  },
  props: ["className", "view31Props", "view32Props", "view33Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.course-list_-record
  background-color: $pigeon-post
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 400px

.view-container
  align-items: flex-start
  display: flex
  min-width: 400px
  position: relative

.view-18
  align-items: center
  display: flex
  height: 40px
  justify-content: center
  width: 150px

.text_label-4
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: fit-content

.view-19
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 40px
  justify-content: center
  width: 100px

.text_label-5
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -1.00px
  text-align: center

.course-list_-record.course-list_-record-1
  background-color: $geraldine
</style>
