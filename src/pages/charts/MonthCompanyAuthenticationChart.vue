<template>
  <view class="charts-box">
    <qiun-data-charts
        type="column"
        :chartData="MonthChartData"
        background="none"
    />
  </view>
</template>

<script>
import {getJson} from "../../network/request";

export default {
  name: "MonthCompanyAuthenticationChart",
  data() {
      return {
        MonthChartData:{
          "categories": [],
          "series": [
            {
              "name": "入驻公司",
              "data": []
            }
          ]
        },
        params: {
          type: "Company",
          name: "statistics",
          version: 0
        },
      }
  },
  methods: {
    getCompany() {
      getJson(this.params).then(res => {
        let data = res.data.countGroupByMonth.splice(1,6).reverse()
        for (let i = 0; i < data.length; i++) {
          this.MonthChartData.categories.push(data[i].month)
          this.MonthChartData.series[0].data.push(data[i].count)
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