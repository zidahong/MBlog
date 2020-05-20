# MBlog
这是一个个人网站项目

# 使用技术
VUE
NODE
EXPRESS
MYSQL

# 注意
使用该项目需要本地有MYSQL，且还要有自己的数据库


# 修改密码的交互过程
请求验证码

1、客户端发送用户名称
2、服务端接收用户名称，查询用户名称的邮箱
1）、查询得到结果   返回用户邮箱：
2）、查询不到结果   返回：userOrEmailUdefined
3）、发生查询错误   返回错误：getEmailError
3、向用户邮箱发送邮件
发送邮件成功：sendEmailSeccess
发送邮件失败：sendEmailFaliure

4、向用户所在的auth字段插入验证码
1）插入成功：返回：insertSuccess；
2) 插入失败：返回insertAuthCodeError

5、向用户返回查询结果


用户提交验证信息
1、用户提交验证信息，包括字段user，password（新密码），authcode（验证码），

2、检验验证码是否正确
1）、查询得到结果   返回: authCodeAck 验证码正确    
2）、查询不到结果   返回：authCodeError 验证码错误
3）、发生查询错误   返回：querryAuthCodeError 发送查询错误

3、验证码正确
1）修改密码
成功：changePasswordSuccess   发送给客户端
失败：changePasswordFaliure    发送给客户端

4、清除验证码
成功：initAuthCodeSuccesss
失败：initAuthCodeFaliure


客户端接收到的信息有如下

验证码阶段
userOrEmailUdefined ： 查询不到用户或邮箱
getEmailError ： 获取用户邮箱失败
'xxxxx'  :用户的邮箱
sendEmailFaliure:向邮箱发送验证码失败

修改密码阶段
changePasswordSuccess
changePasswordFaliure

authCodeError 验证码错误
querryAuthCodeError  发送错误