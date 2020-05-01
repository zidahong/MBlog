<template>
  <div id="article-block">
      <header>文章标题</header>
      <section>文章摘要</section>
      <footer>文章注释</footer>
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

}

#article-block section{

}

#article-block footer{

}


</style>