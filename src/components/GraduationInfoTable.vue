<template>
  <div class="graduation-info-table">
    <titlebox className="purpleBold">졸업사정 변동사항</titlebox>
    <graduation-info-record/>
  </div>
</template>

<script>
import Titlebox from "./Titlebox";
import GraduationInfoRecord from "./GraduationInfoRecord";
export default {
  name: "GraduationInfoTable",
  components: {
    Titlebox, GraduationInfoRecord
  },
  props: [],
};
</script>

<style lang="sass">
@import '../../variables'

.graduation-info-table
  align-items: center
  background-color: $tutu
  display: flex
  flex-direction: column
  height: 550px
  overflow-y: scroll
  overflow-x: hidden
  position: relative
  width: 400px
</style>
