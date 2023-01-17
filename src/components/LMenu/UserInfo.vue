<template>
  <div class="user-info">
    <TextBox3 text= "이름"/>
    <TextBox3 text= "학과" />
    <TextBox3 text= "학번" />
    <TextBox3 text= "학년" />
  </div>
</template>

<script>
import TextBox3 from "../Box/TextBox3";
export default {
  name: "UserInfo",
  components : {
    TextBox3
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
