<template>
    <div class="lec-details-modal">
        <div class= "overlay" @click="$emit('modal-close')"/>
        <div class= "lec-details-modal-card">
            <div class= "row">
            <RMenuTitleBox color="yellow" size="280">히어로즈오브더스톰의이해</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="80">정재호</RMenuTitleBox>
            </div>
            <div class= "row">
            <RMenuTitleBox color="yellow" size="155">수업 시간</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="155">강의실</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="50">정원</RMenuTitleBox>
            </div>
            <div class= "row">
            <RMenuTextBox color="yellow" text = "월 15:00~17:00" size="155"></RMenuTextBox>
            <RMenuTextBox color="yellow" text = "IT/BT/관 508호" size="155"></RMenuTextBox>
            <RMenuTextBox color="yellow" text = "1명" size="50"></RMenuTextBox>
            </div>
            <div class= "row">
            <RMenuTitleBox color="yellow" size="72">수업번호</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="72">학수번호</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="72">특수수업</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="72">이수단위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="72">이수단위</RMenuTitleBox>
            </div>
            <div class= "row">
            <RMenuTextBox color="yellow" text = "ITE2008" size="72"></RMenuTextBox>
            <RMenuTextBox color="yellow" text = "MAT3008" size="72"></RMenuTextBox>
            <RMenuTextBox color="yellow" text = "SMART-F<br>영어전용강좌" size="72"></RMenuTextBox>
            <RMenuTextBox color="yellow" text = "교양필수" size="72"></RMenuTextBox>
            <RMenuTextBox color="yellow" text = "300" size="72"></RMenuTextBox>
            </div>
        </div>
    </div>
  </template>
  

<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox";
import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
export default {
  name: "Modal",
  props: ["modalData"],
  components: {
    RMenuTitleBox, RMenuTextBox
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