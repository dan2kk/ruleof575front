<template>
  <div class="gyoyang-table">
    <titlebox className="blueBold">야스다야스</titlebox>
    <gyoyang-record :textData="record" v-for="record in records"/>
  </div>
</template>

<script>
import Titlebox from "./Titlebox";
import GyoyangRecord from "./GyoyangRecord";
export default {
  name: "GyoyangTable",
  components: {
    Titlebox,
    GyoyangRecord,
  },
  props: [],
  methods:{
   
  },
  mounted(){
      this.records.push({수업번호: 77777, 과목명: "소프트웨어공학", 대표교강사명: "김윤호", 수업시간: "월 13:00~15:00<br />수 13:00 ~15:00", value: false});
      this.records.push({수업번호: 88888, 과목명: "컴퓨터네트워크", 대표교강사명: "Jinsik Choi", 수업시간: "화 17:00~15:00<br />수 13:00 ~15:00", value: false});
      this.records.push({수업번호: 99999, 과목명: "데베시", 대표교강사명: "김병주", 수업시간: "목 13:00~15:00<br />수 13:00 ~15:00", value: false});
  },
  data(){
    return{
      records: [],
      mockup: {과목명: "소프트웨어공학", 대표교강사명: "김윤호", 수업시간: "월 13:00~15:00<br />수 13:00 ~15:00"}
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'


.gyoyang-table
  align-items: center
  background-color: $solitude
  border-style: solid
  border-width: 1px
  border-color: $white
  display: flex
  flex-direction: column
  height: 550px
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
.titlebox
  height: 40px
</style>
