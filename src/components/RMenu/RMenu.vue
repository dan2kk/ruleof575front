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
import { processLec } from '@/util'

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
        for(let i = 0; i< lecList.length;i++){
          this.$store.commit("addLecList", lecList[i]);

          if(lecList[i].state == 1){
            for(let j=0 ; j< lecList[i].요일.length; j++){              
              if(lecList[i].요일[j] == '시간미지정강좌') {
                continue;
              }

              let lecToAdd = processLec(lecList[i], j);
              lecToAdd['color'] = this.$store.getters.getColor;

              this.$store.commit("addLecsInTable", {
                  day: lecList[i].요일[j], 
                  info: lecToAdd
              });
            }
            this.$store.commit("setNextColor")
          }
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
        let status = (await axios.get('/grad/init', {params: {stu_id: stuId}})).data.status
        for(let i=0 ; i< status.length; i++){
          if(status[i].이수명 != "졸업평점(성적증명평점과 상이)"){
            if(status[i].기준 != null){
              status[i].기준= status[i].기준.slice(0, -3)
            }
            if(status[i].이수 != null){
              status[i].이수= status[i].이수.slice(0, -3)
            }
            else{
              status[i].이수 = "0"
            }
            if(status[i].기준 === "1"){
              status[i].기준 = "Y"
              if(status[i].이수 === "1"){
                status[i].이수 = "Y"
              }
              else{
                status[i].이수 = "N"
              }
            }
          }
          status[i].변동 = '0'
          status[i].합계 = '0'
          status[i].잔여 = '0'
          this.$store.commit("addGradList", status[i])
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
