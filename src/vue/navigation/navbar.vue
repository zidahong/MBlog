<template>
  <div class="AppHeader" role="banner">
    <div class="AppHeader-Container">
      <a class="logo-class">MBlog</a>
      <ul class="AppHeader-Tabs" role="navigation">
        <li class="Tabs-item">
          <router-link to="/index" tag="div">
            <a>首页</a>
          </router-link>
        </li>
        <li class="Tabs-item">
          <router-link to="/edit" tag="div">
            <a>发帖</a>
          </router-link>
        </li>
      </ul>
      <loginbar></loginbar>
    </div>
    <a @click="backTop('#app')" class="back-top">
      <svg
        t="1589983442011"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1891"
        width="50"
        height="50"
      >
        <path
          d="M514.7 101.6c-228.3 0-413.3 185.1-413.3 413.3s185.1 413.3 413.3 413.3c228.2 0.1 413.3-185 413.3-413.2S742.9 101.6 514.7 101.6zM385.5 320.5h246.2c11.6 0 21.1 9.2 21.1 20.6 0 11.4-9.4 20.6-21.1 20.6H385.5c-11.6 0-21.1-9.2-21.1-20.6 0-11.4 9.4-20.6 21.1-20.6z m267.4 245.1c-10.2 9.9-26.7 9.9-36.8 0l-86.4-84.2v219.7c0 11.4-9.4 20.6-21.1 20.6-11.6 0-21.1-9.2-21.1-20.6V481.3l-86.4 84.2c-10.2 9.9-26.7 9.9-36.8 0-10.2-9.9-10.2-26 0-35.9L490.1 407s0-0.1 0.1-0.1c5.1-5 11.8-7.4 18.4-7.4 6.7 0 13.3 2.5 18.4 7.4 0 0 0 0.1 0.1 0.1l125.8 122.7c10.2 9.9 10.2 25.9 0 35.9z"
          p-id="1892"
          fill="#0087ff"
        />
      </svg>
    </a>
  </div>
</template>

<script>
import loginbar from "@/vue/navigation/loginbar";

export default {
  name: "navbar",
  components: {
    loginbar
  },
  methods: {
    backTop(val) {
      document.querySelector(val).scrollIntoView(true);
    }
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
  animation: hd;
  animation-duration: 1s;
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

.logo-class {
  font-size: 20px;
  font-weight: 600;
  color: #0087ff;
  cursor: default;
}

.back-top {
  position: fixed;
  bottom: 100px;
  right: 100px;
  cursor: pointer;
}


@keyframes hd {
  from {
    transform: translateY(-100%);
  }
}
</style>