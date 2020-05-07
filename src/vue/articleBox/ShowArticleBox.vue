<template>
  <div id="show-article">
      <header><h1>{{text.Head}}</h1></header>
      <section>{{text.Section}}</section>
      <article>{{text.Article}}</article>
      <div id="author">{{text.Time}}</div>
      <div id="time">{{text.Type}}</div>
      <div id="type">{{text.Author}}</div>
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
    background-color: #fff;
    margin: 0.5%;
    padding: 1%;
    width: 50%;
}

header,section,article{
    
}

</style>