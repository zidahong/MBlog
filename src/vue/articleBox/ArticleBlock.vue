<template>
  <div id="article-block">
      <div id="article-block-header"><h3><slot name="header"></slot></h3></div>
      <div id="article-block-section"><slot name="section"></slot></div>
      <div id="article-block-footer"><slot name="footer"></slot></div>
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
  box-sizing: border-box;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
}

#article-block:hover{
  background-color: rgba(22,192,248,0.1);
  color: #188ae2;
  transition: 0.1s;
  transform: scale(1.01);
}

#article-block a{
  text-decoration: none;
  color: black;
}

#article-block-header{
  margin-bottom: 10px;
}

#article-block-section{
  color: #999999;
  margin-bottom: 10px;
  
}

#article-block-footer{
  color: #999999;
} 
</style>