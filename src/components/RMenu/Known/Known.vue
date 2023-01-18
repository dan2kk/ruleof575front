<template>
  <div class="known">
    <RMenuTitleBox boxStyle="yellowBold" v-for="temp in temps" :key="temp">{{temp}}</RMenuTitleBox>
  </div>
</template>

<script>
import RMenuTitleBox from "../Box/RMenuTitleBox";
export default {
  name: "Known",
  components: {
    RMenuTitleBox,
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
  background-color: #ffefc6
  display: flex
  flex-direction: column
  height: 550px
  position: relative
  width: 400px
</style>
