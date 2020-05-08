<template>
  <div id="article-box">
    <div id="article-box-block" v-for="item in text" :key="item.ID" @click="showArticle(item)">
      <Articleblock @click="showArticle">
        <template v-slot:header>{{item.Head}}</template>
        <template v-slot:section>{{item.Section}}</template>
        <template v-slot:footer>{{item.Time}}</template>
      </Articleblock>
    </div>
    <div id="article-box-button">
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
  background-color: #eeeeee;
  padding: 20px;
  border-radius: 3px;
  box-sizing: border-box;
  width: 840px;
}

#article-box-block {
  box-sizing: border-box;
}

#article-box-button {
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  height: 52px;
  padding: 10px;
  border-radius: 3px;
}

#article-box-button button {
  background-color: #f4f4f5;
  color: #606266;
  border: none;
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 3px;
}

#article-box-button button:hover{
  background-color: #409eff;
  color: #fff;

}
</style>