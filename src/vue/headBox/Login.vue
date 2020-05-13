<template>
  <div id="login-box">
    <!-- 显示登陆前 -->
<<<<<<< HEAD
    <div v-if="!$store.state.isLogining" id="login-box-before">
=======
    <div v-if="isShowLogin" id="login-box-before">
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
      <button id="login-box-login" @click="isLogin">立即登录</button>
      <button id="login-box-new" @click="isCreate">免费注册</button>
    </div>

    <!-- 显示登录后 -->
<<<<<<< HEAD
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
=======
    <div id="login-box-after" v-else>
      <img src="@/img/login/headpic.png" />
      <div id="login-box-after-info">欢迎用户：{{username}}</div>
      <button>设置</button>
      <button @click="isLoginOut">退出</button>
    </div>
    <LoginPage v-if="isShowLoginPage" @isCloseLoginPage="isCloseLoginPage" @isLoginOk="isLoginOk"></LoginPage>
    <CreatePage v-if="isShowCreatePage" @isCloseCreatePage="isCloseCreatePage" @isCreateOk="isCreateOk"></CreatePage>
  </div>
</template>

<script>
import LoginPage from "@/vue/headBox/LoginPage";
import CreatePage from "@/vue/headBox/CreateAcount";
const tool = require('@/js/tool.js');
export default {
  name: "Login",
  data() {
    return {
      // 显示登陆按钮true/已经登陆false
      isShowLogin: true,
      //显示登陆的页面
      isShowLoginPage: false,
      //显示注册用户页面
       isShowCreatePage: false,
       //用户名
       username: '',
    };
  },
  components: {
    LoginPage,
    CreatePage
  },
  created() {
    // 检测是否已经登陆,更新登陆用户名
    if (document.cookie) {
      this.isShowLogin = false;
      this.username = tool.cookieToObj().LoginName;
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
    }
  },
  updated(){
    // 当换用户时不用刷新页面也能显示用户名
     if (document.cookie) {
<<<<<<< HEAD
       this.$store.commit('login',tool.cookieToObj().LoginName);
=======
      this.isShowLogin = false;
      this.username = tool.cookieToObj().LoginName;
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
    }
  },
  methods: {
    //显示登陆页
    isLogin() {
<<<<<<< HEAD
      this.$store.commit("openLoginPage");
    },
    //显示注册页
    isCreate(){
      this.$store.commit("openCreateAcountPage");
    },

    // // 删除cookie并刷新页面
=======
      this.isShowLoginPage = !this.isShowLoginPage;
    },
    //显示注册页
    isCreate(){
      this.isShowCreatePage = !this.isShowCreatePage;
    },
    //接收登录页组件的关闭信号 isCloseLoginPage
    isCloseLoginPage(val) {
      this.isShowLoginPage = val;
    },
    //接收登陆页组件的登陆信号
    isLoginOk(val) {
      if (val) this.isShowLogin = !val;
      this.isShowLoginPage = !val;
    },

    //关闭注册页面
     isCloseCreatePage(val) {
      this.isShowCreatePage = val;
    },

    //接收注册页组件的组成完成信号,显示登陆页面，关闭注册页面
    isCreateOk(val) {
      if (val) this.isShowLoginPage = val;
      this.isShowCreatePage = !val;
    },

    // 删除cookie并刷新页面
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
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