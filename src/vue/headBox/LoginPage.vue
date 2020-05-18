<template>
  <div id="login-page-background">
    <div id="login-page">
      <div id="login-page-head">
        <div>登陆</div>
        <button @click="isClose">X</button>
      </div>
      <div id="login-page-input">
        <div class="input-class-box">
          <input
            id="login-page-input-user"
            type="text"
            v-model="user"
            placeholder="用户名"
            class="input-class"
            @focus="closeShowError"
          />
          <span class="error-tip" v-if="isShow">用户或密码错误！</span>
        </div>
        <div class="input-class-box">
       
          <input
            id="login-page-input-password"
            type="password"
            v-model="password"
            placeholder="输入密码"
            class="input-class"
            @focus="closeShowError"
          />
        </div>

        <div id="login-page-input-check">
          <div id="create-acount">
             <span @click="showCreateAcountPage"><a>注册账号</a></span>
          </div>
          <div id="forget-password">
              <a href="/">忘记密码?</a>
          </div>
        </div>
        <div id="login-page-input-button">
          <button @click="isLogin" type="button" class="input-button">登陆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let requstLogin = require("@/js/ajax.js");

export default {
  name: "LoginPage",

  data() {
    return {
      user: "",
      password: "",
      isShow: false,
   
    };
  },
  methods: {
    isClose() {
      this.$store.commit("closeLoginPage")
    },
    isLogin() {
      requstLogin.isLogin(this.user, this.password, data => {
        if (data == "404") {
          this.isShow = true; 
        } else {
          this.$store.commit("login", data);
          this.$store.commit("closeLoginPage");
        }
      });
    },
    showCreateAcountPage(){
      this.$store.commit("closeLoginPage");
      this.$store.commit("openCreateAcountPage");

    },
    closeShowError(){
      this.isShow = false;
    }
  }
};
</script>

<style>
@import "~@/css/loginPage.css";
</style>