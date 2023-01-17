<template>
  <div class="graduation-info-table">
    <div class = "upper-menu">
    <titlebox className="purpleBold">졸업사정 변동사항</titlebox>
    <graduation-info-record :textData= "this.graduationInfo"/>
    </div>
    <div class = "lower-menu">
      <graduation-info-record :textData="record" v-for="record in this.$store.getters.getGrad"/>
    </div>
  </div>
</template>

<script>
import Titlebox from "./Titlebox";
import GraduationInfoRecord from "./GraduationInfoRecord";
export default {
  name: "GraduationInfoTable",
  components: {
    Titlebox, GraduationInfoRecord
  },
  props: ["data"],
  data(){
    return{
      records: [],
      graduationInfo: {이수명: "이수명", 기준: "기준", 이수: "이수",변동: "변동", 합계: "합계", 잔여: "잔여"},

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
@import '../../variables'

.graduation-info-table
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
