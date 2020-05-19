<template>
  <div id="set-password">
    <div id="set-password-contain">
      <div id="set-pass-box-header">修改密码</div>
      <div class="set-password-input-box">
        <input class="set-password-input" v-model="changeInfo.user" placeholder="输入用户名~" />
        <span class="set-password-tip-err" v-if="isRegUser">用户名错误</span>
      </div>
      <div class="set-password-input-box">
        <input
          class="set-password-input"
          type="password"
          v-model="changeInfo.password"
          placeholder="输入新密码~"
        />
        <span class="set-password-tip-err" v-if="isRegPassword">密码格式错误</span>
      </div>

      <div class="set-password-input-box">
        <input
          class="set-password-input"
          type="password"
          v-model="passwordR"
          placeholder="再次输入新密码~"
        />
        <span class="set-password-tip-err" v-if="isDiffPassword">密码输入不同</span>
      </div>

      <div class="set-password-input-box">
        <input class="set-password-input" v-model="changeInfo.authCode" placeholder="请输入验证码~" />
        <span class="set-password-tip-err" v-if="isNullAuthCode">输入验证码</span>
        <button
          @click="sendAuth"
          :disabled="banSendAuth"
          :class="{'banSendClass':banClass,'set-password-submit-auth':authButton}"
        >发送验证码({{$store.state.countTime}}s)</button>
      </div>

      <div id="set-password-tip">
        <p v-if="isSend">已经向用户邮箱：{{userEmail}}发送验证码</p>
        <p v-if="isError" class="set-password-tip-err">验证码错误</p>
      </div>

      <div id="set-password-submit">
        <button @click="submitPassword">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
let ajax = require("@/js/ajax.js");

export default {
  name: "setPassword",
  data() {
    return {
      isSend: false,
      isError: false,
      isDiffPassword: false,
      isRegPassword: false,
      isRegUser: false,
      isNullAuthCode: false,
      

      banSendAuth: false,
      banClass: false,
      authButton: true,
      passwordR: "",
      changeInfo: {
        password: "",
        authCode: "",
        user: ""
      },
      userEmail:''
    };
  },
  methods: {
    sendAuth() {
      //发送验证码
      this.isRegUser = false;
      
      let regUser = /^([A-z])([0-9]|[A-z]){3,7}$/g;
      if (!regUser.test(this.changeInfo.user)) {
        this.isRegUser = true;
      } else {
        if ((this.$store.state.countTime = 60)) {
          this.banClass = true;
          this.banSendAuth = true;
          this.authButton = false;
          for (let i = 1; i <= 60; i++) {
            setTimeout(() => {
              this.$store.commit("cutCountTime");
            }, i * 1000);
          }
          setTimeout(() => {
            this.$store.commit("resetCountTime");
            this.banSendAuth = false;
            this.authButton = true;
            this.banClass = false;
          }, 61 * 1000);
          let querry = "authcode?user=" + this.changeInfo.user;
          ajax.ajaxString(querry, result => {
            console.log(result);
            if (result == "userOrEmailUdefined") {
              alert("找不到用户名或邮箱");
            } else if(result == "getEmailError"||result == 'sendEmailFaliure'){
              alert("服务发生错误");
            }else {
              this.userEmail = result;
              this.isError = false;
              this.isSend = true;
            }
          });
        }
      }
    },

    submitPassword() {
      this.isDiffPass = false;
      this.isRegPassword = false;
      this.isNullAuthCode = false;
      let regPassword = /^([0-9]|[A-z])([0-9]|[A-z]){5,15}$/g;
      let regUser = /^([A-z])([0-9]|[A-z]){3,7}$/g;
      if (!regUser.test(this.changeInfo.user)) {
        this.isRegUser = true;
      } else if (!regPassword.test(this.changeInfo.password)) {
        this.isRegPassword = true;
      } else if (this.changeInfo.password != this.passwordR) {
        this.isDiffPassword = true;
      } else if (this.changeInfo.authCode == "") {
        this.isNullAuthCode = true;
      } else {
        let text = this.changeInfo;
        ajax.changePassword(text, result => {
          if (result == "changePasswordSuccess") {
            alert("密码修改成功");
            window.location.reload();
          } else if ((result == "authCodeError")) {
            this.isError = true;
            this.isSend = false;
          } else {
            alert("密码修改失败");
          }
        });
      }
    }
  }
};
</script>

<style>
#set-password {
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  width: 694px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

#set-pass-box-header {
  box-sizing: border-box;
  height: 59px;
  color: #0084ff;
  font-weight: 600;
  border-bottom: 2px solid #f6f6f6;
  padding: 20px;
}

.set-password-input-box {
  margin: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 3px;
  border: solid 1px #eeeeee;
}

.set-password-input {
  resize: none;
  height: 45px;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
}

.set-password-submit-auth {
  width: 150px;
  background-color: #0084ff;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #eeeeee;
  cursor: pointer;
  height: 50px;
  outline: none;
}

.set-password-submit-auth:hover {
  background-color: #0077e6;
  color: #fff;
  outline: none;
}

#set-password-submit button {
  width: 100%;
  background-color: #0084ff;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #eeeeee;
  cursor: pointer;
  outline: none;
}

#set-password-submit button:hover {
  background-color: #0077e6;
  color: #fff;
  outline: none;
}

#set-password-tip {
  color: #409eff;
  padding: 20px;
}

.set-password-tip-err {
  color: red;
  width: 120px;
}

.banSendClass {
  color: gray;
  background-color: #f6f6f6;
  width: 150px;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #eeeeee;
  cursor: pointer;
  height: 45px;
}
</style>