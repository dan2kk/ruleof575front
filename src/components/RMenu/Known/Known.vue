<template>
  <div class="known">
    <KnownCart class="cart-1" title= "나를 위한 전공" info="자신의 학과의 전공 과목 중 <br>가장 인기있는/학점을 잘 주는/경쟁이 적은 전공 과목을 추천해줍니다"/>
    <KnownCart class="cart-1" title= "나를 위한 교양" info="내 졸업사정 상 필요한 교양 과목 중 <br>가장 인기있는/학점을 잘 주는/경쟁이 적은 교양 과목을 추천해줍니다"/>
  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RMenuTextBox from "../Box/RMenuTextBox";
import KnownCart from "./KnownCart"
export default {
  name: "Known",
  components: {
    RMenuTitleBox, RMenuTextBox, KnownCart
  },
  data(){
    return{
      temps: ["해줘", "응애", "노예야", "일해라"]
    }
  }
};
</script>

<style lang="sass">
.known
  align-items: center
  background-color: #e8f0ff
  display: flex
  flex-direction: column
  height: 100%
  position: relative
  width: 100%

.row
  align-items: center
  display: flex
</style>
