<template>
  <div :class="[`timeblock-1`, blocknum, text, posx, posy ]" v-if=" blocknum == 1" @click="click()">
    <div class="text-1 notosanskr-normal-black-12px"> {{ this.text }}</div>
  </div>
  <div :class="[`timeblock-2`, blocknum, text, posx, posy ]" v-if=" blocknum == 2" @click="click()">
    <div :class="cart"></div>
    <div class="text-2 notosanskr-normal-black-12px"> {{ this.text }}</div>
  </div>
  <div :class="[`timeblock-3`, blocknum, text, posx, posy ]" v-if=" blocknum == 3" @click="click()">
    <div class="text-2 notosanskr-normal-black-12px"> {{ this.text }}</div>
    <div :class="cart"></div>
  </div>
  <div :class="[`timeblock-4`, blocknum, text, posx, posy ]" v-if=" blocknum == 4" @click="click()">
    <div class="text-2 notosanskr-normal-black-12px"> {{ this.text }}</div>
    <div :class="cart"></div>
  </div>
  <div :class="[`timeblock-5`, blocknum, text, posx, posy ]" v-if=" blocknum == 5" @click="click()">
    <div :class="cart"></div>
    <div class="text-2 notosanskr-normal-black-12px"> {{ this.text }}</div>
  </div>
  <div :class="[`timeblock-6`, blocknum, text, posx, posy ]" v-if=" blocknum == 6" @click="click()">
    <div class="text-1 notosanskr-normal-black-12px"> {{ this.text }}</div>
  </div>
  <button class='timeblock-7' @click="sendboxclick" v-if="blocknum == 7">
    <div class="svg-wrapper-1">
      <div class="svg-wrapper">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
        </svg>
      </div>
    </div>
    <span class="span">Send</span>
  </button>
  <div :class="[`timeblock-8`, blocknum, text, posx, posy ]" v-if=" blocknum == 8">
    <div class="text-1 notosanskr-normal-black-12px"> {{ this.text }}</div>
  </div>
  <div :class="[`timeblock-9`, blocknum, text, posx, posy ]" v-if=" blocknum == 9">
    <div :class="cart"></div>
    <div :class="cart"></div>
  </div>

</template>

<script>
export default {
  name: "Timeblock4",
  props: ["blocknum", "text", "posx", "posy"],
  data(){
    return{
      blocknum: this.blocknum,
      text: this.text,
      posx: this.posx,
      posy: this.posy,
    }
  },
  methods:{
    click(){
      if (this.blocknum <= 7)
      {
        if (this.blocknum < 7)
        {
          alert('sex');
          this.blocknum = 7 - this.blocknum;
          alert("y: " + this.posy + " x: " + this.posx);s
          this.$emit("sendInfo", this.blocknum, this.text, this.posx, this.posy)
        }
        else
        {
          alert('sendbox clicked');
          this.$emit('sendboxclicked');
        }
      }
      else
      {
        
      }
    }
  }
};

</script>

<style lang="sass">
@import '../../variables'
.cart
  width: 60px
  height: 20px
  background-color: $black

.timeblock-7
  font-size: 13px 
  background: $orange-yellow
  color: white 
  display: flex 
  align-items: center 
  border: none 
  border-radius: 4px 
  overflow: hidden
  height: 40px
  width: 60px
  transition: all 0.2s
  .span
    display: block 
    margin-left: 0.3em 
    transition: all 0.3s ease-in-out 
  .svg
    display: block 
    transform-origin: center center 
    transition: transform 0.3s ease-in-out 
.timeblock-7:hover
  .svg-wrapper
    animation: fly-1 0.6s ease-in-out infinite alternate 
  .svg
    transform: translateX(1.2em) rotate(45deg) scale(1.1) 
  .span
    transform: translateX(5em)
.timeblock-7:active
  transform: scale(0.95)

.timeblock-1
  align-items: center
  background-color: $timeblock-background
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 1px
  border-color: white

.timeblock-6
  align-items: center
  background-color: $silver
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 1px
  border-color: white

.timeblock-8
  align-items: center
  background-color: $bon-jour
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 1px
  border-color: white

.timeblock-9

.timeblock1:hover,
.timeblock2:hover,
.timeblock3:hover,
.timeblock4:hover,
.timeblock5:hover,
.timeblock6:hover
  transform: scale(1.1)
  border: 1px solid
  border-color: #white

@keyframes fly-1
  0%
    transform: translateY(0.1em)
  100%
    transform: translateY(-0.1em)

.text-1
  height: 40px
  letter-spacing: 0
  line-height: normal
  margin-top: 0px
  text-align: center
  width: 60px
.text-2
  height: 20px
  letter-spacing: 0
  line-height: normal
  margin-top: 0px
  text-align: center
  width: 60px
</style>
