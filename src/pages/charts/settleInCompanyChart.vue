<template>
  <view class="charts-box">
    <qiun-data-charts
        type="pie"
        :chartData="chartData"
        background="none"
    />
  </view>
</template>

<script>
import {getJson} from "../../network/request";

export default {
  name: "settleInCompanyChart",
  data() {
    return {
      chartData:{
        "series": [
          {
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
    //获取公司数据
    getCompany() {
      getJson(this.params).then(res => {
        for (let i = 0; i < res.data.countGroupByType.length; i++) {
          this.chartData.series[0].data.push({
            name: res.data.countGroupByType[i].type,
            value: res.data.countGroupByType[i].count
          })
        }
      })
    }
  },
  mounted() {
    this.getCompany()
  },
}
</script>

<style scoped>
.charts-box{
  width: 100%;
  height:300px;
}
</style>