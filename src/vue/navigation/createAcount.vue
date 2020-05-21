<template>
  <div id="create-page-background">
    <div id="create-page">
      <div id="create-page-head">
        <div>注册</div>
        <button @click="isClose">X</button>
      </div>
      <div id="create-page-input">
        <div class="create-page-input-class-box">
          <input
            id="create-page-input-user"
            type="text"
            v-model="user"
            placeholder="用户名"
            class="create-page-input-class"
          />
          <span class="error-tip" v-if="isAlarmIfRegUser">用户名格式错误</span>
          <span class="error-tip" v-if="isAlarmIfFault">用户已存在</span>
        </div>
        <div class="create-page-input-class-box">
          <input
            id="login-page-input-password"
            type="password"
            v-model="password"
            placeholder="密码"
            class="create-page-input-class"
          />
          <span class="error-tip" v-if="isAlarmIfRegPassword">密码格式错误</span>
        </div>
        <div class="create-page-input-class-box">
          <input
            id="login-page-input-password"
            type="password"
            v-model="passwordR"
            placeholder="再次输入密码"
            class="create-page-input-class"
          />
          <span class="error-tip" v-if="isAlarmIfSame">两次密码输入不一致</span>
        </div>
        <div class="create-page-input-class-box">
          <input
            id="login-page-input-password"
            type="text"
            v-model="email"
            placeholder="输入邮箱"
            class="create-page-input-class"
          />
        </div>

        <div id="create-page-input-tip">
          <p>小提示：新用户的用户名要以字母开头且大于4位小于8位,且密码要大于6位小于16位。密码和用户名只能用字母和数字哦~</p>
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
  name: "createAcount",

  data() {
    return {
      user: "",
      password: "",
      passwordR: "",
      email: "",
      isAlarmIfSame: false,
      isAlarmIfRegUser: false,
      isAlarmIfRegPassword: false,
      isAlarmIfFault: false
    };
  },
  methods: {
    isClose() {
      this.$store.commit("closeCreateAcountPage");
    },
    isCreate() {
      this.isAlarmIfSame = false;
      this.isAlarmIfRegUser = false;
      this.isAlarmIfRegPassword = false;
      this.isAlarmIfFault = false;

      // 用户名以字母开头且大于4位小于8位
      let regUser = /^([A-z])([0-9]|[A-z]){3,7}$/g;
      //密码大于6位小于16位，字母和数字
      let regPassword = /^([0-9]|[A-z])([0-9]|[A-z]){5,15}$/g;
      if (!regUser.test(this.user)) {
        this.isAlarmIfRegUser = true;
      } else if (!regPassword.test(this.password)) {
        this.isAlarmIfRegPassword = true;
      } else if (this.password != this.passwordR) {
        this.isAlarmIfSame = true;
      } else {
        requstLogin.isCreate(this.user, this.password, this.email, data => {
          if (data == "200") {
            alert("注册成功");
            this.$store.commit("closeCreateAcountPage");
            this.$store.commit("openLoginPage");
          } else {
            this.isAlarmIfFault = true;
          }
        });
      }
    }
  }
};
</script>

<style>
#create-page-background{
	display: flex;
	justify-content: center;
	background-color:rgba(0,0,0,0.2);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation:move;
	animation-duration: 0.5s;
}


@keyframes move{
	from{
		transform: translateY(-100%);
	}
}

#create-page {
	background-color: #ffffff;
	border-radius: 3px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 420px;
	position: fixed;
	top: 100px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

}

#create-page-head {
	display: flex;
	justify-content: space-between;
	align-items:flex-end;
	border-bottom: rgba(0,0,0,0.2) solid 1px;
	font-weight: 600;
	font-size: 16px;
	color: #0077e6;
	padding: 20px;
}

#create-page-head button{
	display: block;
	background-color: transparent;
	border: 0;
	font-size: 20px;
	cursor: pointer;
	color: #8590a6;
}

#create-page-input{
	padding: 20px;
}

.create-page-input-class-box{
	border-bottom: rgba(0,0,0,0.2) solid 1px;
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.create-page-input-class {
	border: none;
	font-size: 16px;
	height: 48px;
	width: 220px;
}

#create-page-input-tip{
	font-size: 15px;
	color: #8590a6;
}



#create-page-input-button{
	box-sizing: border-box;
	padding: 20px 0;
}
.create-page-input-button {
	
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	color:white;
	border-radius: 3px;
	background-color:rgb(0, 132, 255);
	border: 0;
	outline: none;
	font-size: 16px;
}

.create-page-input-button:hover{
	background-color: rgb(0, 119, 230);
	color: #ffffff;
}

.error-tip{
	color: red;
}

</style>