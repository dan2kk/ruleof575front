<template>
  <div :class="[`textbox-menu-tab`, className || ``]">
    <textbox1 :children="textbox11Props.children" :className="textbox11Props.className" @click="firstblockclick()"/>
    <textbox1 :children="textbox12Props.children" :className="textbox12Props.className" @click="secondblockclick()"/>
    <textbox1 :children="textbox13Props.children" :className="textbox13Props.className" @click="thirdblockclick()"/>
    <textbox1 :children="textbox14Props.children" :className="textbox14Props.className" @click="forthblockclick()"/>
  </div>
</template>

<script>
import Textbox1 from "./Textbox1";
export default {
  name: "TextboxMenuTab",
  components: {
    Textbox1,
  },
  props: ["className", "textbox11Props", "textbox12Props", "textbox13Props", "textbox14Props"],
  methods: {
    firstblockclick(){
      alert("1");
      this.$emit("firstblockclick");
    },
    secondblockclick(){
      alert("2");
      this.$emit("secondblockclick");
    },
    thirdblockclick(){
      alert("3");
      this.$emit("thirdblockclick");
    },
    forthblockclick(){
      alert("4");
      this.$emit("forthblockclick");
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.textbox-menu-tab
  align-items: center
  background-color: $white
  border-left-style: solid
  border-left-width: 1px
  display: flex
  height: 50px
  margin-right: 18.0px
  position: relative
  width: 400px

.textbox-menu-tab.textbox-menu-tab-1
  align-items: flex-start
  justify-content: center
  margin-right: unset
</style>
