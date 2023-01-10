<template>
  <div :class="[`textbox-menu-tab`, className || ``]">
    <menubox className="red" @click="firstblockclick()">수업목록</menubox>
    <menubox className="blue" @click="secondblockclick()">추천교양</menubox>
    <menubox className="yellow" @click="thirdblockclick()">수업상세</menubox>
    <menubox className="purple" @click="fourthblockclick()">졸업사정</menubox>

  </div>
</template>

<script>
import Textbox1 from "./Textbox1";
import Menubox from "./Menubox";
export default {
  name: "TextboxMenuTab",
  components: {
    Textbox1, Menubox
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
    fourthblockclick(){
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
  background-color: $error-color
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
