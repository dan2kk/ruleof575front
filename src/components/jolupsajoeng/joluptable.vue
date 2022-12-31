<template>
  <div class="table">
    <Record class="record" /><Record
      class="record"
    /><Record class="record" /><Record
      class="record"
    /><Record class="record" /><Record
      class="record"
    /><Record class="record" /><Record
      class="record"
    /><Record class="record" /><Record
      class="record"
    /><Record class="record" /><Record class="record" />
  </div>
</template>

<script>
import { JolupRecord1, JolupRecord2 } from "components";

export default {
  name: "JolupTable",
  components: { JolupRecord1, JolupRecord2 }
};
</script>

<style lang="scss" scoped>
.table {
  background-color: $lavender-blush;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.record {
  height: 34px;
  width: 394px;
}
</style>