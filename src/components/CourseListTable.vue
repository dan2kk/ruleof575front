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
