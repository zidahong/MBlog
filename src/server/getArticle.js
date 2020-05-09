function getArticle(ID, callback) {

    //page 是要获取数据的页数

    //使用mysql模块
    const mysql = require('mysql');

    const connect = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nodeinfo'
    })

    //文章数据存在nodeinfo数据库，article表中
    // ID Head Section Article

    connect.connect()

    const sql = 'select * from article where ID=' + ID;

    connect.query(sql, (err, data) => {
        if (err) {
            callback(err.message);
        } else {
            callback(data);
        }
    });
    connect.end();
}

module.exports = getArticle;