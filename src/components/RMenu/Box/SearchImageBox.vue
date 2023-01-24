  <template>
  <div :style="setStyle" :class="[`search-image-box`, color || ``]">
    <div class="search-image-box-cart">
      <img class="search-image-box-btn" :src="src" alt="IconButtons"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBoxSearch",
  props: ["src", "color"],
  computed:{
    setStyle(){
      let color
      switch(this.color)
      {
        case "red":
          color = `#ffe0de`
          break;
        case "blue":
          color = `#e8f0ff`
          break;
        case "yellow":
          color = `#ffefc6`
          break;
        case "purple":
          color = `#ffe7fb`
          break;
        case "green":
          color = `#CCFFE4`
          break;
        default:
          color = this.color
          break;
      }
      return {
        '--color' : color
      }
    }
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.search-image-box
  align-items: center
  display: flex
  height: 40px
  width: 50px
  background-color: var(--color)

.search-image-box-cart
  align-items: center
  display: flex
  flex: 1
  height: 40px
  justify-content: center
  width: 50px
  border: 1px solid
  border-color: $white

.search-image-box-btn
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease

.search-image-box-btn:hover
  transform: scale(1.1)
</style>