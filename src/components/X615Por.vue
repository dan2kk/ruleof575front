<template>
  <div :class="[`view`, className || ``]"><text1 :text1="text1Props.text1" /></div>
</template>

<script>
import Text1 from "./Text1";
export default {
  name: "X615Por",
  components: {
    Text1,
  },
  props: ["className", "text1Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.view
  align-items: flex-start
  background-color: $quill-gray
  display: flex
  flex-direction: column
  position: relative
  width: fit-content

.view.view-1
  height: 60px

.view.view-2,
.view.view-4
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $white

.view.view-3,
.view.view-5
  border-bottom-style: solid
  border-bottom-width: 1px
  border-color: $white
  height: 60px
  margin-bottom: -40.00px
</style>
