<template>
    <div class="box1"><p class="box-time">.</p></div>
  </template>
  
  <script>
  export default {
    name: "box-time"
  };
  </script>
  
  <style lang="scss" scoped>
  .box1{
    background-color: rgba(210, 210, 210, 1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .box-time{
    height: 40px;
    width: 58px;
    color: $black;
    display: flex;
    text-align: center;
    @include noto-sans-kr-12-regular;
  }
  </style>