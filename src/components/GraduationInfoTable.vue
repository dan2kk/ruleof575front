<template>
  <div class="graduation-info-table">
    <titlebox className="purpleBold">졸업사정 변동사항</titlebox>
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
import Titlebox from "./Titlebox";
import GraduationInfoRecord from "./GraduationInfoRecord";
export default {
  name: "GraduationInfoTable",
  components: {
    Titlebox,
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
