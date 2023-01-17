<template>
  <div class="recomm-list-record">
    <div class="recomm-list-record-cart">
      <RMenuTextBox :text= this.recommData.과목명 boxStyle= "blue" size= "big"/>
      <RMenuTextBox :text= this.recommData.대표교강사명 boxStyle= "blue" size= "small"/>
      <RMenuTextBox :text= this.recommData.수업시간 boxStyle= "blue" size= "medium"/>
      <SearchImageBox src= "./iconbuttons-1.png" boxStyle="blue" @click="addToList"/>
      <SearchImageBox src= "./iconbuttons-2.png" boxStyle="blue" @click="delRecomm"/>
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
    addToList(){
      alert(this.recommData.수업번호)
      this.$store.commit("addTimetable", this.recommData)
      this.$store.commit("setIsChanged", true)
      alert(this.$store.getters.getIsChange)
    },
    delRecomm() {
      this.$store.commit("delRecomm", this.recommData);
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
