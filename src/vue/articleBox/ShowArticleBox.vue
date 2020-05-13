<template>
<div>
  <div id="show-article">
    <div id="show-article-content"> 
      <header><h2>{{discuss.title}}</h2></header>
      <article>{{discuss.text}}</article>
      <footer>
        <div id="author">作者：{{discuss.user}} 时间：{{discuss.time}}</div>
      </footer>
     
     </div> 
  </div>
   <comment :textid="this.$route.params.id"></comment>
  </div>
</template>

<script>
let getText = require("@/js/ajax.js");
import comment from '@/vue/comment/Comment';
export default {
  name: "ShowArticle",
  data() {
    return {
      discuss: "Nan"
    };
  },
  components:{
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
#show-article{
    box-sizing: border-box;
    width: 880px; 
    padding: 20px;
}

#show-article-content{
    padding: 20px;
    background-color: #eeeeee;
    box-sizing: border-box;
    border-radius: 3px;
}

header{
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
}

section{
   box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
}

article{
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
}

#author,#type,#time{
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
}
</style>