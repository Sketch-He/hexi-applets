<template>
<view>
  <swiper
      indicator-dots
      circular
      autoplay
      interval=3000
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
  <view style="background: #191D3A">
    <view style="height: 50px;background: #191D3A; color: white">
      <h4 style="text-align: center; padding-top: 15px">园区鸟瞰图</h4>
    </view>
    <img src="../assets/image/screen.jpg" height="130.74px" width="375px"/>
  </view>
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