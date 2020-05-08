<template>
 
    <div id="head-box-logo">
        <a href="#">MBlog</a>
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
    color:#2f3640;
}

#head-box-logo a::before{
    font-size: 20px;
    content: 'MBlog';
    position: absolute;
    border-bottom: solid #fff 2px;
    transform: scaleY(1.2);
    color: rgba(0, 0, 0, 0);
}

#head-box-logo a:hover:before{
   transform: scaleY(1.2);
   border-bottom: solid #2f3640 2px;
   transition: 2s;
}

</style>