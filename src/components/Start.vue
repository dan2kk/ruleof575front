<template>
  <div class="start">
    <LMenu/>
    <RMenu/>
  </div>
</template>


<script>
import LMenu from "./LMenu/LMenu";
import RMenu from "./RMenu/RMenu";
import axios from 'axios';

export default {
  name: "Start",
  components: {
    LMenu,
    RMenu
  },
  methods: {
    async sendTimeTable(){
      try {
        let result= this.$store.getters.getDateTime
        for(let key in result) {
            result[key].sort((a, b) => { return a.start - b.start});
        }
        console.log(result)
        this.$store.getters.getRecommend.length = 0
        let date = (await axios.post('/recommend', {time_blocks: result, stu_id: this.$store.getters.getUserID})).data
        console.log(date)
        for(let i =0; i< date.length; i++){
          console.log(date[i])
          this.$store.getters.getRecommend.push(date[i])
        }
        //this.$refs.RMenu.menu = 2
      } 
      catch (error) {
        console.log(error)
      }
    }
  },
};
</script>

<style lang="sass">
@import '../../variables'

.start
  align-items: flex-start
  background-color: $error-color
  border: 1px none
  display: flex
  height: 600px
  position: absolute
  width: 800px
</style>
