<template>
  <div class="recomm-list">
    <div class="upper-menu">
      <RMenuTitleBox color="green" style="position: relative">
          <div style="position: absolute text-align: center">
            내 졸업사정에 필요한 교양만 추천받기
          </div>
          <div class = "recomm-checkbox-cart">    
            <label class="recomm-container">
              <input checked="recomm-checked" type="checkbox" @click ="setIsChecked">
              <span class="recomm-checkmark"></span>
            </label>
          </div>
      </RMenuTitleBox>
      <RMenuTitleBox color="green" style="position: relative">
          <div style="position: absolute text-align: center">
            시간미지정강좌 숨기기
          </div>
          <div class = "recomm-checkbox-cart">    
            <label class="recomm-container">
              <input checked="recomm-checked" type="checkbox" @click ="setIsChecked">
              <span class="recomm-checkmark"></span>
            </label>
          </div>
      </RMenuTitleBox>
    </div>
    <div v-for="recomms in recommList" :key="recomms">
        <RMenuTitleBox color="green" style="position: relative">
          <div style="position: absolute text-align: center">
            {{recomms.영역코드명}}
          </div>
          <img class="show-button-recommend" src='showbutton.svg' @click ="setIsRecommShow(recomms.영역코드명)" v-show="recomms.isRecommShow">
          <img class="hide-button-recommend" src='hidebutton.svg' @click ="setIsRecommShow(recomms.영역코드명)" v-show="!recomms.isRecommShow">
      </RMenuTitleBox>
      <RecommRecord :recommData = "lec" v-for="lec in recomms.수업목록" :key="lec" v-show="recomms.isRecommShow"/>
    </div>
  </div>

</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RecommRecord from "./RecommRecord";
import Checkbox from "../Box/Checkbox"
import { transformGradName, fieldOrder } from "../../../util"
import { file } from "@babel/types";

export default {
  name: "RecommList",
  components: {
    RMenuTitleBox,
    RecommRecord,
    Checkbox
  },
  computed:{
    recommList() {
      if(this.$store.getters.getIsChecked){
        let gradList = this.$store.getters.getGradList
        let recomms = this.$store.getters.getRecommList
        let ret = []
        
        for(let gradRec of gradList) {
          if(gradRec.기준 > gradRec.이수){
            let transformedName = transformGradName(gradRec.이수명)

            for(let rc of recomms){
              if(transformedName.includes(rc.영역코드명)) {
                ret.push(rc)
                break;
              }
            }
          }
        }
        ret = ret.sort((a, b) => fieldOrder.indexOf(a.영역코드명) - fieldOrder.indexOf(b.영역코드명));
        return ret;
      }
      else {
        let ret = []
        for(let rc of this.$store.getters.getRecommList) {
          ret.push(rc)
        }

        return ret
      }
    }
  },
  methods: {
    setIsChecked() {
      this.$store.commit("setIsChecked");
    },
    setIsRecommShow(fieldName) {
      this.$store.commit("setIsRecommShow", fieldName)
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.recomm-list
  align-items: start
  background-color: $light-green
  flex-direction: column
  height: 100%
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 100%
  border-bottom-right-radius: 15px
  border-bottom-left-radius: 15px
.recomm-list::-webkit-scrollbar 
  display: none

.upper-menu
  display: flex
  flex-direction: column

.recomm-checkbox-cart
  position: absolute
  left : 93%
  top: 25%

.recomm-container
  display: block 
  position: relative
  padding-left: 25px
  cursor: pointer 
  font-size: 22px 
  user-select: none 
  input 
    position: absolute 
    opacity: 0 
    cursor: pointer 
    height: 0 
    width: 0 
    &:checked 
      & ~.recomm-checkmark 
        background-color: #2196F3 
        border-radius: 5px
        &:after 
          display: block 

.recomm-checkmark 
  &:after 
    left: 9px 
    top: 5px 
    width: 5px 
    height: 10px 
    border: solid white 
    border-width: 0 3px 3px 0 
    transform: rotate(45deg) 

.recomm-checkmark
  position: absolute 
  top: 0 
  left: 0 
  height: 25px 
  width: 25px 
  background-color: #ccc 
  border-radius: 5px
  &:after 
    content: "" 
    position: absolute 
    display: none
  
  
.recomm-checkmark2
  position: absolute 
  top: 0 
  left: 0 
  height: 25px 
  width: 25px 
  background-color: #ccc 
  border-radius: 5px
  &:after 
    content: "" 
    position: absolute 
    display: none

.show-button-recommend
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease
  position: absolute
  left: 92%
.show-button-recommend:hover
  transform: scale(1.1)
.show-button-recommend:active
  transform: rotate(90deg) scale(0.7)

  
.hide-button-recommend
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease
  position: absolute
  left: 92%
.hide-button-recommend:hover
  transform: scale(1.1)
.hide-button-recommend:active
  transform: rotate(-90deg) scale(0.7)

</style>
