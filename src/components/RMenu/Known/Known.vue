<template>
  <div class="known">
  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RMenuTextBox from "../Box/RMenuTextBox";
export default {
  name: "Known",
  components: {
    RMenuTitleBox, RMenuTextBox
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
  height: 560px
  position: relative
  width: 400px
.row
  align-items: center
  display: flex
</style>
