function mysqlCreate(user, password,email,callback){

    const mysql = require('mysql');
    //创建一个mysql连接connect
    const connect = mysql.createConnection({
        host: 'localhost', //主机名称
        user: 'root', //用户名
        password: 'root', //用户密码
        database: 'nodeinfo' //数据库
    });
    //建立连接
    connect.connect();
    //构造查询语句
     let sql = 'insert into userinfo(user,password,email) values(?,?,?)';
     let values = [user,password,email];
     
    //查询
    connect.query(sql,values,(err, result) => {
        if (err) {
            callback(err.message) ;
        }else{
            //成功插入返回200
            callback("200");
        }
    })
    //关闭连接
    connect.end();
}

module.exports = mysqlCreate;