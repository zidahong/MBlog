<template>
  <div id="article-box">
    <div id="article-box-block" v-for="item in text" :key="item.ID" @click="showArticle(item)">
      <Articleblock @click="showArticle">
        <template v-slot:header>{{item.Head}}</template>
        <template v-slot:section>{{item.Section}}</template>
        <template v-slot:footer>{{item.Time}}</template>
      </Articleblock>
    </div>
    <div id="article-box-next">
      <button @click="getLastText">上一页</button>
      <button @click="getNextText">下一页</button>
    </div>
  </div>
</template>

<script>
import Articleblock from "./ArticleBlock";
let getText = require("@/js/ajax.js");
export default {
  name: "ArticleBox",
  data() {
    return {
      page: 1,
      text: {}
    };
  },
  components: {
    Articleblock
  },
  created() {
    getText.ajax("getblock?page=1&nums=5", data => {
      this.text = data;
    });
  },
  methods: {
    getNextText() {
      if (this.text.length < 5) {
        alert("没有更多内容了~");
      } else {
        this.page = this.page + 1;
        let start = 1 + (this.page - 1) * 5;

        let sql = "getblock?page=" + start + "&nums=5";
        getText.ajax(sql, data => {
          this.text = data;
          
        });
      }
    },
    getLastText() {
      if (this.page == 1) {
        alert("没有上一页了~");
      } else {
        this.page = this.page - 1;
        let start = 1 + (this.page - 1) * 5;
        let sql = "getblock?page=" + start + "&nums=5";
        getText.ajax(sql, data => {
          this.text = data;
        });
      }
    },
    showArticle(item) {
      this.$router.push({
        path: "/blog/"+item.ID,
      });
    }
  }
};
</script>

<style>
#article-box {
}

#article-box-block {
}

#article-box-next {
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: 0 5%;
  padding: 1%;
}

#article-box-next button {
  background-color: #fff;
  border: none;
  margin: 0.5%;
}
</style>