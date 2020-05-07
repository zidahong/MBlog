<template>
  <div id="app">
    <Headbox>
      <template v-slot:logo>
        <!-- logo -->
        <logo></logo>
      </template>
      <template v-slot:index>
        <!-- 首页 -->
        <router-link to="/index">首页</router-link>
      </template>
      <template v-slot:note>
        <!-- 笔记 -->
        <router-link to="/index">笔记</router-link>
      </template>
      <template v-slot:tellme>
        <!-- 留言 -->
        <router-link to="/index">留言</router-link>
      </template>
      <template v-slot:download>
        <!-- 下载 -->
        <router-link to="/index">下载</router-link>
      </template>
      <template v-slot:writearticle>
        <!-- 写文章 -->
        <router-link to="/writearticle">写文章</router-link>
      </template>
      <!-- <template v-slot:search>
        搜索栏
        <search></search>
      </template> -->
      <template v-slot:login>
        <!-- 登陆 -->
        <login></login>
      </template>
    </Headbox>
    <div id="main">
    <router-view></router-view>
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


export default {
  name: "App",
  components: {
    Headbox,
    BackgroundBox,
    editbox,
    Search,
    Login,
    Logo,
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* #main{
  box-sizing: border-box;
  width: 80%;
  position: relative;
  top: 1%;
} */
</style>