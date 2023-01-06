<template>
  <div class="graduation-info-table">
    <graduation-info-record
      :textbox21Props="graduationInfoRecord1Props.textbox21Props"
      :textbox22Props="graduationInfoRecord1Props.textbox22Props"
      :textbox23Props="graduationInfoRecord1Props.textbox23Props"
      :textbox24Props="graduationInfoRecord1Props.textbox24Props"
      :textbox25Props="graduationInfoRecord1Props.textbox25Props"
      :textbox26Props="graduationInfoRecord1Props.textbox26Props"
    />
  </div>
</template>

<script>
import GraduationInfoRecord from "./GraduationInfoRecord";
export default {
  name: "GraduationInfoTable",
  components: {
    GraduationInfoRecord,
  },
  props: [
    "graduationInfoRecord1Props",
  ],
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
  overflow: hidden
  position: relative
  width: 400px
</style>
