<template>
  <div class="lec-details-modal">
    <div class= "overlay-lec-detail valign-text-middle notosanskr-bold-white-24px" @click="$emit('modal-close')">
      <div class = empty-cart notosanskr-bold-white-16px></div>
      창을 닫으려면 바깥을 클릭
    </div>
    <div class= "lec-details-modal-card">
      <div class= "row">
        <RMenuModifiableTitleBox color="darkYellow" size="440" :text=this.modalData.lec_info.과목명></RMenuModifiableTitleBox>
        <RMenuModifiableTitleBox color="darkYellow" size="100" :text=this.modalData.lec_info.대표교강사명 ></RMenuModifiableTitleBox>
      </div>
      <div class= "row">
        <RMenuTitleBox color="yellow" size="240">수업 시간</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="240">강의실</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="60">정원</RMenuTitleBox>
      </div>
      <div class= "row">
        <RMenuTextBox color="yellow" size="240" :text=this.modalData.lec_info.수업시간></RMenuTextBox>
        <RMenuTextBox color="yellow" size="240" :text=this.modalData.lec_info.강의실></RMenuTextBox>
        <RMenuTextBox color="yellow" size="60" :text='this.modalData.lec_info.정원'></RMenuTextBox>
      </div>
      <div class= "row">
        <RMenuTitleBox color="yellow" size="90">학수번호</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="90">수업번호</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="180">특수수업</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="90">이수구분</RMenuTitleBox>
        <RMenuTitleBox color="yellow" size="90">학점</RMenuTitleBox>
      </div>
      <div class= "row">
        <RMenuTextBox color="yellow" size="90" :text=this.modalData.lec_info.학수번호></RMenuTextBox>
        <RMenuTextBox color="yellow" size="90" :text=this.modalData.lec_info.수업번호></RMenuTextBox>
        <RMenuTextBox color="yellow" size="180" :text=this.modalData.lec_info.특수수업구분></RMenuTextBox>
        <RMenuTextBox color="yellow" size="90" :text=this.modalData.lec_info.이수구분코드명></RMenuTextBox>
        <RMenuTextBox color="yellow" size="90" :text=this.modalData.lec_info.학점></RMenuTextBox>
      </div>
      <canvas id = "myChart" ref="pieChart">
      </canvas>
      <div v-if="this.modalData.prev_infos.length==0">
        작년에 개설되지 않은 강의입니다.
      </div>
      <div v-for="(prev, index) in this.modalData.prev_infos" style="border: solid 2px #eea900" :key="prev">
        <div class = "row">
          <RMenuTitleBox color="darkYellow" size="540">{{ prev.수업년도 }}년 {{ prev.수업학기 / 10 }}학기 인원 정보 {{ prev.대표교강사명 }}
            <img class="hide-button" src='hidebutton.svg' @click="isRegisteredShow[index] = !isRegisteredShow[index]" v-show="!this.isRegisteredShow[index]">
            <img class="show-button" src='showbutton.svg' @click="isRegisteredShow[index] = !isRegisteredShow[index]" v-show="this.isRegisteredShow[index]">
          </RMenuTitleBox>
        </div>
        <div v-show="isRegisteredShow[index]">
          <div class= "row">
            <RMenuTitleBox color="yellow" size="114">정원</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="114">수강</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="114">증원</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="114">취소</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="114">정정취소</RMenuTitleBox>
          </div>
          <div class= "row">
            <RMenuTextBox color="yellow" size="114" :text=prev.제한인원></RMenuTextBox>
            <RMenuTextBox color="yellow" size="114" :text=prev.신청인원></RMenuTextBox>
            <RMenuTextBox color="yellow" size="114" :text=prev.증원인원></RMenuTextBox>
            <RMenuTextBox color="yellow" size="114" :text=prev.전체취소></RMenuTextBox>
            <RMenuTextBox color="yellow" size="114" :text=prev.정정취소></RMenuTextBox>
          </div>
        </div>
        <div class="row"> 
          <RMenuTitleBox color="darkYellow" size="540">과별 희망등록인원 (총원: {{ prev.희망수업등록인원 }}명)
            <img class="hide-button" src='hidebutton.svg' @click="isWantedShow[index] = !isWantedShow[index]" v-show="!this.isWantedShow[index]">
            <img class="show-button" src='showbutton.svg' @click="isWantedShow[index] = !isWantedShow[index]" v-show="this.isWantedShow[index]">
          </RMenuTitleBox>
        </div>
        <div class="detail-info-row" v-show="isWantedShow[index]">
          <div v-for="detailInfo in prev.희망수업세부정보" :key="detailInfo">
            <RMenuTitleBox color="yellow" size="106" fontsize = "16" style="overflow: hidden" @click="isWantedShow[index] = !isWantedShow[index]">{{detailInfo.희망신청소속}}</RMenuTitleBox>
            <RMenuTextBox color="yellow" size="106" fontsize = "16" @click="isWantedShow[index] = !isWantedShow[index]" :text=detailInfo.학생수></RMenuTextBox>
          </div>
        </div>
        <div class= "row">
          <RMenuTitleBox color="darkYellow" size="540">이 수업을 ~순위로 선택했던 인원</RMenuTitleBox>
          <img class="hide-button" src='hidebutton.svg' @click="isRankingShow[index] = !isRankingShow[index]" v-show="!this.isRankingShow[index]">
          <img class="show-button" src='showbutton.svg' @click="isRankingShow[index] = !isRankingShow[index]" v-show="this.isRankingShow[index]">
        </div>
        <div v-show="isRankingShow[index]">
          <div class="row">
            <RMenuTitleBox color="yellow" size="95">1순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="95">2순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="95">3순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="95">4순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="95">5순위</RMenuTitleBox>
            <RMenuTitleBox color="yellow" size="95">6순위~</RMenuTitleBox>
          </div>
          <div class="row">
            <RMenuTextBox color="yellow" size="95" :text=prev.순위1></RMenuTextBox>
            <RMenuTextBox color="yellow" size="95" :text=prev.순위2></RMenuTextBox>
            <RMenuTextBox color="yellow" size="95" :text=prev.순위3></RMenuTextBox>
            <RMenuTextBox color="yellow" size="95" :text=prev.순위4></RMenuTextBox>
            <RMenuTextBox color="yellow" size="95" :text=prev.순위5></RMenuTextBox>
            <RMenuTextBox color="yellow" size="95" :text=prev.순위5초과></RMenuTextBox>
          </div>
        </div>
        <div class = "padding"></div>
      </div>
    </div>
  </div>
</template>
  

<script>
import RMenuTitleBox from "./RMenu/Box/RMenuTitleBox";
import RMenuModifiableTitleBox from "./RMenu/Box/RMenuModifiableTitleBox";
import RMenuTextBox from "./RMenu/Box/RMenuTextBox";
import {Chart, registerables} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
    return {
      isRankingShow : [false, false, false, false, false, false, false, false,],
      isWantedShow : [false, false, false, false, false, false, false, false,],
      isRegisteredShow: [false, false, false, false, false, false, false, false,],
    }
  },
  mounted(){
    this.setChart()
  },
  methods:{
    setData(){
      let data =     
      {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [],
        borderColor: [
          'rgba(255, 255, 255, 1)',
        ],
        label: '인원수',
        borderWidth: 2
      }]
    }
      //PF과목
      if (this.modalData.lec_info['A+'] + this.modalData.lec_info['A0'] + this.modalData.lec_info['B+'] + this.modalData.lec_info['B0'] + this.modalData.lec_info['C+'] + this.modalData.lec_info['C0'] + this.modalData.lec_info['D+'] + this.modalData.lec_info['D0'] == 0)
      {
        data.labels = ['P', 'F']
        data.datasets[0].data.push(this.modalData.lec_info.Pass)
        data.datasets[0].data.push(this.modalData.lec_info.F)
        data.datasets[0].backgroundColor =
        [ '#4BC204',
          '#FF1746',]
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
        data.datasets[0].backgroundColor =
        [ 
          '#097f09',
          '#4BC204',
          '#FEDA00',
          '#FEA000',
          '#FF1746',
          '#747474']

      }
      return data
    },
    setOptions(){
      let options={
        plugins: {
          title: {
            display: true,
            text: this.modalData.lec_info.과목명 + ' 성적 분포',
            position: 'top',
            color: '#000000',
            font: {
              size: 25,
            }
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false
          },
          datalabels: {
            color: '#FFF',
            textAlign: 'center',
            align: top,
            font: {
                size: 25,
            },
            formatter: function(value, ctx) {
                return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value;
            }
          }
        },
        maintainAspectRatio : true,
        animation: false,
      }
      return options
    },
    setChart(){
      var ctx = document.getElementById('myChart').getContext('2d')
      var myChart = new Chart(ctx, {
        plugins:[ChartDataLabels],
        type:'pie',
        data:this.setData(),
        options:this.setOptions(),
      })
    }
  }

};



</script>

<style lang="sass">
@import '../../variables'

.lec-details-modal
  width: 600px
  height: 960px
  position: absolute

.overlay-lec-detail
  width: 100%
  height: 100%
  position: absolute
  opacity: 0.3
  background-color: $black
  align-items: center  
  border-radius: 15px

    
.lec-details-modal-card
  background-color: $error-color
  position: absolute
  left: 5%
  width: 90%
  height : 80%
  margin: auto
  margin-top: 5%
  background-color: white
  height : 80%
  z-index: 10
  border: 3px solid #eea900
  overflow-y: overlay
  border-top-left-radius: 15px
  border-top-right-radius: 15px

.empty-cart
  width: 100%
  height: 80%
  opacity: 0
  background-color: black

.detail-info-row
  display: inline-flex
  flex-wrap: wrap

.lec-details-modal-card::-webkit-scrollbar 
  width : 0px
  
.lec-details-modal-card::-webkit-scrollbar-thumb
  background-color: rgba(0,0,0)
  height: 95%

.show-button
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease
  position: absolute
  left: 90%
.show-button:hover
  transform: scale(1.1)
.show-button:active
  transform: rotate(90deg) scale(0.7)
.hide-button
  cursor: pointer
  height: 30px
  width: 30px
  transition: all 0.2s ease
  position: absolute
  left: 90%
.hide-button:hover
  transform: scale(1.1)
.hide-button:active
  transform: rotate(-90deg) scale(0.7)

.padding
  height: 30px
  width: 100%

</style>