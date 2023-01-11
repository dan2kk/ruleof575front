<template>
  <div class="user-info-box-1">
    <textbox :text=this.studentInfo[0] />
    <textbox :text=this.studentInfo[1] />
    <textbox :text=this.studentInfo[2] />
    <textbox :text=this.studentInfo[3] />
  </div>
</template>

<script>
import Textbox from "./Textbox";
export default {
  name: "UserInfoBox",
  components: {
    Textbox,
  },
  props: [],
  data(){
    return {
      studentInfo: ["이름", "학과", "학번", "학년"]
    }
  },
};
</script>

<style lang="sass">
@import '../../variables'

.user-info-box-1
  align-items: flex-start
  background-color: $silver
  display: flex
  height: 80px
  position: relative
  width: 400px
</style>
