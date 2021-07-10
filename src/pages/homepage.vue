<template>
  <view>
    <settle-in-company-chart />
    <hydropower-chart />
    <company-authentication-chart />
    <month-company-authentication-chart />
    <subsidy-status-chart />
  </view>
</template>

<script>

import settleInCompanyChart from "./charts/settleInCompanyChart";
import HydropowerChart from "./charts/hydropowerChart";
import CompanyAuthenticationChart from "./charts/companyAuthenticationChart";
import MonthCompanyAuthenticationChart from "./charts/MonthCompanyAuthenticationChart";
import SubsidyStatusChart from "./charts/subsidyStatusChart";
export default {
  components: {
    SubsidyStatusChart,
    MonthCompanyAuthenticationChart, CompanyAuthenticationChart, HydropowerChart, settleInCompanyChart},
  data() {
    return {
    }
  },

}
</script>

<style scoped>

</style>