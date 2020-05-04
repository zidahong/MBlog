<template>
<div id="app">
    <Headbox></Headbox>
    <BackgroundBox></BackgroundBox>
</div>
  
</template>

<script>
import BackgroundBox from './articleBox/A_BackgroundBox';
import Headbox from './headBox/A_HeadBox';
export default {
    name:'App',
    components:{
       Headbox,
       BackgroundBox,
    },
}
</script>

<style>

</style>