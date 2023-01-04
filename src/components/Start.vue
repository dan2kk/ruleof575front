<template>
  <div class="start screen">
    <user-info-time-table
      :className="userInfoTimeTableProps.className"
      :userInfoBoxProps="userInfoTimeTableProps.userInfoBoxProps"
      :timetableProps="userInfoTimeTableProps.timetableProps"
    />
    <x-menu 
      :textboxMenuTabProps="xMenuProps.textboxMenuTabProps" 
      :initialMenuProps="xMenuProps.initialMenuProps"
      :graduationInfoTableProps="xMenuProps.graduationInfoTableProps" 
      :gyoyangTableProps="xMenuProps.gyoyangTableProps" 
      :courseListTableProps="xMenuProps.courseListTableProps"  />
  </div>
</template>

<script>
import UserInfoTimeTable from "./UserInfoTimeTable";
import XMenu from "./XMenu";
export default {
  name: "Start",
  components: {
    UserInfoTimeTable,
    XMenu,
  },
  props: ["userInfoTimeTableProps", "xMenuProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.start
  align-items: flex-start
  background-color: $white
  border: 1px none
  display: flex
  height: 100vh
  min-height: 600px
  min-width: 800px
  position: relative
  width: 100%
</style>
