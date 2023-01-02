<template>
  <div class="record">
    <div class=""><p class="">과목명</p></div>
    <div class=""><p class="">교수명</p></div>
    <div class="">
      <p class="">
        월 09:00~10:30<br />
        수 09:00~10:30
      </p>
    </div>
    < class=""/>< class=""/>
  </div>
</template>

<script>
import {} from "components";

export default {
  name: "SangsaeRecord1",
  components: {}
};
</script>

<style lang="scss" scoped>
.record {
  background-color: rgba(233, 241, 255, 1);
  padding: 0 3.09px 0 0;
  display: flex;
  align-items: flex-start;
  border: 3px solid $white;
}
. {
  width: calc(37.09% - 111px);
  background-color: rgba(255, 255, 255, 0);
  padding: 12.5px 57px 14.5px 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $white;
}
. {
  color: $black;
  text-align: center;
  @include noto-sans-kr-12-regular;
}
. {
  width: 12.28%;
  background-color: rgba(237, 139, 133, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  border: 1px solid $white;
}
. {
  color: $black;
  flex: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  text-align: center;
  @include noto-sans-kr-12-regular;
}
. {
  width: 25.07%;
  background-color: rgba(237, 139, 133, 0);
  margin-right: 8.91px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  border: 1px solid $white;
}
. {
  margin-top: 4px;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
}
</style>