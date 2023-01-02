<template>
  <div class="container-center-horizontal">
    <div class="start screen">
      <x3e-h-zw8 :className="mEH9rYProps.className" :cartProps="mEH9rYProps.cartProps" />
      <x0rp-scv
        :kZBDE81Props="x0rpScvProps.kZBDE81Props"
        :kZBDE82Props="x0rpScvProps.kZBDE82Props"
        :kZBDE83Props="x0rpScvProps.kZBDE83Props"
        :kZBDE84Props="x0rpScvProps.kZBDE84Props"
        :kZBDE85Props="x0rpScvProps.kZBDE85Props"
        :kZBDE86Props="x0rpScvProps.kZBDE86Props"
      />
      <div class="view-38">
        <div class="text_label-11 valign-text-middle notosanskr-normal-white-12px">{{ text_Label }}</div>
      </div>
      <dp9-q-az
        :c7Ey0G1Props="dP9QAzProps.c7Ey0G1Props"
        :c7Ey0G2Props="dP9QAzProps.c7Ey0G2Props"
        :c7Ey0G3Props="dP9QAzProps.c7Ey0G3Props"
        :c7Ey0G4Props="dP9QAzProps.c7Ey0G4Props"
      />
    </div>
  </div>
</template>

<script>
import X3eHZw8 from "./X3eHZw8";
import X0rpScv from "./X0rpScv";
import Dp9QAz from "./Dp9QAz";
export default {
  name: "Start",
  components: {
    X3eHZw8,
    X0rpScv,
    Dp9QAz,
  },
  props: ["text_Label", "mEH9rYProps", "x0rpScvProps", "dP9QAzProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.start
  background-color: $white
  border: 1px none
  height: 600px
  overflow: hidden
  position: relative
  width: 800px

.view-38
  align-items: center
  background-color: $geraldine
  display: flex
  justify-content: center
  left: 0
  position: absolute
  top: 0
  width: 100px

.text_label-11
  flex: 1
  height: 40px
  letter-spacing: 0
  line-height: normal
  text-align: center
</style>
