<template>
  <div>
    <div class="show-article">
      <div class="show-article-author-info">
        <img src="@/img/login/headpic.png" />
        <div class="show-article-author-name">{{discuss.user}}</div>
      </div>
      <header class="show-article-title">
        <h2>{{discuss.title}}</h2>
      </header>
      <article class="show-article-content">{{discuss.text}}</article>
      <footer class="show-article-footer">
        <div>时间：{{discuss.time}}</div>
      </footer>
    </div>
    <comment :textid="this.$route.params.id"></comment>
  </div>
</template>

<script>
let getText = require("@/js/ajax.js");
import comment from "@/vue/main/comment/comment";
export default {
  name: "textContent",
  data() {
    return {
      discuss: "Nan"
    };
  },
  components: {
    comment
  },

  created() {
    let query = "getarticle?id=" + this.$route.params.id;
    getText.ajax(query, data => {
      this.discuss = data[0];
    });
  }
};
</script>

<style>
.show-article {
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  width: 694px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

header {
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
}
.show-article-author-info {
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #f6f6f6;
}
.show-article-author-info img {
  width: 30px;
  height: 30px;
}
.show-article-author-name {
  padding: 0 18px;
  font-size: 16px;
  font-weight: 600;
}

.show-article-content {
  padding: 20px 17px;
}

.show-article-footer {
  padding: 20px 17px;
}
</style>