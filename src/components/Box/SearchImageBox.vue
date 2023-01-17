<template>
  <div :class="[`image-box-search`, boxStyle || ``]">
    <div class="image-box-search-cart">
      <img class="image-box-search-btn" :src="src" alt="IconButtons"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBoxSearch",
  props: ["src", "boxStyle"],
};
</script>

<style lang="sass">
@import '../../variables'

.image-box-search
  align-items: center
  display: flex
  height: 40px
  width: 50px

.image-box-search.red
  background-color: $pippin

.image-box-search.blue
  background-color: $solitude

.image-box-search-cart
  align-items: center
  display: flex
  flex: 1
  height: 40px
  justify-content: center
  width: 50px
  border: 1px solid
  border-color: $white

.image-box-search-btn
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease

.image-box-search-btn:hover
  transform: scale(1.1)
</style>