<template>
  <view>
    <view class="charts-box">
      <qiun-data-charts
          type="line"
          :chartData="chartData"
          background="none"
      />
    </view>
    <view class="charts-box">
      <qiun-data-charts
          type="line"
          :chartData="subsidyChartData"
          background="none"
      />
    </view>
  </view>
</template>

<script>
import {getJson} from "../../network/request";

export default {
  name: "subsidyStatusChart",
  data() {
    return {

      chartData:{
        "categories": [],
        "series": [
          {
            "name": "入驻公司",
            "data": []
          }
        ]
      },
      subsidyChartData:{
        "categories": [],
        "series": [
          {
            "name": "入驻公司",
            "data": []
          }
        ]
      },
      params: {
        type: "Subsidy",
        name: "statistics",
        version: 0
      },
    }
  },
  methods: {
    getCompany() {
      getJson(this.params).then(res => {

        for (let i = 0; i < res.data.sumGroupByYear.length; i++) {
          this.subsidyChartData.categories.push(res.data.sumGroupByYear[i].year)
          this.subsidyChartData.series[0].data.push(res.data.sumGroupByYear[i].sum)
        }

        let data = res.data.sumGroupByMonth.splice(1,4).reverse()
        for (let i = 0; i < data.length; i++) {
          this.chartData.categories.push(data[i].month)
          this.chartData.series[0].data.push(data[i].sum)
        }
      })
    }
  },
  mounted() {
    this.getCompany()
  }
}
</script>

<style scoped>
.charts-box{
  width: 100%;
  height:300px;
}
</style>