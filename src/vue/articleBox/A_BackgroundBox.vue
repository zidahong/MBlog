<template>
<div id="background-box">
    <div id="background-box-article"><articlebox></articlebox></div>
    <div id="background-box-recommend"><Recommend></Recommend></div>
</div>
</template>

<script>
import Articlebox from './ArticleBox'
import Recommend from './RecommendBox';


export default {
    name:'BackgroundBox',
    components:{
        Articlebox,
        Recommend
    }
}
</script>

<style>
#background-box{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0.5%;
}

#background-box-article{
  width: 75%;
}

#background-box-recommend{
   width: 20%;
}
</style>