<template>
    <div class="search-modal">
        <div class= "overlay-search valign-text-middle notosanskr-bold-white-24px" @click="$emit('modal-close')" >
          <div class = empty-cart></div>
          창을 닫으려면 바깥을 클릭
        </div>
        <div class= "search-modal-card">
          <div class="search">
            <input type="text" class="search-box" id="searchbox"  placeholder="원하는 과목 직접 검색"/>
            <input type="submit" class="button" value="검색" @click="getSearchText()">
          </div>
          <RMenuTextBox :text= this.sendSearchText() color= "red" size= "150"/>

        </div>
    </div>
  </template>
  

<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox";
import RMenuModifiableTitleBox from "./RMenu/Box/RMenuModifiableTitleBox";
import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
import SearchImageBox from "./RMenu/Box/SearchImageBox";
import axios from "axios"

export default {
  name: "Modal",
  props: [],
  components: {
    RMenuTitleBox,
    RMenuTextBox,
    RMenuModifiableTitleBox,
    SearchImageBox,
    RMenuTextBox
  },
  computed:{

  },
  data(){
    return{
    input: ""
    }
  },
  methods:{
    async getSearchText(){
      var temp = document.getElementById("searchbox").value
      this.input=temp
      try{
        let a = (await axios.get('http://3.37.249.210:1324/list/search', {params: {keyword: this.input}})).data
        console.log(a)
      }
      catch(error){
        console.log(error)
      }
    },
    sendSearchText(){
      return this.input
    }
  }
};



</script>

<style lang="sass">
@import '../../variables'

.search-modal
  width: 600px
  height: 960px
  position: absolute
.overlay-search
  width: 100%
  height: 100%
  position: absolute
  opacity: 0.3
  background-color: $black
  align-items: center

.search-modal-card
  background-color: $error-color
  position: absolute
  left: 5%
  width: 90%
  height : 80%
  margin: auto
  margin-top: 5%
  background-color: $pippin
  z-index: 10
  border: 3px solid white
  overflow-y: overlay

.search-modal-card::-webkit-scrollbar 
  width : 1px
  
.search-modal-card::-webkit-scrollbar-thumb
  background-color: rgba(0,0,0)
  height: 95%

.empty-cart
  width: 100%
  height: 80%
  opacity: 0
  background-color: black

.search
  position: relative 
  display: flex
  width:100%

.search-box
  width:80%
  font-size: 20px 
  border: 2px solid
  border-color: $geraldine
  font-family: "Noto Sans KR", Helvetica

.button
  width:20%
  font-size: 20px
  border: 2px solid
  border-color: $geraldine
  font-family: "Noto Sans KR", Helvetica
  
</style>