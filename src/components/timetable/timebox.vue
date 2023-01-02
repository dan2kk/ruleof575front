<template>
    <div class="box"><p class="num-0900">09:00</p></div>
  </template>
  
  <script>
  export default {
    name: "num-time"
  };
  </script>
  
  <style lang="scss" scoped>
  .box{
    background-color: rgba(210, 210, 210, 1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .num-0900 {
    height: 39px;
    width: 58px;
    color: $black;
    display: flex;
    align-items: center;
    text-align: center;
    @include noto-sans-kr-12-regular;
  }
  </style>