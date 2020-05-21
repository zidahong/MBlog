# MBlog
这是一个个人网站项目

# 功能

<p> 登陆
<p> 注册
<p> 发帖
<p> 留言

# 使用技术
<p>VUE

<p>NODE

<p>EXPRESS

<p>MYSQL

# 注意
使用该项目需要本地有MYSQL，且还要有自己的数据库

# 使用

`git clone https://github.com/zidahong/MBlog.git`

`npm install`

<p> 进入/src/js/httpconfig.js,设置ajax请求的服务器IP地址和端口
<p> 进入/src/server.js/serConfig.js ,设置数据库,服务器的IP地址和端口


# 修改密码的交互过程

## 请求验证码

<p>1、客户端发送用户名称
<p>2、服务端接收用户名称，查询用户名称的邮箱
<p>1）、查询得到结果   返回用户邮箱：
<p>2）、查询不到结果   返回：userOrEmailUdefined
<p>3）、发生查询错误   返回错误：getEmailError
<p>3、向用户邮箱发送邮件
<p>发送邮件成功：sendEmailSeccess
<p>发送邮件失败：sendEmailFaliure

<p>4、向用户所在的auth字段插入验证码
<p>1）插入成功：返回：insertSuccess；
<p>2) 插入失败：返回insertAuthCodeError

<p>5、向用户返回查询结果


<p>用户提交验证信息
<p>1、用户提交验证信息，包括字段user，password（新密码），authcode（验证码），

<p>2、检验验证码是否正确
<p>1）、查询得到结果   返回: authCodeAck 验证码正确    
<p>2）、查询不到结果   返回：authCodeError 验证码错误
<p>3）、发生查询错误   返回：querryAuthCodeError 发送查询错误

<p>3、验证码正确
<p>1）修改密码
<p>成功：changePasswordSuccess   发送给客户端
<p>失败：changePasswordFaliure    发送给客户端

<p>4、清除验证码
<p>成功：initAuthCodeSuccesss
<p>失败：initAuthCodeFaliure


<p>客户端接收到的信息有如下

<p>验证码阶段
<p>userOrEmailUdefined ： 查询不到用户或邮箱
<p>getEmailError ： 获取用户邮箱失败
<p>'xxxxx'  :用户的邮箱
<p>sendEmailFaliure:向邮箱发送验证码失败

<p>修改密码阶段
<p>changePasswordSuccess
<p>changePasswordFaliure

<p>authCodeError 验证码错误
<p>querryAuthCodeError  发送错误

# 目录结构

```
MBlog
│
├─ database    //数据库的表结构
│  ├─ nodeinfo_comment.sql
│  ├─ nodeinfo_text.sql
│  └─ nodeinfo_userinfo.sql
├─ dist
│  ├─ bundle.js
│  ├─ favicon.ico
│  └─ index.html
├─ favicon.ico
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ server.js
├─ src
│  ├─ css
│  │  └─ base.css
│  ├─ img
│  │  ├─ ico.png
│  │  └─ login
│  │     └─ headpic.png
│  ├─ js
│  │  ├─ ajax.js
│  │  ├─ httpconfig.js   //ajax网络地址配置文件
│  │  ├─ main.js
│  │  ├─ router.js
│  │  ├─ store.js
│  │  └─ tool.js
│  ├─ server
│  │  ├─ handle.js
│  │  └─ serConfig.js   //服务器与MySQL配置文件
│  └─ vue
│     ├─ App.vue
│     ├─ main
│     │  ├─ comment
│     │  │  └─ comment.vue
│     │  ├─ content.vue
│     │  ├─ edit
│     │  │  └─ edit.vue
│     │  ├─ main.vue
│     │  ├─ menu.vue
│     │  ├─ menuItem.vue
│     │  └─ siteInfo.vue
│     └─ navigation
│        ├─ createAcount.vue
│        ├─ login.vue
│        ├─ loginbar.vue
│        ├─ navbar.vue
│        └─ setPassword.vue
└─ webpack.config.js

```


