<template>
  <div class="r-menu-tabs">
    <div :class="[`r-menu-tab`, `red`]" @click="onClick(1)">
      <div class="r-menu-tab-text valign-text-middle notosanskr-bold-white-18px" >수업목록</div>
    </div>

    <div :class="[`r-menu-tab`, `blue`]" @click="onClick(2)">
      <div class="r-menu-tab-text valign-text-middle notosanskr-bold-white-18px" >추천교양</div>
    </div>

    <div :class="[`r-menu-tab`, `yellow`]" @click="onClick(3)">
      <div class="r-menu-tab-text valign-text-middle notosanskr-bold-white-18px" >수업상세</div>
    </div>

    <div :class="[`r-menu-tab`, `purple`]" @click="onClick(4)">
      <div class="r-menu-tab-text valign-text-middle notosanskr-bold-white-18px" >졸업사정</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "RMenuTabs",
  methods: {
    onClick(screenNum) {
      this.$emit("changeScreen", screenNum)
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
  height: 50px
  margin-right: 18.0px
  position: relative
  width: 400px

.r-menu-tab
  border: 1px solid
  border-color: $white
  height: 50px
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
  height: 50px
  letter-spacing: 0
  line-height: normal
  text-align: center
  width: 100px
  top: -5px


</style>
