<template>
  <div class="time-table-cart">
    <div class="time-table">
      <TimeLine :day = 0 />
      <TimeLine :day = 1 />
      <TimeLine :day = 2 />
      <TimeLine :day = 3 />
      <TimeLine :day = 4 />
      <TimeLine :day = 5 />
    </div>
    <div class="ntlec-cart">
      <NTLecBlock :lecData="lec" v-for="lec in this.nTLecsList" :key="lec"/>
    </div>
  </div>
</template>

<script>
import TimeLine from "./TimeLine";
import NTLecBlock from "./NTLecBlock"
export default {
  name: "TimeTable",
  components: {
    TimeLine,
    NTLecBlock
  },
  computed : {
    nTLecsList() {
      let ret = []
      let lecList = this.$store.getters.getLecList

      for(let lec of lecList) {
        if(lec.isInTable == 1) {
          if(lec.요일.includes('시간미지정강좌')) {
            ret.push(lec);
          }

        }
      }
      return ret
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.time-table-cart
  align-items: flex-start
  background-color: $white
  height: 90%
  position: relative
  width: 100%
  overflow-x: hidden
  overflow-y: overlay
  border-top: 3px solid white
  border-bottom: 3px solid white
.time-table-cart::-webkit-scrollbar 
  width : 2px

.time-table-cart::-webkit-scrollbar-thumb
    background-color: rgba(0,0,0, 0)
    height: 95%

.time-table
  align-items: flex-start
  display: flex
  height: 1200px
  gap: 2px
  position: relative

.ntlec-cart
  position: relative

</style>
