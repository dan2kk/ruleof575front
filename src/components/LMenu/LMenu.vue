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
  },
  mounted() {
    this.$store.commit("setUpTimeLines", '월');
    this.$store.commit("setUpTimeLines", '화');
    this.$store.commit("setUpTimeLines", '수');
    this.$store.commit("setUpTimeLines", '목');
    this.$store.commit("setUpTimeLines", '금');
  }
};
</script>

<style lang="sass">
@import '../../../variables'

.l-menu
  align-items: center
  background-color: $silver
  display: flex
  flex-direction: column
  height: 100%
  position: relative
  width: 50%

</style>
