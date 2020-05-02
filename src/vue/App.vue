<template>
<div id="app">
    <Headbox></Headbox>
    <BackgroundBox></BackgroundBox>
    <!-- <LoginPage></LoginPage> -->
</div>
  
</template>

<script>
import BackgroundBox from './page/box/BackgroundBox';
import Headbox from './page/headBox/Headbox';
// import LoginPage from './login/LoginPage';
export default {
    name:'App',
    components:{
        Headbox,
       BackgroundBox,
    //    LoginPage
    }
}
</script>

<style>

</style>