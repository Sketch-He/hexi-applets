<template>
<view>
  <h3 style="text-align: center; margin-top: 20%">当前版本：{{currentVersion}}</h3>
  <br>
  <picker class="list" mode="selector" :range="array" @change="picker1" :value="index">
    <button type="primary" style="width: 50%;">切换版本</button>
  </picker>
  <br>
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
.list{
  /*border: 1px black solid;*/
  /*border-radius: 5px;*/
  /*!*height: 46px;*!*/
  /*width: 50%;*/
}
</style>