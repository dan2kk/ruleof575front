<template>
  <div class="lec-list">
    <div class = "lec-list-upper-menu">
      <RMenuTitleBox color="red">
        <input type="submit" class="export-pref-lec" value="내 희망수업 내보내기" @click="exportPrefLec"/>
        내 수업목록
        <input type="submit" class="load-pref-lec" value="내 희망수업 불러오기" @click="loadPrefLec"/> 
      </RMenuTitleBox>
      <LecListHead :lecHeadData="lecListHead"/>
    </div>
    <div class = "lec-list-lower-menu">
      <LecListRecord :lecData="lec" v-for="lec in this.lecList" :key="lec"></LecListRecord>
      <div class = "search-cart">
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
    loadPrefLec(){
      this.$store.dispatch("crawlingWantedData")
    },
    exportPrefLec(){
      this.$store.commit("setSearchModal")
      //this.$store.dispatch("exportPrefLec")
      //this.$store.dispatch("exportPrefLec")
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
  height: 95%
  position: relative
  width: 100%
.lec-list-upper-menu
  width: 100%

.lec-list-lower-menu
  width: 100%
  overflow-y: overlay
  overflow-x: hidden

.lec-list-lower-menu::-webkit-scrollbar 
  display: none

.lec-list-lower-menu::-webkit-scrollbar-thumb
  background-color: hsla(0, 0%, 42%, 0.49)
  border-radius: 100px

.search-cart
  width: 90%
  height: 50%

.open-button
  width: 20%
  height: 5%
  border: 3px solid white
  border-radius: 10px
  background-color: $geraldine
  position: absolute
  left: 40%
  top: 90%
  color: $white
  
.load-pref-lec
  width: 26%
  height: 70%
  border: 3px solid
  border-color: $pippin
  border-radius: 10px
  background-color: $white
  position: absolute
  left: 72%
  color: $geraldine
  font-weight: 1000
.export-pref-lec
  width: 26%
  height: 70%
  border: 3px solid
  border-color: $pippin
  border-radius: 10px
  background-color: $white
  position: absolute
  left: 2%
  color: $geraldine
  font-weight: 1000

</style>
