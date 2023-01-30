<template>
    <div class= "custom-record-cart">
      <RMenuTextBox :text= this.lecData.과목명 color= "blue" size= "250"></RMenuTextBox>
      <RMenuTextBox :text= this.lecData.대표교강사명 color= "blue" size= "75"></RMenuTextBox>
      <RMenuTextBox :text= this.lecData.수업시간 color = "blue" size= "100" fontsize="13"></RMenuTextBox>
      <RMenuTextBox :text= this.lecData.이수구분코드명 color = "blue" size= "75"></RMenuTextBox>
      <SearchImageBox src="./addbutton.svg" color ="blue" @click="addLecList" @mouseover="addShadowToTT" @mouseleave="clearShadowLec" v-show="isInLecList"></SearchImageBox>
      <SearchImageBox src="./checkbutton.svg" color ="blue" @mouseover="addShadowToTT" @mouseleave="clearShadowLec" v-show="!isInLecList"></SearchImageBox>
    </div>
  </template>
  
  
  <script>
  
  import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
  import SearchImageBox from "./RMenu/Box/SearchImageBox";
  
  export default {
    name : "CustomModalRecord",
    components : {
      RMenuTextBox,
      SearchImageBox
    },
    props: ["lecData"],
    computed: {
      isInLecList() {
        let lecList = this.$store.getters.getLecList
  
        if(lecList.findIndex(x => x.수업번호 == this.lecData.수업번호) == -1) {
            return true
        }
        else {
          return false
        }
      }
    },
    methods :{ 
      addLecList(){
        this.$store.commit("addLecList", this.lecData);
        this.$store.commit("setIsChanged", true)
      },
      addShadowToTT(){
        this.$store.commit("addShadowLec", this.lecData)
      },
      clearShadowLec() {
        this.$store.commit("clearShadowLec")
      }
    }
  
  }
  
  </script>
  
  <style lang="sass">
  @import '../../variables'
  
  .custom-record-cart
      align-items: flex-start
      background-color: $pippin
      border: 1px solid
      border-color: $white
      display: flex
      position: relative
      width: 100%
  </style>