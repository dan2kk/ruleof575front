<template>
  <div class="menu-1">
    <div class="cart-5">
      <textbox-menu-tab
        :className="textboxMenuTabProps.className"
        :textbox11Props="textboxMenuTabProps.textbox11Props"
        :textbox12Props="textboxMenuTabProps.textbox12Props"
        :textbox13Props="textboxMenuTabProps.textbox13Props"
        :textbox14Props="textboxMenuTabProps.textbox14Props"
        v-on:firstblockclick="updateevent(1)"
        v-on:secondblockclick="updateevent(2)"
        v-on:thirdblockclick="updateevent(3)"
        v-on:forthblockclick="updateevent(4)"
      />
      <initial-menu :className="initialMenuProps.className" :loginButtonProps="initialMenuProps.loginButtonProps" v-on:loginf="loginevent()" v-if="!logined"/>
      <course-list-table v-show="logined && menu == 1" ref="courselist"></course-list-table>
      <gyoyang-table v-show="logined && menu == 2"></gyoyang-table>
      <course-info-table v-show="logined && menu == 3"></course-info-table>
      <graduation-info-table :data="this.gradData" v-show="logined && menu == 4"></graduation-info-table>
    </div>
  </div>
</template>

<script>
import TextboxMenuTab from "./TextboxMenuTab";
import InitialMenu from "./InitialMenu";
import CourseInfoTable from "./CourseInfoTable.vue";
import GraduationInfoTable from "./GraduationInfoTable.vue";
import GyoyangTable from "./GyoyangTable.vue";
import CourseListTable from "./CourseListTable.vue";
import axios from "axios";
export default {
  name: "XMenu",
  components: {
    TextboxMenuTab,
    InitialMenu,
    CourseInfoTable,
    GraduationInfoTable,
    GyoyangTable,
    CourseListTable
  },
  props: ["textboxMenuTabProps", "initialMenuProps"],
  data(){
    return{
      logined: false,
      menu: 0,
      userTimetable: [],
      gradData: {}
    }
  },
  methods: {
    loginevent(){
        alert("event received")
        this.$emit("logined")
        this.logined = true
        this.getJolupevent()
        this.menu = 1
    },
    async updateevent(number){
      alert(this.$store.getters.getIsChange)
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
      if(number == 4){
        this.updateJolupevent();
      }
      this.menu = number
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
            this.gradData[res[i].이수] = 0
          }
          this.$store.commit("addGrad", res[i])
          console.log(res[i].이수명 + res[i].기준 + res[i].이수)
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
          switch(res[j].이수구분코드명){
            case "전공심화": case "전공핵심": case "핵심교양": case "교양필수":
              this.gradData.졸업학점 += res[j].학점
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
            default:
              alert("이수구분코드명 없는것!")
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
              alert('단위부분 에러')
              break;
          }
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
.menu-1
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 600px
  width: 400px

.cart-5
  align-items: flex-start
  background-color: #error-color
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px
</style>
