<template>
  <div class="graduation-info-record">
      <div class="flex-row-1">
        <textbox2 :text="this.mockup.a" className= "purple" size= "big"/>
        <textbox2 :text= "this.mockup.b" className= "purple" size= "small"/>
        <textbox2 :text= "this.mockup.c" className= "purple" size= "small"/>
        <textbox2 :text= "this.mockup.d" className= "purple" size= "small"/>
        <textbox2 :text= "this.mockup.e" className= "purple" size= "small"/>
        <textbox2 :text= "this.mockup.f" className= "purple" size= "small"/>
      </div>
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
export default {
  name: "GraduationInfoRecord",
  components: {
    Textbox2,
  },
  props: [],
  data()
  {
    return{
      mockup: {a: "이수명", b: "배당", c: "취득",d: "변동", e: "합계", f: "잔여"},
    }
  }
};



</script>

<style lang="sass">
@import '../../variables'
.graduation-info-record-1
  align-items: flex-start
  background-color: $tutu
  border: 1px solid
  border-color: $white
  display: flex
  position: relative
  width: 400
  
.flex-row-1
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative



</style>
