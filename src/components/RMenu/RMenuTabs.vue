<template>
  <div class="r-menu-tabs">
    <RMenuTitleBox color="red" size="150" style="position: relative" @click="onClick(1)" fontsize="24">수업목록</RMenuTitleBox>
    <RMenuTitleBox color="green" size="150" style="position: relative" @click="onClick(2)" fontsize="24">추천교양</RMenuTitleBox>
    <RMenuTitleBox color="blue" size="150" style="position: relative" @click="onClick(3)" fontsize="24">맞춤정보</RMenuTitleBox>
    <RMenuTitleBox color="purple" size="150" style="position: relative" @click="onClick(4)" fontsize="24">졸업사정</RMenuTitleBox>
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
  height: 5%
  position: relative
  width: 100%

</style>
