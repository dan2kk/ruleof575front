<template>
  <div class="recomm-list-record">
    <div class="recomm-list-record-cart">
      <RMenuTextBox class="recomm-list-classname" :text= this.recommData.과목명 color= "green" size= "325" @click="showDetails"/>
      <RMenuTextBox :text= this.recommData.대표교강사명 color= "green" size= "75"/>
      <RMenuTextBox :text= this.recommData.수업시간 color= "green" size= "100"/>
      <SearchImageBox src="./addbutton.svg" color ="green" @click="addToLecList" @mouseover="addShadowToTT" @mouseleave="clearShadowLec" v-show="isInLecList"/>
      <SearchImageBox src="./checkbutton.svg" color ="green" @click="addToLecList" @mouseleave="clearShadowLec" v-show="!isInLecList"/>
      <SearchImageBox src= "./deletebutton.svg" color="green" @click="delFromRecommList"/>
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
    async showDetails() {
      await this.$store.dispatch("fetchLecDetails", this.recommData.수업번호);
    },
    addToLecList(){
      this.$store.commit("addLecList", this.recommData)
      this.$store.commit("setIsChanged", true)
    },
    delFromRecommList() {
      this.$store.commit("delRecommList", this.recommData);
    },
    addShadowToTT(){
      this.$store.commit("addShadowLec", this.recommData)
    },
    clearShadowLec() {
      this.$store.commit("clearShadowLec")
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.recomm-list-record
  background-color: $green
  border-color: $light-green
  height: 40px
  min-width: 100%

.recomm-list-record-cart
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative

.recomm-list-classname:hover
  transform: scale(1.1)
  background-color: $green
.recomm-list-classname:active
  transform: scale(0.95)
  border: none
</style>
