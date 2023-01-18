<template>
  <div class="grad-list">
    <div class = "upper-menu">
      <RMenuTitleBox boxStyle="purpleBold">졸업사정 변동사항</RMenuTitleBox>
      <GradRecord :gradData = "this.gradListHead"/>
    </div>
    <div class = "lower-menu">
      <GradRecord :gradData="gradRec" v-for="gradRec in this.gradList" :key="gradRec"/>
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
  data(){
    return{
      gradListHead :{이수명: "이수명", 기준: "기준", 이수: "이수",변동: "변동", 합계: "합계", 잔여: "잔여"},
    } 
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
-webkit-scrollbar-thumb
  background-color: hsla(0, 0%, 42%, 0.49)
  border-radius: 100px
</style>
