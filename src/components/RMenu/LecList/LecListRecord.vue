<template>
  <div class="lec-list-record">
    <div class="lec-list-record-cart">
      <RMenuTextBox :text= this.lecData.과목명 boxStyle= "red" size= "big" @click="onClick"/>
      <RMenuTextBox :text= this.lecData.대표교강사명 boxStyle= "red" size= "small" @click="onClick"/>
      <RMenuTextBox :text= this.lecData.수업시간 boxStyle = "red" size= "medium" @click="onClick"/>
      <SearchImageBox src= './iconbuttons-3.png' boxStyle ="red" @click="addToTimeTable"/>
      <SearchImageBox src= './iconbuttons-2.png' boxStyle ="red" @click="delFromLecList"/>
    </div>
  </div>
</template>

<script>
import RMenuTextBox from "../Box/RMenuTextBox";
import SearchImageBox from "../Box/SearchImageBox";
export default {
  name: "LecListRecord",
  components: {
    RMenuTextBox,
    SearchImageBox
  },
  props: ["lecData"],
  methods : {
    onClick() {
      this.$store.commit("getCourseInfo", this.lecData.수업번호);
    },
    addToTimeTable() {
    },
    delFromLecList() {
      this.$store.commit("delLecList", this.lecData);
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.lec-list-record
  align-items: flex-start
  background-color: $pippin
  border: 1px solid
  border-color: $white
  display: flex
  position: relative
  width: 400px

.lec-list-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative
</style>
