<template>
  <div class="menu-1">
    <div class="cart-5">
      <textbox-menu-tab
        :className="textboxMenuTabProps.className"
        :textbox11Props="textboxMenuTabProps.textbox11Props"
        :textbox12Props="textboxMenuTabProps.textbox12Props"
        :textbox13Props="textboxMenuTabProps.textbox13Props"
        :textbox14Props="textboxMenuTabProps.textbox14Props"
        v-on:firstblockclick="this.menu = 1"
        v-on:secondblockclick="this.menu = 2"
        v-on:thirdblockclick="this.menu = 3"
        v-on:forthblockclick="this.menu = 4"
      />
      <initial-menu :className="initialMenuProps.className" :loginButtonProps="initialMenuProps.loginButtonProps" v-on:loginf="loginevent()" v-if="!logined"/>
      <course-list-table v-if="logined && menu == 1" ref="courselist"></course-list-table>
      <gyoyang-table v-if="logined && menu == 2"></gyoyang-table>
      <course-info-table v-if="logined && menu == 3"></course-info-table>
      <graduation-info-table v-if="logined && menu == 4"></graduation-info-table>
    </div>
  </div>
</template>

<script>
import TextboxMenuTab from "./TextboxMenuTab";
import InitialMenu from "./InitialMenu";
import CourseInfoTable from "./CourseInfoTable.vue";
import GraduationInfoTable from "./GraduationInfoTable.vue";
import GyoyangTable from "./GyoyangTable.vue";
import CourseListTable from "./CourseListTable.vue";
export default {
  name: "XMenu",
  components: {
    TextboxMenuTab,
    InitialMenu,
    CourseInfoTable,
    GraduationInfoTable,
    GyoyangTable,
    CourseListTable
  },
  props: ["textboxMenuTabProps", "initialMenuProps"],
  data(){
    return{
      logined: false,
      menu: 0,
      userData: {number: "MC0GCCqGSIb3DQIJAyEAw3Dp40VErGHCGs9EEpg0vHCTsO+Q8/tCYa8dNZrXg2k=", username: "한관희", major: "컴퓨터소프트웨어학부", grade: "3학년"},
      userTimetable: []
    }
  },
  methods: {
    async loginevent(){
        alert("event received")
        this.$emit("logined", this.userData)
        this.logined = !this.logined
        this.menu = 1
    },
    update(data){
      console.log('btn run : ', this.$refs.courselist)
      this.$refs.courselist.update(data)
    }
  }
};
</script>

<style lang="sass">
.menu-1
  align-items: flex-start
  display: flex
  flex-direction: column
  height: 600px
  width: 400px

.cart-5
  align-items: flex-start
  background-color: #error-color
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px
</style>
