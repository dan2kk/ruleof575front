<template>
  <div :class="[`view-12`, className || ``]"><text-label :text_Label="textLabelProps.text_Label" /></div>
</template>

<script>
import TextLabel from "./TextLabel";
export default {
  name: "View5",
  components: {
    TextLabel,
  },
  props: ["className", "textLabelProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-12
  align-items: center
  background-color: $geraldine
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  display: flex
  height: 50px
  justify-content: center
  position: relative
  width: 100px

.view-12.view-13
  background-color: $pigeon-post

.view-12.view-14
  background-color: $orange-yellow

.view-12.view-15
  background-color: $lily
  border-right-style: solid
  border-right-width: 3px
</style>
