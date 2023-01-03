<template>
  <div :class="[`timeline-3`, className || ``]">
    <x615-por :className="x615Por1Props.className" :text1Props="x615Por1Props.text1Props" />
    <x615-por :className="x615Por2Props.className" :text1Props="x615Por2Props.text1Props" />
    <x615-por :className="x615Por3Props.className" :text1Props="x615Por3Props.text1Props" />
    <x615-por :className="x615Por4Props.className" :text1Props="x615Por4Props.text1Props" />
    <x615-por :className="x615Por5Props.className" :text1Props="x615Por5Props.text1Props" />
    <x615-por :className="x615Por6Props.className" :text1Props="x615Por6Props.text1Props" />
    <x615-por :className="x615Por7Props.className" :text1Props="x615Por7Props.text1Props" />
    <x615-por :className="x615Por8Props.className" :text1Props="x615Por8Props.text1Props" />
    <x615-por :className="x615Por9Props.className" :text1Props="x615Por9Props.text1Props" />
    <x615-por :className="x615Por10Props.className" :text1Props="x615Por10Props.text1Props" />
    <x615-por :className="x615Por11Props.className" :text1Props="x615Por11Props.text1Props" />
    <x615-por :className="x615Por12Props.className" :text1Props="x615Por12Props.text1Props" />
    <x615-por :className="x615Por13Props.className" :text1Props="x615Por13Props.text1Props" />
  </div>
</template>

<script>
import X615Por from "./X615Por";
export default {
  name: "Timeline",
  components: {
    X615Por,
  },
  props: [
    "className",
    "x615Por1Props",
    "x615Por2Props",
    "x615Por3Props",
    "x615Por4Props",
    "x615Por5Props",
    "x615Por6Props",
    "x615Por7Props",
    "x615Por8Props",
    "x615Por9Props",
    "x615Por10Props",
    "x615Por11Props",
    "x615Por12Props",
    "x615Por13Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.timeline-3
  align-items: flex-start
  border-color: $white
  display: flex
  flex-direction: column
  height: 540px
  position: relative
  width: fit-content

.timeline-3.timeline-1,
.timeline-3.timeline-2
  height: 500px
</style>
