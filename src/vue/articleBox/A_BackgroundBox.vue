<template>
  <!-- 网页主体 -->
  <div id="main">
    <router-view></router-view>
    <myinfo></myinfo>
    <LoginPage v-if="$store.state.isLoginPage"></LoginPage>
    <CreatePage v-if="$store.state.isCreaeteAcountPage"></CreatePage>
  </div>
</template>

<script>
import Articlebox from "@/vue/articleBox/ArticleBox";
import myinfo from "@/vue/articleBox/MyInfo";
import LoginPage from "@/vue/headBox/LoginPage";
import CreatePage from "@/vue/headBox/CreateAcount";
import Login from "@/vue/headBox/Login";

export default {
  name: "BackgroundBox",
  components: {
    Articlebox,
    myinfo,
    LoginPage,
    CreatePage,
    Login,
  }
};
</script>

<style>
#background-box {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px;
  width: 880px;
}
#main{
    display: flex;
}
</style>