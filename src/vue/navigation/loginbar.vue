<template>
  <div class="AppHeader-userInfo">
    <!-- 显示登陆前 -->
    <div v-if="!$store.state.isLogining" class="AppHeader-login">
      <button class="AppHeaderLogin" @click="isLogin">登录</button>
      <button class="AppHeaderPrimary" @click="isCreate">注册</button>
    </div>

    <!-- 显示登录后 -->
    <div v-else class="AppHeader-profile">
      <div class="AppHeader-profile-name">Hi!~{{$store.state.user}}</div>
      <button @click="isShowProfileSet">
        <img src="@/img/login/headpic.png" />
      </button>
      <div v-show="showProfileSet" class="AppHeaderProfileMenu">
        <div class="AppHeaderProfileMenu-arrow"></div>
        <ul class="ProfileMenu">
          <li class="ProfileMenu-item" @click="isLoginOut">
            <a>
              <svg
                class="Zi Zi--Logout"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  d="M2 11.999c0-2.756 1.154-5.417 3.167-7.3a1.266 1.266 0 0 1 1.73 1.847 7.396 7.396 0 0 0-2.367 5.453c0 4.119 3.35 7.47 7.47 7.47 4.119 0 7.47-3.351 7.47-7.47a7.41 7.41 0 0 0-2.279-5.37 1.266 1.266 0 0 1 1.76-1.819A9.923 9.923 0 0 1 22 12c0 5.513-4.486 10-10 10s-10-4.487-10-10zm8.699-.482V3.26a1.26 1.26 0 1 1 2.52 0v8.257a1.26 1.26 0 1 1-2.52 0z"
                  fill-rule="evenodd"
                />
              </svg>
              退出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const tool = require("@/js/tool.js");
export default {
  name: "loginbar",
  data() {
    return {
      showProfileSet: false
    };
  },
  created() {
    // 检测是否已经登陆,更新登陆用户名
    if (document.cookie) {
      this.$store.commit("login", tool.cookieToObj().LoginName);
    }
  },
  updated() {
    // 当换用户时不用刷新页面也能显示用户名
    if (document.cookie) {
      this.$store.commit("login", tool.cookieToObj().LoginName);
    }
  },
  methods: {
    //显示登陆页
    isLogin() {
      this.$store.commit("openLoginPage");
    },
    //显示注册页
    isCreate() {
      this.$store.commit("openCreateAcountPage");
    },

    //设置
    isSetUp() {
      this.$router.push({ path: "/setup" });
    },

    // 退出 删除cookie并刷新页面
    isLoginOut() {
      document.cookie =
        document.cookie.match(/[^ =;]+(?=\=)/g)[0] +
        "=0;expires=" +
        new Date(0).toUTCString();
      location.reload();
    },
    isShowProfileSet() {
      this.showProfileSet = !this.showProfileSet;
    }
  }
};
</script>

<style>
/* 还没登陆的样式 */
.AppHeader-userInfo{
    display: flex;
    justify-content: center;
}

.AppHeaderLogin{
    border: none;
    padding: 5px 15px;
    margin: 0 5px;
    background-color: #fff;
    border-radius: 3px;
    border: solid #0084ff 1px;
    color:#8590a6;
    height: 34px;
    cursor: pointer;
}

.AppHeaderLogin:hover{
  background-color:rgba(0,132,255,.06);
}


.AppHeaderPrimary{
    border: none;
    margin: 0 5px; 
    padding: 5px 15px;
    background-color: #0084ff;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    height: 34px;
    
}

.AppHeaderPrimary:hover{
  border: none;
  margin: 0 5px; 
  padding: 5px 15px;
  background-color: #0077e6;
  color: #fff;
}


/* 登陆后的样式 */
.AppHeader-profile{
  box-sizing: border-box;
  position:relative;
  display: flex;
  align-items: center;
}

.AppHeader-profile-name{
  padding: 0 20px;
  font-weight: 600px;
  color: #0087ff;
  cursor: default;
}

.AppHeader-profile button{
 box-sizing: border-box;
 padding: 0;
 font-size: 0;
 border:none;
 cursor: pointer;
 background-color: #fff;
 outline: none;
}


.AppHeader-profile img{
  width: 30px;
  height: 30px;
}

.AppHeaderProfileMenu{
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 32px;
  right: -36px;
  box-sizing: border-box;
  
  
}
.AppHeaderProfileMenu-arrow{

  height: 0;
  width: 0;
  box-sizing: border-box;
  border:solid  10px;
  border-color: transparent transparent #fff  transparent;
  
}
.ProfileMenu{
  text-align: center;
  color: #bdc3c7;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
}
.ProfileMenu-item{
 
  padding: 10px 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  color: #8590a6;
  cursor: pointer;
}
.ProfileMenu-item svg{
  vertical-align: middle;
}

.ProfileMenu-item:hover{
  background-color: #f6f6f6;
}


</style>