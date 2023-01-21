<template>
  <div class="non-time-lec-block" @click="showDetails">
      {{ this.lecData.과목명 }}
  </div>
</template>

<script>
export default {
  name: "NTLecBlock",
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
  height: 30px
  position: relative
  background-color: $error-color
</style>