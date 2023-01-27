<template>
  <div class="grad-record">
      <div class="grad-record-cart">
        <RMenuTextBox :text= this.gradData.이수명 :color= this.setColor size= "225"/>
        <RMenuTextBox :text= this.gradData.기준 :color= this.setColor size= "75"/>
        <RMenuTextBox :text= this.gradData.이수 :color= this.setColor size= "75"/>
        <RMenuTextBox :text= this.gradData.변동 :color= this.setColor size= "75"/>
        <RMenuTextBox :text= this.gradData.합계 :color= this.setColor size= "75"/>
        <RMenuTextBox :text= this.gradData.잔여 :color= this.setColor size= "75"/>
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
  computed:{
    setColor()
    {
      let color
      if (this.gradData.이수명 != "이수명")
      {
        if (this.gradData.변동 > 0)
        {
          if (parseInt(this.gradData.합계) > parseInt(this.gradData.기준))
          {
            color = "#FFCCCC"
          }
          else
            color = "#99FF99"
        }
        else
        {
          if (parseInt(this.gradData.이수) >= parseInt(this.gradData.기준))
            color = "#E0E0E0"
          else
            color = "#purple"
        }
      }
      else color = "purple"
      return color
    }
  }
};



</script>

<style lang="sass">
@import '../../../../variables'
.grad-record
  align-items: flex-start
  background-color: $tutu
  display: flex
  position: relative
  width: 100%
  
.grad-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 100%
  position: relative

</style>
