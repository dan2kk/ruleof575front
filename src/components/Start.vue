<template>
  <div class="start">
    <LMenu/>
    <RMenu/>
  </div>
</template>


<script>
import LMenu from "./LMenu/LMenu";
import RMenu from "./RMenu/RMenu";
import axios from 'axios';

export default {
  name: "Start",
  components: {
    LMenu,
    RMenu
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
</style>
