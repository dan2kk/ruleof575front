<template>
  <RMenuTextBox :text = this.lecData.과목명 color="yellow" size= "400" @click="showDetails"/>

</template>

<script>
import RMenuTextBox from "../../RMenu/Box/RMenuTextBox";

export default {
  name: "NTLecBlock",
  components:{RMenuTextBox},
  props: ["lecData"],
  methods : {
    showDetails() {
      this.$store.commit("setLecDetails", this.lecData.수업번호);
    },
  }
};
</script>

<style lang="sass">
@import '../../../../variables'
.non-time-lec-block
  align-items: center
  position: relative
  background-color: $error-color
</style>