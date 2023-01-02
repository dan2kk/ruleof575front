<template>
  <div class="cart screen">
    <user-info-box :className="timetableProps.className" />
    <timetable
      :className="timetableProps2.className"
      :timeline1Props="timetableProps2.timeline1Props"
      :timeline2Props="timetableProps2.timeline2Props"
      :timeline3Props="timetableProps2.timeline3Props"
      :timeline4Props="timetableProps2.timeline4Props"
      :timeline5Props="timetableProps2.timeline5Props"
      :timeline6Props="timetableProps2.timeline6Props"
    />
  </div>
</template>

<script>
import UserInfoBox from "./UserInfoBox";
import Timetable from "./Timetable";
export default {
  name: "Cart3",
  components: {
    UserInfoBox,
    Timetable,
  },
  props: ["timetableProps", "timetableProps2"],
};
</script>

<style lang="sass">
@import '../../variables'

.cart
  align-items: flex-start
  background-color: $bon-jour
  border: 1px none
  display: flex
  flex-direction: column
  height: 100vh
  min-height: 600px
  min-width: 400px
  position: relative
  width: 100%
</style>
