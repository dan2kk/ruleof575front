<template>
  <div class="course-info-table">
    <imagebox_Add />
    <imagebox_Add />
  </div>
</template>

<script>
import Imagebox_Add from "./Imagebox_Add";
export default {
  name: "CourseInfoTable",
  components: {
    Imagebox_Add,
  },
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
