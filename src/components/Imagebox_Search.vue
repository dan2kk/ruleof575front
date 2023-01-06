<template>
  <div :class="[`textbox4-2-1`, className || ``]">
    <div class="cart-2"><img class="icon-buttons-1-1" :src="src" alt="IconButtons" /></div>
  </div>
</template>

<script>
export default {
  name: "Imagebox_Search",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.textbox4-2-1
  align-items: center
  background-color: $pippin
  border: 1px solid
  border-color: $white
  display: flex
  height: 40px
  width: 50px
.textbox4-2-1.blue
  background-color: $solitude

.cart-2
  align-items: center
  border-radius: 5px
  display: flex
  flex: 1
  height: 40px
  justify-content: center
  width: 50px

.icon-buttons-1-1
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease

.icon-buttons-1-1:hover
  transform: scale(1.1)

.textbox4-2-1.textbox5,
.textbox4-2-1.textbox5-1,
.textbox4-2-1.textbox5-10,
.textbox4-2-1.textbox5-11,
.textbox4-2-1.textbox5-12,
.textbox4-2-1.textbox5-2,
.textbox4-2-1.textbox5-3,
.textbox4-2-1.textbox5-4,
.textbox4-2-1.textbox5-5,
.textbox4-2-1.textbox5-6,
.textbox4-2-1.textbox5-7,
.textbox4-2-1.textbox5-8,
.textbox4-2-1.textbox5-9
  align-items: center
  flex-direction: column
  height: 40px
  justify-content: center
  min-width: unset
  width: 50px

.textbox4-2-1.textbox5-1 .cart-2,
.textbox4-2-1.textbox5-2 .cart-2,
.textbox4-2-1.textbox5-3 .cart-2,
.textbox4-2-1.textbox5-4 .cart-2,
.textbox4-2-1.textbox5-5 .cart-2,
.textbox4-2-1.textbox5-6 .cart-2,
.textbox4-2-1.textbox5-7 .cart-2,
.textbox4-2-1.textbox5-8 .cart-2,
.textbox4-2-1.textbox5-9 .cart-2,
.textbox4-2-1.textbox5-10 .cart-2,
.textbox4-2-1.textbox5-11 .cart-2,
.textbox4-2-1.textbox5-12 .cart-2,
.textbox4-2-1.textbox5 .cart-2
  flex: unset

.textbox4-2-1.textbox5-1 .icon-buttons-1,
.textbox4-2-1.textbox5-2 .icon-buttons-1,
.textbox4-2-1.textbox5-3 .icon-buttons-1,
.textbox4-2-1.textbox5-4 .icon-buttons-1,
.textbox4-2-1.textbox5-5 .icon-buttons-1,
.textbox4-2-1.textbox5-6 .icon-buttons-1,
.textbox4-2-1.textbox5-7 .icon-buttons-1,
.textbox4-2-1.textbox5-8 .icon-buttons-1,
.textbox4-2-1.textbox5-9 .icon-buttons-1,
.textbox4-2-1.textbox5-10 .icon-buttons-1,
.textbox4-2-1.textbox5-11 .icon-buttons-1,
.textbox4-2-1.textbox5-12 .icon-buttons-1
  cursor: unset
  display: block
  opacity: 0
  transform: scale(1.1)
  transition: unset

.icon-buttons-1-2.animate-enter
  animation: animate-enter-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-3.animate-enter1
  animation: animate-enter1-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-4.animate-enter2
  animation: animate-enter2-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-5.animate-enter3
  animation: animate-enter3-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-6.animate-enter4
  animation: animate-enter4-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-7.animate-enter5
  animation: animate-enter5-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-8.animate-enter6
  animation: animate-enter6-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-9.animate-enter7
  animation: animate-enter7-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-10.animate-enter8
  animation: animate-enter8-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-11.animate-enter9
  animation: animate-enter9-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-12.animate-enter10
  animation: animate-enter10-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.icon-buttons-1-13.animate-enter11
  animation: animate-enter11-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

.textbox4-2-1.textbox4-2 .icon-buttons-1-14
  height: 17.5px

.textbox4-2-1.textbox5 .icon-buttons-1-15
  cursor: unset
  display: block
  height: 17.5px
  opacity: 0
  transform: scale(1.1)
  transition: unset

.icon-buttons-1-15.animate-enter12
  animation: animate-enter12-frames 0.20s ease-in-out 0.00s 1 normal forwards
  display: block
  opacity: 0
  transform: scale(1.1)

@keyframes animate-enter1-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter9-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter8-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter2-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter11-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter6-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter5-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter7-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter10-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter12-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter4-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)


@keyframes animate-enter3-frames
  fromopacity: 0
  transform: scale(1.1)
  toopacity: 1
  transform: scale(1)
</style>
