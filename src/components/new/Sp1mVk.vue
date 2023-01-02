<template>
  <div :class="[`view-27`, className || ``]">
    <div class="view-container">
      <div class="view-25"><div class="text_label-4 valign-text-middle notosanskr-normal-white-12px">과목명</div></div>
      <view4 :text_Label="view41Props.text_Label" />
      <div class="view-26">
        <div class="text_label-5 valign-text-middle notosanskr-normal-white-12px">
          월 09:00~10:30<br />수 09:00~10:30
        </div>
      </div>
      <view4 :text_Label="view42Props.text_Label" :className="view42Props.className" />
      <view4 :text_Label="view43Props.text_Label" :className="view43Props.className" />
    </div>
  </div>
</template>

<script>
import View4 from "./View4";
export default {
  name: "Sp1mVk",
  components: {
    View4,
  },
  props: ["className", "view41Props", "view42Props", "view43Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-27
  background-color: $pigeon-post
  border: 3px solid
  border-color: $white
  height: 50px
  min-width: 400px

.view-container
  height: 52px
  left: -1px
  position: relative
  top: -1px
  width: 402px

.view-25
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 52px
  justify-content: center
  left: 0
  position: absolute
  top: 0
  width: 152px

.text_label-4
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: fit-content

.view-26
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 52px
  justify-content: center
  left: 200px
  position: absolute
  top: 0
  width: 102px

.text_label-5
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  text-align: center

.view-27.view-28
  background-color: $geraldine
</style>
