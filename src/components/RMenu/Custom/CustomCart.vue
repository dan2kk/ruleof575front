<template>
    <div class = "custom-cart">
        <div class = "context">
            <RMenuTitleBox color="red" size = "600" v-show = "!isContextShown[0]" @click = "isContextShown[0] = !isContextShown[0]">
                알파메일 과목
            </RMenuTitleBox>
            <div v-for = "(custom, idx) in this.customList.hot.slice(0, 5)" v-show = "isContextShown[0]" :key = custom >
                <div class = "row-custom" >
                    <RMenuTitleBox color="red" size="150" v-if = "idx == 0" @click = "isContextShown[0] = !isContextShown[0]">알파메일 과목</RMenuTitleBox>
                    <RMenuTitleBox color="red" size="150" v-if = "idx != 0" ></RMenuTitleBox>
                    <RMenuTextBox color="red" :text= idx+1 size = "25" height = "50"/>
                    <RMenuTextBox color="red" :text = custom.과목명 size = "275" height = "50"/>
                    <RMenuTextBox color="red" :text= custom.대표교강사명 size = "75" height = "50"/>
                    <RMenuTextBox color="red" :text= custom.대표교강사명 size = "75" height = "50"/>
                </div>
            </div>
            <RMenuTitleBox color="green" size = "600" v-show = "!isContextShown[1]" @click = "isContextShown[1] = !isContextShown[1]">
                슈퍼겁쟁이 과목
            </RMenuTitleBox>
            <div v-for = "(custom, idx) in this.customList.cold.slice(0, 5)" v-show = "isContextShown[1]" :key = custom>
                <div class = "row-custom" >
                    <RMenuTitleBox color="green" size="150" v-if = "idx == 0" @click = "isContextShown[1] = !isContextShown[1]">슈퍼겁쟁이 과목</RMenuTitleBox>
                    <RMenuTitleBox color="green" size="150" v-if = "idx != 0" ></RMenuTitleBox>
                    <RMenuTextBox color="green" :text= idx+1 size = "25" height = "50"/>
                    <RMenuTextBox color="green" :text = custom.과목명 size = "275" height = "50"/>
                    <RMenuTextBox color="green" :text= custom.대표교강사명 size = "75" height = "50"/>
                    <RMenuTextBox color="green" :text= custom.설강기준평점 size = "75" height = "50"/>
                </div>
            </div>
            <RMenuTitleBox color="yellow" size = "600" v-show = "!isContextShown[2]" @click = "isContextShown[2] = !isContextShown[2]">
                학점느님 과목
            </RMenuTitleBox>
            <div v-for = "(custom, idx) in this.customList.score.slice(0, 5)" v-show = "isContextShown[2]" :key = custom>
                <div class = "row-custom" >
                    <RMenuTitleBox color="yellow" size="150" v-if = "idx == 0" @click = "isContextShown[2] = !isContextShown[2]">학점느님 과목</RMenuTitleBox>
                    <RMenuTitleBox color="yellow" size="150" v-if = "idx != 0" ></RMenuTitleBox>
                    <RMenuTextBox color="yellow" :text= idx+1 size = "25" height = "50"/>
                    <RMenuTextBox color="yellow" :text = custom.과목명 size = "275" height = "50"/>
                    <RMenuTextBox color="yellow" :text= custom.대표교강사명 size = "75" height = "50"/>
                    <RMenuTextBox color="yellow" :text= custom.설강기준평점 size = "75" height = "50"/>
                </div>
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
        RMenuTitleBox, RMenuTextBox, RMenuModifiableTitleBox,
    },
    props:["customList"],
    data(){
        return{
            isContextShown: [false, false, false,]
        }
    },
    methods:{
        setIsContextShown(){
            this.isContextShown = !this.isContextShown
        },
        setUpCourse(list){
            this.$store.commit("setUpCourseModal", list)
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
    background-color: #white
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

