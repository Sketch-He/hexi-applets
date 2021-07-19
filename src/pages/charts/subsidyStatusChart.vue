<template>
  <view>
<!--    <br><hr style="width: 80%; position: absolute; left: 10%">-->
<!--    <br>-->
    <view class="charts-box">
      <h3 style="text-align: center">补贴金额/月</h3>
      <qiun-data-charts
          type="line"
          :chartData="chartData"
          background="none"
      />
    </view>
    <br><hr style="width: 80%; position: absolute; left: 10%">
    <br>
    <view class="charts-box">
      <h3 style="text-align: center">补贴金额/年</h3>

      <qiun-data-charts
          type="line"
          :chartData="subsidyChartData"
          background="none"
      />
    </view>
    <br><hr style="width: 80%; position: absolute; left: 10%">
    <br>
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
            "name": "补贴金额/月",
            "data": []
          }
        ]
      },
      subsidyChartData:{
        "categories": [],
        "series": [
          {
            "name": "补贴金额/年",
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