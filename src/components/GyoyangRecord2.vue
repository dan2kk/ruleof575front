<template>
  <div :class="[`gyoyang-record-12-1`, className || ``]">
    <div class="icon-buttons-container">
      <img
        class="icon-buttons-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/63b2bc75f2c82086034bb18a/releases/63b2cebc739581cd1d183689/img/icon-buttons-24@2x.png"
        alt="Icon Buttons"
      />
      <img
        class="icon-buttons-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/63b2bc75f2c82086034bb18a/releases/63b2cebc739581cd1d183689/img/icon-buttons-24@2x.png"
        alt="Icon Buttons"
      />
    </div>
    <div class="textbox-container">
      <textbox2 :text1Props="textbox21Props.text1Props" />
      <textbox2 :className="textbox22Props.className" :text1Props="textbox22Props.text1Props" />
      <textbox2 :className="textbox23Props.className" :text1Props="textbox23Props.text1Props" />
    </div>
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
export default {
  name: "GyoyangRecord2",
  components: {
    Textbox2,
  },
  props: ["className", "textbox21Props", "textbox22Props", "textbox23Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.gyoyang-record-12-1
  background-color: $solitude
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 400px
  overflow: hidden
  position: relative

.icon-buttons-container
  align-items: flex-start
  display: flex
  gap: 15px
  height: 35px
  left: 509px
  min-width: 85px
  position: absolute
  top: 414px

.icon-buttons-2
  height: 35px
  width: 35px

.textbox-container
  align-items: flex-start
  display: flex
  height: 40px
  left: 0
  min-width: 300px
  position: absolute
  top: 0

.gyoyang-record-12-1.gyoyang-record-12 .icon-buttons-container
  top: 374px
</style>
