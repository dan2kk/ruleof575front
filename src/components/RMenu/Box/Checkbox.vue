<template>
  <div class = "checkbox-cart">
    <label class="container">
      <input checked="checked" type="checkbox">
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
  display: flex
  flex-direction: column
  border-color: white
  border-radius: 1px
  background-color: $pigeon-post

.container 
  position: relative 
  cursor: pointer 
  font-size: 15px 
  width: 2em 
  height: 2em 
  user-select: none 
  border: 5px solid
  border-color: #47da99
  border-radius: 5px
  input 
    position: absolute 
    opacity: 0 
    cursor: pointer 
    height: 0 
    width: 0 
    &:checked 
      & ~ .checkmark 
        &:after 
          transform: scale(1) 
.checkmark 
  position: absolute 
  top: 0 
  left: 0 
  width: 100% 
  height: 100% 
  &:after 
    content: '' 
    position: absolute 
    top: 25% 
    left: 25% 
    background-color: #47da99 
    border-radius:1px
    width: 50% 
    height: 50% 
    transform: scale(0) 
    transition: .1s ease 

</style>