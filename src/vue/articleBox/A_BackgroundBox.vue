<template>
<div id="background-box">
    <div id="background-box-article"><articlebox></articlebox></div>
</div>
</template>

<script>
import Articlebox from './ArticleBox'
// import Recommend from './RecommendBox';


export default {
    name:'BackgroundBox',
    components:{
        Articlebox,
        // Recommend
    }
}
</script>

<style>
#background-box{
    display: flex;
    justify-content: center;
    width: 80%;
}

#background-box-article{
  width: 75%;
}

#background-box-recommend{
   width: 20%;
}
</style>