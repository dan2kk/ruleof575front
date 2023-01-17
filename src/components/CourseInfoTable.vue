<template>
  <div class="course-info-table">
    <titlebox className="yellowBold"></titlebox>
    <titlebox className="yellowBold"></titlebox>
  </div>
</template>

<script>
import Titlebox from "./Titlebox";
export default {
  name: "CourseInfoTable",
  components: {
    Titlebox,
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
