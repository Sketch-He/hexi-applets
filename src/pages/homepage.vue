<template>
  <view>
    <br>
    <h3 style="text-align: center">柳州天步科技创业园智慧园区</h3>
    <br>
    <hr style="width: 80%; position: absolute; left: 10%">
    <settle-in-company-chart />
    <hydropower-chart />
    <subsidy-status-chart />
  </view>
</template>

<script>

import settleInCompanyChart from "./charts/settleInCompanyChart";
import HydropowerChart from "./charts/hydropowerChart";
import SubsidyStatusChart from "./charts/subsidyStatusChart";
export default {
  components: {
    SubsidyStatusChart,
      HydropowerChart, settleInCompanyChart
  },
}
</script>

<style scoped>

</style>