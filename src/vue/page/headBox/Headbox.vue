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
#head-box {
  background-color: rgb(255, 255, 255);
  border-top: 3px solid seagreen;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -8px;
}
#head-box-contain {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
}

.head-box-item {
  padding: 0 15px;
}

.head-box-item a {
  text-decoration: none;
  color: black;
}

.head-box-item a:hover {
  
}
</style>