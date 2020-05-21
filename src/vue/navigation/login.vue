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
            <span @click="showCreateAcountPage">
              <a>注册账号</a>
            </span>
          </div>
          <div id="forget-password" @click="isClose">
            <router-link to="setpassword">
              <span>忘记密码?</span>
            </router-link>
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
  name: "login",

  data() {
    return {
      user: "",
      password: "",
      isShow: false
    };
  },
  methods: {
    isClose() {
      this.$store.commit("closeLoginPage");
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
    showCreateAcountPage() {
      this.$store.commit("closeLoginPage");
      this.$store.commit("openCreateAcountPage");
    },
    closeShowError() {
      this.isShow = false;
    }
  }
};
</script>

<style>
#login-page-background{
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

#login-page {
	background-color: #ffffff;
	border-radius: 3px;
	box-sizing: border-box;

	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 400px;
	position: fixed;
	top: 100px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

}

#login-page-head {
	display: flex;
	justify-content: space-between;
	align-items:flex-end;
	border-bottom: rgba(0,0,0,0.2) solid 1px;
	font-weight: 600;
	font-size: 16px;
	color: #0077e6;
	padding: 20px;
}

#login-page-head button{
	display: block;
	background-color: transparent;
	border: 0;
	font-size: 20px;
	cursor: pointer;
	color: #8590a6;
}

#login-page-input{
	padding: 20px;
	
}

.input-class-box{
	border-bottom: rgba(0,0,0,0.2) solid 1px;
	margin: 20px 0;
}


.input-class {
	border: none;
	font-size: 16px;
	height: 48px;
	width: 220px;

}

#login-page-input-check{
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;
	
}

#create-acount{

	text-align: left;
	color: #0077e6;
	cursor: pointer;
}
#forget-password a{
	
	text-align: right;
	color: #8590a6;	
	cursor: pointer;
}



#login-page-input-button{
	box-sizing: border-box;
	padding: 20px 0;
}
.input-button {
	
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

.input-button:hover{
	background-color: rgb(0, 119, 230);
	color: #ffffff;
}


.error-tip{
	color: red;
}

</style>