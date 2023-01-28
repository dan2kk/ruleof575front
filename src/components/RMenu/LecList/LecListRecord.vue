<template>
  <div class="lec-list-record">
    <div class="lec-list-record-cart">
      <RMenuTextBox class= "lec-list-classname" :text= this.lecData.과목명 color= "red" size= "325" @click="showDetails"/>
      <RMenuTextBox :text= this.lecData.대표교강사명 color= "red" size= "75"/>
      <RMenuTextBox :text= this.lecData.수업시간 color = "red" size= "100" fontsize="13"/>
      <SearchImageBox src= './addbutton.svg' color ="red" @click="clickAddBtn" @mouseover="addShadowToTT" @mouseleave="clearShadowLec" v-show="this.lecData.isInTable == 0"/>
      <SearchImageBox src= './subtractbutton.svg' color ="red" @click="clickAddBtn" @mouseover="addShadowToTT" @mouseleave="clearShadowLec" v-show="this.lecData.isInTable == 1"/>
      <SearchImageBox src= './deletebutton.svg' color ="red" @click="clickDelBtn"/>
    </div>
  </div>
</template>

<script>
import RMenuTextBox from "../Box/RMenuTextBox";
import SearchImageBox from "../Box/SearchImageBox";
import {timeToNum} from "../../../util"
export default {
  name: "LecListRecord",
  components: {
    RMenuTextBox,
    SearchImageBox
  },
  props: ["lecData"],
  methods : {
    async showDetails() {
      await this.$store.dispatch("fetchLecDetails", this.lecData.수업번호);
    },
    clickAddBtn() {
      if(this.lecData.isInTable == 0) {
        this.addToTimeTable()
      }
      else {
        this.delFromTimeTable()
      }
      this.$store.commit("setIsChanged", true)

    },
    clickDelBtn() {
      if(this.lecData.isInTable == 1) {
        this.delFromTimeTable();
      }
      this.$store.commit("delLecList", this.lecData);
      this.$store.commit("setIsChanged", true)
    },
    addToTimeTable() {
      let timeLines = this.$store.getters.getTimeLines 
      let timeLine
      let curDay
      let startToEnd
      let isOverlapped = false

      //겹치는 시간의 수업이 있는지 요일별 타임라인을 확인
      for(let i = 0; i < this.lecData.요일.length; i++) {
        curDay = this.lecData.요일[i]

        if(curDay == '시간미지정강좌') {
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

      if(!isOverlapped) {
        this.lecData.isInTable = 1;
        this.$store.commit("seTimetableHackjum", this.lecData.학점)
        this.lecData['color'] = this.$store.getters.getColor
        this.$store.commit("setNextColor")
        for(let i = 0; i < this.lecData.요일.length; i++) {
          curDay = this.lecData.요일[i]
          this.$store.commit("setUpTimeLines", curDay);
        }
      }
      else {
        alert("겹치는 수업이 있습니다")
      }
    },
    delFromTimeTable() {
      let curDay
      this.lecData.isInTable = 0;
      this.$store.commit("seTimetableHackjum", -(this.lecData.학점))
      for(let i = 0; i < this.lecData.요일.length; i++) {
        curDay = this.lecData.요일[i]
        this.$store.commit("setUpTimeLines", curDay);
      }
    },
    addShadowToTT(){
      this.$store.commit("addShadowLec", this.lecData)
    },
    clearShadowLec() {
      this.$store.commit("clearShadowLec")
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.lec-list-record
  align-items: flex-start
  background-color: $pippin
  display: flex
  position: relative
  width: 100%

.lec-list-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative

.lec-list-classname:hover
  transform: scale(1.1)
  background-color: $geraldine
  border: none
.lec-list-classname:active
  transform: scale(0.95)
  border: none
</style>
