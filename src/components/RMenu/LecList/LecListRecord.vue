<template>
  <div class="lec-list-record">
    <div class="lec-list-record-cart">
      <RMenuTextBox :text= this.lecData.과목명 color= "red" size= "150" @click="showDetails"/>
      <RMenuTextBox :text= this.lecData.대표교강사명 color= "red" size= "50" @click="showDetails"/>
      <RMenuTextBox :text= this.lecData.수업시간 color = "red" size= "100"/>
      <SearchImageBox src= './iconbuttons-3.png' color ="red" @click="clickAddBtn" @mouseover="addShadowToTT" @mouseleave="clearShadowLec" v-show="this.lecData.state == 0"/>
      <SearchImageBox src= './iconbuttons-1.png' color ="red" @click="clickAddBtn" @mouseover="addShadowToTT" @mouseleave="clearShadowLec" v-show="this.lecData.state == 1"/>
      <SearchImageBox src= './iconbuttons-2.png' color ="red" @click="clickDelBtn"/>
    </div>
  </div>
</template>

<script>
import RMenuTextBox from "../Box/RMenuTextBox";
import SearchImageBox from "../Box/SearchImageBox";
import {processLec} from "../../../util"
export default {
  name: "LecListRecord",
  components: {
    RMenuTextBox,
    SearchImageBox
  },
  props: ["lecData"],
  methods : {
    showDetails() {
      this.$store.commit("setLecDetails", this.lecData.수업번호);
    },
    clickAddBtn() {
      
      if(this.lecData.state == 0) {
        this.addToTimeTable()
      }
      else {
        this.delFromTimeTable()
      }
    },
    clickDelBtn() {
      //this.$store.commit("setIsChanged", true)
      if(this.lecData.state == 1) {
        this.delFromTimeTable();
      }
      
      this.$store.commit("delLecList", this.lecData);
    },
    addToTimeTable() {
      let lecsInTable = this.$store.getters.getLecsInTable
      let lecs
      let curDay
      let lecToAdd = []
      let isOverlapped = false

      for(let idx = 0; idx < this.lecData.요일.length; idx++) {
        curDay = this.lecData.요일[idx]

        if(curDay == '시간미지정강좌') {
          continue
        }

        lecs = lecsInTable[curDay]

        lecToAdd[idx] = processLec(this.lecData, idx)
        lecToAdd[idx]['colorIdx'] = 20;


        for(let lec of lecs) {
          if(lecToAdd[idx].start < lec.start && lecToAdd[idx].end > lec.start) {
            isOverlapped = true
            break
          }
          if(lecToAdd[idx].start < lec.end && lecToAdd[idx].end > lec.end) {
            isOverlapped = true
            break
          }
          if(lecToAdd[idx].start >= lec.start && lecToAdd[idx].end <= lec.end) {
            isOverlapped = true
            break
          }
        }

        if(isOverlapped) {
          break
        }
      }

      if(isOverlapped) {
        alert("겹치는 수업이 있습니다")
      }
      else {
        this.lecData.state = 1;
        for(let idx = 0; idx < this.lecData.요일.length; idx++) {
          curDay = this.lecData.요일[idx]

          if(curDay == '시간미지정강좌') {
            continue
          }

          this.$store.commit("addLecsInTable", {
              day : curDay, 
              info: lecToAdd[idx]
          });
          this.$store.commit("setUpTimeLines", curDay);
        }
      }
    },
    delFromTimeTable() {
      let lecsInTable = this.$store.getters.getLecsInTable
      let lecs
      let curDay
      let lecIdx

      this.lecData.state = 0;
      for(let idx = 0; idx < this.lecData.요일.length; idx++) {
        curDay = this.lecData.요일[idx]

        if(curDay == '시간미지정강좌') {
          continue
        }

        lecs = lecsInTable[curDay]
        lecIdx = lecs.findIndex(lec => lec.lecNum == this.lecData.수업번호)
        lecs = lecs.splice(lecIdx, 1);
        this.$store.commit("setUpTimeLines", curDay);
      }
    },
    addShadowToTT(){
      console.log(this.lecData)
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
  border: 1px solid
  border-color: $white
  display: flex
  position: relative
  width: 400px

.lec-list-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative
</style>
