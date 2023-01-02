<template>
  <div class="property-1-2">
    <div class="cart-4">
      <view
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <div class="view-34-cart-4">
        <c03c-ek
          :text_Label="c03cEkProps.text_Label"
          :cart21Props="c03cEkProps.cart21Props"
          :cart22Props="c03cEkProps.cart22Props"
          :cart23Props="c03cEkProps.cart23Props"
          :cart24Props="c03cEkProps.cart24Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O1Props.text_Label"
          :cart31Props="acdZ5O1Props.cart31Props"
          :cart32Props="acdZ5O1Props.cart32Props"
          :cart33Props="acdZ5O1Props.cart33Props"
          :cart34Props="acdZ5O1Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O2Props.text_Label"
          :cart31Props="acdZ5O2Props.cart31Props"
          :cart32Props="acdZ5O2Props.cart32Props"
          :cart33Props="acdZ5O2Props.cart33Props"
          :cart34Props="acdZ5O2Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O3Props.text_Label"
          :cart31Props="acdZ5O3Props.cart31Props"
          :cart32Props="acdZ5O3Props.cart32Props"
          :cart33Props="acdZ5O3Props.cart33Props"
          :cart34Props="acdZ5O3Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O4Props.text_Label"
          :cart31Props="acdZ5O4Props.cart31Props"
          :cart32Props="acdZ5O4Props.cart32Props"
          :cart33Props="acdZ5O4Props.cart33Props"
          :cart34Props="acdZ5O4Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O5Props.text_Label"
          :cart31Props="acdZ5O5Props.cart31Props"
          :cart32Props="acdZ5O5Props.cart32Props"
          :cart33Props="acdZ5O5Props.cart33Props"
          :cart34Props="acdZ5O5Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O6Props.text_Label"
          :cart31Props="acdZ5O6Props.cart31Props"
          :cart32Props="acdZ5O6Props.cart32Props"
          :cart33Props="acdZ5O6Props.cart33Props"
          :cart34Props="acdZ5O6Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O7Props.text_Label"
          :cart31Props="acdZ5O7Props.cart31Props"
          :cart32Props="acdZ5O7Props.cart32Props"
          :cart33Props="acdZ5O7Props.cart33Props"
          :cart34Props="acdZ5O7Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O8Props.text_Label"
          :cart31Props="acdZ5O8Props.cart31Props"
          :cart32Props="acdZ5O8Props.cart32Props"
          :cart33Props="acdZ5O8Props.cart33Props"
          :cart34Props="acdZ5O8Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O9Props.text_Label"
          :cart31Props="acdZ5O9Props.cart31Props"
          :cart32Props="acdZ5O9Props.cart32Props"
          :cart33Props="acdZ5O9Props.cart33Props"
          :cart34Props="acdZ5O9Props.cart34Props"
        />
        <acd-z5-o
          :text_Label="acdZ5O10Props.text_Label"
          :cart31Props="acdZ5O10Props.cart31Props"
          :cart32Props="acdZ5O10Props.cart32Props"
          :cart33Props="acdZ5O10Props.cart33Props"
          :cart34Props="acdZ5O10Props.cart34Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import View from "./View";
import C03cEk from "./C03cEk";
import AcdZ5O from "./AcdZ5O";
export default {
  name: "Nso1Ch",
  components: {
    View,
    C03cEk,
    AcdZ5O,
  },
  props: [
    "viewProps",
    "c03cEkProps",
    "acdZ5O1Props",
    "acdZ5O2Props",
    "acdZ5O3Props",
    "acdZ5O4Props",
    "acdZ5O5Props",
    "acdZ5O6Props",
    "acdZ5O7Props",
    "acdZ5O8Props",
    "acdZ5O9Props",
    "acdZ5O10Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-2
  align-items: flex-start
  border: 2px solid
  border-color: $white
  display: flex
  height: 600px
  margin-top: 37px
  width: 400px

.cart-4
  align-items: flex-start
  background-color: #ffe6fb
  display: flex
  flex-direction: column
  min-height: 600px
  position: relative
  width: 400px

.view-34-cart-4::-webkit-scrollbar
  display: none
  width: 0

.view-34-cart-4
  align-items: center
  background-color: $tutu
  display: flex
  flex-direction: column
  height: 550px
  justify-content: center
  overflow-x: scroll
  position: relative
  width: 400px
</style>
