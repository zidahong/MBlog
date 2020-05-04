<template>
  <div id="article-block">
      <header><h3><slot name="header"></slot></h3></header>
      <section><slot name="section"></slot></section>
      <footer><slot name="footer"></slot></footer>
   </div>
</template>

<script>
export default {
  name: "ArticleBlock",
  data() {
    return {
      isShow: true,
      testShow:true,
    };
  },
  methods: {
    clickAgree() {
      this.isShow = !this.isShow;
    },
    rclick(){
      return this.testShow = !this.testShow;
    }
  }
};
</script>

<style>
#article-block{
  background-color: #fff;
}

#article-block header{
  padding: 8px 8px 0px 8px;
  
}

#article-block section{
  padding: 2px 8px 5px 8px;
  color: #7f8c8d;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

#article-block footer{
  padding: 2px 8px 2px 8px;
  font-size: 15px;
  color: #7f8c8d;
} 
</style>