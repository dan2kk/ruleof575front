<template>
  <div :class="[`gyoyang-record-1`, className || ``]">
    <div class="flex-row">
      <textbox2 :text1Props="textbox21Props.text1Props" />
      <textbox2 :className="textbox22Props.className" :text1Props="textbox22Props.text1Props" />
      <textbox2 :className="textbox23Props.className" :text1Props="textbox23Props.text1Props" />
      <img class="icon-buttons" :src="iconButtons1" alt="Icon Buttons" /><img
        class="icon-buttons-1"
        :src="iconButtons2"
        alt="Icon Buttons"
      />
    </div>
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
export default {
  name: "GyoyangRecord",
  components: {
    Textbox2,
  },
  props: ["iconButtons1", "iconButtons2", "className", "textbox21Props", "textbox22Props", "textbox23Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.gyoyang-record-1
  background-color: $solitude
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 400px

.flex-row
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative

.icon-buttons
  height: 35px
  margin-bottom: 1.0px
  margin-left: 9px
  width: 35px

.icon-buttons-1
  height: 35px
  margin-bottom: 1.0px
  margin-left: 15px
  width: 35px

.gyoyang-record-1.gyoyang-record .flex-row
  align-items: flex-start

.gyoyang-record-1.gyoyang-record .icon-buttons,
.gyoyang-record-1.gyoyang-record .icon-buttons-1
  height: 28px
  margin-bottom: unset
  margin-top: 2px
</style>
