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
  props: [],
  data(){
    return{
      records: []
    }
  },
  methods:{
    update(usertimetable){
      for(let i=0; i<usertimetable.length;i++){
        this.records.push(usertimetable[i])
      }
    }
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
