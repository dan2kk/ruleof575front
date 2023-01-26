<template>
  <div :style= "setStyle" :class= "[`l-menu-text-box`, size || ``]">
    <div class="l-menu-text-box-text valign-text-middle notosanskr-normal-black-14px">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoTextBox",
  props: ["text", "size"],
  computed:{
    setStyle(){
      let size
      if (this.size == undefined) size = "150"
      else size = this.size
      return {
        '--size' : `${size}px`,
      }
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.l-menu-text-box
  align-items: flex-start
  display: flex
  height: 48px
  position: relative
  width: var(--size)
  background-color: $bon-jour
  border: 1px white solid
  border-radius: 7px


.l-menu-text-box-text
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  text-align: center
</style>
