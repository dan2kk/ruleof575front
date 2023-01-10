<template>
  <div class="graduation-info-table">
    <titlebox className="purpleBold">졸업사정 변동사항</titlebox>
    <graduation-info-record :textData="record" v-for="record in records"/>
  </div>
</template>

<script>
import Titlebox from "./Titlebox";
import GraduationInfoRecord from "./GraduationInfoRecord";
export default {
  name: "GraduationInfoTable",
  components: {
    Titlebox, GraduationInfoRecord
  },
  props: [],
  data(){
    return{
      records: [],
      graduationInfo: {a: "이수명", b: "배당", c: "취득",d: "변동", e: "합계", f: "잔여"},
    }
  },
  mounted(){
    this.records.push({a: "이수명", b: "배당", c: "취득",d: "변동", e: "합계", f: "잔여"})
    this.records.push({a: "졸업학점", b: "130", c: "115",d: "15", e: "130", f: "0"})
    this.records.push({a: "전공학점", b: "81", c: "73",d: "3", e: "76", f: "5"})
  }
};

</script>

<style lang="sass">
@import '../../variables'

.graduation-info-table
  align-items: center
  background-color: $tutu
  display: flex
  flex-direction: column
  height: 550px
  overflow-y: scroll
  overflow-x: hidden
  position: relative
  width: 400px
</style>
