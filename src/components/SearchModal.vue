<template>
    <div class="search-modal">
        <div class= "overlay valign-text-middle notosanskr-semibold-white-16px" @click="$emit('modal-close')" >
          <div class = empty-cart></div>
          창을 닫으려면 바깥을 클릭
        </div>
        <div class= "search-modal-card">
          <div class="search">
            <input type="text" class="search-box" id="searchbox"  placeholder="원하는 과목 직접 검색"/>
            <input type="submit" class="button" value="검색" @click="getSearchText()">
          </div>
          <SearchModalRecord :lecData=lec v-for="lec in this.lecList" :key="lec"></SearchModalRecord>
        </div>
    </div>
  </template>
  

<script>
import SearchModalRecord from "./SearchModalRecord";
import axios from "axios"

export default {
  name: "Modal",
  props: [],
  components: {
    SearchModalRecord
  },
  data(){
    return{
      input: "",
      lecList : []
    }
  },
  methods:{
    async getSearchText(){
      this.input = document.getElementById("searchbox").value
      try{
        this.lecList = (await axios.get('http://3.37.249.210:1324/list/search', {params: {keyword: this.input}})).data
      }
      catch(error){
        console.log(error)
      }
    }
  }
};



</script>

<style lang="sass">
@import '../../variables'

.search-modal,
.overlay
    width: 400px
    height: 600px
    position: absolute
    align-items: center
.overlay
    opacity: 0.4
    background-color: black

.search-modal-card
    background-color: $error-color
    position: absolute
    width: 400px
    top: -40px
    margin: auto
    margin-top: 20%
    background-color: $pippin
    height : 500px
    z-index: 10
    overflow-y: overlay

.search-modal-card::-webkit-scrollbar 
  width : 1px
  
.search-modal-card::-webkit-scrollbar-thumb
  background-color: rgba(0,0,0)
  height: 95%

.empty-cart
  width: 400px
  height: 520px
  opacity: 0
  background-color: black
.search 
  position: relative 
  display: flex
  width: 400px 
.search-box
  width:80%
  font-size: 14px 
.button
  width:20%
.search-icon
  position : absolute
  width: 25px
  top: 7px
  right: 10px
  margin: 0
</style>