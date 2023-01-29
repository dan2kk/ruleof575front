<template>
    <div class="select-index-modal">
        <div class= "overlay-sel-index valign-text-middle notosanskr-bold-white-24px" @click="$emit('modal-close')">
        <div class = empty-cart notosanskr-bold-white-16px></div>
        창을 닫으려면 바깥을 클릭
        </div>
        <div class= "select-index-modal-card">
        <div class= "row" v-for="lec in this.lecList" :key="lec">
            <RMenuTextBox color="yellow" size="90" :text= lec.과목명></RMenuTextBox>
            <RMenuTextBox color="yellow" size="90" :text= lec.대표교강사명></RMenuTextBox>
            <RMenuTextBox color="yellow" size="180" :text= lec.수업시간></RMenuTextBox>
        </div>
        </div>
    </div>
</template>
    
  
<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox";
import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
export default {
    name: "Modal",
    props: [""],
    components: {
        RMenuTitleBox, RMenuTextBox,
    },
    computed:{
        lecList() {
            return this.$store.getters.getWantedList;
        }
    },
    methods:{

    }
  
};
</script>

<style lang="sass">
@import '../../variables'
  
.select-index-modal
    width: 600px
    height: 960px
    position: absolute

.overlay-sel-index
    width: 100%
    height: 100%
    position: absolute
    opacity: 0.3
    background-color: $black
    align-items: center  
    border-radius: 15px

    
.select-index-modal-card
    background-color: $error-color
    position: absolute
    left: 5%
    width: 90%
    height : 80%
    margin: auto
    margin-top: 5%
    background-color: white
    z-index: 10
    border: 3px solid #eea900
    overflow-y: overlay
    border-top-left-radius: 15px
    border-top-right-radius: 15px

</style>