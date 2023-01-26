<template>
  <div class="r-menu-tabs">
    <RMenuTitleBox class="lec-list-tab" color="red" size="150" style="position: relative" @click="onClick(1)" fontsize="24">수업목록</RMenuTitleBox>
    <RMenuTitleBox class="lec-list-tab" color="green" size="150" style="position: relative" @click="onClick(2)" fontsize="24">추천교양</RMenuTitleBox>
    <RMenuTitleBox class="lec-list-tab" color="blue" size="150" style="position: relative" @click="onClick(3)" fontsize="24">맞춤정보</RMenuTitleBox>
    <RMenuTitleBox class="lec-list-tab" color="purple" size="150" style="position: relative" @click="onClick(4)" fontsize="24">졸업사정</RMenuTitleBox>
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
      this.$store.dispatch("changeScreen", screenNum);
    }
  }
};
</script>

<style lang="sass">
@import '../../../variables'

.r-menu-tabs
  align-items: center
  background-color: $white
  display: flex
  height: 5%
  position: relative
  width: 100%
.lec-list-tab
  border-top-left-radius: 15px
  border-top-right-radius: 15px
  

</style>
