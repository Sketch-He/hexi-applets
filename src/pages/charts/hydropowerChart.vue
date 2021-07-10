<template>
  <view>
    <view class="charts-box">
      <h3 style="text-align: center">企业用水量排行</h3>
      <qiun-data-charts
          type="column"
          :chartData="chartData"
          background="none"
      />
    </view>
    <br><hr style="width: 80%; position: absolute; left: 10%">
    <br>
    <view class="charts-box">
      <h3 style="text-align: center">企业用电量排行</h3>
      <qiun-data-charts
          type="column"
          :chartData="electricChartData"
          background="none"
      />
    </view>
  </view>
</template>

<script>
import {getJson} from "../../network/request";

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
      getJson(this.params).then(res => {
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
</style>