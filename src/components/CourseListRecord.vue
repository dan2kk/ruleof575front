<template>
  <div class="course-list-record-1">
    <div class="cart-courselistrecord">
      <textbox2 :text= this.textData.과목명 className= "red" size= "big"/>
      <textbox2 :text= this.textData.대표교강사명 className= "red" size= "small"/>
      <textbox2 :text= this.textData.수업시간 className= "red" size= "medium"/>
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
  data()
  {
    return{
      mockup: {과목명: "소프트웨어공학", 대표교강사명: "김윤호", 수업시간: "월 13:00~15:00<br />수 13:00 ~15:00", image1: './iconbuttons-3.png', image2: './iconbuttons-2.png'},
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
