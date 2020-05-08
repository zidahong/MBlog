<template>
  <div id="show-article">
    <div id="show-article-content"> 
      <header><h2>{{text.Head}}</h2></header>
      <section>{{text.Section}}</section>
      <article>{{text.Article}}</article>
      <footer>
        <div id="author">{{text.Time}}</div>
        <div id="time">{{text.Type}}</div>
        <div id="type">{{text.Author}}</div>
      </footer>
     </div> 
  </div>
</template>

<script>
let getText = require("@/js/ajax.js");
export default {
  name: "ShowArticle",
  data() {
    return {
      text: "Nan"
    };
  },
  created() {
    let query = "getarticle?id=" + this.$route.params.id;
    getText.ajax(query, data => {
      this.text = data[0];
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