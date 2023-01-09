<template>
  <div :class="[`user-info-time-table`, className || ``]">
    <user-info-box
      :textbox1Props="userInfoBoxProps.textbox1Props"
      :textbox2Props="userInfoBoxProps.textbox2Props"
      :textbox3Props="userInfoBoxProps.textbox3Props"
      :textbox4Props="userInfoBoxProps.textbox4Props"
    />
    <timetable
      :className="timetableProps.className"
      :timeline1Props="timetableProps.timeline1Props"
      :timeline2Props="timetableProps.timeline2Props"
      :timeline3Props="timetableProps.timeline3Props"
      :timeline4Props="timetableProps.timeline4Props"
      :timeline5Props="timetableProps.timeline5Props"
      :timeline6Props="timetableProps.timeline6Props"
      v-on:selectTable="sendServer"
    />
  </div>
</template>

<script>
import UserInfoBox from "./UserInfoBox";
import Timetable from "./Timetable";
export default {
  name: "UserInfoTimeTable",
  components: {
    UserInfoBox,
    Timetable,
  },
  props: ["className", "userInfoBoxProps", "timetableProps"],
  methods: {
    sendServer(selectedDateTime){
      alert("send server date and Time to Start.vue")
      this.$emit("sendDateandTime",selectedDateTime)
    }
  }
};
</script>

<style lang="sass">
@import '../../variables'

.user-info-time-table
  align-items: center
  background-color: $error-color
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px

</style>
