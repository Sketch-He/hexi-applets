<template>
  <view style="margin-top: 40px">
    <view style="height: 50px;background: #191D3A; color: white">
      <h3 style="text-align: center; padding-top: 15px">企业水电用量排行</h3>
    </view>
    <view class="charts-box">
      <h4 style="margin-top: 10px">企业用水量排行</h4>
      <qiun-data-charts
          type="column"
          :chartData="chartData"
          background="none"
      />
    </view>
    <view class="charts-box" style="margin-top: 40px">
      <hr />
      <h4>企业用电量排行</h4>
      <qiun-data-charts
          type="column"
          :chartData="electricChartData"
          background="none"
      />
    </view>
  </view>
</template>

<script>

export default {
  name: "hydropowerChart",
  data() {
    return {
      params: {
        type: "Bill",
        name: "statistics",
        version: 0
      },
      chartData:{
        "categories": [],
        "series": [
          {
            "name": "用水量排行",
            "data": []
          }
        ]
      },
      electricChartData:{
        "categories": [],
        "series": [
          {
            "name": "用电量排行",
            "data": []
          }
        ]
      },
    }
  },
  methods: {
    billList() {
      uni.request({
        url: "https://www.xykgjt.net/json/get",
        data: this.params,
        success: (res) => {
          res = res.data
          let water = res.data.topMap.水费.splice(0,5)
          let electric = res.data.topMap.电费.splice(0,5)
          //获得水费排行
          for (let i = 0; i < water.length; i++) {
            this.chartData.categories.push(water[i].companyName)
            this.chartData.series[0].data.push(water[i].amount)
          }
          //获得电费排行
          for (let i = 0; i < res.data.topMap.电费.length; i++) {
            this.electricChartData.categories.push(electric[i].companyName)
            this.electricChartData.series[0].data.push(electric[i].amount)
          }
        }
      })
    },
  },
  mounted() {
    this.billList()
  }
}
</script>

<style scoped>
.charts-box{
  width: 100%;
  height:300px;
}
hr {
  width: 80%;
  position: absolute;
  left: 10%
}
h4 {
  text-align: center
}
</style>