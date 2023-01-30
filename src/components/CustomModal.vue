<template>
    <div class="custom-modal">
        <div class= "overlay-custom valign-text-middle notosanskr-bold-white-24px" @click="$emit('modal-close')" >
          <div class = empty-cart></div>
          창을 닫으려면 바깥을 클릭
        </div>
        <div class= "custom-modal-card">
          <RMenuTitleBox color= "blue" size="535">과목 직접 담기</RMenuTitleBox>
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
  background-color: $error-color
  position: absolute
  left: 5%
  width: 90%
  height : 80%
  margin-top: 5%
  background-color: $solitude
  z-index: 10
  border: 3px solid #b2c3e1
  overflow-y: overlay
  border-top-left-radius: 15px
  border-top-right-radius: 15px

.custom-modal-card::-webkit-scrollbar 
  width : 1px
  
.custom-modal-card::-webkit-scrollbar-thumb
  background-color: rgba(0,0,0)
  height: 95%

.empty-cart
  width: 100%
  height: 80%
  opacity: 0
  background-color: black

</style>