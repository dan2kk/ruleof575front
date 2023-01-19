  <template>
  <div :class="[`search-image-box`, color || ``]">
    <div class="search-image-box-cart">
      <img class="search-image-box-btn" :src="src" alt="IconButtons"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBoxSearch",
  props: ["src", "color"],
};
</script>

<style lang="sass">
@import '../../../../variables'

.search-image-box
  align-items: center
  display: flex
  height: 40px
  width: 50px

.search-image-box.red
  background-color: $pippin

.search-image-box.blue
  background-color: $solitude

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