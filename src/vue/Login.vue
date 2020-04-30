<template>
  <div id="login-box">
			<div id="login-box-logo">
				<img src="../img/logo.png" >
			</div>
			<div id="login-box-head">
				<h1>登陆</h1>
			</div>
			<div id="login-box-input">
				<div class="input-class-box">
					<img src="../img/loginUser.png" >
					<input id="login-box-input-user" type="text" v-model="user" placeholder="用户名" class="input-class" />
				</div>
				<div class="input-class-box">
					<img src="../img/loginPassword.png">
					<input id="login-box-input-password"  type="password" v-model="password" placeholder="输入密码" class="input-class" />
				</div>

				<div id="login-box-input-check">
					<div id='check-input-tip'>
						<span v-show="isShow">用户或密码错误！</span>
					</div>
					<div id="check-input-remenberPassword">
						<input type="checkbox" name="postCheck" id="check"/>
					    <label for="check">记住密码</label>
					</div>
					
				</div>
					<div id="login-box-input-button">
						<button @click="isLogin" type="button" class="input-button">登陆</button>
					</div>
			</div>
			<div id="login-box-foot">
				<a href="/">忘记密码</a>
				<span>|</span>
				<a href="/">注册账号</a>	
			</div>
		</div>
</template>

<script>
export default {
    name:'Login',
    
    data(){
        return {
           user:'',
			password:'',
			isShow:false,
        }  
    },
    methods:{
        isLogin(){
            const xhr = new XMLHttpRequest();
            let userName = this.user;
            let userPassword = this.password;
            let query = 'name='+userName + '&password=' + userPassword;
            xhr.open('post','http://127.0.0.1:3000/',true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr.send(query);
            xhr.onload=()=>{
				if(xhr.responseText=='')
				{
					return this.isShow = true;
				}
				else{
					alert('登陆成功，欢迎用户：'+xhr.responseText)
				}
				
            }

        }
    }
}


</script>

<style>
@import '../css/login.css';
</style>