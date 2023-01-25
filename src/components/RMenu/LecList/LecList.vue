<template>
  <div class="lec-list">
    <div class = "lec-list-upper-menu">
      <RMenuTitleBox color="red">내 수업목록</RMenuTitleBox>
      <LecListHead :lecHeadData="lecListHead"/>
    </div>
    <div class = "lec-list-lower-menu">
      <LecListRecord :lecData="lec" v-for="lec in this.lecList" :key="lec"></LecListRecord>
      <div class = "search-box">
        <input type="submit" class="open-button" value="과목 직접 검색" @click="openSearchModal">
      </div> 
    </div>

  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RMenuTextBox from "../Box/RMenuTextBox";
import LecListRecord from "./LecListRecord";
import LecListHead from "./LecListHead";
import SearchImageBox from "../Box/SearchImageBox";

export default {
  name: "LecList",
  components: {
    RMenuTitleBox,
    LecListRecord,
    LecListHead,
    RMenuTextBox,
    SearchImageBox
  },
  data(){
    return{
      lecListHead :{과목명: "과목명", 대표교강사명: "강사명", 수업시간: "수업시간", 담기: "담기", 빼기: "빼기",},
    }
  },
  computed : {
    lecList() {
      return this.$store.getters.getLecList;
    }
  },
  methods:{
    openSearchModal() {
      this.$store.commit("setSearchModal")
    },
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
  height: 560px
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

.search-box
  width: 400px
.open-button
  width: 30%
  position: absolute
  left: 130px
</style>
