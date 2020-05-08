function mysqlQuery(user, password,callback){

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
    const sql = 'select user from userinfo where user=\''+user+'\' and '+'password=\''+password+'\'';
    //查询
    const res=connect.query(sql, (err, result) => {
        if (err) {
            callback(err.message) ;
            return;
        }
        if(result[0])
        {
            //查询得到结果，返回用户名称
            callback(result[0].user);
        }else{
            // 查不到结果返回undefined
            callback('404');
        }
        
    })
    //关闭连接
    connect.end();
}

module.exports = mysqlQuery;