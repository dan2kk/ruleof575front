<template>
  <div class="grad-list">
    <RMenuTitleBox boxStyle="purpleBold">졸업사정 변동사항</RMenuTitleBox>
    <GradRecord :gradData="gradRec" v-for="gradRec in this.gradList" :key="gradRec"/>
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
  computed : {
    gradList() {
      return this.$store.getters.getGradList;
    }
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
  height: 550px
  position: relative
  width: 400px

.lower-menu
  overflow-y: overlay
  overflow-x: hidden
</style>
