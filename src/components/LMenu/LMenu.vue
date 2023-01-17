<template>
  <div class="l-menu">
    <UserInfo/>
    <TimeTable/>
  </div>
</template>

<script>
import UserInfo from "./UserInfo";
import TimeTable from "./TimeTable/TimeTable";
export default {
  name: "LMenu",
  components: {
    UserInfo,
    TimeTable
  }
};
</script>

<style lang="sass">
@import '../../../variables'

.l-menu
  align-items: center
  background-color: $error-color
  display: flex
  flex-direction: column
  height: 600px
  position: relative
  width: 400px

</style>
