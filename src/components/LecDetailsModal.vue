<template>
  <div class="lec-details-modal">
    <div class= "overlay valign-text-middle notosanskr-semibold-white-16px" @click="$emit('modal-close')">
      <div class = empty-cart></div>
      창을 닫으려면 바깥을 클릭
    </div>
    <div class= "lec-details-modal-card">
      <div class= "row">
        <RMenuModifiableTitleBox color="darkYellow" size="280" :text=this.modalData.lec_info.과목명></RMenuModifiableTitleBox>
        <RMenuModifiableTitleBox color="darkYellow" size="80" :text=this.modalData.lec_info.대표교강사명 ></RMenuModifiableTitleBox>
      </div>
      <div class= "row">
        <RMenuTitleBox color="yellow" size="155">수업 시간</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="155">강의실</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="50">정원</RMenuTitleBox>
      </div>
      <div class= "row">
        <RMenuTextBox color="yellow" size="155" :text=this.modalData.lec_info.수업시간></RMenuTextBox>
        <RMenuTextBox color="yellow" size="155" :text=this.modalData.lec_info.강의실></RMenuTextBox>
        <RMenuTextBox color="yellow" size="50" :text='this.modalData.lec_info.정원'></RMenuTextBox>
      </div>
      <div class= "row">
        <RMenuTitleBox color="yellow" size="72">학수번호</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="72">수업번호</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="72">특수수업</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="72">이수구분</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="72">학점</RMenuTitleBox>
      </div>
      <div class= "row">
        <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.학수번호></RMenuTextBox>
        <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.수업번호></RMenuTextBox>
        <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.특수수업구분></RMenuTextBox>
        <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.이수구분코드명></RMenuTextBox>
        <RMenuTextBox color="yellow" size="72" :text=this.modalData.lec_info.학점></RMenuTextBox>
      </div>
      <div class = "row">
        <RMenuTitleBox color="darkYellow" size="360" style="margin-top: 20px">과목 성적분포</RMenuTitleBox>
      </div>
      <canvas ref="barChart">
      </canvas>
      <div class= "row">
        <RMenuTitleBox color="darkYellow" size="360" style="margin-top: 20px">작년 학기 인원 정보</RMenuTitleBox>
      </div>
      <div v-if="this.modalData.prev_infos.length==0">
        작년에 개설되지 않은 강의입니다.
      </div>
      <div v-for="prev in this.modalData.prev_infos" :key="prev" style="border: solid 2px red; margin-top: 20px; margin-bottom:20px">
        <div class= "row">
          <RMenuTitleBox color="yellow" size="72">정원</RMenuTitleBox>
          <RMenuTitleBox color="yellow" size="72">수강</RMenuTitleBox>
          <RMenuTitleBox color="yellow" size="72">증원</RMenuTitleBox>
          <RMenuTitleBox color="yellow" size="72">취소</RMenuTitleBox>
          <RMenuTitleBox color="yellow" size="72">정정취소</RMenuTitleBox>
        </div>
        <div class= "row">
          <RMenuTextBox color="yellow" size="72" :text=prev.제한인원></RMenuTextBox>
          <RMenuTextBox color="yellow" size="72" :text=prev.신청인원></RMenuTextBox>
          <RMenuTextBox color="yellow" size="72" :text=prev.증원인원></RMenuTextBox>
          <RMenuTextBox color="yellow" size="72" :text=prev.전체취소></RMenuTextBox>
          <RMenuTextBox color="yellow" size="72" :text=prev.정정취소></RMenuTextBox>
        </div>
        <div class="row"> 
          <RMenuTitleBox color="yellow" size="360" @click="isWantedShow = !isWantedShow">희망등록 {{ prev.희망수업등록인원 }}명</RMenuTitleBox>
        </div>
        <div class="detail-info-row" v-show="isWantedShow == true">
          <div v-for="detailInfo in prev.희망수업세부정보" :key="detailInfo">
            <RMenuTitleBox color="yellow" size="175" @click="isWantedShow = !isWantedShow">{{detailInfo.희망신청소속}}</RMenuTitleBox>
            <RMenuTextBox color="yellow" size="175" @click="isWantedShow = !isWantedShow" :text=detailInfo.학생수></RMenuTextBox>
          </div>
        </div>
        <div class= "row">
          <RMenuTitleBox color="yellow" size="360" @click="isRankingShow = !isRankingShow">신청순위</RMenuTitleBox>
        </div>
        <div v-show="isRankingShow == true">
          <div class="row">
            <RMenuTitleBox color="yellow" size="60">1순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="60">2순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="60">3순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="60">4순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="60">5순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="60">6순위~</RMenuTitleBox>
          </div>
          <div class="row">
            <RMenuTextBox color="yellow" size="60" :text=prev.순위1></RMenuTextBox>
            <RMenuTextBox color="yellow" size="60" :text=prev.순위2></RMenuTextBox>
            <RMenuTextBox color="yellow" size="60" :text=prev.순위3></RMenuTextBox>
            <RMenuTextBox color="yellow" size="60" :text=prev.순위4></RMenuTextBox>
            <RMenuTextBox color="yellow" size="60" :text=prev.순위5></RMenuTextBox>
            <RMenuTextBox color="yellow" size="60" :text=prev.순위5초과></RMenuTextBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox";
import RMenuModifiableTitleBox from "./RMenu/Box/RMenuModifiableTitleBox";
import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
import {Chart, registerables} from 'chart.js'
import { assertDeclareModule } from "@babel/types";
Chart.register(...registerables)

export default {
  name: "Modal",
  props: ["modalData"],
  components: {
    RMenuTitleBox, RMenuTextBox, RMenuModifiableTitleBox,
  },
  computed:{

  },
  data() {
    // options: {
    //   responsive: true,
    // },
    return {
      isRankingShow : false,
      isWantedShow : false

    }
  },
  mounted(){
    this.createChart()
  },
  methods:{
    setChart(){
      let data =     
      {
      labels: [],
      datasets: [{
        label: '인원수',
        data: [],
        backgroundColor: [
          '#C59315',
          '#FFBC11',
          '#FFD15A',
          '#FFE39A',
          '#D9D9D9',
          '#A5A5A5'
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',


        ],
        borderWidth: 2
      }]}
      //PF과목
      if (this.modalData.lec_info.Pass != 0)
      {
        data.labels = ['P', 'F']
        data.datasets[0].data.push(this.modalData.lec_info.Pass)
        data.datasets[0].data.push(this.modalData.lec_info.F)
      }
      //non-PF과목
      else
      {
        data.labels = [ 'A+', 'A', 'B+', 'B', 'Others', 'F' ]
        data.datasets[0].data.push(this.modalData.lec_info['A+'])
        data.datasets[0].data.push(this.modalData.lec_info['A0'])
        data.datasets[0].data.push(this.modalData.lec_info['B+'])
        data.datasets[0].data.push(this.modalData.lec_info['B0'])
        data.datasets[0].data.push(this.modalData.lec_info['C+']+this.modalData.lec_info['C0']+this.modalData.lec_info['D+']+this.modalData.lec_info['D0'])
        data.datasets[0].data.push(this.modalData.lec_info['F'])

      }
      return data
    },
    createChart(){
      new Chart(this.$refs.barChart, {
        type:'pie',
        data:this.setChart(),
        options:this.options
      })

    }
  }

};

const ctx = document.getElementById('myChart');


</script>

<style lang="sass">
@import '../../variables'

.lec-details-modal,
.overlay
    width: 400px
    height: 600px
    position: absolute
    left:0
    top:0
    align-items: center
.overlay
    opacity: 0.4
    background-color: black
    
.lec-details-modal-card
    background-color: $error-color
    position: absolute
    width: 360px
    left: 20px
    margin: auto
    margin-top: 20%
    background-color: white
    height : 400px
    z-index: 10
    border: 3px solid white
    overflow-y: overlay
.lec-details-modal-card::-webkit-scrollbar 
  width : 0px
  
.lec-details-modal-card::-webkit-scrollbar-thumb
  background-color: rgba(0,0,0)
  height: 95%
.empty-cart
  width: 400px
  height: 450px
  opacity: 0
  background-color: black

.detail-info-row
  display: inline-flex
  flex-wrap: wrap

</style>