<template>
  <div class="r-menu">
    <div class="r-menu-cart">
      <RMenuTabs v-on:changeScreen = "changeScreen"> </RMenuTabs>
      <LoginScreen v-if="!isLogined" v-on:login-req="loginEvent()"> </LoginScreen>
      <!-- <LecList v-show="isLogined && curScreen == 1"></LecList>
      <RecommList v-show="isLogined && curScreen == 2"></RecommList>
      <GradList : v-show="isLogined && curScreen == 4"></GradList>
      <LecDetails v-show="isLogined && curScreen == 3"></LecDetails> -->
    </div>
  </div>
</template>

<script>
import RMenuTabs from "./RMenuTabs";
import LoginScreen from "./Login/LoginScreen";
// import LecList from "./LecList/LecList";
// import RecommList from "./Recomm/RecommList";
// import LecDetails from "./Details/LecDetails";
// import GradList from "./Grad/GradList";
import axios from "axios";

export default {
  name: "RMenu",
  components: {
    RMenuTabs,
    LoginScreen
    // LecList,
    // RecommList,
    // GradList,
    // LecDetails
},
  data(){
    return{
      isLogined: false,
      curScreen: 0,
    }
  },
  methods: {
    loginEvent(){
        this.isLogined = true
        
        this.initList()
        this.getJolupevent()
        
        this.curScreen = 1
    },

    //Tab 클릭시 화면 전환 이벤트
    async changeScreen(screenNum) {
      if(this.$store.getters.getIsChange){
        let data = []
        let temp = this.$store.getters.getTimetable

        for(let i = 0 ; i< temp.length; i++){
          data.push({수업번호: temp[i].수업번호, value: temp[i].value})
        }

        try {
          await axios.post('/list/update', {list: data, stu_id: this.$store.getters.getUserID})
          this.$store.commit("toggleSwitch", false)
        }
        catch(err){
            console.log(err)
        }
      }
      if(screenNum == 4){
        this.updateJolupevent()
      }
      this.curScreen = screenNum
    },

    async initList() {
      try{
        let timetabledata = (await axios.get('/list/init', {params: {stu_id: this.$store.getters.getUserID}})).data
        for(let i=0; i< timetabledata.length;i++){
          this.$store.commit("addTimetable", timetabledata[i]);


          if(timetabledata[i].state == 1){
            for(let j=0 ; j< timetabledata[i].요일.length; j++){              
              if(timetabledata[i].요일[j] == '시간미지정강좌') {
                continue;
              }

              let startTime = Number(timetabledata[i].시작시간[j].slice(0, -6))
              let endTime = Number(timetabledata[i].끝시간[j].slice(0, -6))
              let startHalf = (timetabledata[i].시작시간[j].slice(-5, -3) != '00')
              let endHalf = (timetabledata[i].끝시간[j].slice(-5, -3) != '00')

              if(startHalf) {
                startTime += 0.5;
              }
              if(endHalf) {
                endTime += 0.5;
              }

              let lecToAdd = {
                start : startTime,
                end : endTime,
                isInTable : true,
                content : timetabledata[i].과목명
              }


              this.$store.commit("addToLecsInTable", {
                  day: timetabledata[i].요일[j], 
                  info: lecToAdd
              });
            }
          }
        }
        this.$store.commit("sortLecsInTable", '월');
        this.$store.commit("sortLecsInTable", '화');
        this.$store.commit("sortLecsInTable", '수');
        this.$store.commit("sortLecsInTable", '목');
        this.$store.commit("sortLecsInTable", '금');


        this.$store.commit("setTimeblockLists", '월');
        this.$store.commit("setTimeblockLists", '화');
        this.$store.commit("setTimeblockLists", '수');
        this.$store.commit("setTimeblockLists", '목');
        this.$store.commit("setTimeblockLists", '금');

      }
      catch(err){
        alert(err)
      }
    },
    async getJolupevent(){
      try{
        let res = (await axios.get('/grad/init', {params: {stu_id: this.$store.getters.getUserID}})).data.status
        for(let i=0 ; i< res.length; i++){
          if(res[i].이수명 != "졸업평점(성적증명평점과 상이)"){
            if(res[i].기준 != null){
              res[i].기준= res[i].기준.slice(0, -3)
            }
            if(res[i].이수 != null){
              res[i].이수= res[i].이수.slice(0, -3)
            }
            else{
              res[i].이수 = "0"
            }
            if(res[i].기준 === "1"){
              res[i].기준 = "Y"
              if(res[i].이수 === "1"){
                res[i].이수 = "Y"
              }
              else{
                res[i].이수 = "N"
              }
            }
            this.gradData[res[i].이수명] = 0 //내부 데이터
          }
          res[i].변동 = '0'
          res[i].합계 = '0'
          res[i].잔여 = '0'
          this.$store.commit("addGrad", res[i])
        }
      }
      catch(err){
        alert(err)
      }
    },
    async updateJolupevent(){
      try{
        let res = (await axios.get('/grad/view', {params: {stu_id: this.$store.getters.getUserID}})).data.list
        for(let j=0 ; j< res.length; j++){
          this.gradData.졸업학점 += res[j].학점
          switch(res[j].이수구분코드명){
            case "전공심화": case "전공핵심":
              this.gradData.전공학점 += res[j].학점
              break;
            case "핵심교양":
              this.gradData.핵심교양 += res[j].학점
                  switch(res[j].영역코드명){
                    case "인문과예술영역":
                      this.gradData.인문과예술영역 += res[j].학점
                      break
                    case "사회와세계영역":
                      this.gradData.사회와세계영역 += res[j].학점
                      break
                    case "미래산업과창업영역":
                      this.gradData.미래산업과창업영역 += res[j].학점
                      break
                    case "글로벌언어와문화영역":
                      this.gradData.글로벌언어와문화영역 += res[j].학점
                      break
                    case "과학과기술영역":
                      this.gradData.과학과기술영역 += res[j].학점
                      break
                    case "고전읽기영역":
                      this.gradData.고전읽기영역 += res[j].학점
                      break
                }
              break;
            default:
              console.log("이수구분코드명 없는것!")
              break;
            
          }
          if(res[j].영어전용){
            this.gradData.영어전용강좌수+=1
          }
          switch(res[j].이수단위){
            case "100단위": case "200단위": case "300단위":
              this.gradData["100~300단위"] += res[j].학점
              break;
            case "400단위":
              this.gradData["400단위"] += res[j].학점
              break;
            default:
              console.log('단위부분 에러')
              break;
          }
        }
      }
      catch(err){
        alert(err)
      }
      this.$refs.grad.update()
    },
    async getCourseInfo(number){ //수업정보 데이터 불러오기
      if(number != this.$store.getters.getLecture.lec_info.수업번호){
        try{
          let res = (await axios.get('/details', {params: {lec_num: number}})).data
          this.$store.commit("changeLec", res)
          console.log(res)
          this.curScreen = 3
        }
        catch(err){
          console.log(err)
        }
        this.curScreen = 3
        console.log(number)
        }
      else{
        this.curScreen = 3
      }
    }
  },
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
