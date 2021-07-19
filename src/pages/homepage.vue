<template>
  <view>
    <br>
    <h3 style="text-align: center">柳州天步科技创业园智慧园区</h3>
    <br>
    <hr style="width: 80%; position: absolute; left: 10%">

    <carousel />


    <settle-in-company-chart />
    <subsidy-status-chart />
    <hydropower-chart />
    <br><br>
    <number-of-patents />


    <button type="primary" size="mini" @click="signIn">点击登录</button>

  </view>
</template>

<script>

import settleInCompanyChart from "./charts/settleInCompanyChart";
import HydropowerChart from "./charts/hydropowerChart";
import SubsidyStatusChart from "./charts/subsidyStatusChart";
import Carousel from "./carousel";
import NumberOfPatents from "./charts/numberOfPatents";
export default {
  components: {
    NumberOfPatents,
    Carousel,
    SubsidyStatusChart,
      HydropowerChart, settleInCompanyChart
  },
  methods: {
    signIn() {
      // this.$router.push({path: 'pages/versionControl'})
      uni.showModal({
        title:"提示",
        content:
            // "是否删除该图片",
            {
          template: '<div>foo</div>'
        },
        showCancel:true,
        cancelText:'不删除',
        confirmText:'删除',
        success:res=>{
          if(res.confirm){
            // 用户点击确定

          }else{
            // 否则点击了取消
          }
        }
      })

    }
  }
}
</script>

<style scoped>

</style>