<template>
  <div class="graduation-info-table">
    <titlebox className="purpleBold">졸업사정 변동사항</titlebox>
    <graduation-info-record :textData="record" v-for="record in this.$store.getters.getGrad"/>
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
      graduationInfo: {a: "이수명", b: "배당", c: "취득",d: "변동", e: "합계", f: "잔여"},
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
  overflow-y: scroll
  overflow-x: hidden
  position: relative
  width: 400px
</style>
