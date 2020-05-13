<template>
<div id="background-box">
    <div id="background-box-article"><articlebox></articlebox></div>
</div>
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
    box-sizing: border-box;
    padding: 20px;
    width: 880px;
}



</style>