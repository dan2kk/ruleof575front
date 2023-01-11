<template>
  <div class="graduation-info-record">
      <div class="flex-row-1">
        <textbox2 :text="this.textData.이수명" className= "purple" size= "big"/>
        <textbox2 :text= "this.textData.기준" className= "purple" size= "small"/>
        <textbox2 :text= "this.textData.이수" className= "purple" size= "small"/>
        <textbox2 :text= "this.textData.변동" className= "purple" size= "small"/>
        <textbox2 :text= "this.textData.합계" className= "purple" size= "small"/>
        <textbox2 :text= "this.textData.잔여" className= "purple" size= "small"/>
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
  props: ["textData"],
  watch: {
    message: function (newVal, oldVal) {
      this.reversedMessage = newVal.split('').reverse().join('')
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
