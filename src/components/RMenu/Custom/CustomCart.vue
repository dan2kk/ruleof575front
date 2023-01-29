<template>
    <div class = "custom-cart">
        <RMenuModifiableTitleBox class = "custom-cart-title" color="blue" size="600" :text = 'this.title' fontsize="22">

        </RMenuModifiableTitleBox>
        <RMenuTextBox class = "custom-cart-info" color="blue" size = "600" height= "50" :text = 'this.info'/>
        <RMenuTitleBox color="blue" size="600">
            <img class="show-button-custom" src='showbutton.svg' @click ="this.setIsContextShown()" v-show=!isContextShown>
            <img class="hide-button-custom" src='hidebutton-r.svg' @click ="this.setIsContextShown()" v-show="isContextShown">
        </RMenuTitleBox>
        <div class = "context" v-show="isContextShown">
            <div class = "row-custom" >
                <RMenuTitleBox color="blue" size="150" >알파메일 과목</RMenuTitleBox>
                <RMenuTextBox color="blue" text= "히어로즈오브더스톰의이해" size = "300" height = "50"/>
                <RMenuTextBox color="blue" text= "인기도: 4.85/5" size = "150" height = "50"/>
            </div>
            <div class = "row-custom">
                <RMenuTitleBox color="blue" size="150">학점느님 과목</RMenuTitleBox>
                <RMenuTextBox color="blue" text= "히어로즈오브더스톰의이해" size = "300" height = "50"/>
                <RMenuTextBox color="blue" text= "평균 학점: 3.75" size = "150" height = "50"/>
            </div>
            <div class = "row-custom">
                <RMenuTitleBox color="blue" size="150">슈퍼겁쟁이 과목</RMenuTitleBox>
                <RMenuTextBox color="blue" text= "히어로즈오브더스톰의이해" size = "300" height = "50"/>
                <RMenuTextBox color="blue" text= "인기도: 1.74/5" size = "150" height = "50"/>
            </div>
        </div>
    </div>
</template>

<script>
import RMenuModifiableTitleBox from "../Box/RMenuModifiableTitleBox";
import RMenuTitleBox from "../Box/RMenuTitleBox";
import RMenuTextBox from "../Box/RMenuTextBox";
export default {
    name: "CustomCart",
    components: {
        RMenuTitleBox, RMenuTextBox, RMenuModifiableTitleBox
    },
    props:["title", "info"],
    data(){
        return{
            isContextShown: false
        }
    },
    methods:{
        setIsContextShown(){
            this.isContextShown = !this.isContextShown
        }
    }
};
</script>

<style lang="sass">
@import '../../../../variables'

.custom-cart
    position: relative
    width: 100%
    border-bottom: 3px solid white
    display: flex
    flex-direction: column

.row-custom
    position: relative
    width: 100%
    display: flex
    flex-direction: row

.show-button-custom
    cursor: pointer
    height: 30px
    width: 30px
    transition: all 0.2s ease
    position: absolute
    left: 2%
.show-button-custom:hover
    transform: scale(1.1)
.show-button-custom:active
    transform: rotate(-90deg) scale(0.7)
  
    
.hide-button-custom
    cursor: pointer
    height: 30px
    width: 30px
    transition: all 0.2s ease
    position: absolute
    left: 2%
.hide-button-custom:hover
    transform: scale(1.1)
.hide-button-custom:active
    transform: rotate(90deg) scale(0.7)
</style>

