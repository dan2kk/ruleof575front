<template>
  <div class="gyoyang-table">
    <titlebox className="blueBold">야스다야스</titlebox>
    <gyoyang-record v-bind="it" v-for="it in its"/>
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
  methods:{
    setdata(index){
      this.its.at(index).textbox21Props.text = "스크린영어"
      this.its.at(index).textbox22Props.text = "이승일 쿤"
      this.its.at(index).textbox23Props.text = "월 15:00 ~ 17:00<br/>수 15:00~17:00";
    }
  },
  mounted(){
      this.its.push(this.propsTemp);
      this.its.push(this.propsTemp);
      this.its.push(this.propsTemp);
    	this.setdata(0);
  },
  data(){
    return{
      its: [],
      propsTemp: {
        textbox21Props: {text: "수업명"},
        textbox22Props: {text: "교수명", className: "textbox2-2-1"},
        textbox23Props: {text: "날짜 1<br />날짜 2", className: "textbox3-2-1"},
        imagebox_Add1Props: {src: "./iconbuttons-3.png", className: "blue"},
        imagebox_SearchProps: {src: "./iconbuttons-2.png", className: "blue"},
      }
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'


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
