<template>
  <div class="known">
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
    

    <RMenuTitleBox color="yellow" v-for="temp in temps" :key="temp">{{temp}}</RMenuTitleBox>
  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RMenuTextBox from "../Box/RMenuTextBox";
export default {
  name: "Known",
  components: {
    RMenuTitleBox, RMenuTextBox
  },
  data(){
    return{
      temps: ["해줘", "응애", "노예야", "일해라"]
    }
  }
};
</script>

<style lang="sass">
.known
  align-items: center
  background-color: #ffefc6
  display: flex
  flex-direction: column
  height: 550px
  position: relative
  width: 400px
.row
  align-items: center
  display: flex
</style>
