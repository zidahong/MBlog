<template>
  <div id="article-box">
    <div id="article-box-block" v-for="item in text" :key="item.ID">
      <Articleblock>
        <template v-slot:header>
          <header>{{item.Head}}</header>
        </template>
        <template v-slot:section>
          <section>{{item.Section}}</section>
        </template>
        <template v-slot:footer>
          <footer>{{item.Time}}</footer>
        </template>
      </Articleblock>
    </div>
    <div id="article-box-next">
        <button>上一页</button>
         <button>下一页</button>
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
      text:{}
    };
  },
  components: {
    Articleblock,
  },
  created(){
      getText.ajax('getblock?page=1',(data)=>{
        console.log(data);
        this.text=data;
      })
  },
  methods:{
    getText(){
      // 使用getblock?page=1获取第一页的文章数据
      alert('onload')
      getText.ajax('getblock?page=1',(data)=>{
        console.log(data);
        this.text=data;
      })
    }
  }
}
</script>

<style>
</style>