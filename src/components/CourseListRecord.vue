<template>
  <div class="course-list-record-1">
    <div class="flex-row-1">
      <textbox2 :text= this.mockup.coursename className= "red" size= "big"/>
      <textbox2 :text= this.mockup.profname className= "red" size= "small"/>
      <textbox2 :text= this.mockup.coursetime className= "red" size= "medium"/>
      <imagebox_Search :src= this.mockup.image1 className="red" />
      <imagebox_Search :src= this.mockup.image2 className="red" />
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
  props: [],
  data()
  {
    return{
      mockup: {coursename: "소프트웨어공학", profname: "김윤호", coursetime: "월 13:00~15:00<br />수 13:00 ~15:00", image1: './iconbuttons-3.png', image2: './iconbuttons-2.png'},
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

.flex-row-1
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative
</style>
