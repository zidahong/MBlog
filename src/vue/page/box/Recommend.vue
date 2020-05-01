<template>
  <div id='recommend-box'>
      <div id="recommend-head">
          <h1>推荐</h1>
      </div>
      <div id="recommend-main">
          <ul>
              <li><a href="">文章标题</a></li>
              <li><a href="">文章标题</a></li>
              <li><a href="">文章标题</a></li>
              <li><a href="">文章标题</a></li>
              <li><a href="">文章标题</a></li>
              <li><a href="">文章标题</a></li>
      
          </ul>
      </div>

  </div>
</template>

<script>
export default {
    name:'Recommend'
}
</script>

<style>
#recommend-box{
    background-color: #FFFFFF;
    padding-bottom: 15px;
    width: 300px;
    display: inline-block;
}

#recommend-head{
  color: seagreen;
  padding: 0 15px;
}
#recommend-main li{
    list-style: none;
    height: 25px;
}
#recommend-main a{
    text-decoration: none;
    color: black;
    line-height: 25px;
}
#recommend-main a:hover{
    color:seagreen;
}
</style>