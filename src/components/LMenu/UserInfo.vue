<template>
  <div class="user-info">
    <div class="column-userinfo">
      <LMenuTextBox class="round-top" :text= 'this.getUserInfo.stuId'/>
      <LMenuTextBox :text= 'this.getUserInfo.userName'/>
    </div>
    <div class="column-userinfo">
      <div class="select-major-box">
        <select class= "select-major" v-model="majorType" @change="changeMajorType">
          <option v-for="item in this.getMajorData" :value="item">{{ item }}</option>
        </select>
      </div>
      <div class="select-major-box">
        <select class= "select-major" v-model="this.getUserInfo.grade">
          <option v-for="item in this.gradeList" :value="item">{{ item }}</option>
        </select>
      </div>
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
      <LMenuTextBox :text= "this.getHackData.수강과목수" size="75"/>
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
    },
    getMajorData(){
      return this.$store.getters.getMajorData
    }
  },
  data(){
    return{
      majorType : "전공",
      gradeList: [1, 2, 3, 4]
    }
  },
  methods:{
    changeMajorType(){
      this.$store.commit('setUserMajor', this.majorType)
    },
  }
}
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
.select-major
  width: 95%
  height: 80%
  position: relative
  top: 10%
  left: 3%
  background-color: #437eb4
  font-family: "Noto Sans KR", Helvetica
  font-size: 14px

.select-major-box
  width: 100%
  height: 50%
  position: relative
  display: flex
  background-color: #437eb4
  border-top-right-radius: 15px
  border-top-left-radius: 15px

</style>
