<template>
  <div class="view-35">
    <div class="cart-5">
      <div class="text_label-7 valign-text-middle notosanskr-normal-white-12px">{{ text_Label }}</div>
    </div>
    <cart2 :text_Label="cart21Props.text_Label" />
    <cart2 :text_Label="cart22Props.text_Label" />
    <cart2 :text_Label="cart23Props.text_Label" :className="cart23Props.className" />
    <cart2 :text_Label="cart24Props.text_Label" :className="cart24Props.className" />
  </div>
</template>

<script>
import Cart2 from "./Cart2";
export default {
  name: "C03cEk",
  components: {
    Cart2,
  },
  props: ["text_Label", "cart21Props", "cart22Props", "cart23Props", "cart24Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-35
  align-items: flex-start
  background-color: $lily
  border-bottom-style: solid
  border-bottom-width: 3px
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-right-style: solid
  border-right-width: 3px
  display: flex
  height: 50px
  position: relative
  width: 400px

.cart-5
  align-items: center
  border: 4px solid
  border-color: $white
  border-radius: 5px
  display: flex
  height: 54px
  justify-content: center
  margin-bottom: -2.00px
  margin-left: -2.00px
  margin-top: -2.00px
  width: 164px

.text_label-7
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
</style>
