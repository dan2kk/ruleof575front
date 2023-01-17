<template>
  <div class="lec-list-record">
    <div class="lec-list-record-cart">
      <TextBoxLec :text= this.lecData.과목명 boxStyle= "red" size= "big" @click="onClick"/>
      <TextBoxLec :text= this.lecData.대표교강사명 boxStyle= "red" size= "small" @click="onClick"/>
      <TextBoxLec :text= this.lecData.수업시간 boxStyle = "red" size= "medium" @click="onClick"/>
      <ImageBoxSearch src= './iconbuttons-3.png' boxStyle ="red" />
      <ImageBoxSearch src= './iconbuttons-2.png' boxStyle ="red" />
    </div>
  </div>
</template>

<script>
import TextBoxLec from "@@/Box/TextBoxLec";
import ImageBoxSearch from "@@/Box/ImageBoxSearch";
export default {
  name: "LecListRecord",
  components: {
    TextBoxLec,
    ImageBoxSearch
  },
  props: ["lecData"]
};
</script>

<style lang="sass">
@import '../../variables'

.lec-list-record
  align-items: flex-start
  background-color: $pippin
  border: 1px solid
  border-color: $white
  display: flex
  position: relative
  width: 400px

.lec-list-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative
</style>
