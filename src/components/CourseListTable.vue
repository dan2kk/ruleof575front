<template>
  <div class="course-list-table">
    <div class="upper-menu">
      <titlebox className="redBold">내 수업목록</titlebox>
    </div>
    <div clas="lower-menu">
      <course-list-record :textData="record" v-for="record in this.$store.getters.getTimetable"/>
    </div>
  </div>
</template>

<script>
import CourseListRecord from "./CourseListRecord";
import Titlebox from "./Titlebox";

export default {
  name: "CourseListTable",
  components: {
    CourseListRecord,
    Titlebox,
  },
  props: [],
  data()
  {
    return{
      courseList: {과목명: "과목명", 대표교강사명: "대표교강사명", 수업시간: "수업시간", 수업담기: "수업담기", 상세보기: "상세보기"}

    }
  },
  methods:{
    
  }
};
</script>

<style lang="sass">
@import '../../variables'

.course-list-table
  align-items: center
  background-color: $pippin
  display: flex
  flex-direction: column
  height: 550px

  position: relative
  width: 400px
  border-width : 1px
  border-color : white
  border-style: solid

.lower-menu
  overflow-x: hidden
  overflow-y: overlay
</style>
