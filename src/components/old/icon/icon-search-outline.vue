<template>
  <div class="">
    <div class="icon-search-outline">
      <div class="vector"></div>
      <img
        alt=""
        class="vector-two"
        src="https://static.overlay-tech.com/assets/104f42f6-4260-4e33-9093-6a9f37c39d31.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "icon-search-outline"
};
</script>

<style lang="scss" scoped>
. {
  background-color: rgba(183, 181, 180, 1);
  border-radius: 10px;
  position: relative;
  border: 2px solid $white;
}
.icon-search-outline {
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
.vector-two {
  width: 62.23%;
  height: 64.45%;
  position: absolute;
  right: 7.39px;
  bottom: 7.66px;
}
</style>