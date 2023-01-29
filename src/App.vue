<template>
  <div class="app">
    <LMenu/>
    <RMenu/>
    <LecDetailsModal class="left-modal" :modalData = 'this.$store.getters.getLecDetailsLeft' v-if="onLeftModal" v-on:modal-close="leftModalClose"/>
    <LecDetailsModal class="right-modal" :modalData = 'this.$store.getters.getLecDetailsRight' v-if="onRightModal" v-on:modal-close="rightModalClose"/>
    <SearchModal class="search-modal" v-if ="onSearchModal" v-on:modal-close="searchModalClose"></SearchModal>
  </div>
</template>


<script>
import LMenu from "./components/LMenu/LMenu";
import RMenu from "./components/RMenu/RMenu";
import LecDetailsModal from "./components/LecDetailsModal";
import { h } from 'vue'
import SearchModal from "./components/SearchModal";

export default {
  name: "Start",
  components: {
    LMenu,
    RMenu,
    LecDetailsModal,
    SearchModal,
  },
  computed:{
    onLeftModal(){
      return this.$store.getters.getLecDetailsLeft.state
    },
    onRightModal(){
      return this.$store.getters.getLecDetailsRight.state
    },
    onSearchModal(){
      return this.$store.getters.getSearchModal.state
    },
  },
  methods:{
    leftModalClose(){
      this.$store.getters.getLecDetailsLeft.state = false
    },
    rightModalClose(){
      this.$store.getters.getLecDetailsRight.state = false
    },
    searchModalClose(){
      this.$store.getters.getSearchModal.state = false
    },
  }
};
</script>

<style lang="sass">
@import '../variables'

.app
  align-items: flex-start
  background-color: $error-color
  border: 1px none
  display: flex
  width: 1200px
  height: 960px
.right-modal
  left: 600px
.search-modal
  left: 600px
  
</style>
