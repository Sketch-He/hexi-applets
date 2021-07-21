<template>
  <view style="margin-top: 40px">

    <view style="height: 50px;background: #191D3A; color: white">
      <h3 style="text-align: center; padding-top: 15px">补贴企业数据</h3>
    </view>
      <h4 style=" margin-top: 10px;">补贴金额/月</h4>
    <view class="charts-box">
      <qiun-data-charts
          type="line"
          :chartData="chartData"
          background="none"
      />
    </view>
    <view class="charts-box" >
      <hr />
      <h4>补贴金额/年</h4>
      <qiun-data-charts
          type="line"
          :chartData="subsidyChartData"
          background="none"
      />
    </view>
  </view>
</template>

<script>

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


      uni.request({
        url: "https://www.xykgjt.net/json/get",
        data: this.params,
        success: (res) => {
          res = res.data
          for (let i = 0; i < res.data.sumGroupByYear.length; i++) {
            this.subsidyChartData.categories.push(res.data.sumGroupByYear[i].year)
            this.subsidyChartData.series[0].data.push(res.data.sumGroupByYear[i].sum)
          }

          let data = res.data.sumGroupByMonth.splice(1,4).reverse()
          for (let i = 0; i < data.length; i++) {
            this.chartData.categories.push(data[i].month)
            this.chartData.series[0].data.push(data[i].sum)
          }
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
  margin-top: 40px
}
hr {
  width: 80%;
  position: absolute;
  left: 10%
}
h4 {
  text-align: center;
}
</style>