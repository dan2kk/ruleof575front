<template>
  <div class="table">
    <Record class="record" /><Record
      class="record-two"
    /><Record class="record-two" /><Record
      class="record-two"
    /><Record class="record-two" /><Record
      class="record-two"
    /><Record class="record-two" /><Record
      class="record-two"
    /><Record class="record-two" /><Record
      class="record-two"
    /><Record class="record-two" /><Record
      class="record-two"
    /><Record class="record-three" /><Record
      class="record-four"
    /><Record class="record-five" />
  </div>
</template>

<script>
import { Record } from "components";

export default {
  name: "GyoyangTable",
  components: { GyoyangRecord1, GyoyangRecord2 }
};
</script>

<style lang="scss" scoped>
.table {
  background-color: rgba(233, 241, 255, 1);
  overflow: hidden;
  padding: 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.record {
  height: 44px;
  width: 394px;
}
.record-two {
  height: 34px;
  width: 394px;
}
.record-three {
  height: 34px;
  width: 394px;
  position: absolute;
  left: 0;
  bottom: -30px;
}
.record-four {
  height: 34px;
  width: 394px;
  position: absolute;
  left: 0;
  bottom: -70px;
}
.record-five {
  height: 34px;
  width: 394px;
  position: absolute;
  left: 0;
  bottom: -110px;
}
</style>