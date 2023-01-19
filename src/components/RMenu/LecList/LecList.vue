<template>
  <div class="lec-list">
    <div class = "lec-list-upper-menu">
      <RMenuTitleBox color="red">내 수업목록</RMenuTitleBox>
      <LecListHead :lecHeadData="lecListHead"/>
    </div>
    <div class = "lec-list-lower-menu">
      <LecListRecord :lecData="lec" v-for="lec in this.lecList" :key="lec"> 
        {{lec.수업번호}}
      </LecListRecord>
    </div>

  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import LecListRecord from "./LecListRecord";
import LecListHead from "./LecListHead";

export default {
  name: "LecList",
  components: {
    RMenuTitleBox,
    LecListRecord,
    LecListHead
  },
  data(){
    return{
      lecListHead :{과목명: "과목명", 대표교강사명: "강사명", 수업시간: "수업시간", 담기: "담기", 더보기: "더보기",},
    }
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
  position: relative
  width: 400px
  border-width : 1px
  border-color : white
  border-style: solid

.lec-list-lower-menu
  overflow-y: overlay
  overflow-x: hidden

.lec-list-lower-menu::-webkit-scrollbar 
  display: none

.lec-list-lower-menu::-webkit-scrollbar-thumb
  background-color: hsla(0, 0%, 42%, 0.49)
  border-radius: 100px

</style>
