<template>
<div>
    <Headbox></Headbox>
    <BackgroundBox></BackgroundBox>
</div>
  
</template>

<script>
import BackgroundBox from './page/box/BackgroundBox';
import Headbox from './page/headBox/Headbox'
export default {
    name:'App',
    components:{
        Headbox,
       BackgroundBox,
    }
}
</script>

<style>

</style>