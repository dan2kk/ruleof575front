<template>
  <div class="user-info">
    <div class="column-userinfo">
      <LMenuTextBox class="round-top" :text= 'this.getUserInfo.stuId'/>
      <LMenuTextBox :text= 'this.getUserInfo.userName'/>
    </div>
    <div class="column-userinfo">
      <LMenuTextBox class="round-top" :text= 'this.getUserInfo.major'/>
      <LMenuTextBox :text= 'this.getUserInfo.grade'/>
    </div>
    <div class="column2-userinfo">
      <LMenuTextBox class="round-top" text= "최소 학점" size="75"/>
      <LMenuTextBox :text= "this.getHackData.최소학점" size="75"/>
    </div>
    <div class="column2-userinfo">
      <LMenuTextBox class="round-top" text= "최대 학점" size="75"/>
      <LMenuTextBox :text= "this.getHackData.최대학점" size="75"/>
    </div>    
    <div class="column2-userinfo">
      <LMenuTextBox class="round-top" text= "시간표 학점" size="75"/>
      <LMenuTextBox :text= "this.getHackData.시간표학점" size="75"/>
    </div>    
    <div class="column2-userinfo">
      <LMenuTextBox class="round-top" text= "수강과목 수" size="75"/>
      <LMenuTextBox text= "5" size="75"/>
    </div>
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
    },
    getHackData(){
      return this.$store.getters.getHackData
    }
  }
};
</script>

<style lang="sass">
@import '../../../variables'

.user-info
  display: flex
  background-color: $white
  height: 10%
  position: relative
  width: 100%

.column-userinfo
  background-color: $white
  height: 100%
  width: 25%


.column2-userinfo
  background-color: $white
  height: 100%
  width: 12.5%
  border-top-right-radius: 15px
  border-top-left-radius: 15px
.round-top
  background-color: #437eb4
  border-top-right-radius: 15px
  border-top-left-radius: 15px

</style>
