<template>
  <div class="start">
    <LMenu/>
    <RMenu/>
    <LecDetailsModal class="left-modal" v-if="onLeftModal" v-on:modal-close="leftModalClose()">
      {{this.$store.getters.getLecDetailsLeft}}
    </LecDetailsModal>
    <LecDetailsModal class="right-modal" v-if="onRightModal" v-on:modal-close="rightModalClose()">
      {{this.$store.getters.getLecDetailsRight}}
    </LecDetailsModal>
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
