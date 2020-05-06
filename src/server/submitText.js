function submitText(text,callback){
    const mysql = require('mysql');
    const connect = mysql.createConnection({
        host: 'localhost', //主机名称
        user: 'root', //用户名
        password: 'root', //用户密码
        database: 'nodeinfo' //数据库
    });

    connect.connect();
    console.log('数据库连接成功');
    console.log(text);
    
    
    //插入数据
    let sql = 'insert into article(Head,Section,Article,Time,Type,Author) values(?,?,?,?,?,?)';
    let values = [text.Head,text.Section,text.Article,text.Time,text.Type,text.Author];

    connect.query(sql,values,(err,result)=>{
        if(err){
            callback(err.message);
        }
        else{
            callback(result);
        }
    });

    connect.end();
}

module.exports = submitText;