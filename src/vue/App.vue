<template>
  <div id="app">
    <!-- 网页头 -->
    <Headbox>
      <template v-slot:logo>
        <!-- logo -->
        <logo></logo>
      </template>
      <template v-slot:index>
        <!-- 首页 -->
        <router-link to="/index">首页</router-link>
      </template>
      <template v-slot:writearticle>
        <!-- 写文章 -->
        <router-link to="/writearticle">编辑</router-link>
      </template>
      <template v-slot:login>
        <!-- 登陆 -->
        <login></login>
      </template>
    </Headbox>
    <!-- 网页主体 -->
    <div id="main">
      <router-view></router-view>
    <myinfo></myinfo>
    <LoginPage v-if="$store.state.isLoginPage"></LoginPage>
    <CreatePage v-if="$store.state.isCreaeteAcountPage"></CreatePage>
    </div>
  </div>
</template>

<script>
import Headbox from "./headBox/A_HeadBox";
import Login from "./headBox/Login";
import LoginPage from "./headBox/LoginPage";
import CreatePage from "./headBox/CreateAcount";
import Logo from "./headBox/Logo";
import myinfo from './articleBox/MyInfo';


export default {
  name: "App",
  components: {
    Headbox,
    Login,
    Logo,
    myinfo,
    LoginPage,
    CreatePage

  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#main{
  display: flex;
}
</style>