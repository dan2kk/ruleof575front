<template>
  <div class="course-list-record-1">
    <div class="cart-courselistrecord">
      <textbox2 :text= this.textData.과목명 className= "red" size= "big" @click="courseinfo(this.textData.수업번호)"/>
      <textbox2 :text= this.textData.대표교강사명 className= "red" size= "small" @click="courseinfo(this.textData.수업번호)"/>
      <textbox2 :text= this.textData.수업시간 className= "red" size= "medium" @click="courseinfo(this.textData.수업번호)"/>
      <imagebox_Search src= './iconbuttons-3.png' className="red" />
      <imagebox_Search src= './iconbuttons-2.png' className="red" />
    </div>
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
import Imagebox_Search from "./Imagebox_Search";
export default {
  name: "CourseListRecord",
  components: {
    Textbox2,
    Imagebox_Search,
  },
  props: ["textData"],
  methods:{
    courseinfo(number){
      this.$parent.$parent.getCourseInfo(number)
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.course-list-record-1
  align-items: flex-start
  background-color: $pippin
  border: 1px solid
  border-color: $white
  display: flex
  position: relative
  width: 400px

.cart-courselistrecord
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative
</style>
