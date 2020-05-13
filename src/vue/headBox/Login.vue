<template>
  <div id="login-box">
    <!-- 显示登陆前 -->
    <div v-if="!$store.state.isLogining" id="login-box-before">
      <button id="login-box-login" @click="isLogin">立即登录</button>
      <button id="login-box-new" @click="isCreate">免费注册</button>
    </div>

    <!-- 显示登录后 -->
    <div v-else id="login-box-after">
      <img src="@/img/login/headpic.png" />
      <div id="login-box-after-info">欢迎用户：{{$store.state.user}}</div>
      <button>设置</button>
      <button @click="isLoginOut">退出</button>
    </div>
  </div>

</template>

<script>
const tool = require('@/js/tool.js');
export default {
  name: "Login",
  created() {
    // 检测是否已经登陆,更新登陆用户名
    if (document.cookie) {
      this.$store.commit('login',tool.cookieToObj().LoginName);
    }
  },
  updated(){
    // 当换用户时不用刷新页面也能显示用户名
     if (document.cookie) {
       this.$store.commit('login',tool.cookieToObj().LoginName);
    }
  },
  methods: {
    //显示登陆页
    isLogin() {
      this.$store.commit("openLoginPage");
    },
    //显示注册页
    isCreate(){
      this.$store.commit("openCreateAcountPage");
    },

    // // 删除cookie并刷新页面
    isLoginOut() {
      document.cookie =
        document.cookie.match(/[^ =;]+(?=\=)/g)[0] +
        "=0;expires=" +
        new Date(0).toUTCString();
       location.reload();
    }
  }
};
</script>

<style>
@import url("~@/css/login.css");
</style>