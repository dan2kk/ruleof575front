<template>
  <div class="gyoyang-table">
    <div v-for="record in records">
      <titlebox className="blueBold">{{record.영역코드명}}</titlebox>
      <gyoyang-record :textData="text" v-for="text in record.수업목록"/>
    </div>
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
  computed:{
    records(){
      if(this.$store.getters.getIsChecked){
        let temp = []
        for(let grad of this.$store.getters.getGrad){
          if(grad.기준 > grad.이수){
            for(let record of this.$store.getters.getRecommend){
              if(grad.이수명 == record.영역코드명){
                temp.push(record)
                break;
              }
            }
          }
        }
        console.log("ADSSAD");
        return temp;
      }
      else {
        return this.$store.getters.getRecommend
      }
    }
  },
  data(){
    return{
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
