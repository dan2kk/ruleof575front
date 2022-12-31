<template>
  <div class="record">
    <div class="cart"><p class="">이수명</p></div>
    <div class="cart-two"><p class="">배당</p></div>
    <div class="cart-two"><p class="">취득</p></div>
    <div class="cart-two"><p class="">변동</p></div>
    <div class="cart-two"><p class="">합계</p></div>
  </div>
</template>

<script>
export default {
  name: "JolupRecord1"
};
</script>

<style lang="scss" scoped>
.record {
  background-color: rgba(196, 159, 190, 1);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.cart {
  background-color: $transparent-silver;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 42px;
  border: 4px solid $white;
}
. {
  color: $white;
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  @include noto-sans-kr-12-regular;
}
.cart-two {
  background-color: $transparent-silver;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 42px;
  border: 4px solid $white;
}
</style>