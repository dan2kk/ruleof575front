<template>
  <div class="recomm-list-record">
    <div class="recomm-list-record-cart">
      <RMenuTextBox :text= this.recommData.과목명 boxStyle= "blue" size= "big" @click="onClick"/>
      <RMenuTextBox :text= this.recommData.대표교강사명 boxStyle= "blue" size= "small"  @click="onClick"/>
      <RMenuTextBox :text= this.recommData.수업시간 boxStyle= "blue" size= "medium" @click="onClick"/>
      <SearchImageBox src= "./iconbuttons-1.png" boxStyle="blue" @click="addToLecList"/>
      <SearchImageBox src= "./iconbuttons-2.png" boxStyle="blue" @click="delFromRecommList"/>
    </div>
  </div>
</template>

<script>
import RMenuTextBox from "../Box/RMenuTextBox";
import SearchImageBox from "../Box/SearchImageBox";
export default {
  name: "RecommRecord",
  components: { 
    RMenuTextBox,
    SearchImageBox
  },
  props: ["recommData"],
  methods:{
    addToLecList(){
      this.$store.commit("addLecList", this.recommData)
      //this.$store.commit("setIsChanged", true)
      alert(this.$store.getters.getIsChange)
    },
    delFromRecommList() {
      this.$store.commit("delRecommList", this.recommData);
    },
    onClick(){
      this.$store.commit("getCourseInfo", this.recommData.수업번호);
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.recomm-list-record
  background-color: $solitude
  border-color: $white
  height: 40px
  min-width: 400px

.recomm-list-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative
</style>
