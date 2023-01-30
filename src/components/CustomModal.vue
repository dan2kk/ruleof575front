<template>
    <div class="custom-modal">
        <div class= "overlay-custom valign-text-middle notosanskr-bold-white-24px" @click="$emit('modal-close')" >
          <div class = empty-cart></div>
          창을 닫으려면 바깥을 클릭
        </div>
        <div class= "custom-modal-card">
          <RMenuTitleBox color= "blue" size="534">과목 직접 담기</RMenuTitleBox>
          <RMenuTitleBox color= "blue" size="534"> 시간표와 겹치는 과목 보이기</RMenuTitleBox>
          <div class = "custom-checkbox-cart">    
              <label class="custom-container">
                <input checked="custom-checked" type="checkbox" @click ="setIsShowOverlapped">
                <span class="custom-checkmark"></span>
              </label>
          </div>
          <CustomModalRecord :lecData=lec v-for="lec in this.lecList" :key="lec"></CustomModalRecord>
        </div>
    </div>
</template>
  

<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox"
import RMenuTextBox from "./RMenu/Box/RMenuTextBox"
import SearchImageBox from "./RMenu/Box/SearchImageBox"
import CustomModalRecord from "./CustomModalRecord"
export default {
  name: "CustomModal",
  props: [],
  components: {
    RMenuTitleBox,
    RMenuTextBox,
    SearchImageBox,
    CustomModalRecord
  },
  computed: {
    lecList() {
      return this.$store.getters.getCustomModal.list
    }
  },
  methods:{
    setIsShowOverlapped(){
      this.$store.commit("setIsShowOverlapped")
    }
  }
};



</script>

<style lang="sass">
@import '../../variables'

.custom-modal
  width: 600px
  height: 960px
  position: absolute
  
.overlay-custom
  width: 100%
  height: 100%
  position: absolute
  opacity: 0.3
  background-color: $black
  align-items: center
  border-radius: 15px
  
.custom-modal-card
  position: absolute
  left: 5%
  width: 90%
  margin-top: 30%
  background-color: $solitude
  z-index: 10
  border: 3px solid #b2c3e1
  overflow-y: overlay
  border-top-left-radius: 15px
  border-top-right-radius: 15px

.custom-modal-card::-webkit-scrollbar 
  display: none

.empty-cart
  width: 100%
  height: 80%
  opacity: 0
  background-color: black


.custom-checkbox-cart
  position: absolute
  left : 93%
  top: 45%

.custom-container
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
      & ~.custom-checkmark 
        background-color: #2196F3 
        border-radius: 5px
        &:after 
          display: block 

.custom-checkmark 
  &:after 
    left: 9px 
    top: 5px 
    width: 5px 
    height: 10px 
    border: solid white 
    border-width: 0 3px 3px 0 
    transform: rotate(45deg) 

.custom-checkmark
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
  

</style>