<template>
<view>
  <swiper
      indicator-dots
      circular
      autoplay
      interval=2000
  >
    <swiper-item>
      <img src="../assets/image/img.png" height="100%" width="100%"/>
    </swiper-item>
    <swiper-item>
      <img src="../assets/image/img_2.png" height="100%" width="100%"/>
    </swiper-item>
    <swiper-item>
      <img src="../assets/image/img_1.png" height="100%" width="100%"/>
    </swiper-item>
  </swiper>
  <br><hr style="width: 80%; position: absolute; left: 10%">

  <br>
  <view>
    <h3 style="text-align: center">园区鸟瞰图</h3><br>
    <img src="../assets/image/screen.jpg" height="100%" width="100%"/></view>
  <br><hr style="width: 80%; position: absolute; left: 10%">
</view>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
    }
  }
 }
</script>

<style scoped>

</style>