<template>
<view  style="margin-top: 40px">
  <view style="height: 50px;background: #191D3A; color: white">
    <h3 style="text-align: center; padding-top: 15px">公司专利数据</h3>
  </view>
  <h4 style="margin-top: 10px">专利状态</h4>
  <view class="charts-box">
    <qiun-data-charts
        type="column"
        :chartData="patentStatus"
        background="none"
    />
  </view>
  <view class="charts-box"  style="margin-top: 20px">
  <hr />
  <h4>专利类型</h4>
    <qiun-data-charts
        type="rose"
        :chartData="patentType"
        background="none"
    />
  </view>
  <view class="charts-box">
  <hr />
  <h4>专利申请/月</h4>
    <qiun-data-charts
        type="column"
        :chartData="patentApply"
        background="none"
    />
  </view>
</view>
</template>

<script>

export default {
  name: "numberOfPatents",
  data() {
    return {
      params: {
        type: "Patent",
        name: "statistics",
        version: 0
      },
      patentStatus: {
        "categories": [],
        "series": [
          {
            "name": "专利状态",
            "data": [
            ]
          },
        ]
      },
      patentType:{
        "series": [
          {
            "data": []
          }
        ]
      },
      patentApply: {
        "categories": [],
        "series": [
          {
            "name": "专利申请",
            "data": [
            ]
          },
        ]
      }

    }
  },
  methods: {
    getPatent() {

      uni.request({
        url: "https://www.xykgjt.net/json/get",
        data: this.params,
        success: (res) => {
          res = res.data
          //专利状态
          for (let i = 0; i < res.data.countGroupByStatus.length; i++) {
            this.patentStatus.categories.push(res.data.countGroupByStatus[i].status)
            this.patentStatus.series[0].data.push(res.data.countGroupByStatus[i].count)
          }
          //专利类型
          for (let i = 0; i < res.data.countGroupByType.length; i++) {
            this.patentType.series[0].data.push({
              name: res.data.countGroupByType[i].type,
              value: res.data.countGroupByType[i].count
            })
          }
          //   专利申请
          for (let i = 0; i < res.data.countGroupByMonth.length; i++) {
            this.patentApply.categories.push(res.data.countGroupByMonth[i].month)
            this.patentApply.series[0].data.push(res.data.countGroupByMonth[i].count)
          }
        }
      })
    }
  },
  mounted() {
    this.getPatent()
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