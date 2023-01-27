<template>
  <div class="grad-list">
    <div class = "grad-list-upper-menu">
      <RMenuTitleBox color="purple">
        졸업사정 변동사항
      </RMenuTitleBox>
      <GradRecord :gradData = "this.gradListHead"/>
    </div>
    <div class = "grad-list-lower-menu">
      <input type="submit" class="load-grad-list" :value='this.buttonTxt' @click="loadGrad" v-if = "this.gradList.length == 0"/>
      <GradRecord :gradData="gradRec" v-for="gradRec in this.gradList" :key="gradRec" v-if = "this.gradList.length != 0"/>
    </div>

  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import GradRecord from "./GradRecord";
export default {
  name: "GradList",
  components: {
    RMenuTitleBox, 
    GradRecord
  },
  data() {
    return {
      buttonTxt: "내 졸업사정 불러오기" + "\n첫 로그인 시 클릭",
      gradListHead : {이수명: "이수명", 기준: "기준", 이수: "이수",변동: "변동", 합계: "합계", 잔여: "잔여"},
    }
  },
  computed : {
    gradList() {
      return this.$store.getters.getGradList
    },
  },
  methods:{
    update(){
      for(let i=1; i<this.$store.getters.getGrad.length; i++){
        this.$store.getters.getGrad[i].변동 = Number(this.data[this.$store.getters.getGrad[i].이수명])
        this.$store.getters.getGrad[i].합계 = Number(this.$store.getters.getGrad[i].변동) + Number(this.$store.getters.getGrad[i].이수)
        this.$store.getters.getGrad[i].잔여 = Number(this.$store.getters.getGrad[i].기준) - Number(this.$store.getters.getGrad[i].합계)
        if(this.$store.getters.getGrad[i].잔여 < 0) this.$store.getters.getGrad[i].잔여 = 0
      }
      alert("updated!")
    },
    loadGrad(){
      this.$store.dispatch('crawlingGradData')
    }
  }
};

</script>

<style lang="sass">
@import '../../../../variables'

.grad-list
  align-items: center
  background-color: $tutu
  display: flex
  flex-direction: column
  height: 100%
  position: relative
  width: 100%
  border-bottom-right-radius: 15px
  border-bottom-left-radius: 15px

.grad-list-lower-menu
  overflow-y: overlay
  overflow-x: hidden

.grad-list-lower-menu::-webkit-scrollbar 
  display: none

.grad-list-lower-menu
  -ms-overflow-style: none
  scrollbar-width: none

-webkit-scrollbar-thumb
  background-color: hsla(0, 0%, 42%, 0.49)
  border-radius: 100px

.load-grad-list
  width: 60%
  border: 3px solid
  border-color: $lily
  border-radius: 100px
  background-color: $white
  position: absolute
  top: 40%
  left: 20%
  color: $lily
  font-weight: 1000
  align-items: center
  font-size: 20px
</style>
