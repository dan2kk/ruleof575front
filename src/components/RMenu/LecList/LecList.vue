<template>
  <div class="lec-list">
    <ListTitleBox boxStyle="redBold">내 수업목록</ListTitleBox>
    <LecListRecord 
      :lecData="lec" v-for="lec in lecList">
    </LecListRecord>
  </div>
</template>

<script>
import ListTitleBox from "@@/ListTitleBox";
import LecListRecord from "@@/LecListRecord";

export default {
  name: "LecList",
  computed : {
    lecList() {
      return this.$store.getters.getLecList;
    }
  },
  components: {
    ListTitleBox,
    LecListRecord
  },
};
</script>

<style lang="sass">
@import '../../variables'

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
