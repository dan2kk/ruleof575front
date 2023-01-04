<template>
  <div class="course-info-table">
    <textbox42 />
    <textbox42 />
  </div>
</template>

<script>
import Textbox42 from "./Textbox42";
export default {
  name: "CourseInfoTable",
  components: {
    Textbox42,
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
