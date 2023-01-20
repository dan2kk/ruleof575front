<template>
  <div class="r-menu">
    <div class="r-menu-cart">
      <RMenuTabs> </RMenuTabs>
      <LoginScreen v-if="!isLogined" v-on:login-req="loginEvent()"> </LoginScreen>
      <LecList v-show="isLogined && curScreen == 1"></LecList>
      <RecommList v-show="isLogined && curScreen == 2"></RecommList>
      <Known v-show="isLogined && curScreen == 3"></Known>
      <GradList v-show="isLogined && curScreen == 4"></GradList>
    </div>
  </div>
</template>

<script>
import RMenuTabs from "./RMenuTabs";
import LoginScreen from "./Login/LoginScreen";
import LecList from "./LecList/LecList";
import RecommList from "./Recomm/RecommList";
import Known from "./Known/Known";
import GradList from "./Grad/GradList";
import axios from "axios";
import { getGradNames } from '@/util'

export default {
  name: "RMenu",
  components: {
    RMenuTabs,
    LoginScreen,
    LecList,
    RecommList,
    Known,
    GradList
  },
  computed : {
    isLogined() {
      return this.$store.getters.getIsLogined
    },
    curScreen() {
      return this.$store.getters.getCurScreen
    }

  },
  // data(){
  //   return{
  //     isLogined: false,
  //     curScreen: 0,
  //   }
  // },
  methods: {
    loginEvent(){
        this.$store.commit("setIsLogined", true);
        this.initList()
        this.initGrad()
        this.$store.commit("setCurScreen", 1);
    },

    async initList() {
      try{
        let stuId = this.$store.getters.getStuId
        let lecList = (await axios.get('/list/init', {params: {stu_id: stuId}})).data
        console.log(lecList);

        for(let lec of lecList) {
          if(lec.isInTable == 1) {
            lec['color'] = this.$store.getters.getColor
            this.$store.commit("setNextColor")
          }
          this.$store.commit("addLecList", lec);
        }

        this.$store.commit("setUpTimeLines", '월');
        this.$store.commit("setUpTimeLines", '화');
        this.$store.commit("setUpTimeLines", '수');
        this.$store.commit("setUpTimeLines", '목');
        this.$store.commit("setUpTimeLines", '금');
      }
      catch(err){
        alert(err)
      }
    },

    async initGrad(){
      try{
        let stuId = this.$store.getters.getStuId
        let gradRecList = (await axios.get('/grad/init', {params: {stu_id: stuId}})).data.grads
        let gradNames = getGradNames();
        
        for(let gradRec of gradRecList) {

          if(!gradNames.includes(gradRec.이수명)) {
            continue
          }

          if(gradRec.기준 != null){
            gradRec.기준= gradRec.기준.slice(0, -3)
          }
          if(gradRec.이수 != null){
            gradRec.이수= gradRec.이수.slice(0, -3)
          }
          else{
            gradRec.이수 = "0"
          }
          if(gradRec.기준 === "1"){
            gradRec.기준 = "Y"
            if(gradRec.이수 === "1"){
              gradRec.이수 = "Y"
            }
            else{
              gradRec.이수 = "N"
            }
          }
          gradRec.변동 = '0'
          gradRec.합계 = '0'
          gradRec.잔여 = '0'
          this.$store.commit("addGradList", gradRec)
        }
      }
      catch(err){
        alert(err)
      }
    }
  }
};
</script>

<style lang="sass">
.r-menu
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 600px
  width: 400px

.r-menu-cart
  align-items: flex-start
  background-color: #error-color
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px
</style>
