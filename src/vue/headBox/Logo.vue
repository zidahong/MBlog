<template>
 
    <div id="head-box-logo">
        <a href="/">MBlog</a>
    </div>
 
</template>

<script>
export default {
    name:'Logo',
}
</script>

<style>
#head-box-logo{
    font-size: 20px;
    font-weight: bolder;
    margin: 0 15px;
}
#head-box-logo a{
    text-decoration: none;
    color: black;
}

#head-box-logo::first-letter{
    color: seagreen;
}

</style>