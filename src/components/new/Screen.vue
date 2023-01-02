<template>
  <div class="siganpyo screen">
    <y-jh3-rb v-bind="yJh3RB1Props" />
    <y-jh3-rb v-bind="yJh3RB2Props" />
    <y-jh3-rb v-bind="yJh3RB3Props" />
    <y-jh3-rb v-bind="yJh3RB4Props" />
    <y-jh3-rb v-bind="yJh3RB5Props" />
    <y-jh3-rb v-bind="yJh3RB6Props" />
  </div>
</template>

<script>
import YJh3RB from "./YJh3RB";
export default {
  name: "Screen",
  components: {
    YJh3RB,
  },
  props: ["yJh3RB1Props", "yJh3RB2Props", "yJh3RB3Props", "yJh3RB4Props", "yJh3RB5Props", "yJh3RB6Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.siganpyo
  align-items: flex-start
  background-color: $white
  border: 1px none
  display: flex
  gap: 8px
  height: 100vh
  min-height: 540px
  min-width: 400px
  position: relative
  width: 100%
</style>
