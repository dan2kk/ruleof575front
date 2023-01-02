<template>
  <div class="start screen">
    <div class="cart">
      <user-info-box />
      <timetable
        :timeline1Props="timetableProps.timeline1Props"
        :timeline2Props="timetableProps.timeline2Props"
        :timeline3Props="timetableProps.timeline3Props"
        :timeline4Props="timetableProps.timeline4Props"
        :timeline5Props="timetableProps.timeline5Props"
        :timeline6Props="timetableProps.timeline6Props"
      />
    </div>
    <x-menu :textboxMenuTabProps="xMenuProps.textboxMenuTabProps" />
  </div>
</template>

<script>
import UserInfoBox from "./UserInfoBox";
import Timetable from "./Timetable";
import XMenu from "./XMenu";
export default {
  name: "Start",
  components: {
    UserInfoBox,
    Timetable,
    XMenu,
  },
  props: ["timetableProps", "xMenuProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.start
  align-items: center
  background-color: $white
  border: 1px none
  display: flex
  height: 100vh
  min-height: 600px
  min-width: 800px
  position: relative
  width: 100%

.cart
  align-items: center
  background-color: $bon-jour
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px
</style>
