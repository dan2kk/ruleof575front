<template>
  <div class="time-table">
    <TimeLine :day = 0 />
    <TimeLine :day = 1 />
    <TimeLine :day = 2 />
    <TimeLine :day = 3 />
    <TimeLine :day = 4 />
    <TimeLine :day = 5 />
  </div>

</template>

<script>
import TimeLine from "./TimeLine";
export default {
  name: "TimeTable",
  components: {
    TimeLine
  }
};
</script>

<style lang="sass">
@import '../../../../variables'

.time-table
  align-items: center
  background-color: $white
  display: flex
  gap: 8px
  height: 520px
  position: relative
  width: 400px
  border-style: solid
  border-color: white
  border-width: 1px

</style>
