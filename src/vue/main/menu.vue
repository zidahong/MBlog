<template>
  <div class="article-box">
    <div class="article-box-header">推荐</div>
    <div id="article-box-block" v-for="item in text" :key="item.ID" @click="showArticle(item)">
      <menuItem @click="showArticle">
        <template v-slot:header>{{item.title}}</template>
        <template v-slot:section>{{item.text}}</template>
        <template v-slot:footer>{{item.time}}</template>
      </menuItem>
    </div>
    <div id="article-box-button">
      <button v-if="isMore" @click="getNextText">显示更多内容~</button>
      <p v-else>没有更多内容了哦~</p>
    </div>
  </div>
</template>

<script>
import menuItem from "@/vue/main/menuItem";
let getText = require("@/js/ajax.js");
export default {
  name: "textMenu",
  data() {
    return {
      page: 1,
      text: {},
      isMore: true
    };
  },
  components: {
    menuItem
  },
  created() {
    getText.ajax("getblock?page=1&nums=5", data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].text.length > 100) {
          data[i].text = data[i].text.slice(0, 60) + "...";
        }
      }
      if (data.length < 5) {
        this.isMore = false;
      }
      this.text = data;
    });
  },
  methods: {
    getNextText() {
      this.page = this.page + 1;
      let start = 1 + (this.page - 1) * 5;

      let sql = "getblock?page=" + start + "&nums=5";

      getText.ajax(sql, data => {
        for (let i = 0; i < data.length; i++) {
          //限制简介的字长
          if (data[i].text.length > 100) {
            data[i].text = data[i].text.slice(0, 60) + "...";
          }
        }

        if (data == "" || data.length < 5) {
          this.text = this.text.concat(data);
          this.isMore = false;
        } else {
          this.text = this.text.concat(data);
        }
      });
    },

    showArticle(item) {
      this.$router.push({
        path: "/blog/" + item.id
      });
    }
  }
};
</script>

<style>
.article-box {
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  width: 694px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.article-box-header {
  box-sizing: border-box;
  height: 59px;
  color: #0084ff;
  font-weight: 600;
  border-bottom: 2px solid #f6f6f6;
  padding: 20px;
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
  align-items: center;
}

#article-box-button button {
  background-color: #f4f4f5;
  color: #606266;
  border: none;
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 3px;
  cursor: pointer;
  height: 100%;
}

#article-box-button p {
  color: #606266;
  font-size: 15px;
}

#article-box-button button:hover {
  background-color: #409eff;
  color: #fff;
}
</style>