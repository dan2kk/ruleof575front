<template>
  <div class="course-list_-record-2">
    <div class="view-container-1">
      <div class="view-22"><text1 :text1="text11Props.text1" :className="text11Props.className" /></div>
      <div class="view-23"><text1 :text1="text12Props.text1" :className="text12Props.className" /></div>
      <div class="view-24"><text1 :text1="text13Props.text1" :className="text13Props.className" /></div>
      <view4 :src="view41Props.src" :className="view41Props.className" />
      <view4 :src="view42Props.src" :className="view42Props.className" />
    </div>
  </div>
</template>

<script>
import Text1 from "./Text1";
import View4 from "./View4";
export default {
  name: "CourseListRecord2",
  components: {
    Text1,
    View4,
  },
  props: ["text11Props", "text12Props", "text13Props", "view41Props", "view42Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.course-list_-record-2
  background-color: $pippin
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 400px

.view-container-1
  align-items: center
  display: flex
  min-width: 400px
  position: relative

.view-22
  align-items: center
  display: flex
  justify-content: center
  position: relative
  width: 150px

.view-23
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 40px
  justify-content: center
  position: relative
  width: 50px

.view-24
  align-items: center
  border: 1px solid
  border-color: $white
  display: flex
  height: 40px
  justify-content: center
  position: relative
  width: 100px
</style>
