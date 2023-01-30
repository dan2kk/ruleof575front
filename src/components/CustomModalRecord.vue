<template>
    <div class= "custom-record-cart" v-show="!isOverlapped">
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
  import { timeToNum } from "../util";
  
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
      },
      isOverlapped() {
        let timeLines = this.$store.getters.getTimeLines 
        let timeLine
        let curDay
        let startToEnd
        let isOverlapped = false

        //겹치는 시간의 수업이 있는지 요일별 타임라인을 확인
        for(let i = 0; i < this.lecData.요일.length; i++) {
          curDay = this.lecData.요일[i]

          if(curDay == '시간미지정강좌' || curDay == '집중수업') {
            continue
          }

          timeLine = timeLines[curDay]
          startToEnd = timeToNum(this.lecData.시작시간[i], this.lecData.끝시간[i])

          for(let block of timeLine) {
            if(block.blockKind == "lecBlock") {
              if(startToEnd.start < block.start && startToEnd.end > block.start) {
                isOverlapped = true
                break
              }
              if(startToEnd.start < block.end && startToEnd.end > block.end) {
                isOverlapped = true
                break
              }
              if(startToEnd.start >= block.start && startToEnd.end <= block.end) {
                isOverlapped = true
                break
              }
            }
          }
          if(isOverlapped) {
            break
          }
        }
        return isOverlapped
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