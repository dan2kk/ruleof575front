<template>
  <div :class="[`gyoyang-record-1-1`, className || ``]">
    <div class="flex-row-1">
      <textbox2 :text="textbox21Props.text" />
      <textbox2 :text="textbox22Props.text" :className="textbox22Props.className" />
      <textbox2 :text="textbox23Props.text" :className="textbox23Props.className" />
      <imagebox_Search :src="imagebox_Add1Props.src" :className="imagebox_Add1Props.className" />
      <imagebox_Search :src="imagebox_SearchProps.src" :className="imagebox_SearchProps.className" />
    </div>
  </div>
</template>

<script>
import Textbox2 from "./Textbox2";
import Imagebox_Search from "./Imagebox_Search";
export default {
  name: "GyoyangRecord",
  components: {
    Textbox2,
    Imagebox_Search
  },
  props: ["className", "textbox21Props", "textbox22Props", "textbox23Props", "imagebox_Add1Props", "imagebox_SearchProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.gyoyang-record-1-1
  background-color: $solitude
  border: 1px solid
  border-color: $white
  height: 40px
  min-width: 400px

.flex-row-1
  align-items: center
  display: flex
  height: 40px
  min-width: 394px
  position: relative

.icon-buttons1-1
  cursor: pointer
  height: 35px
  margin-bottom: 1.0px
  margin-left: 9px
  transition: all 0.2s ease
  width: 35px
  
.icon-buttons1-1:hover,
.icon-buttons2-1:hover
  transform: scale(1.1)

.icon-buttons2-1
  cursor: pointer
  height: 35px
  margin-bottom: 1.0px
  margin-left: 9px
  transition: all 0.2s ease
  width: 35px

.icon-buttons2-1.animate-enter13
  animation: animate-enter13-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-2.animate-enter14
  animation: animate-enter14-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-3.animate-enter15
  animation: animate-enter15-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-4.animate-enter16
  animation: animate-enter16-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-5.animate-enter17
  animation: animate-enter17-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-6.animate-enter18
  animation: animate-enter18-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-7.animate-enter19
  animation: animate-enter19-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-8.animate-enter20
  animation: animate-enter20-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-9.animate-enter21
  animation: animate-enter21-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-10.animate-enter22
  animation: animate-enter22-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons2-11.animate-enter23
  animation: animate-enter23-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.gyoyang-record-1-1.gyoyang-record-1 .flex-row-1
  align-items: flex-start

.gyoyang-record-1-1.gyoyang-record-1 .icon-buttons1,
.gyoyang-record-1-1.gyoyang-record-1 .icon-buttons2
  height: 18px
  margin-bottom: unset
  margin-top: 2px

.icon-buttons2-12.animate-enter24
  animation: animate-enter24-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

@keyframes animate-enter14-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter16-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter17-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter19-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter21-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter23-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter15-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter18-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter24-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter22-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter13-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter20-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)
</style>
