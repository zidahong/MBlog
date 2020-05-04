<template>
  <div id="article-box" >
    <div id="article-box-block">
      <Articleblock>
        <template v-slot:header>
          <header></header>
        </template>
        <template v-slot:section>
          <section></section>
        </template>
        <template v-slot:footer>
          <footer>时间：2020/5/3</footer>
        </template>
      </Articleblock>
    </div>
 
  </div>
</template>

<script>
import Articleblock from "./ArticleBlock";
export default {
  name: "ArticleBox",
  data() {
    return {
      page: 1,
    };
  },
  components: {
    Articleblock,
  },
}
</script>

<style>
#article-box {
  width: 50%;
}

#article-box-block {
}

#article-box-recommend {
}
</style>