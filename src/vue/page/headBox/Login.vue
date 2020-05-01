<template>
  <div id="login-box">
    <button  id="login-box-login">立即登录</button>
    <button id="login-box-new">免费注册</button>
  </div>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style>
#login-box{
    display: flex;
    
}

#login-box-login{
    border: none;
    padding: 5px 15px;
    margin: 0 5px;
   
}

#login-box-new{
    border: none;
    margin: 0 5px; 
    padding: 5px 15px;
    background-color: seagreen;
    color: #fff;
}
</style>