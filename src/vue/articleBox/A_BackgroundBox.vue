<template>
<div id="background-box">
    <div id="container">
        <!-- <info></info> -->
        <articlebox id="articlebox"></articlebox>
        <!-- <Recommend id="recommend"></Recommend> -->
        <!-- <articlecontent></articlecontent> -->
    </div></div>
  
</template>

<script>
import Articlebox from './ArticleBox'


export default {
    name:'BackgroundBox',
    components:{
        Articlebox,
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
    justify-content: space-between;
}
</style>