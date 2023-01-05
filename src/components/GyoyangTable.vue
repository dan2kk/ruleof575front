<template>
  <div class="gyoyang-table">
    <titlebox />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord1Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord1Props.iconbuttons2"
      :textbox21Props="gyoyangRecord1Props.textbox21Props"
      :textbox22Props="gyoyangRecord1Props.textbox22Props"
      :textbox23Props="gyoyangRecord1Props.textbox23Props"
    />
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
  border-left-style: solid
  border-left-width: 3px
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
