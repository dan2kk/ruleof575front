<template>
  <div class="r-menu">
    <div class="r-menu-cart">
      <RMenuTabs/>
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
      this.$store.commit("loginMain");
    },
  },
};
</script>

<style lang="sass">
.r-menu
  align-items: flex-start
  display: flex
  flex-direction: column
  width: 50%
  height: 100%

.r-menu-cart
  align-items: flex-start
  background-color: #E0E0E0
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
  position: relative
</style>
