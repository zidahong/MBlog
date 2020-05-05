let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let cors = require('cors')
let mysqlQuery = require('./src/server/login');
let getArticle = require('./src/server/getText');

let app = express();
path.resolve(__dirname, '..')
app.use(cors({origin:'http://localhost:8080',optionsSuccessStatus:200}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.all('*', (req, res, next) =>{
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    // Access-Control-Allow-Credentials
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

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