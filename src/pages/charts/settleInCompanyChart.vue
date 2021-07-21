<template>
  <view>
<!--公司类型-->
    <view style="height: 45px;background: #191D3A; color: white">
      <h3 style="text-align: center; padding-top: 10px">园区入驻企业数据</h3>
    </view>
      <h4 style=" margin-top: 10px;">企业类型</h4>
    <view class="charts-box">
      <qiun-data-charts
          type="demotype"
          :chartData="chartData"
          background="none"
      />
    </view>
    <!--公司认证-->
    <view class="charts-box" style="margin-top: 20px">
       <hr />
      <h4 >企业认证</h4>
      <qiun-data-charts
          type="pie"
          :chartData="authenticationChartData"
          background="none"
      />
    </view>

<!--月入驻公司数据-->
    <view class="charts-box" style="margin-top: 40px">
    <hr />
      <h4 >企业入驻信息/月</h4>
      <qiun-data-charts
          type="column"
          :chartData="MonthChartData"
          background="none"
      />
    </view>

    <view class="charts-box" style="margin-top: 40px">
      <hr />
      <h4>企业入驻信息/年</h4>
      <qiun-data-charts
          type="column"
          :chartData="YearChartData"
          background="none"
      />
    </view>
  </view>
</template>

<script>

export default {
  name: "settleInCompanyChart",
  data() {
    return {
      //公司类型
      chartData:{
        "series": [
          {
            "data": []
          }
        ],
      },
      //月入驻公司数据
      MonthChartData:{
        "categories": [],
        "series": [
          {
            "name": "入驻公司",
            "data": []
          }
        ]
      },
      //年入驻公司数据
      YearChartData:{
        "categories": [],
        "series": [
          {
            "name": "入驻公司",
            "data": []
          }
        ]
      },

      //公司认证
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

      uni.request({
        url: "https://www.xykgjt.net/json/get",
        data: this.params,
        success: (res) => {
          res = res.data
          for (let i = 0; i < res.data.countGroupByType.length; i++) {
            this.chartData.series[0].data.push({
              name: res.data.countGroupByType[i].type,
              value: res.data.countGroupByType[i].count
            })
          }

          //月入驻公司数据
          let data = res.data.countGroupByMonth.splice(1,4).reverse()
          for (let i = 0; i < data.length; i++) {
            this.MonthChartData.categories.push(data[i].month)
            this.MonthChartData.series[0].data.push(data[i].count)
          }

          //公司认证
          for (let i = 0; i < res.data.countGroupByCertificationType.length; i++) {
            this.authenticationChartData.series[0].data.push({
              name: res.data.countGroupByCertificationType[i].certificationType,
              value: res.data.countGroupByCertificationType[i].count
            })
          }

          //公司入驻/年
          let count = res.data.countGroupByYear.splice(1, 4)
          for (let i = 0; i < count.length; i++) {
            this.YearChartData.categories.push(count[i].year)
            this.YearChartData.series[0].data.push(count[i].count)
          }
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
h4 {
  text-align: center;
}
hr {
  width: 80%;
  position: absolute;
  left: 10%;

}
</style>