<template>
  <div class="recomm-list-record">
    <div class="recomm-list-record-cart">
      <RMenuTextBox :text= this.recommData.과목명 boxStyle= "blue" size= "big" @click="showDetails"/>
      <RMenuTextBox :text= this.recommData.대표교강사명 boxStyle= "blue" size= "small"  @click="showDetails"/>
      <RMenuTextBox :text= this.recommData.수업시간 boxStyle= "blue" size= "medium" @click="showDetails"/>
      <SearchImageBox src= "./iconbuttons-3.png" boxStyle="blue" @click="addToLecList" v-show="isInLecList"/>
      <SearchImageBox src= "./iconbuttons-1.png" boxStyle="blue" @click="addToLecList" v-show="!isInLecList"/>
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
  computed: {
    isInLecList() {
      let lecList = this.$store.getters.getLecList

      if(lecList.findIndex(x => x.수업번호 == this.recommData.수업번호) == -1) {
        return true
      }
      else {
        return false
      }
    }
  }, 
  methods:{
    showDetails() {
      this.$store.commit("setLecDetails", this.lecData.수업번호);
    },
    addToLecList(){
      this.$store.commit("addLecList", this.recommData)
      //this.$store.commit("setIsChanged", true)
    },
    delFromRecommList() {
      this.$store.commit("delRecommList", this.recommData);
    },
    addShadowToTT(){
      console.log(this.recommData)
      this.$store.commit("addShadowLec", this.recommData)
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
