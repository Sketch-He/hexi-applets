<template>
  <view class="charts-box">
    <qiun-data-charts
        type="pie"
        :chartData="authenticationChartData"
        background="none"
    />
  </view>
</template>

<script>
import {getJson} from "../../network/request";

export default {
  name: "companyAuthenticationChart",
  data() {
    return {
      authenticationChartData:{
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
        for (let i = 0; i < res.data.countGroupByCertificationType.length; i++) {
          this.authenticationChartData.series[0].data.push({
            name: res.data.countGroupByCertificationType[i].certificationType,
            value: res.data.countGroupByCertificationType[i].count
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