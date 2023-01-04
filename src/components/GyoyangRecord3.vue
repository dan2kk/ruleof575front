<template>
  <div class="gyoyang-record-3">
    <div class="iconbuttons-container-1">
      <img class="icon-buttons1-2-iconbuttons-container-1" :src="iconbuttons1" alt="IconButtons1" /><img
        class="icon-buttons2-2-iconbuttons-container-1 animate-enter26"
        :src="iconbuttons2"
        alt="IconButtons2"
      />
    </div>
    <div class="textbox-container-1">
      <textbox2 :text="textbox21Props.text" />
      <textbox2 :text="textbox22Props.text" :className="textbox22Props.className" />
      <textbox2 :text="textbox23Props.text" :className="textbox23Props.className" />
    </div>
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
export default {
  name: "GyoyangRecord3",
  components: {
    Textbox2,
  },
  props: ["iconbuttons1", "iconbuttons2", "textbox21Props", "textbox22Props", "textbox23Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.gyoyang-record-3
  background-color: $solitude
  border: 3px solid
  border-color: $white
  height: 40px
  min-width: 400px
  overflow: hidden
  position: relative

.iconbuttons-container-1
  align-items: flex-start
  display: flex
  gap: 15px
  height: 35px
  left: -117px
  min-width: 85px
  position: absolute
  top: 391px

.icon-buttons1-2-iconbuttons-container-1
  cursor: pointer
  height: 35px
  transition: all 0.2s ease
  width: 35px

.icon-buttons1-2-iconbuttons-container-1:hover
  transform: scale(1.1)

.icon-buttons2-2-iconbuttons-container-1
  display: block
  height: 35px
  opacity: 0
  transform: scale(1.1)
  width: 35px

.icon-buttons2-2-iconbuttons-container-1.animate-enter26
  animation: animate-enter26-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.textbox-container-1
  align-items: flex-start
  display: flex
  height: 40px
  left: 0
  min-width: 300px
  position: absolute
  top: 0

@keyframes animate-enter26-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)
</style>
