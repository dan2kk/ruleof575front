<template>
  <div class="gyoyang-table-flex-col-1">
    <textbox32 />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord1Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord1Props.iconbuttons2"
      :textbox21Props="gyoyangRecord1Props.textbox21Props"
      :textbox22Props="gyoyangRecord1Props.textbox22Props"
      :textbox23Props="gyoyangRecord1Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord2Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord2Props.iconbuttons2"
      :className="gyoyangRecord2Props.className"
      :textbox21Props="gyoyangRecord2Props.textbox21Props"
      :textbox22Props="gyoyangRecord2Props.textbox22Props"
      :textbox23Props="gyoyangRecord2Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord3Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord3Props.iconbuttons2"
      :className="gyoyangRecord3Props.className"
      :textbox21Props="gyoyangRecord3Props.textbox21Props"
      :textbox22Props="gyoyangRecord3Props.textbox22Props"
      :textbox23Props="gyoyangRecord3Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord4Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord4Props.iconbuttons2"
      :className="gyoyangRecord4Props.className"
      :textbox21Props="gyoyangRecord4Props.textbox21Props"
      :textbox22Props="gyoyangRecord4Props.textbox22Props"
      :textbox23Props="gyoyangRecord4Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord5Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord5Props.iconbuttons2"
      :className="gyoyangRecord5Props.className"
      :textbox21Props="gyoyangRecord5Props.textbox21Props"
      :textbox22Props="gyoyangRecord5Props.textbox22Props"
      :textbox23Props="gyoyangRecord5Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord6Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord6Props.iconbuttons2"
      :className="gyoyangRecord6Props.className"
      :textbox21Props="gyoyangRecord6Props.textbox21Props"
      :textbox22Props="gyoyangRecord6Props.textbox22Props"
      :textbox23Props="gyoyangRecord6Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord7Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord7Props.iconbuttons2"
      :className="gyoyangRecord7Props.className"
      :textbox21Props="gyoyangRecord7Props.textbox21Props"
      :textbox22Props="gyoyangRecord7Props.textbox22Props"
      :textbox23Props="gyoyangRecord7Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord8Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord8Props.iconbuttons2"
      :className="gyoyangRecord8Props.className"
      :textbox21Props="gyoyangRecord8Props.textbox21Props"
      :textbox22Props="gyoyangRecord8Props.textbox22Props"
      :textbox23Props="gyoyangRecord8Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord9Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord9Props.iconbuttons2"
      :className="gyoyangRecord9Props.className"
      :textbox21Props="gyoyangRecord9Props.textbox21Props"
      :textbox22Props="gyoyangRecord9Props.textbox22Props"
      :textbox23Props="gyoyangRecord9Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord10Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord10Props.iconbuttons2"
      :className="gyoyangRecord10Props.className"
      :textbox21Props="gyoyangRecord10Props.textbox21Props"
      :textbox22Props="gyoyangRecord10Props.textbox22Props"
      :textbox23Props="gyoyangRecord10Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord11Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord11Props.iconbuttons2"
      :className="gyoyangRecord11Props.className"
      :textbox21Props="gyoyangRecord11Props.textbox21Props"
      :textbox22Props="gyoyangRecord11Props.textbox22Props"
      :textbox23Props="gyoyangRecord11Props.textbox23Props"
    />
    <gyoyang-record
      :iconbuttons1="gyoyangRecord12Props.iconbuttons1"
      :iconbuttons2="gyoyangRecord12Props.iconbuttons2"
      :className="gyoyangRecord12Props.className"
      :textbox21Props="gyoyangRecord12Props.textbox21Props"
      :textbox22Props="gyoyangRecord12Props.textbox22Props"
      :textbox23Props="gyoyangRecord12Props.textbox23Props"
    />
    <gyoyang-record2
      :iconbuttons1="gyoyangRecord2Props2.iconbuttons1"
      :iconbuttons2="gyoyangRecord2Props2.iconbuttons2"
      :textbox21Props="gyoyangRecord2Props2.textbox21Props"
      :textbox22Props="gyoyangRecord2Props2.textbox22Props"
      :textbox23Props="gyoyangRecord2Props2.textbox23Props"
    />
    <gyoyang-record3
      :iconbuttons1="gyoyangRecord3Props2.iconbuttons1"
      :iconbuttons2="gyoyangRecord3Props2.iconbuttons2"
      :textbox21Props="gyoyangRecord3Props2.textbox21Props"
      :textbox22Props="gyoyangRecord3Props2.textbox22Props"
      :textbox23Props="gyoyangRecord3Props2.textbox23Props"
    />
  </div>
</template>

<script>
import Textbox32 from "./Textbox32";
import GyoyangRecord from "./GyoyangRecord";
import GyoyangRecord2 from "./GyoyangRecord2";
import GyoyangRecord3 from "./GyoyangRecord3";
export default {
  name: "GyoyangTable",
  components: {
    Textbox32,
    GyoyangRecord,
    GyoyangRecord2,
    GyoyangRecord3,
  },
  props: [
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
    "gyoyangRecord2Props2",
    "gyoyangRecord3Props2",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.gyoyang-table-flex-col-1::-webkit-scrollbar
  display: none
  width: 0

.gyoyang-table-flex-col-1
  align-items: center
  background-color: $solitude
  border-left-style: solid
  border-left-width: 3px
  display: flex
  flex-direction: column
  height: 500px
  margin-left: 3.0px
  margin-top: 77px
  overflow: hidden
  overflow-y: scroll
  position: relative
  width: 400px
</style>
