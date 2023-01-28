<template>
  <div :style= "setStyle" :class= "[`l-menu-text-box`, size || ``, color || ``]">
    <div class="l-menu-text-box-text valign-text-middle">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoTextBox",
  props: ["text", "size", "color"],
  computed:{
    setStyle(){
      let size
      let color
      if (this.size == undefined) size = "150px"
        else size = this.size

      if (this.color == undefined) color = "black"
      else color = this.color
      return {
        '--size' : `${size}px`,
        '--color' : `${color}`
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
  color: var(--color)
  font-family: "Noto Sans KR", Helvetica
  font-size: 14px
  font-style: normal
  font-weight: 400
</style>
