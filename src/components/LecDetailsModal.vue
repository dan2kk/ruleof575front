<template>
    <div class="lec-details-modal">
        <div class= "overlay" @click="$emit('modal-close')"/>
        <div class= "lec-details-modal-card">
            <div class= "row">
            <RMenuModifiableTitleBox color="yellow" size="280" :text=this.modalData.lec_info.과목명></RMenuModifiableTitleBox>
            <RMenuModifiableTitleBox color="yellow" size="80" :text=this.modalData.lec_info.대표교강사명 ></RMenuModifiableTitleBox>
            </div>
            <div class= "row">
            <RMenuTitleBox color="yellow" size="155">수업 시간</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="155">강의실</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="50">정원</RMenuTitleBox>
            </div>
            <div class= "row">
            <RMenuTextBox color="yellow" size="155" :text=this.modalData.lec_info.수업시간></RMenuTextBox>
            <RMenuTextBox color="yellow" size="155" :text=this.modalData.lec_info.강의실></RMenuTextBox>
            <RMenuTextBox color="yellow" size="50" :text='this.modalData.lec_info.정원'></RMenuTextBox>
            </div>
            <div class= "row">
              <RMenuTitleBox color="yellow" size="72">학수번호</RMenuTitleBox>
              <RMenuTitleBox color="yellow" size="72">수업번호</RMenuTitleBox>
              <RMenuTitleBox color="yellow" size="72">특수수업</RMenuTitleBox>
              <RMenuTitleBox color="yellow" size="72">이수구분</RMenuTitleBox>
              <RMenuTitleBox color="yellow" size="72">학점</RMenuTitleBox>
            </div>
            <div class= "row">
              <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.학수번호></RMenuTextBox>
              <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.수업번호></RMenuTextBox>
            <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.특수수업구분></RMenuTextBox>
            <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.이수구분코드명></RMenuTextBox>
            <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.학점></RMenuTextBox>
            </div>
        </div>
    </div>
  </template>
  

<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox";
import RMenuModifiableTitleBox from "./RMenu/Box/RMenuModifiableTitleBox";
import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
export default {
  name: "Modal",
  props: ["modalData"],
  components: {
    RMenuTitleBox, RMenuTextBox, RMenuModifiableTitleBox
  },
  data(){
    return{
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.lec-details-modal,
.overlay
    width: 400px
    height: 100%
    position: absolute
    left:0
    top:0
.overlay
    opacity: 0.3
    background-color: black
.lec-details-modal-card
    background-color: $error-color
    position: absolute
    width: 360px
    left: 20px
    margin: auto
    margin-top: 20%
    background-color: white
    height : 400px
    z-index: 10
    border: 3px solid black
</style>