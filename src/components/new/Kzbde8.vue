<template>
  <div class="view-40">
    <ngm-xxf :children="ngmXXF1Props.children" />
    <ngm-xxf :children="ngmXXF2Props.children" />
    <ngm-xxf :children="ngmXXF3Props.children" />
    <ngm-xxf :children="ngmXXF4Props.children" />
    <ngm-xxf :children="ngmXXF5Props.children" />
    <ngm-xxf :children="ngmXXF6Props.children" />
    <ngm-xxf :children="ngmXXF7Props.children" />
    <ngm-xxf :children="ngmXXF8Props.children" />
    <ngm-xxf :children="ngmXXF9Props.children" />
    <ngm-xxf :children="ngmXXF10Props.children" />
    <ngm-xxf :children="ngmXXF11Props.children" />
    <ngm-xxf :children="ngmXXF12Props.children" :className="ngmXXF12Props.className" />
  </div>
</template>

<script>
import NgmXxf from "./NgmXxf";
export default {
  name: "Kzbde8",
  components: {
    NgmXxf,
  },
  props: [
    "ngmXXF1Props",
    "ngmXXF2Props",
    "ngmXXF3Props",
    "ngmXXF4Props",
    "ngmXXF5Props",
    "ngmXXF6Props",
    "ngmXXF7Props",
    "ngmXXF8Props",
    "ngmXXF9Props",
    "ngmXXF10Props",
    "ngmXXF11Props",
    "ngmXXF12Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.view-40
  align-items: flex-start
  border: 1px solid
  border-color: $white
  display: flex
  flex-direction: column
  height: 500px
  position: relative
  width: fit-content
</style>
