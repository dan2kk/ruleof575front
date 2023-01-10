<template>
  <div :class="[`timeblock-1`, clickedState || ``, ]">
    <div class="text-5 notosanskr-normal-black-12px"> {{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Timeblock4",
  props: ["children", "clickedState"],
  data(){
    return{
    clickable: false
    }
  },
  methods:{
    returnState()
    {
      alert("c'ex");
      this.$emit(clickable);
    },
    click(){
      alert("c'ex");
    }
  }
};

</script>

<style lang="sass">
@import '../../variables'

.timeblock-1
  align-items: center
  background-color: $timeblock-background
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 1px
  border-color: white
.timeblock-1.true
  background-color: $silver
  
.timeblock-1.false
  background-color: $timeblock-background

.text-5
  height: 40px
  letter-spacing: 0
  line-height: normal
  margin-top: 0px
  text-align: center
  width: 60px
</style>
