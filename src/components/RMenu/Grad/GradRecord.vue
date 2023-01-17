<template>
  <div class="grad-record">
      <div class="grad-record-flex-row">
        <RMenuTextBox :text= this.gradData.이수명 boxStyle= "purple" size= "big"/>
        <RMenuTextBox :text= this.gradData.기준 boxStyle= "purple" size= "small"/>
        <RMenuTextBox :text= this.gradData.이수 boxStyle= "purple" size= "small"/>
        <RMenuTextBox :text= this.gradData.변동 boxStyle= "purple" size= "small"/>
        <RMenuTextBox :text= this.gradData.합계 boxStyle= "purple" size= "small"/>
        <RMenuTextBox :text= this.gradData.잔여 boxStyle= "purple" size= "small"/>
      </div>
  </div>
</template>

<script>
import RMenuTextBox from "../Box/RMenuTextBox";
export default {
  name: "GradRecord",
  components: {
    RMenuTextBox,
  },
  props: ["gradData"],
};



</script>

<style lang="sass">
@import '../../../../variables'
.grad-record
  align-items: flex-start
  background-color: $tutu
  border: 1px solid
  border-color: $white
  display: flex
  position: relative
  width: 400
  
.grad-record-flex-row
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative

</style>
