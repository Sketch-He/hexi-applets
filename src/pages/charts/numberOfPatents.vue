<template>
<view>

  <br>
  <h3 style="text-align: center">公司专利数据</h3>
  <hr style="width: 80%; position: absolute; left: 10%">
  <br>
  <h4 style="text-align: center">专利状态</h4>
  <view class="charts-box">
    <qiun-data-charts
        type="column"
        :chartData="patentStatus"
        background="none"
    />
  </view>
  <hr style="width: 80%; position: absolute; left: 10%">
  <br>
  <h4 style="text-align: center" >专利类型</h4>
  <view class="charts-box">
    <qiun-data-charts
        type="rose"
        :chartData="patentType"
        background="none"
    />
  </view>

  <hr style="width: 80%; position: absolute; left: 10%">
  <br>
  <h4 style="text-align: center">专利申请/月</h4>
  <view class="charts-box">
    <qiun-data-charts
        type="column"
        :chartData="patentApply"
        background="none"
    />
  </view>
</view>
</template>

<script>
import {getJson} from "../../network/request";

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
      getJson(this.params).then(res => {
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
</style>