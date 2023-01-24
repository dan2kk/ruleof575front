<template>
    <div class="lec-list-head">
      <div class="lec-list-head-cart">
        <RMenuTextBox :text= this.lecHeadData.과목명 color= "red" size= "150" />
        <RMenuTextBox :text= this.lecHeadData.대표교강사명 color= "red" size= "50" />
        <RMenuTextBox :text= this.lecHeadData.수업시간 color = "red" size= "100" />
        <RMenuTextBox :text= this.lecHeadData.담기 color = "red" size= "50" />
        <RMenuTextBox :text= this.lecHeadData.빼기 color = "red" size= "50" />
      </div>
    </div>
  </template>
  
  <script>
  import RMenuTextBox from "../Box/RMenuTextBox";
  export default {
    name: "LecListRecord",
    components: {
      RMenuTextBox,
    },
    props: ["lecHeadData"],
  };
  </script>
  
  <style lang="sass">
  @import '../../../../variables'
  
  .lec-list-head
    align-items: flex-start
    background-color: $pippin
    border: 1px solid
    border-color: $white
    display: flex
    position: relative
    width: 400px
  
  .lec-list-head-cart
    align-items: center
    display: flex
    height: 40px
    min-width: 394px
    position: relative
  </style>
  