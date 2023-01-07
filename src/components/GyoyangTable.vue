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
      this.records.push({coursename: "소프트웨어공학", profname: "김윤호", coursetime: "월 13:00~15:00<br />수 13:00 ~15:00"});
      this.records.push({coursename: "컴퓨터네트워크", profname: "Jinsik Choi", coursetime: "화 17:00~15:00<br />수 13:00 ~15:00"});
      this.records.push({coursename: "데베시", profname: "김병주", coursetime: "목 13:00~15:00<br />수 13:00 ~15:00"});
  },
  data(){
    return{
      records: [],
      mockup: {coursename: "소프트웨어공학", profname: "김윤호", coursetime: "월 13:00~15:00<br />수 13:00 ~15:00"}
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
