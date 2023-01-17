<template>
  <div class="recomm-list">
    <div v-for="recomms in recommList" :key="recomms">
      <RMenuTitleBox boxStyle="blueBold">{{recomm.영역코드명}}</RMenuTitleBox>
      <RecommRecord :recommData = "lec" v-for="lec in recomms.수업목록" :key="lec"/>
    </div>
  </div>

</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RecommRecord from "./RecommRecord";
export default {
  name: "RecommList",
  components: {
    RMenuTitleBox,
    RecommRecord
  },
  computed:{
    recommList(){
      if(this.$store.getters.getIsChecked){
        let gradList = this.$store.getters.getGradList
        let recomms = this.$store.getters.getRecommList
        let temp = []
        for(let grad of gradList) {
          if(grad.기준 > grad.이수){
            for(let record of recomms){
              if(grad.이수명 == record.영역코드명){
                temp.push(record)
                break;
              }
            }
          }
        }
        return temp;
      }
      else {
        return this.$store.getters.getRecommend
      }
    }
  },
};
</script>

<style lang="sass">
@import '../../../../variables'

.recomm-list
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

</style>
