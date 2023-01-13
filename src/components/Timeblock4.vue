<template>
  <div>
    <div :class="[`timeblock-1`, posx, posy ]" v-show=" this.blockno == 1" @click="click()">
      <div class="timetext-1 notosanskr-normal-white-12px"> {{ this.blocktext }}</div>
    </div>
    <div :class="[`timeblock-2`, posx, posy ]" v-show=" this.blockno == 2" @click="click()">
      <div class="blocker"></div>
      <div class="timetext-2 notosanskr-normal-white-12px"> {{ this.blocktext }}</div>
    </div>
    <div :class="[`timeblock-3`, posx, posy ]" v-show=" this.blockno == 3" @click="click()">
      <div class="timetext-2 notosanskr-normal-white-12px"> {{ this.blocktext }}</div>
      <div class="blocker"></div>
    </div>
    <div :class="[`timeblock-4`, posx, posy ]" v-show=" this.blockno == 4" @click="click()">
      <div class="timetext-2 notosanskr-normal-white-12px"> {{ this.blocktext }}</div>
      <div class="blocker"></div>
    </div>
    <div :class="[`timeblock-5`, posx, posy ]" v-show=" this.blockno == 5" @click="click()">
      <div class="blocker"></div>
      <div class="timetext-2 notosanskr-normal-white-12px"> {{ this.blocktext }}</div>
    </div>
    <div :class="[`timeblock-6`, posx, posy ]" v-show=" this.blockno == 6" @click="click()">
      <div class="timetext-1 notosanskr-normal-white-12px"> {{ this.blocktext }}</div>
    </div>
    <button class='timeblock-7' @click="sendboxclick" v-show="this.blockno == 7" >
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
    <div :class="[`timeblock-8`, posx, posy ]" v-show=" this.blockno == 8" @click="click()">
      <div class="timetext-1 notosanskr-normal-black-12px"> {{ this.blocktext }}</div>
    </div>
    <div :class="[`timeblock-9`, posx, posy ]" v-show=" this.blockno >= 9" @click="click()">
      <div class="timetext-1 notosanskr-normal-white-10px"> {{ this.blocktext }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeblock4",
  props: ["posx", "posy"],
  data(){
    return{
      posX: this.posx,
      posY: this.posy,
    }
  },
  computed: {
    blockno() {
      return this.$store.getters.getBlocknumTable[this.posx][this.posy]
    },
    blocktext(){
      return this.$store.getters.getTextTable[this.posx][this.posy]
    }
  },
  methods:{
    click(){
      if (this.blockno <= 7) //시간표가 안찬곳 클릭
      {
        if (this.blockno < 7)
        {
          alert('posx:' + this.posX +'posy: '+this.posY + '');
          this.blockno = 7 - this.blockno;
          this.$store.commit("changeBnum", {x: this.posX, y: this.posY, dat: this.blockno})
          let data = {start: 0, end: 0}
          switch(this.blockno){
            case 6: case 1: // 풀칸 클릭 가능
              data.start = this.posY + 8
              data.end = this.posY + 1 + 8
              break;
            case 5: case 2: // 아랫칸 클릭 가능
              data.start = this.posY + 0.5 + 8
              data.end = this.posY + 1 + 8
              break;
            case 4: case 3: // 윗칸 클릭 가능
              data.start = this.posY + 8
              data.end = this.posY + 0.5 + 8
              break;
            default:
              alert("error!")
          }
          let day = null
          switch(this.posX){
            case 1:
              day = '월'
              break;
            case 2:
              day = '화'
              break;
            case 3:
              day = '수'
              break;
            case 4:
              day = '목'
              break;
            case 5:
              day = '금'
              break;
            default:
              alert("err!")
              break;
          }
          console.log(data, day)
          this.$store.commit("clickDateTime",{data, day})
        }
        else
        {
          alert('sendbox clicked');
          this.$parent.$parent.$parent.$parent.sendTimeTable()
          //this.$emit('sendboxclicked');
        }
      }
      else // 시간표가 이미 찬곳 클릭 blocknum >= 9 이면 해당 수업번호 저장
      {
        console.log("clicked " + this.blockno)
        this.$parent.$parent.$parent.$parent.sendCourseInfo(this.blockno)
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
  background-color: $black
  display: flex
  flex-direction: column
  height: 40px
  width: 60px
  border-style: solid
  border-width: 0px
  border-color: $white
  position: relative
  
.timeblock-1:hover,
.timeblock-2:hover,
.timeblock-3:hover,
.timeblock-4:hover,
.timeblock-5:hover,
.timeblock-6:hover
  transform: scale(1.1)
  border: 1px solid
  border-color: $black

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
