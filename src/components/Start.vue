<template>
  <div class="start">
    <LMenu/>
    <RMenu/>
    <CourseInfoModal class="left-modal" v-if="leftmodal" v-on:modal-close="LmodalClose()">
      {{this.$store.getters.getLecDetail1}}
    </CourseInfoModal>
    <CourseInfoModal class="right-modal" v-if="rightmodal" v-on:modal-close="RmodalClose()">
      {{this.$store.getters.getLecDetail2}}
    </CourseInfoModal>
  </div>
</template>


<script>
import LMenu from "./LMenu/LMenu";
import RMenu from "./RMenu/RMenu";
import LecDetailsModal from "./LecDetailsModal";
import axios from 'axios';

export default {
  name: "Start",
  components: {
    LMenu,
    RMenu,
    LecDetailsModal,
  },
  computed:{
    onLeftModal(){
      return this.$store.getters.getLecDetailsLeft.state
    },
    onRightModal(){
      return this.$store.getters.getLecDetailsRight.state
    }
  },
  methods:{
    leftModalClose(){
      this.$store.getters.getLecDetailsLeft.state = false
    },
    rightModalClose(){
      this.$store.getters.getLecDetailsRight.state = false
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
