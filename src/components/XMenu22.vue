<template>
  <div class="container-center-horizontal">
    <div class="menu screen">
      <x-menu222 :viewProps="xMenu2Props.viewProps" />
      <x-menu3
        :viewProps="xMenu3Props.viewProps"
        :courseListRecordProps="xMenu3Props.courseListRecordProps"
        :gyoyangTableProps="xMenu3Props.gyoyangTableProps"
      />
      <x-menu4
        :viewProps="xMenu4Props.viewProps"
        :courseInfoRecordTMIInfoProps="xMenu4Props.courseInfoRecordTMIInfoProps"
      />
      <x-menu5
        :viewProps="xMenu5Props.viewProps"
        :graduationInfoRecordProps="xMenu5Props.graduationInfoRecordProps"
        :graduationInfoTableProps="xMenu5Props.graduationInfoTableProps"
      />
      <x-menu6
        :viewProps="xMenu6Props.viewProps"
        :courseListRecordProps="xMenu6Props.courseListRecordProps"
        :courseListTableProps="xMenu6Props.courseListTableProps"
      />
    </div>
  </div>
</template>

<script>
import XMenu222 from "./XMenu222";
import XMenu3 from "./XMenu3";
import XMenu4 from "./XMenu4";
import XMenu5 from "./XMenu5";
import XMenu6 from "./XMenu6";
export default {
  name: "XMenu22",
  components: {
    XMenu222,
    XMenu3,
    XMenu4,
    XMenu5,
    XMenu6,
  },
  props: ["xMenu2Props", "xMenu3Props", "xMenu4Props", "xMenu5Props", "xMenu6Props"],
};
</script>

<style lang="sass">
.menu
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
