<template>
  <div class="course-list-table">
    <titlebox className="redBold">내 수업목록</titlebox>
    <course-list-record :textData="record" v-for="record in this.$store.getters.getTimetable"/>
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
  data(){
    return{
      records: []
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
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
  border-width : 1px
  border-color : white
  border-style: solid
</style>
