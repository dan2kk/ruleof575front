<template>
  <div class="cart-2"><div class="text_label-2 valign-text-middle notosanskr-normal-white-12px" @click="say('로그인')">로그인</div></div>
</template>

<script>
export default {
  name: "Cart",
  methods: {
  say(message) {
    alert(message)
  }
}
};
</script>

<style lang="sass">
@import '../../variables'

.cart-2,
.cart-JuxVZV
  align-items: flex-start
  align-self: stretch
  background-color: $silver
  border: 4px solid
  border-color: $white
  display: flex
  flex: 1
  margin-bottom: -2.00px
  margin-left: -2.00px
  margin-right: -2.00px
  margin-top: -2.00px

.text_label-2,
.text_label-4kb2vz
  align-self: stretch
  flex: 1
  letter-spacing: 0
  line-height: normal
  margin-top: -2.00px
  text-align: center
</style>
