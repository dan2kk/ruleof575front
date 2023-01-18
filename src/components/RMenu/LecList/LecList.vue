<template>
  <div class="lec-list">
    <RMenuTitleBox boxStyle="redBold">내 수업목록</RMenuTitleBox>
    <LecListRecord :lecData="lec" v-for="lec in this.lecList" :key="lec"> 
      {{lec.수업번호}}
    </LecListRecord>
  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import LecListRecord from "./LecListRecord";

export default {
  name: "LecList",
  components: {
    RMenuTitleBox,
    LecListRecord
  },
  computed : {
    lecList() {
      return this.$store.getters.getLecList;
    }
  },
};
</script>

<style lang="sass">
@import '../../../../variables'

.lec-list
  align-items: center
  background-color: $pippin
  display: flex
  flex-direction: column
  height: 550px
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
  border-width : 1px
  border-color : white
  border-style: solid

</style>
