<template>
  <div class="view">
    <ngm-xxf :children="ngmXxf1Props.children" />
    <ngm-xxf :children="ngmXxf2Props.children" />
    <ngm-xxf :children="ngmXxf3Props.children" />
    <ngm-xxf :children="ngmXxf4Props.children" />
    <ngm-xxf :children="ngmXxf5Props.children" />
    <ngm-xxf :children="ngmXxf6Props.children" />
    <ngm-xxf :children="ngmXxf7Props.children" />
    <ngm-xxf :children="ngmXxf8Props.children" />
    <ngm-xxf :children="ngmXxf9Props.children" />
    <ngm-xxf :children="ngmXxf10Props.children" />
    <ngm-xxf :children="ngmXxf11Props.children" />
    <ngm-xxf :children="ngmXxf12Props.children" />
    <ngm-xxf :children="ngmXxf13Props.children" :className="ngmXxf13Props.className" />
  </div>
</template>

<script>
import NgmXxf from "./NgmXxf";
export default {
  name: "YJh3RB",
  components: {
    NgmXxf,
  },
  props: [
    "ngmXxf1Props",
    "ngmXxf2Props",
    "ngmXxf3Props",
    "ngmXxf4Props",
    "ngmXxf5Props",
    "ngmXxf6Props",
    "ngmXxf7Props",
    "ngmXxf8Props",
    "ngmXxf9Props",
    "ngmXxf10Props",
    "ngmXxf11Props",
    "ngmXxf12Props",
    "ngmXxf13Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.view
  align-items: flex-start
  border: 1px solid
  border-color: $white
  display: flex
  flex-direction: column
  height: 500px
  position: relative
  width: fit-content
</style>
