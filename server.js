let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
// import mysqlQuery from './src/js/login';
let mysqlQuery = require('./src/server/login');
let getArticle = require('./src/server/getText');

let app = express();
path.resolve(__dirname, '..')

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

//从数据库获取文章内容
app.get('/getblock',(req,res)=>{
    getArticle(req.query.page,(data)=>{
        res.send(JSON.stringify(data));
    })
})

//获取登陆请求
app.post("/",(req,res)=>{
    mysqlQuery(req.body.name,req.body.password,(result)=>{
        console.log(result);
        if(result){
            res.cookie('LoginName',result);
            res.send(result); 
        }
         
    });
})
 
app.listen(3000, function () {
    console.log('服务器启动中');
})