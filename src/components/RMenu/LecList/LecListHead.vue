<template>
    <div class="lec-list-head">
      <div class="lec-list-head-cart">
        <RMenuTextBox :text= this.lecHeadData.과목명 color= "red" size= "325" fontsize="18" fontweight="700" />
        <RMenuTextBox :text= this.lecHeadData.대표교강사명 color= "red" size= "75" fontsize="18"/>
        <RMenuTextBox :text= this.lecHeadData.수업시간 color = "red" size= "100" fontsize="18"/>
        <RMenuTextBox :text= this.lecHeadData.담기 color = "red" size= "50" fontsize="18"/>
        <RMenuTextBox :text= this.lecHeadData.빼기 color = "red" size= "50" fontsize="18"/>
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
    display: flex
    position: relative
    width: 100%
    height: 100%
  
  .lec-list-head-cart
    display: flex
    height: 100%
    width: 100%
    position: relative
  </style>
  