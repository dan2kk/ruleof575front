<template>
  <div class = "checkbox-cart">
    <label class="container">
      <input type="checkbox" checked="checked">
      <div class="checkmark"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: [],
};
</script>

<style lang="sass">
@import '../../../../variables'
.checkbox-cart
  height: 40px
  width: 50px
  align-items: center
  border-color: white
  border-radius: 1px
  background-color: $pigeon-post

.container 
  display: block 
  position: relative 
  cursor: pointer 
  font-size: 20px 
  user-select: none 
  .input
    position: absolute 
    opacity: 0 
    cursor: pointer 
    height: 0 
    width: 0 
    &:checked 
      & ~ .checkmark 
      background-color: #47da99 
      animation: pop 0.5s 
      animation-direction: alternate 
      &:after 
        display: block 
  .checkmark 
    &:after 
      left: 0.45em 
      top: 0.25em 
      width: 0.25em 
      height: 0.5em 
      border: solid white 
      border-width: 0 0.15em 0.15em 0 
      transform: rotate(45deg) 
.checkmark 
  position: relative 
  top: 0 
  left: 0 
  height: 1.3em 
  width: 1.3em 
  background-color: #ccc 
  transition: all 0.3s 
  border-radius: 5px 
  &:after 
    content: "" 
    position: absolute 
    display: none 

@keyframes pop
  0%
    transform: scale(1) 
  50%
    transform: scale(0.9) 
  100% 
    transform: scale(1)

</style>