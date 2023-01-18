<template>
  <div class="start">
    <LMenu/>
    <RMenu/>
    <courseinfomodal class="left-modal" v-if="leftmodal" v-on:modal-close="LmodalClose()">
      {{this.$store.getters.getLecDetail1}}
    </courseinfomodal>
    <courseinfomodal class="right-modal" v-if="rightmodal" v-on:modal-close="RmodalClose()">
      {{this.$store.getters.getLecDetail2}}
    </courseinfomodal>
  </div>
</template>


<script>
import LMenu from "./LMenu/LMenu";
import RMenu from "./RMenu/RMenu";
import courseinfomodal from "./CourseInfoModal";
import axios from 'axios';

export default {
  name: "Start",
  components: {
    LMenu,
    RMenu,
    courseinfomodal,
  },
  computed:{
    leftmodal(){
      return this.$store.getters.getLecDetail1.state
    },
    rightmodal(){
      return this.$store.getters.getLecDetail2.state
    }
  },
  methods:{
    LmodalClose(){
      this.$store.getters.getLecDetail1.state = false
    },
    RmodalClose(){
      this.$store.getters.getLecDetail2.state = false
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.start
  align-items: flex-start
  background-color: $error-color
  border: 1px none
  display: flex
  height: 600px
  position: absolute
  width: 800px
.right-modal
  left: 400px
  
</style>
