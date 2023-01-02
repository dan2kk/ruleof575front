<template>
  <div class="gyoyang-table-cart-4">
    <textbox6 :titleText="textboxProps.titleText" />
    <gyoyang-record
      :iconButtons1="gyoyangRecord1Props.iconButtons1"
      :iconButtons2="gyoyangRecord1Props.iconButtons2"
      :textbox21Props="gyoyangRecord1Props.textbox21Props"
      :textbox22Props="gyoyangRecord1Props.textbox22Props"
      :textbox23Props="gyoyangRecord1Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord2Props.iconButtons1"
      :iconButtons2="gyoyangRecord2Props.iconButtons2"
      :textbox21Props="gyoyangRecord2Props.textbox21Props"
      :textbox22Props="gyoyangRecord2Props.textbox22Props"
      :textbox23Props="gyoyangRecord2Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord3Props.iconButtons1"
      :iconButtons2="gyoyangRecord3Props.iconButtons2"
      :textbox21Props="gyoyangRecord3Props.textbox21Props"
      :textbox22Props="gyoyangRecord3Props.textbox22Props"
      :textbox23Props="gyoyangRecord3Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord4Props.iconButtons1"
      :iconButtons2="gyoyangRecord4Props.iconButtons2"
      :textbox21Props="gyoyangRecord4Props.textbox21Props"
      :textbox22Props="gyoyangRecord4Props.textbox22Props"
      :textbox23Props="gyoyangRecord4Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord5Props.iconButtons1"
      :iconButtons2="gyoyangRecord5Props.iconButtons2"
      :textbox21Props="gyoyangRecord5Props.textbox21Props"
      :textbox22Props="gyoyangRecord5Props.textbox22Props"
      :textbox23Props="gyoyangRecord5Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord6Props.iconButtons1"
      :iconButtons2="gyoyangRecord6Props.iconButtons2"
      :textbox21Props="gyoyangRecord6Props.textbox21Props"
      :textbox22Props="gyoyangRecord6Props.textbox22Props"
      :textbox23Props="gyoyangRecord6Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord7Props.iconButtons1"
      :iconButtons2="gyoyangRecord7Props.iconButtons2"
      :textbox21Props="gyoyangRecord7Props.textbox21Props"
      :textbox22Props="gyoyangRecord7Props.textbox22Props"
      :textbox23Props="gyoyangRecord7Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord8Props.iconButtons1"
      :iconButtons2="gyoyangRecord8Props.iconButtons2"
      :textbox21Props="gyoyangRecord8Props.textbox21Props"
      :textbox22Props="gyoyangRecord8Props.textbox22Props"
      :textbox23Props="gyoyangRecord8Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord9Props.iconButtons1"
      :iconButtons2="gyoyangRecord9Props.iconButtons2"
      :textbox21Props="gyoyangRecord9Props.textbox21Props"
      :textbox22Props="gyoyangRecord9Props.textbox22Props"
      :textbox23Props="gyoyangRecord9Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord10Props.iconButtons1"
      :iconButtons2="gyoyangRecord10Props.iconButtons2"
      :className="gyoyangRecord10Props.className"
      :textbox21Props="gyoyangRecord10Props.textbox21Props"
      :textbox22Props="gyoyangRecord10Props.textbox22Props"
      :textbox23Props="gyoyangRecord10Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord11Props.iconButtons1"
      :iconButtons2="gyoyangRecord11Props.iconButtons2"
      :className="gyoyangRecord11Props.className"
      :textbox21Props="gyoyangRecord11Props.textbox21Props"
      :textbox22Props="gyoyangRecord11Props.textbox22Props"
      :textbox23Props="gyoyangRecord11Props.textbox23Props"
    />
    <gyoyang-record
      :iconButtons1="gyoyangRecord12Props.iconButtons1"
      :iconButtons2="gyoyangRecord12Props.iconButtons2"
      :className="gyoyangRecord12Props.className"
      :textbox21Props="gyoyangRecord12Props.textbox21Props"
      :textbox22Props="gyoyangRecord12Props.textbox22Props"
      :textbox23Props="gyoyangRecord12Props.textbox23Props"
    />
    <gyoyang-record2
      :textbox21Props="gyoyangRecord21Props.textbox21Props"
      :textbox22Props="gyoyangRecord21Props.textbox22Props"
      :textbox23Props="gyoyangRecord21Props.textbox23Props"
    />
    <gyoyang-record2
      :className="gyoyangRecord22Props.className"
      :textbox21Props="gyoyangRecord22Props.textbox21Props"
      :textbox22Props="gyoyangRecord22Props.textbox22Props"
      :textbox23Props="gyoyangRecord22Props.textbox23Props"
    />
  </div>
</template>

<script>
import Textbox6 from "./Textbox6";
import GyoyangRecord from "./GyoyangRecord";
import GyoyangRecord2 from "./GyoyangRecord2";
export default {
  name: "GyoyangTable",
  components: {
    Textbox6,
    GyoyangRecord,
    GyoyangRecord2,
  },
  props: [
    "textboxProps",
    "gyoyangRecord1Props",
    "gyoyangRecord2Props",
    "gyoyangRecord3Props",
    "gyoyangRecord4Props",
    "gyoyangRecord5Props",
    "gyoyangRecord6Props",
    "gyoyangRecord7Props",
    "gyoyangRecord8Props",
    "gyoyangRecord9Props",
    "gyoyangRecord10Props",
    "gyoyangRecord11Props",
    "gyoyangRecord12Props",
    "gyoyangRecord21Props",
    "gyoyangRecord22Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.gyoyang-table-cart-4::-webkit-scrollbar
  display: none
  width: 0

.gyoyang-table-cart-4
  align-items: center
  background-color: $solitude
  border-left-style: solid
  border-left-width: 3px
  display: flex
  flex-direction: column
  height: 510px
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
</style>
