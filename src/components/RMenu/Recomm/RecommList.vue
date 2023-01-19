<template>
  <div class="recomm-list">
    <div class="upper-menu">
      <RMenuTitleBox color="blue" size = "350">내 졸업사정에 필요한 교양만 추천받기</RMenuTitleBox>
      <Checkbox/>
    </div>
    <div v-for="lecs in recommList" :key="lecs">
      <RMenuTitleBox color="blue">{{lecs.영역코드명}}</RMenuTitleBox>
      <RecommRecord :recommData = "lec" v-for="lec in lecs.수업목록" :key="lec"/>
    </div>
  </div>

</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RecommRecord from "./RecommRecord";
import Checkbox from "../Box/Checkbox"
export default {
  name: "RecommList",
  components: {
    RMenuTitleBox,
    RecommRecord,
    Checkbox
  },
  computed:{
    recommList() {
      if(this.$store.getters.getIsChecked){
        let gradList = this.$store.getters.getGradList
        let recomms = this.$store.getters.getRecommList
        let ret = []
        for(let grad of gradList) {
          if(grad.기준 > grad.이수){
            for(let record of recomms){
              if(grad.이수명 == record.영역코드명){
                ret.push(record)
                break;
              }
            }
          }
        }
        return ret;
      }
      else {
        return this.$store.getters.getRecommList
      }
    }
  },
};
</script>

<style lang="sass">
@import '../../../../variables'

.recomm-list
  align-items: start
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

.recomm-list::-webkit-scrollbar 
  display: none

.recomm-list
  -ms-overflow-style: none
  scrollbar-width: none

.upper-menu
  display: flex
  flex-direction: row


</style>
