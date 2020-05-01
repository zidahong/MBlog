<template>
<div id="background-box">
    <div id="container">
        <!-- <info></info> -->
        <articlebox></articlebox>
        <!-- <Recommend></Recommend> -->
        <!-- <articlecontent></articlecontent> -->
    </div></div>
  
</template>

<script>
import Info from './Info'
import Articlebox from './ArticleBox'
import Articlecontent from './ArticleContent'
import Recommend from './Recommend'

export default {
    name:'BackgroundBox',
    components:{
        Info,
        Articlebox,
        Articlecontent,
        Recommend,
    }
}
</script>

<style>
#background-box{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
#container{
    width: 1100px;
    display: flex;
    justify-content: center;
}
</style>