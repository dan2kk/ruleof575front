<template>
  <div class="user-info">
    <LMenuTextBox text= "이름"/>
    <LMenuTextBox text= "학과" />
    <LMenuTextBox text= "학번" />
    <LMenuTextBox text= "학년" />
  </div>
</template>

<script>
import LMenuTextBox from "./Box/LMenuTextBox";
export default {
  name: "UserInfo",
  components : {
    LMenuTextBox
  }
};
</script>

<style lang="sass">
@import '../../../variables'

.user-info
  align-items: flex-start
  background-color: $silver
  display: flex
  height: 80px
  position: relative
  width: 400px
</style>
