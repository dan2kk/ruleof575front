<template>
    <div class="lec-list-head">
      <div class="lec-list-head-cart">
        <RMenuTextBox :text= this.lecHeadData.과목명 boxStyle= "red" size= "big" @click="onClick"/>
        <RMenuTextBox :text= this.lecHeadData.대표교강사명 boxStyle= "red" size= "small" @click="onClick"/>
        <RMenuTextBox :text= this.lecHeadData.수업시간 boxStyle = "red" size= "medium" @click="onClick"/>
        <RMenuTextBox :text= this.lecHeadData.담기 boxStyle = "red" size= "small" @click="onClick"/>
        <RMenuTextBox :text= this.lecHeadData.더보기 boxStyle = "red" size= "small" @click="onClick"/>
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
  