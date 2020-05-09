<template>
  <div id="create-page-background">
    <div id="create-page">
      <div id="create-page-head">
        <div>注册</div>
        <button @click="isClick">X</button>
      </div>
      <div id="create-page-input">
        <div class="create-page-input-class-box">
          <img src="~@/img/login/loginUser.png" />
          <input
            id="create-page-input-user"
            type="text"
            v-model="user"
            placeholder="用户名"
            class="create-page-input-class"
          />
        </div>
        <div class="create-page-input-class-box">
          <img src="~@/img/login/loginPassword.png" />
          <input
            id="login-page-input-password"
            type="password"
            v-model="password"
            placeholder="密码"
            class="create-page-input-class"
          />
        </div>
        <div class="create-page-input-class-box">
          <img src="~@/img/login/loginPassword.png" />
          <input
            id="login-page-input-password"
            type="password"
            v-model="passwordR"
            placeholder="再次输入密码"
            class="create-page-input-class"
          />
        </div>
        <div class="create-page-input-class-box">
          <img src="~@/img/login/loginPassword.png" />
          <input
            id="login-page-input-password"
            type="text"
            v-model="email"
            placeholder="输入邮箱"
            class="create-page-input-class"
          />
        </div>

        <div id="create-page-input-check">
          <div id="create-page-check-input-tip">
            <div v-if="isAlarmIfSame">两次密码输入不一致</div>
            <div v-else-if="isAlarmIfRegUser">用户名由数字和字母组成，以字母开头，大于4位小于8位</div>
            <div v-else-if="isAlarmIfRegPassword">密码需大于6位小于16位</div>
            <div v-else-if="isAlarmIfFault">用户已存在</div>
          </div>
        </div>
        <div id="create-page-input-button">
          <button @click="isCreate" type="button" class="create-page-input-button">注册</button>
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
      passwordR: "",
      email: "",
      isAlarmIfSame: false,
      isAlarmIfRegUser: false,
      isAlarmIfRegPassword: false,
      isAlarmIfFault:false,
    };
  },
  methods: {
    isClick() {
      this.$emit("isCloseCreatePage", false);
    },
    isCreate() {
      this.isAlarmIfSame = false;
      this.isAlarmIfRegUser = false;
      this.isAlarmIfRegPassword = false;
      this.isAlarmIfFault=false;

      // 用户名以字母开头且大于4位小于8位
      let regUser = /^([A-z])([0-9]|[A-z]){3,7}$/g;
      //密码大于6位小于16位，字母和数字
      let regPassword = /^([0-9]|[A-z])([0-9]|[A-z]){5,15}$/g;

      if (this.password != this.passwordR) {
        this.isAlarmIfSame = true;
      } else if (!regUser.test(this.user)) {
        this.isAlarmIfRegUser = true;
      } else if (!regPassword.test(this.password)) {
        this.isAlarmIfRegPassword = true;
      } else {
        requstLogin.isCreate(this.user, this.password, this.email, data => {
          if(data=='200'){
              alert("注册成功");
              this.$emit("isCreateOk", data);
          }else{
              this.isAlarmIfFault=true;
          }
        });
      }
    }
  }
};
</script>

<style>
@import "~@/css/createAcount.css";
</style>