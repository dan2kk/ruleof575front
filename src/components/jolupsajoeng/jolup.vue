<template>
  <div class="">
    <div class="cart">
      <div class="">
        <div class=""><p class="">수업목록</p></div>
        <div class=""><p class="">추천교양</p></div>
        <div class=""><p class="">수업상세</p></div>
        <div class=""><p class="">졸업사정</p></div>
      </div>
      <Record class="record" /><Table class="table" />
    </div>
  </div>
</template>

<script>
import { JolupRecord, Table } from "components";

export default {
  name: "Jolup",
  components: { JolupRecord, JolupTable }
};
</script>

<style lang="scss" scoped>
. {
  display: flex;
  align-items: flex-start;
  border: 2px solid $white;
}
.cart {
  background-color: $lavender-blush;
  display: flex;
  flex-direction: column;
  align-items: center;
}
. {
  background-color: $white;
  display: flex;
  align-items: center;
  height: 48px;
  width: 396px;
}
. {
  background-color: rgba(237, 139, 133, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 48px;
}
. {
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: $white;
  flex: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  text-align: center;
}
. {
  background-color: rgba(178, 195, 225, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 48px;
}
. {
  background-color: rgba(247, 209, 108, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 48px;
}
. {
  background-color: rgba(196, 159, 190, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 48px;
}
.record {
  height: 50px;
  width: 396px;
}
.table {
  height: 498px;
  width: 396px;
}
</style>