const mysqlConfig = {//数据库配置
    host: 'localhost', //主机名称
    user: 'root', //用户名
    password: 'root', //用户密码
    database: 'nodeinfo' //数据库
}

//设置服务器的域名和服务器端口
const httpConfig = {
    domain:'http://127.0.0.1:8080',
    port:3000
}

module.exports = {
    mysqlConfig,
    httpConfig
}

    