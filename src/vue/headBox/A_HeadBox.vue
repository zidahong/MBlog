<template>
  <div class="AppHeader" role="banner">
    <div class="AppHeader-Container">
      <a href="#" class="logo-class">
      MBlog
      </a>
      <ul class="AppHeader-Tabs" role="navigation">
        <li class="Tabs-item">
          <router-link to="/index" tag="div">
            <a>首页</a>
          </router-link>
        </li>
        <li class="Tabs-item">
          <router-link to="/writearticle" tag="div">
            <a>发帖</a>
          </router-link>
        </li>
      </ul>

      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from "./Login";

export default {
  name: "Headbox",
  components: {
    Login
  }
};
</script>

<style>
.AppHeader {
  background-color: #fff;
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.AppHeader-Container {
  width: 1000px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.AppHeader-Tabs {
  display: flex;
  box-sizing: border-box;
  padding: 0 17px;
  list-style: none;
}

.Tabs-item {
  padding: 0 20px;
  color: rgb(133, 144, 166);
  font-size: 15px;
  height: 100%;
}

.Tabs-item a {
  color: inherit;
  line-height: 52px;
}

.Tabs-item a:hover {
  color: rgb(68, 68, 68);
  font-weight: 600;
}

.Tabs-item .router-link-active {
  border-bottom: solid #0084ff 3px;
  color: rgb(68, 68, 68);
  font-weight: 600;
  height: 52px;
}

.logo-class{
  font-size: 20px;
  font-weight: 600;
  color:#0087ff;
}
</style>