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
      <template v-slot:comment>
        <!-- 留言 -->
        <router-link to="/comment">留言</router-link>
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
    </div>
  </div>
</template>

<script>
import BackgroundBox from "./articleBox/A_BackgroundBox";
import Headbox from "./headBox/A_HeadBox";
import editbox from "./editBox/EditBox";
import Search from "./headBox/Search";
import Login from "./headBox/Login";
import Logo from "./headBox/Logo";
import myinfo from './articleBox/MyInfo';


export default {
  name: "App",
  components: {
    Headbox,
    BackgroundBox,
    editbox,
    Search,
    Login,
    Logo,
    myinfo,
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