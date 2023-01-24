<template>
  <div class="r-menu-tabs">
    <RMenuTitleBox color="red" size="100" style="position: relative" @click="onClick(1)">수업목록</RMenuTitleBox>
    <RMenuTitleBox color="green" size="100" style="position: relative" @click="onClick(2)">추천교양</RMenuTitleBox>
    <RMenuTitleBox color="blue" size="100" style="position: relative" @click="onClick(3)">맞춤정보</RMenuTitleBox>
    <RMenuTitleBox color="purple" size="100" style="position: relative" @click="onClick(4)">졸업사정</RMenuTitleBox>
  </div>
</template>

<script>
import RMenuTitleBox from "./Box/RMenuTitleBox";

export default {
  name: "RMenuTabs",
  components:{
    RMenuTitleBox,
  },
  methods: {
    onClick(screenNum) {
      this.$store.commit("changeScreen", screenNum);
    }
  }
};
</script>

<style lang="sass">
@import '../../../variables'

.r-menu-tabs
  align-items: center
  background-color: $error-color
  display: flex
  height: 40px
  margin-right: 18.0px
  position: relative
  width: 400px

.r-menu-tab
  border: 1px solid
  border-color: $white
  height: 40px
  width: 100px
  position: relative
  align-items: stretch

.r-menu-tab.red
  background-color: $geraldine

.r-menu-tab.blue
  background-color: $pigeon-post

.r-menu-tab.yellow
  background-color: $orange-yellow
  
.r-menu-tab.purple
  background-color: $lily

.r-menu-tab-text
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 100px
  top: -5px


</style>
