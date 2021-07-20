<template>
  <view>
    <view style="height: 50px;background: #191D3A; color: white">
      <h3 style="text-align: center; padding-top: 15px">柳州天步科技创业园智慧园区</h3>
    </view>

    <hr style="width: 80%; position: absolute; left: 10%">

    <carousel />
    <settle-in-company-chart />
    <subsidy-status-chart />
    <number-of-patents />
    <hydropower-chart />
    <br>
    <hr style="width: 80%; position: absolute; left: 10%">
    <br>
    <button @click="signIn">登录</button>

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
      // this.$router.push({path: 'pages/editVersion'})
      this.$router.push({path: 'pages/versionControl'})

    }
  },
  // computed: {
  //
  //   userLogin:function () {
  //     return this.$store.getters.getttersLogin
  //   }
  // },
  mounted() {
  }
}
</script>

<style scoped>

</style>