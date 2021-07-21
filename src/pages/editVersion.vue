<template>
<view>
  <h3 style="text-align: center; margin-top: 20%">当前版本：{{currentVersion}}</h3>
  <br>
  <hr>
  <picker class="list" mode="selector" :range="array" @change="picker1" :value="index">
    <button type="primary" style="width: 50%; margin-top: 30px; margin-bottom: 30px">切换版本</button>
  </picker>
</view>
</template>

<script>
import {getVersion, setVersion, versionList} from "../network/request";

export default {
  name: "editVersion",
  data() {
    return {
      array:[],
      index:0,
      currentVersion: null
    }
  },
  methods: {
    picker1(e) {
      this.index = e.detail.value
      setVersion(e.detail.value).then(res => {
        console.log(res)
        if(res.code === 2000) {
          uni.showToast({
            title: "切换成功",
            icon: "success",
            position: "top"
          })
        this.getversion()
        }
      })

    },
    getversion() {
      getVersion().then(res => {
        console.log(res)
        this.currentVersion = res.data.id
      })
    },
    getversionlist() {
      versionList().then(res => {
        this.array = res.data
        console.log(res)
      })
    }
  },
  mounted() {
    this.getversion()
    this.getversionlist()
  }
}
</script>

<style scoped>
hr {
  width: 80%;
  position: absolute;
  left: 10%
}
</style>