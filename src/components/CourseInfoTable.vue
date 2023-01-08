<template>
  <div class="course-info-table">
    <titlebox className="yellowBold" v-for="text in texts">{{text}}</titlebox>
  </div>
</template>

<script>
import Titlebox from "./Titlebox";
export default {
  name: "CourseInfoTable",
  components: {
    Titlebox,
  },
  data(){
    return{
      texts: ["해줘", "응애", "노예야", "일해라"]
    }
  }
};
</script>

<style lang="sass">
.course-info-table
  align-items: center
  background-color: #ffefc6
  display: flex
  flex-direction: column
  height: 550px
  position: relative
  width: 400px
</style>
