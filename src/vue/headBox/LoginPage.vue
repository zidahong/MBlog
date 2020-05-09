<template>
  <div id="login-page-background">
    <div id="login-page">
      <div id="login-page-head">
        <div>登陆</div>
        <button @click="isClick">X</button>
      </div>
      <div id="login-page-input">
        <div class="input-class-box">
          <img src="~@/img/login/loginUser.png" />
          <input
            id="login-page-input-user"
            type="text"
            v-model="user"
            placeholder="用户名"
            class="input-class"
          />
        </div>
        <div class="input-class-box">
          <img src="~@/img/login/loginPassword.png" />
          <input
            id="login-page-input-password"
            type="password"
            v-model="password"
            placeholder="输入密码"
            class="input-class"
          />
        </div>

        <div id="login-page-input-check">
          <div id="check-input-tip">
            <span v-if="isShow">用户或密码错误！</span>
            <span v-if="isSerError">登陆失败！</span>
          </div>
          <div id="check-input-remenberPassword">
            <input type="checkbox" name="postCheck" id="check" />
            <label for="check">记住密码</label>
          </div>
        </div>
        <div id="login-page-input-button">
          <button @click="isLogin" type="button" class="input-button">登陆</button>
        </div>
        <div id="login-page-foot">
          <a href="/">忘记密码</a>
          <span>|</span>
          <a href="/">注册账号</a>
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
      isSerError: false
    };
  },
  methods: {
    isClick() {
      this.$emit("isCloseLoginPage", false);
    },
    isLogin() {
      this.isShow = false;
      requstLogin.isLogin(this.user, this.password, data => {
        if (data == "404") {
          this.isShow = true;
        } else if (data == "") {
          this.isSerError == true;
        } else {
          this.$emit("isLoginOk", data);
        }
      });
    }
  }
};
</script>

<style>
@import "~@/css/loginPage.css";
</style>