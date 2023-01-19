<template>
  <div class="grad-record">
      <div class="grad-record-cart">
        <RMenuTextBox :text= this.gradData.이수명 color= "purple" size= "150"/>
        <RMenuTextBox :text= this.gradData.기준 color= "purple" size= "50"/>
        <RMenuTextBox :text= this.gradData.이수 color= "purple" size= "50"/>
        <RMenuTextBox :text= this.gradData.변동 color= "purple" size= "50"/>
        <RMenuTextBox :text= this.gradData.합계 color= "purple" size= "50"/>
        <RMenuTextBox :text= this.gradData.잔여 color= "purple" size= "50"/>
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
  
.grad-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative

</style>
