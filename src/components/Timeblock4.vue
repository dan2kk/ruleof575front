<template>
  <div :class="[`timeblock-1`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 1" @click="click()">
    <div class="timetext-1 notosanskr-normal-black-12px"> {{ this.timetext }}</div>
  </div>
  <div :class="[`timeblock-2`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 2" @click="click()">
    <div class="blocker"></div>
    <div class="timetext-2 notosanskr-normal-black-12px"> {{ this.timetext }}</div>
  </div>
  <div :class="[`timeblock-3`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 3" @click="click()">
    <div class="timetext-2 notosanskr-normal-black-12px"> {{ this.timetext }}</div>
    <div class="blocker"></div>
  </div>
  <div :class="[`timeblock-4`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 4" @click="click()">
    <div class="timetext-2 notosanskr-normal-black-12px"> {{ this.timetext }}</div>
    <div class="blocker"></div>
  </div>
  <div :class="[`timeblock-5`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 5" @click="click()">
    <div class="blocker"></div>
    <div class="timetext-2 notosanskr-normal-black-12px"> {{ this.timetext }}</div>
  </div>
  <div :class="[`timeblock-6`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 6" @click="click()">
    <div class="timetext-1 notosanskr-normal-black-12px"> {{ this.timetext }}</div>
  </div>
  <button class='timeblock-7' @click="sendboxclick" v-if="blocknum == 7" >
    <div class="svg-wrapper-1" @click="click()">
      <div class="svg-wrapper">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
        </svg>
      </div>
    </div>
    <span class="span">Send</span>
  </button>
  <div :class="[`timeblock-8`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 8" @click="click()">
    <div class="timetext-1 notosanskr-normal-black-12px"> {{ this.timetext }}</div>
  </div>
  <div :class="[`timeblock-9`, blocknum, timetext, posx, posy ]" v-if=" blocknum == 9" @click="click()">
    <div class="blocker"></div>
    <div class="blocker"></div>
  </div>

</template>

<script>
export default {
  name: "Timeblock4",
  props: ["blocknum", "timetext", "posx", "posy"],
  data(){
    return{
      blockno: this.blocknum,
      blocktext: this.timetext,
      posX: this.posx,
      posY: this.posy,
    }
  },
  methods:{
    click(){
      if (this.blocknum <= 7)
      {
        if (this.blocknum < 7)
        {
          alert('posx:' + this.posX +'posy: '+this.posY);
          this.blockno = 7 - this.blockno;
          this.$emit("sendInfo", this.blockno, this.blocktext, this.posx, this.posy)
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

.timeblock-1,
.timeblock-2,
.timeblock-3
  align-items: center
  background-color: $timeblock-background
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 0px
  border-color: $pippin
  position: relative

.timeblock-4,
.timeblock-5,
.timeblock-6
  align-items: center
  background-color: $silver
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 0px
  border-color: $white
  position: relative

.timeblock-8
  align-items: center
  background-color: $bon-jour
  display: flex
  flex-direction: row
  height: 40px
  width: 60px
  border-style: solid
  border-width: 0px
  border-color: $white
  position: relative

.timeblock-9
  align-items: center
  background-color: $bon-jour
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 0px
  border-color: $white
  position: relative
  
.timeblock1:hover,
.timeblock2:hover,
.timeblock3:hover,
.timeblock4:hover,
.timeblock5:hover,
.timeblock6:hover
  transform: scale(1.1)
  border: 0px solid
  border-color: $white

@keyframes fly-1
  0%
    transform: translateY(0.1em)
  100%
    transform: translateY(-0.1em)

.timetext-1
  height: 20px
  line-height: normal
  text-align: center
  width: 60px
  position: relative

.timetext-2
  height: 20px
  line-height: normal
  text-align: center
  width: 60px
  position: relative

.blocker
  height: 20px
  width: 60px
  background-color: $black
  position: relative
  border-width: 0px
  border-style: solid
  border-color: $white
  
</style>
