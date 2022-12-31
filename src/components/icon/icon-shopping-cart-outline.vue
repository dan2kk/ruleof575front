<template>
  <div class="">
    <div class="icon-shopping-cart-outline">
      <div class="vector"></div>
      <img
        alt=""
        class="group"
        src="https://static.overlay-tech.com/assets/9c9493f5-a3ee-4d33-a178-1aadf97a1518.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "icon-shopping-cart-outline"
};
</script>

<style lang="scss" scoped>
. {
  background-color: rgba(183, 181, 180, 1);
  border-radius: 10px;
  position: relative;
  border: 2px solid $white;
}
.icon-shopping-cart-outline {
  padding: 0 0 1px;
  position: absolute;
  left: -4.5px;
  top: -5.5px;
}
.vector {
  width: 100%;
  height: 100%;
  background-color: $white;
  position: relative;
}
.group {
  width: 26.67px;
  height: 24.89px;
  position: absolute;
  right: 6.66px;
  bottom: 8.55px;
}
</style>