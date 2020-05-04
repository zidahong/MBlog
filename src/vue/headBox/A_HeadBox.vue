<template>
  <div id="head-box">
    <div id="head-box-contain">
      <logo></logo>
      <div class="head-box-item">
        <a href="#">首页</a>
      </div>
      <div class="head-box-item">
        <a href="#">笔记</a>
      </div>
      <div class="head-box-item">
        <a href="#">下载</a>
      </div>
       <div class="head-box-item">
        <a href="#">留言</a>
      </div>
      <search></search>
      <login></login>
    </div>
      
  </div>
</template>

<script>
import Search from "./Search";
import Login from "./Login";
import Logo from "./Logo";

export default {
  name: "Headbox",
  components: {
    Search,
    Login,
    Logo,
  }
};
</script>

<style>
@import url('~@/css/headBox.css');
</style>