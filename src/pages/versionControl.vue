<template>
<view>
  <view v-if="show">
    <h3 style="text-align: center; margin-top: 10%;">输入账号密码登录</h3>
    <p class="loginBox">
      <input class="loginInput" placeholder="请输入账号" v-model="params.username"/>
      <input class="loginInput" style="margin-top: 5%; margin-bottom: 5%;"  type="password" placeholder="请输入密码"  v-model="params.password"/>
      <button type="primary" style="width: 50%" @click="login">登录</button>
    </p>
  </view>
  <view v-if="!show">
    <edit-version/>
    <button type="warn" style="width: 50%;" @click="logout">退出登录</button>
  </view>


</view>
</template>

<script>
import {UserLogin, UserLogout, UserStatus} from "../network/request";
import EditVersion from "./editVersion";
export default {
  name: "versionControl",
  components: {EditVersion},
  data() {
    return {
      params: {
      username: null,
      password: null,
      },
      show: true
    }
  },
  methods: {
    logout() {
       uni.showModal({
         title: '提示',
         content: '确定退出登录？',
          success: (res)=> {
             if (res.confirm) {

               UserLogout().then(res => {
                 console.log(res)
                 if(res.code === 2000) {
                   uni.showToast({
                     title: res.message,
                     icon: "success",
                   })
                   this.show = true
                 }
               })
               } else if (res.cancel) {
                   console.log('用户点击取消');
             }
         }
       });


    },
    login() {
      UserLogin(this.params)
          .then(res => {
            if(res.code === 2000) {
              uni.showToast({
                title: res.message,
                icon: "success",
                position: "top"
              })
              this.show = false
            }
            if(res.code !== 2000) {
              uni.showToast({
                title: res.message,
                icon: "error",
                position: "top"
              })
            }
          })
    }
  },
  mounted() {
    UserStatus().then(res => {
      if(res.code === 2000) {
        this.show = false
      }
      if(res.code !== 2000) {
        this.show = true
      }
    })

  }
}
</script>

<style scoped>
.loginBox {
  margin-top: 5%;
  text-align: center;
}
.loginInput {
  width: 80%;
  margin-left: 10%;
  border: 1px #F8F8F8 solid;
  border-radius: 5px;
  height: 46px;
}

</style>