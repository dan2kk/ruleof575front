<template>
  <div class="container-center-horizontal">
    <div class="menyu screen">
      <x3e-h-zw8 :cartProps="x3eHZw8Props.cartProps" />
      <ql-pzu1 :viewProps="qlPzu1Props.viewProps" :view3Props="qlPzu1Props.view3Props" />
      <f-ed-z7v :viewProps="fEdZ7vProps.viewProps" />
      <nso1-ch v-bind="nso1ChProps" />
      <x1dh-srz :viewProps="x1dhSRZProps.viewProps" :view3Props="x1dhSRZProps.view3Props" />
    </div>
  </div>
</template>

<script>
import X3eHZw8 from "./X3eHZw8";
import QlPzu1 from "./QlPzu1";
import FEdZ7v from "./FEdZ7v";
import Nso1Ch from "./Nso1Ch";
import X1dhSrz from "./X1dhSrz";
export default {
  name: "Screen3",
  components: {
    X3eHZw8,
    QlPzu1,
    FEdZ7v,
    Nso1Ch,
    X1dhSrz,
  },
  props: ["x3eHZw8Props", "qlPzu1Props", "fEdZ7vProps", "nso1ChProps", "x1dhSRZProps"],
};
</script>

<style lang="sass">
.menyu
  align-items: center
  border: 1px dashed
  border-color: #9747ff
  display: flex
  flex-direction: column
  height: 3199px
  padding: 20px 0
  position: relative
  width: 440px
</style>
