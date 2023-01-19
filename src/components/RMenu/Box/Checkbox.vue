<template>
  <div class = "checkbox-cart">
    <label class="container">
      <input checked="checked" type="checkbox">
      <span class="checkmark"></span>
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
  display: flex
  flex-direction: column
  border-color: white
  border-radius: 1px
  background-color: $pigeon-post
  padding-top: 7px

.container 
  display: block 
  position: relative 
  padding-left: 25px
  cursor: pointer 
  font-size: 22px 
  user-select: none 
  input 
    position: absolute 
    opacity: 0 
    cursor: pointer 
    height: 0 
    width: 0 
    &:checked 
      & ~ .checkmark 
        background-color: #2196F3 
        border-radius: 5px
        &:after 
          display: block 
.checkmark 
  &:after 
    left: 9px 
    top: 5px 
    width: 5px 
    height: 10px 
    border: solid white 
    border-width: 0 3px 3px 0 
    transform: rotate(45deg) 
.checkmark 
  position: absolute 
  top: 0 
  left: 0 
  height: 25px 
  width: 25px 
  background-color: #ccc 
  border-radius: 5px
  &:after 
    content: "" 
    position: absolute 
    display: none 


</style>