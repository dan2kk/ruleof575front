<template>
    <div class="search-modal">
        <div class= "overlay valign-text-middle notosanskr-semibold-white-16px" @click="$emit('modal-close')" >
          <div class = empty-cart></div>
          창을 닫으려면 바깥을 클릭
        </div>
        <div class= "search-modal-card">
          <div class="row">
            <RMenuTextBox color="light-grey" size="360" text="원하는 과목 직접 검색"/>
            <SearchImageBox src= "./searchbutton.svg" color="light-grey"/>
          </div>
        </div>
    </div>
  </template>
  

<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox";
import RMenuModifiableTitleBox from "./RMenu/Box/RMenuModifiableTitleBox";
import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
import SearchImageBox from "./RMenu/Box/SearchImageBox";

export default {
  name: "Modal",
  props: [],
  components: {
    RMenuTitleBox,
    RMenuTextBox,
    RMenuModifiableTitleBox,
    SearchImageBox
  },
  computed:{

  },
  methods:{
  }

};



</script>

<style lang="sass">
@import '../../variables'

.search-modal,
.overlay
    width: 400px
    height: 100%
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
    border: 3px solid white
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



</style>