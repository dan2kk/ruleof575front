<template>
  <div class="view-36">
    <div class="cart-9">
      <div class="text_label-9 valign-text-middle notosanskr-normal-black-12px">{{ text_Label }}</div>
    </div>
    <cart3 :text_Label="cart31Props.text_Label" />
    <cart3 :text_Label="cart32Props.text_Label" />
    <cart3 :text_Label="cart33Props.text_Label" :className="cart33Props.className" />
    <cart3 :text_Label="cart34Props.text_Label" :className="cart34Props.className" />
  </div>
</template>

<script>
import Cart3 from "./Cart3";
export default {
  name: "AcdZ5O",
  components: {
    Cart3,
  },
  props: ["text_Label", "cart31Props", "cart32Props", "cart33Props", "cart34Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-36
  align-items: flex-start
  background-color: $tutu
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

.cart-9
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

.text_label-9
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
</style>
