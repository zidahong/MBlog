<template>
  <!-- 网页主体 -->
  <div id="main">
    <router-view></router-view>
    <info></info>
    <login v-if="$store.state.isLoginPage"></login>
    <create v-if="$store.state.isCreaeteAcountPage"></create>
  </div>
</template>

<script>
import info from "@/vue/main/siteInfo";
import login from "@/vue/navigation/login";
import create from "@/vue/navigation/createAcount";

export default {
  name: "mainContent",
  components: {
    info,
    login,
    create
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
#main {
  display: flex;
}
</style>