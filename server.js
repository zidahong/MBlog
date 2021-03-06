let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
// let history = require("connect-history-api-fallback");

let mysqlQuery = require('./src/server/handle.js');
let serConfig = require('./src/server/serConfig.js');

let app = express();

path.resolve(__dirname, '..')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
// app.use(history());


//处理跨域问题
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', serConfig.httpConfig.domain);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    next();
});

//从数据库获取文章摘要
app.get('/getblock', (req, res) => {
    mysqlQuery.getArticleBrief(req.query.page, req.query.nums, (data) => {
        res.send(JSON.stringify(data));
    })
})
//从数据库获取文章内容
app.get('/getarticle', (req, res) => {
    mysqlQuery.getArticle(req.query.id, (data) => {
        res.send(JSON.stringify(data));
    })
})

//获取登陆请求
app.post("/login", (req, res) => {
    mysqlQuery.login(req.body.name, req.body.password, (result) => {
        console.log(result);
        if (result) {
            if (result != '404') {
                res.cookie('LoginName', result);
            }
            res.send(result);
        }
    });
})

//获取注册请求
app.post("/create", (req, res) => {
    mysqlQuery.createAcount(req.body.name, req.body.password, req.body.email, (result) => {
        if (result == '200') {
            //向客户端发送200，表示注册成功
            res.send(result);
        } else {
            //向客户端发送404表示注册失败
            console.log(result);
            res.send('404')
        }
    });
})

//接收文章数据
app.post("/submittext", (req, res) => {
    mysqlQuery.submitArticle(req.body, (result) => {
        if (result) {
            res.send(result);
        }
    });
})

//获取评论请求
app.get('/comment', (req, res) => {
    mysqlQuery.getComment(req.query.id, req.query.textid, (data) => {
        console.log(req.query, data);
        res.send(JSON.stringify(data));
    })
});

//添加评论
app.post("/submitcomment", (req, res) => {
    mysqlQuery.submitComment(req.body, (result) => {
        console.log(result);
        if (result) {
            res.send(result);
        }

    });
})

//处理邮箱请求
app.get('/authcode', (req, res) => {
    //获取用户邮箱
    console.log('app-get-authcode:',req.query);
    mysqlQuery.getUserEmail(req.query.user, (result) => {
        console.log('app-get-authcode:',result);
        if (result == 'userOrEmailUdefined') {
            res.send('userOrEmailUdefined');

        } else if (result == 'getEmailError') {
            res.send('getEmailError');
        } else {
            // 生成随机六位验证码
            let authcode = '';
            for (let i = 0; i < 6; i++) {
                authcode += Math.floor(Math.random() * 10);
            }

            // 向邮箱发送验证码
            mysqlQuery.sendEmailAuth(result, authcode, (result) => {
                if(result=='sendEmailFaliure'){
                    res.send('sendEmailFaliure')
                }
            })

            //将验证码插入数据库
            mysqlQuery.insertAuthCode(authcode, req.query.user, (result) => {
                console.log(result);
            })

            //返回用户邮箱
            res.send(result);
        }
    });

})

app.post('/auth', (req, res) => {
    //查询用户的验证码
    console.log('app-post-auth:',req.body);
    mysqlQuery.querryAuthCode(req.body.user, (result) => {
        console.log('app-post-auth-querryAuthCode:',result);
        if (result == req.body.authcode) {
            //通过，允许用户修改密码
            mysqlQuery.changePassword(req.body.user, req.body.password, (result) => {
                console.log('app-post-auth-changePassword:',result);
                if (result == 'changePasswordSuccess') {
                    res.send('changePasswordSuccess');
                } else {
                    res.send('changePasswordFaliure');
                }
                mysqlQuery.initAuthCode(req.body.user, (result) => {
                    console.log('app-post-auth-initAuthCode:',result);
                });
            })
        } else {
            res.send('authCodeError');
        }
    });
})

app.listen(serConfig.httpConfig.port, function () {
    console.log('服务器启动中');
})