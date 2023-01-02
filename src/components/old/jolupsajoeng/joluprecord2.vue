<template>
  <div class="record">
    <div class="cart"><p class="">이수명</p></div>
    <div class="cart-two"><p class="">배당</p></div>
    <div class="cart-three"><p class="">취득</p></div>
    <div class="cart-four"><p class="">변동</p></div>
    <div class="cart-five"><p class="">합계</p></div>
  </div>
</template>

<script>
export default {
  name: "JolupRecord2"
};
</script>

<style lang="scss" scoped>
.record {
  background-color: $lavender-blush;
  display: flex;
  align-items: flex-start;
  border: 3px solid $white;
}
.cart {
  background-color: $transparent-silver;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
. {
  height: 34px;
  width: 157px;
  color: $black;
  display: flex;
  align-items: center;
  text-align: center;
  @include noto-sans-kr-12-regular;
}
.cart-two {
  background-color: $transparent-silver;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $white;
}
. {
  height: 34px;
  width: 58px;
  color: $black;
  display: flex;
  align-items: center;
  text-align: center;
  @include noto-sans-kr-12-regular;
}
.cart-three {
  background-color: $transparent-silver;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid $white;
}
. {
  height: 29px;
  width: 52px;
  color: $black;
  display: flex;
  align-items: center;
  text-align: center;
  @include noto-sans-kr-12-regular;
}
.cart-four {
  background-color: $transparent-silver;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid $white;
}
.cart-five {
  background-color: $transparent-silver;
  border-radius: 5px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid $white;
}
</style>