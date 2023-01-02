<template>
  <div :class="[`view-23`, className || ``]">
    <sp1m-vk
      :className="sp1mVkProps.className"
      :view41Props="sp1mVkProps.view41Props"
      :view42Props="sp1mVkProps.view42Props"
      :view43Props="sp1mVkProps.view43Props"
    />
  </div>
</template>

<script>
import Sp1mVk from "./Sp1mVk";
export default {
  name: "View3",
  components: {
    Sp1mVk,
  },
  props: ["className", "sp1mVkProps"],
};
</script>

<style lang="sass">
@import '../../variables'

.view-23
  align-items: center
  background-color: $pigeon-post
  border-bottom-style: solid
  border-bottom-width: 3px
  border-color: $white
  border-left-style: solid
  border-left-width: 3px
  border-right-style: solid
  border-right-width: 3px
  display: flex
  height: 50px
  position: relative
  width: 400px

.view-23.view-24
  background-color: $geraldine
</style>
