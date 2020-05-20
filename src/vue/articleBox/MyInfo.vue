<template>
      <div id="info-box">
        <div id="info-contain-title">
          简介
        </div>
        <div id="info-contain-info">
          <p>
            这是一个简单的个人项目，实现了用户登录，注册，修改密码，发表评论，发帖子的功能，网站的前端使用的框架是vue，后端使用的是
            node.js，使用express框架搭建的服务，数据库使用的是MySQL。
          </p>
          <p>
           Email：847866091@qq.com
          </p>
        </div>
        
      </div>

</template>

<script>
export default {
  name: "MyInfo"
};
</script>

<style>
#info-box{
  box-sizing: border-box;
  width: 296px;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 250px;
  cursor: pointer;
}

#info-contain-title{
  box-sizing: border-box;
  height: 59px;
  color: #0084ff;
  font-weight: 600;
  border-bottom: 2px solid #f6f6f6;
  padding: 20px;
}

#info-contain-info {
  padding: 20px;
  color: #999999;
}

</style>