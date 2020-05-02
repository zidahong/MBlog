<template>
  <div id="login-box">
    <div v-if="isShowLogin" id="login-box-before" >
      <button  id="login-box-login" @click="isClick">立即登录</button>
      <button id="login-box-new">免费注册</button>
    </div>
    <div id="login-box-after" v-else>
        <img src="../../../img/login/headpic.png">
        <a href="/">设置</a>
        <a href="/">退出</a>
    </div>
    <LoginPage v-if="isShow" @isCloseLoginPage="isClose" @isLoginOk="isLogin"></LoginPage>
  </div>
  
</template>

<script>
import LoginPage from '../../login/LoginPage';
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
      }
    },
    components:{
      LoginPage,
    }
}
</script>

<style>
#login-box{
    display: flex;
    justify-content: center;
}

#login-box-login{
    border: none;
    padding: 5px 15px;
    margin: 0 5px;
   
}

#login-box-new{
    border: none;
    margin: 0 5px; 
    padding: 5px 15px;
    background-color: seagreen;
    color: #fff;
}
#login-box-after{
  display: flex;
  justify-content: center;
}
#login-box-after img{
  width: 32px;
  height: 32px;
  margin: 0 8px;
}

#login-box-after a{
  padding: 5px 0px;
    margin: 0 5px;
    text-decoration: none;
    color: black;
}

#login-box-after a:hover{
    color: seagreen;
}
</style>