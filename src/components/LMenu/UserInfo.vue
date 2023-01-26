<template>
  <div class="user-info">
    <LMenuTextBox :text= 'this.getUserInfo.userName'/>
    <LMenuTextBox :text= 'this.getUserInfo.major'/>
    <LMenuTextBox :text= 'this.getUserInfo.stuId'/>
    <LMenuTextBox :text= 'this.getUserInfo.grade'/>
  </div>
</template>

<script>
import LMenuTextBox from "./Box/LMenuTextBox";
export default {
  name: "UserInfo",
  components : {
    LMenuTextBox
  },
  computed:{
    getUserInfo(){
      return this.$store.getters.getUserInfo
    }
  }
};
</script>

<style lang="sass">
@import '../../../variables'

.user-info
  align-items: flex-start
  background-color: $silver
  display: flex
  height: 10%
  position: relative
  width: 100%
</style>
