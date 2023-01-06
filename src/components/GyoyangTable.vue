<template>
  <div class="gyoyang-table">
    <titlebox className="blueBold">야스다야스</titlebox>

    <gyoyang-record v-bind="gyoyangRecord1Props"/>
  </div>
</template>

<script>
import Titlebox from "./Titlebox";
import GyoyangRecord from "./GyoyangRecord";
export default {
  name: "GyoyangTable",
  components: {
    Titlebox,
    GyoyangRecord,
  },
  props: [
    "gyoyangRecord1Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.gyoyang-table-::-webkit-scrollbar
  display: none
  width: 0

.gyoyang-table
  align-items: center
  background-color: $solitude
  border-style: solid
  border-width: 1px
  border-color: $white
  display: flex
  flex-direction: column
  height: 550px
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
.titlebox
  height: 40px
</style>
