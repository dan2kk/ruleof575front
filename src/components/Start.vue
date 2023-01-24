<template>
  <div class="start">
    <LMenu/>
    <RMenu/>
    <LecDetailsModal class="left-modal" :modalData = 'this.$store.getters.getLecDetailsLeft' v-if="onLeftModal" v-on:modal-close="leftModalClose">
    </LecDetailsModal>
    <LecDetailsModal class="right-modal" :modalData = 'this.$store.getters.getLecDetailsRight' v-if="onRightModal" v-on:modal-close="rightModalClose">
    </LecDetailsModal>
    <SearchModal class="search-modal" v-if ="onSearchModal" v-on:modal-close="searchModalClose"></SearchModal>
  </div>
</template>


<script>
import LMenu from "./LMenu/LMenu";
import RMenu from "./RMenu/RMenu";
import LecDetailsModal from "./LecDetailsModal";
import SearchModal from "./SearchModal";

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
    }
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
.search-modal
  left: 400px
  
</style>
