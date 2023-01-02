<template>
  <div class="property-1-2">
    <div class="cart-6">
      <view
        :className="viewProps.className"
        :view51Props="viewProps.view51Props"
        :view52Props="viewProps.view52Props"
        :view53Props="viewProps.view53Props"
        :view54Props="viewProps.view54Props"
      />
      <graduation-info-record
        :textbox31Props="graduationInfoRecordProps.textbox31Props"
        :textbox32Props="graduationInfoRecordProps.textbox32Props"
        :textbox33Props="graduationInfoRecordProps.textbox33Props"
        :textbox34Props="graduationInfoRecordProps.textbox34Props"
        :textbox35Props="graduationInfoRecordProps.textbox35Props"
        :textbox36Props="graduationInfoRecordProps.textbox36Props"
      />
      <graduation-info-table v-bind="graduationInfoTableProps" />
    </div>
  </div>
</template>

<script>
import View from "./View";
import GraduationInfoRecord from "./GraduationInfoRecord";
import GraduationInfoTable from "./GraduationInfoTable";
export default {
  name: "XMenu5",
  components: {
    View,
    GraduationInfoRecord,
    GraduationInfoTable,
  },
  props: ["viewProps", "graduationInfoRecordProps", "graduationInfoTableProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.property-1-2
  align-items: center
  border: 2px solid
  border-color: $white
  display: flex
  justify-content: center
  margin-top: 37px
  width: 400px

.cart-6
  align-items: center
  background-color: #ffe6fb
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px
</style>
