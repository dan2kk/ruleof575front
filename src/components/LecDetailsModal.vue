<template>
    <div class ="lec-details-modal">
        <div class= "overlay" @click="$emit('modal-close')"/>
        <div class= "lec-details-modal-card">
            <slot/>
        </div>
    </div>
</template>

<script>
export default{};
</script>

<style lang="sass">
.lec-details-modal,
.overlay
    width: 400px
    height: 100%
    position: absolute
    left:0
    top:0
.overlay
    opacity: 0.3
    background-color: black
.lec-details-modal-card
    position: absolute
    max: width 40%
    width: 350px
    left: 25px
    margin: auto
    margin-top: 20%
    padding: 20px
    background-color: white
    height : 400px
    z-index: 10
    opacity: 1
    border: 1px solid black
</style>