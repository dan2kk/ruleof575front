<template>
<<<<<<< HEAD:src/components/CourseInfoTable.vue
  <div class="course-info-table">
    <titlebox className="yellowBold"></titlebox>
    <titlebox className="yellowBold"></titlebox>
=======
  <div class="lec-details">
    <RMenuTitleBox boxStyle="yellowBold" v-for="temp in temps" :key="temp">{{temp}}</RMenuTitleBox>
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645:src/components/RMenu/Details/LecDetails.vue
  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
export default {
  name: "CourseInfoTable",
  components: {
    RMenuTitleBox,
  },
<<<<<<< HEAD:src/components/CourseInfoTable.vue
=======
  data(){
    return{
      temps: ["해줘", "응애", "노예야", "일해라"]
    }
  }
>>>>>>> 3f928a54e557583a1bc9f2587389201f5566d645:src/components/RMenu/Details/LecDetails.vue
};
</script>

<style lang="sass">
.lec-details
  align-items: center
  background-color: #ffefc6
  display: flex
  flex-direction: column
  height: 550px
  position: relative
  width: 400px
</style>
