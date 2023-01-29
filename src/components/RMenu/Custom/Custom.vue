<template>
  <div class="custom">
    <div class = "custom-upper-menu">
      <RMenuTitleBox color="blue" fontsize = "22">Top 5</RMenuTitleBox>
      <RMenuTextBox color="blue" text = "내 시간표에 맞는 강의 중 분야별 Top 5를 소개합니다."></RMenuTextBox>
    </div>
    <div class = "custom-lower-menu">
      <div class = "major-title">
        <RMenuTitleBox size = "300" color = "blue" style= "border: none">          
          <select class= "select-major-custom" v-model="this.getUserInfo.major" @change="changeMajorType">
            <option v-for="item in this.getMajorData" :value="item" :key="item">{{ item }}</option>
          </select>
        </RMenuTitleBox>
        <RMenuTitleBox size = "100" color = "blue" style= "border: none">          
          <select class= "select-grade-custom" v-model="this.getUserInfo.grade" @change="changeMajorType">
            <option v-for="item in this.gradeList" :value="item" :key="item">{{ item + "학년"}}</option>
          </select>
        </RMenuTitleBox>
        <RMenuTitleBox size = "200" color ="blue" fontsize = "22"  style= "border: none">전공 중 Top 5</RMenuTitleBox>
      </div>
      <CustomCart :customList = "this.getCustomMajor" v-if="this.getCustomMajor.hot != undefined"/>
      <div class = "gyoyang-title">
        <RMenuTitleBox size = "400" color = "blue" style= "border: none">          
          <select class= "select-ge-custom" v-model="gyoyangType" @change="changeGyoyangType">
            <option v-for="item in this.fieldOrder" :value="item" :key="item">{{ item }}</option>
          </select>
        </RMenuTitleBox>
        <RMenuTitleBox size = "200" color ="blue" fontsize = "22"  style= "border: none">교양 영역 중 Top 5</RMenuTitleBox>
      </div>
      <CustomCart :customList = "this.getCustomGE" v-if="this.getCustomGE.hot != undefined"/>

      <CustomModal v-if ="onCustomModal" v-on:modal-close="customModalClose"></CustomModal>
    </div>
  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RMenuModifiableTitleBox from "../Box/RMenuModifiableTitleBox";
import RMenuTextBox from "../Box/RMenuTextBox";
import CustomCart from "./CustomCart"
import CustomModal from "./CustomModal"
export default {
  name: "Custom",
  components: {
    RMenuTitleBox, RMenuTextBox, CustomCart, CustomModal, RMenuModifiableTitleBox
  },
  data(){
    return{
      majorType : "전공",
      gyoyangType : "가상대학영역",
      gradeList: [1, 2, 3, 4],
      fieldOrder : [
      "가상대학영역",
      "고전읽기영역",
      "과학과기술영역",
      "글로벌언어와문화영역",
      "미래산업과창업영역",
      "사회와세계영역",
      "소프트웨어영역",
      "인문과예술영역",
      ],
    }
  },
  computed:{
    customList(){
      let filtered = []
      let gradList = this.$store.getters.getGradList
      let customs = this.$store.getters.getCustomList

      for (let gradRec of gradList){
        if (gradRec.이수여부 == 'n'){
          let transformedName = transformGradName(gradRec.이수명)

          for (let cs of customs){
            if (transformedName.includes(cs.영역코드명)){
              filtered.push(cs)
              break;
            }
          }
        }
      }
      filtered = filtered.sort((a, b) => fieldOrder.indexOf(a.영역코드명) - fieldOrder.indexOf(b.영역코드명));
    },
    onCustomModal(){
      return this.$store.getters.getCustomModal.state
    },
    getMajorData(){
      return this.$store.getters.getMajorData
    },
    getCustomGE(){
      return this.$store.getters.getCustomGE
    },
    getCustomMajor(){
      return this.$store.getters.getCustomMajor
    },
    grade() {
      if(this.$store.getters.getIsLogined == false) {
        return 1
      }
      else {
        return this.$store.getters.getGrade
      }
    },
    getUserInfo(){
      return this.$store.getters.getUserInfo
    }
  },
  methods: {
    setIsShow(fieldName) {
      this.$store.commit("setIsCustomShow", fieldName)
    },
    customModalClose(){
      this.$store.getters.getCustomModal.state = false
    },
    changeMajorType(){
      this.$store.dispatch('fetchCustomMajor')
    },
    changeGyoyangType(){
      this.$store.dispatch('fetchCustomGE', this.gyoyangType)
    }
    
  }
};
</script>

<style lang="sass">
.custom
  align-items: center
  background-color: #e8f0ff
  display: flex
  flex-direction: column
  height: 100%
  position: relative
  width: 100%

.row
  align-items: center
  display: flex

.custom-lower-menu
  overflow-y: overlay
  overflow-x: hidden

.custom-lower-menu::-webkit-scrollbar 
  display: none

.select-major-custom
  width: 85%
  height: 80%
  position: absolute
  top: 10%
  left: 13%
  background-color: #b2c3e1
  font-family: "Noto Sans KR", Helvetica
  font-size: 22px
  border: none
  color: white
  font-weight: 700

.select-grade-custom
  width: 95%
  height: 80%
  top: 10%
  left: 3%
  background-color: #b2c3e1
  font-family: "Noto Sans KR", Helvetica
  font-size: 22px
  border: none
  color: white
  font-weight: 700

.select-ge-custom
  width: 60%
  height: 80%
  position: absolute
  top: 10%
  left: 39%
  background-color: #b2c3e1
  font-family: "Noto Sans KR", Helvetica
  font-size: 22px
  border: none
  color: white
  font-weight: 700

.select-major-custom:hover,
.select-ge-custom:hover,
.select-grade-custom:hover
  transform: scale(1.1)
  opacity: 0.6

.major-title
  display: flex
  flex-direction: row

.gyoyang-title
  display: flex
  flex-direction: row
</style>
