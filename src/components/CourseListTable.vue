<template>
  <div class="course-list-table">
    <titlebox className="redBold">내 수업목록</titlebox>
    <course-list-record :textData="record" v-for="record in records"/>
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
  props: [
  ],
  data(){
    return{
      records: [{coursename: "소프트웨어공학", profname: "김윤호", coursetime: "월 13:00~15:00<br />수 13:00 ~15:00",}]
    }
  },
  mounted(){
    this.records.push({coursename: "시스템프로그래밍", profname: "까를로스", coursetime: "화 13:00~17:00", })
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
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
  border-width : 1px
  border-color : white
  border-style: solid
</style>
