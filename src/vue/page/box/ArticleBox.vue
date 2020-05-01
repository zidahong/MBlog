<template>
  <div id="article-box">
      <Articleblock></Articleblock>
  </div>
</template>

<script>
import Articleblock from'./ArticleBlock';
export default {
    name:'ArticleBox',
    components:{
        Articleblock,
    }
}
</script>

<style>
#article-box{
    padding:0 15px;
}
</style>