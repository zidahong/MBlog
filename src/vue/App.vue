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
<<<<<<< HEAD
=======
      <template v-slot:comment>
        <!-- 留言 -->
        <router-link to="/comment">留言</router-link>
      </template>
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
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
<<<<<<< HEAD
      <router-view></router-view>
    <myinfo></myinfo>
    <LoginPage v-if="$store.state.isLoginPage"></LoginPage>
    <CreatePage v-if="$store.state.isCreaeteAcountPage"></CreatePage>
=======
    <router-view></router-view>
    <myinfo></myinfo>
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import Headbox from "./headBox/A_HeadBox";
import Login from "./headBox/Login";
import LoginPage from "./headBox/LoginPage";
import CreatePage from "./headBox/CreateAcount";
=======
import BackgroundBox from "./articleBox/A_BackgroundBox";
import Headbox from "./headBox/A_HeadBox";
import editbox from "./editBox/EditBox";
import Search from "./headBox/Search";
import Login from "./headBox/Login";
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
import Logo from "./headBox/Logo";
import myinfo from './articleBox/MyInfo';


export default {
  name: "App",
  components: {
    Headbox,
<<<<<<< HEAD
    Login,
    Logo,
    myinfo,
    LoginPage,
    CreatePage

=======
    BackgroundBox,
    editbox,
    Search,
    Login,
    Logo,
    myinfo,
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
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