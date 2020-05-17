<template>
  <div id="set-up-box">
    <div id="set-up-box-contain">
      <div id="set-up-box-header" class="set-up-box-class">
        <h2>设置用户信息</h2>
      </div>
       <div id="set-up-box-main" class="set-up-box-class">
        <h3>用户名称：{{$store.state.user}}</h3>
        <h3>邮箱:未知</h3>
        <button>修改密码</button>
        <button>注销账号</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetUp"
};
</script>

<style>
#set-up-box {
  display: flex;
  justify-content: center;
  width: 880px;
  box-sizing: border-box;
  padding: 20px;
}

.set-up-box-class {
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
}

#set-up-box-contain {
  background-color: #eeeeee;
  border-radius: 3px;
  padding: 20px;
  width: 100%;
}
</style>