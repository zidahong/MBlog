<template>
  <div id="login-box">
    <div v-if="isShowLogin" id="login-box-before" >
      <button  id="login-box-login" @click="isClick">立即登录</button>
      <button id="login-box-new">免费注册</button>
    </div>
    <div id="login-box-after" v-else>
        <img src="@/img/login/headpic.png">
        <a href="/">设置</a>
        <a @click="isLoginOut">退出</a>
    </div>
    <LoginPage v-if="isShow" @isCloseLoginPage="isClose" @isLoginOk="isLogin"></LoginPage>
  </div>
  
</template>

<script>
import LoginPage from '@/vue/headBox/LoginPage';
export default {
    name:'Login',
    data(){
      return{
        isShow:false,
        isShowLogin:true,
      }
    },
    methods:{
      isClose(val){
          this.isShow = val;
      },
      isClick(){
        this.isShow = !this.isShow;
      },
      isLogin(val){
        this.isShowLogin = !val;
        this.isShow = !val; 
      },
      isLoginOut(){
            document.cookie=document.cookie.match(/[^ =;]+(?=\=)/g)[0]+'=0;expires=' + new Date( 0).toUTCString();
            location.reload();   
      }
    },
    components:{
      LoginPage,
    },
    created(){
        if(document.cookie){
          console.log('is update')
          this.isShowLogin = false;
        }
    },

}
</script>

<style>
@import url('~@/css/login.css');
</style>