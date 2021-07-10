<template>
  <view class="charts-box">
    <qiun-data-charts
        type="bar"
        :chartData="chartData"
        background="none"
    />
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
            "name": "水费排行",
            "data": []
          }
        ]
      },
    }
  },
  methods: {
    billList() {
      getJson(this.params).then(res => {
        //获得水费排行
        for (let i = 0; i < res.data.topMap.水费.length; i++) {
          console.log(res.data.topMap.水费[i])
          this.chartData.categories.push(res.data.topMap.水费[i].companyName)
          this.chartData.series[0].data.push(res.data.topMap.水费[i].amount)
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