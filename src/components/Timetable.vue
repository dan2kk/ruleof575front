<template>
  <div :class="[`timetable`]">
    <timeline :blocknumArray= this.blocknumTable[0] :textArray = this.textTable[0] :posx = 0 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[1] :textArray = this.textTable[1] :posx = 1 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[2] :textArray = this.textTable[2] :posx = 2 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[3] :textArray = this.textTable[3] :posx = 3 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[4] :textArray = this.textTable[4] :posx = 4 v-on:passInfo="receiveInfoAndUpdate"/>
    <timeline :blocknumArray= this.blocknumTable[5] :textArray = this.textTable[5] :posx = 5 v-on:passInfo="receiveInfoAndUpdate"/>
  </div>
</template>

<script>

import Timeline from "./Timeline";
export default {
  name: "Timetable",
  components: {
    Timeline,
  },
  props: [ ],
  data() {
    return {
      selectedDateTime: [],
      blocknumTable: [
      [7,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,9,9,2,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1],
      [8,1,1,1,1,1,1,1,1,1,1,1,1]],
      textTable: [
      ["?", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00+"],
      ["월요일", "소프트웨어공학", "", "", "", "", "", "", "", "", "", "", "",],
      ["화요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["수요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["목요일", "", "", "", "", "", "", "", "", "", "", "", "",],
      ["금요일", "", "", "", "", "", "", "", "", "", "", "", "",]]
    }
  },
  methods: {
    receiveInfoAndUpdate(blockno, blocktext, posx, posy)
    {
      this.blocknumTable[posx][posy] = blockno;
      this.textTable[posx][posy] = blocktext;
    },
  },
};
</script>

<style lang="sass">
@import '../../variables'

.timetable
  align-items: center
  background-color: $white
  display: flex
  gap: 8px
  height: 520px
  position: relative
  width: 400px
  border-style: solid
  border-color: white
  border-width: 1px

</style>
