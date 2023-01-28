<template>
    <div class="grad-list-head">
      <div class="grad-list-head-cart">
        <RMenuTextBox :text= this.gradHeadData.이수명 color= "purple" size= "225" fontsize="18" fontweight="600" />
        <RMenuTextBox :text= this.gradHeadData.기준 color= "purple" size= "75" fontsize="18" fontweight="600"/>
        <RMenuTextBox :text= this.gradHeadData.이수 color = "purple" size= "75" fontsize="18" fontweight="600"/>
        <RMenuTextBox :text= this.gradHeadData.변동 color = "purple" size= "75" fontsize="18" fontweight="600"/>
        <RMenuTextBox :text= this.gradHeadData.합계 color = "purple" size= "75" fontsize="18" fontweight="600"/>
        <RMenuTextBox :text= this.gradHeadData.잔여 color = "purple" size= "75" fontsize="18" fontweight="600"/>
      </div>
    </div>
  </template>
  
  <script>
  import RMenuTextBox from "../Box/RMenuTextBox";
  export default {
    name: "gradListRecord",
    components: {
      RMenuTextBox,
    },
    props: ["gradHeadData"],
  };
  </script>
  
  <style lang="sass">
  @import '../../../../variables'
  
  .grad-list-head
    align-items: flex-start
    background-color: $tutu
    display: flex
    position: relative
    width: 100%
    height: 100%
  
  .grad-list-head-cart
    display: flex
    height: 100%
    width: 100%
    position: relative
    border-top: 2px white solid
  </style>
  