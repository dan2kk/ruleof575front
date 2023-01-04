<template>
  <div class="container-center-horizontal">
    <div class="frame-1 screen">
      <div class="flex-row">
        <img class="textbox" :src="textbox" alt="Textbox" />
        <div class="flex-col">
          <img class="user-info-box" :src="userinfobox" alt="UserInfoBox" /><img
            class="login-button"
            :src="loginbutton"
            alt="LoginButton"
          /><img class="icon-buttons" :src="iconbuttons" alt="IconButtons" />
        </div>
        <div class="menu-container">
          <textbox-menu-tab
            :textbox11Props="textboxMenuTabProps.textbox11Props"
            :textbox12Props="textboxMenuTabProps.textbox12Props"
            :textbox13Props="textboxMenuTabProps.textbox13Props"
            :textbox14Props="textboxMenuTabProps.textbox14Props"
          />
          <img class="menu" :src="menu" alt="Menu" />
        </div>
      </div>
      <div class="flex-col-1">
        <initial-menu :loginButtonProps="initialMenuProps.loginButtonProps" />
        <img class="gyoyang-record" :src="gyoyangrecord" alt="GyoyangRecord" /><gyoyang-table
          v-bind="gyoyangTableProps"
        />
        <course-info-table />
        <img class="graduation-info-record" :src="graduationinforecord" alt="GraduationInfoRecord" /><img
          class="course-list-record"
          :src="courselistrecord"
          alt="CourseListRecord"
        />
      </div>
      <div class="flex-col-2">
        <img class="course-info-record" :src="courseinforecord" alt="CourseInfoRecord" /><graduation-info-table
          v-bind="graduationInfoTableProps"
        />
        <course-list-table v-bind="courseListTableProps" />
      </div>
      <img class="timeblock" :src="timeblock" alt="Timeblock" /><img
        class="timeline"
        :src="timeline"
        alt="Timeline"
      /><timetable
        :timeline1Props="timetableProps.timeline1Props"
        :timeline2Props="timetableProps.timeline2Props"
        :timeline3Props="timetableProps.timeline3Props"
        :timeline4Props="timetableProps.timeline4Props"
        :timeline5Props="timetableProps.timeline5Props"
        :timeline6Props="timetableProps.timeline6Props"
      />
      <user-info-time-table
        :userInfoBoxProps="userInfoTimeTableProps.userInfoBoxProps"
        :timetableProps="userInfoTimeTableProps.timetableProps"
      />
    </div>
  </div>
</template>

<script>
import TextboxMenuTab from "./TextboxMenuTab";
import InitialMenu from "./InitialMenu";
import GyoyangTable from "./GyoyangTable";
import CourseInfoTable from "./CourseInfoTable";
import GraduationInfoTable from "./GraduationInfoTable";
import CourseListTable from "./CourseListTable";
import Timetable from "./Timetable";
import UserInfoTimeTable from "./UserInfoTimeTable";
export default {
  name: "Frame1",
  components: {
    TextboxMenuTab,
    InitialMenu,
    GyoyangTable,
    CourseInfoTable,
    GraduationInfoTable,
    CourseListTable,
    Timetable,
    UserInfoTimeTable,
  },
  props: [
    "textbox",
    "userinfobox",
    "loginbutton",
    "iconbuttons",
    "menu",
    "gyoyangrecord",
    "graduationinforecord",
    "courselistrecord",
    "courseinforecord",
    "timeblock",
    "timeline",
    "textboxMenuTabProps",
    "initialMenuProps",
    "gyoyangTableProps",
    "graduationInfoTableProps",
    "courseListTableProps",
    "timetableProps",
    "userInfoTimeTableProps",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.frame-1
  align-items: flex-start
  background-color: $white
  border: 1px none
  display: flex
  min-width: 4811px
  position: relative

.flex-row
  align-items: flex-start
  display: flex
  height: 3586px
  min-width: 2029px

.textbox
  height: 369px
  margin-top: 393px
  width: 899px

.flex-col
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 166px
  margin-top: 367px
  min-height: 715px
  width: 440px

.user-info-box
  height: 140px
  width: 440px

.login-button
  height: 200px
  margin-left: 27px
  margin-top: 70px
  width: 184px

.icon-buttons
  align-self: center
  height: 243px
  margin-right: 32.0px
  margin-top: 62px
  width: 282px

.menu-container
  align-items: center
  display: flex
  flex-direction: column
  gap: 337px
  margin-left: 84px
  min-height: 3586px
  position: relative
  width: 440px

.menu
  height: 3199px
  width: 440px

.flex-col-1
  align-items: center
  display: flex
  flex-direction: column
  margin-left: 25px
  margin-top: 352px
  min-height: 2749px
  position: relative
  width: 457px

.gyoyang-record
  height: 160px
  margin-left: 3.0px
  margin-top: 54px
  width: 440px

.graduation-info-record
  align-self: flex-end
  height: 160px
  margin-top: 27px
  width: 440px

.course-list-record
  align-self: flex-start
  height: 165px
  margin-top: 414px
  width: 440px

.flex-col-2
  align-items: flex-start
  display: flex
  flex-direction: column
  margin-left: 27px
  margin-top: 1796px
  min-height: 1670px
  position: relative
  width: 455px

.course-info-record
  align-self: flex-end
  height: 270px
  width: 440px

.timeblock
  height: 413px
  margin-left: 368px
  margin-top: 258px
  width: 119px

.timeline
  height: 1247px
  margin-left: 155px
  margin-top: 330px
  width: 232px
</style>
