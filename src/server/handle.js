function login(user, password, callback) {

    // 用户登录判断
    const config = require('./serConfig');
    const mysql = require('mysql');
    //创建一个mysql连接connect
    const connect = mysql.createConnection(config.mysqlConfig);
    //建立连接
    connect.connect();
    //构造查询语句
    const sql = 'select user from userinfo where user=\'' + user + '\' and ' + 'password=\'' + password + '\'';
    //查询
    const res = connect.query(sql, (err, result) => {
        if (err) {
            callback(err.message);
            return;
        }
        if (result[0]) {
            //查询得到结果，返回用户名称
            callback(result[0].user);
        } else {
            // 查不到结果返回undefined
            callback('404');
        }

    })
    //关闭连接
    connect.end();
}

function createAcount(user, password, email, callback) {
    //创建新用户

    const mysql = require('mysql');

    //mysql的配置
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig);
    connect.connect();

    //插入用户名，密码，邮箱
    let sql = 'insert into userinfo(user,password,email) values(?,?,?)';
    let values = [user, password, email];

    //查询
    connect.query(sql, values, (err, result) => {
        if (err) {
            callback(err.message);
        } else {
            //成功插入返回200
            callback("200");
        }
    })
    //关闭连接
    connect.end();
}



function getArticleBrief(page, nums, callback) {

    //获取讨论，包括文章id，head,time，author,text

    //使用mysql模块
    const mysql = require('mysql');
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig)

    //文章数据存在nodeinfo数据库，article表中
    // ID Head Section Article

    connect.connect()

    page = page - 1; //索引从0开始
    const sql = 'select id,title,text,time,user from text order by id desc limit ' + page + ',' + nums;

    console.log(sql);

    const result = connect.query(sql, (err, data) => {
        if (err) {
            callback(err.message);
            return;
        }
        callback(data);
    });

    connect.end();

}



function getArticle(ID, callback) {

    // 获取文章内容

    //使用mysql模块
    const mysql = require('mysql');
    const config = require('./serConfig');
    const connect = mysql.createConnection(config.mysqlConfig)

    //文章数据存在nodeinfo数据库，article表中
    // ID Head Section Article

    connect.connect()

    const sql = 'select * from text where id=' + ID;

    console.log(sql);
    connect.query(sql, (err, data) => {
        if (err) {
            callback(err.message);
        } else {
            callback(data);
        }
    });
    connect.end();
}


function submitArticle(discuss, callback) {

    // 添加文章

    const mysql = require('mysql');
    const config = require('./serConfig');
    const connect = mysql.createConnection(config.mysqlConfig);

    connect.connect();
    console.log('数据库连接成功');



    //插入数据
    let sql = 'insert into text(title,text,time,user) values(?,?,?,?)';
    let values = [discuss.title, discuss.text, discuss.time, discuss.user];

    connect.query(sql, values, (err, result) => {
        if (err) {
            callback(err.message);
        } else {
            callback('200');
        }
    });

    connect.end();
}


function getComment(id, textid, callback) {

    //获取用户评论
    //该函数查询输入ID后的10条评论

    const mysql = require('mysql');
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig);
    connect.connect();

    const sql = 'select * from comment where textid =' + textid + ' order by id desc limit ' + id + ',10';

    connect.query(sql, (err, data) => {
        if (err) {
            callback(err.message);
        } else {
            callback(data);
        }
    });

    connect.end();
}


function submitComment(text, callback) {

    // 提交评论
    const mysql = require('mysql');
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig);

    connect.connect();
    console.log('数据库连接成功');
    console.log(text);

    //插入数据
    let sql = 'insert into comment(author,comment,time,textid) values(?,?,?,?)';
    let values = [text.author, text.comment, text.time, text.textid];

    connect.query(sql, values, (err, result) => {
        if (err) {
            callback(err.message);
        } else {
            // 200表示成功执行
            callback('200');
        }
    });

    connect.end();
}

//获取用户的邮箱
function getUserEmail(user, callback) {
    const mysql = require('mysql');
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig);
    connect.connect();

    const sql = 'select email from userinfo where user =\'' + user + '\'';

    connect.query(sql, (err, data) => {
        if (err) {
            console.log("getUserEmail:",err.message);
            //查询发生错误
            callback('getEmailError');
        } else {
            console.log("getUserEmail:",data);
            if(!data.length){
                //用户或邮箱不存在
                callback('userOrEmailUdefined');
            }else{
                //成功返回用户邮箱
                callback(data[0].email);
            }
            
        }
    });
    connect.end();
}


//发送邮件验证码服务
function sendEmailAuth(userEmail, authCode, callback) {
    const nodemailer = require('nodemailer');
    const user = '1273227485@qq.com';
    const password = 'kethgxxhuirpbaaa'; //授权码

    console.log("sendEmailAuth", userEmail, authCode);
    let transporter = nodemailer.createTransport({
        service: "QQ",
        auth: {
            user: user,
            pass: password
        },

    })

    transporter.sendMail({
        from: '<1273227485@qq.com>',
        to: '<' + userEmail + '>',
        subject: '来自微帖网站的修改密码验证码',
        html: '您的验证码是：' + authCode + '<br>'
    }, (err, res) => {
        if(err){
            console.log(err)
            callback('sendEmailSeccess');
        }else{
            console.log(res)
            callback('sendEmailFaliure')
        }
        
    })
}



function insertAuthCode(authCode, user, callback) {
    //插入验证码

        const mysql = require('mysql');
        const config = require('./serConfig');

        const connect = mysql.createConnection(config.mysqlConfig);
        connect.connect();

        const sql = 'update userinfo set authcode = \'' + authCode + '\' where user =\'' + user + '\'';

        connect.query(sql, (err, data) => {
            if (err) {
                console.log("insertAuthCode:",err.message);
                callback('insertAuthCodeError');
            } else {
                // 插入成功，返回200
                console.log("insertAuthCode:",data);
                callback('insertSuccess');
            }
        });
        connect.end();
}

function querryAuthCode(user, callback) {
    //查询验证码
    const mysql = require('mysql');
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig);
    connect.connect();

    const sql = 'select authcode from userinfo where user =\'' + user + '\'';

    connect.query(sql, (err, data) => {
        if (err) {
            //插入产生错误
            console.log("querryAuthCode:",err.message);
            callback('querryAuthCodeError');
        } else {
            //插入成功
            console.log("querryAuthCode:",data);
            if(!data.length){
                callback('authCodeError')
            }else{
                console.log("querryAuthCode:",data[0].authcode);
                callback(data[0].authcode);
            }
            
        }
    });
    connect.end();
}


//修改用户密码
function changePassword(user,password,callback){
    const mysql = require('mysql');
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig);
    connect.connect();

    const sql = 'update userinfo set password = \'' + password + '\' where user =\'' + user + '\'';

    connect.query(sql, (err, data) => {
        if (err) {
            console.log('changePassword:',err.message)
            callback('changePasswordFaliure');
        } else {
            console.log('changePassword:',data)
            callback('changePasswordSuccess');
        }
    });
    connect.end();
}



function initAuthCode(user, callback) {
    //查询完成后需重置数据库中的验证码
    const mysql = require('mysql');
    const config = require('./serConfig');

    const connect = mysql.createConnection(config.mysqlConfig);
    connect.connect();

    let deleteCode = 'hereisnoauthcode';
    const sql = 'update userinfo set authcode = \'' + deleteCode + '\' where user =\'' + user + '\'';

    connect.query(sql, (err, data) => {
        if (err) {
            console.log('initAuthCode:',err.message);
            callback('initAuthCodeSuccesss');
        } else {
            console.log('initAuthCode:',data);
            callback('initAuthCodeFaliure');
        }
    });
    connect.end();
}


module.exports = {
    login,
    createAcount,
    getArticleBrief,
    getArticle,
    submitArticle,
    submitComment,
    getComment,
    getUserEmail,
    sendEmailAuth,
    insertAuthCode,
    querryAuthCode,
    initAuthCode,
    changePassword
}