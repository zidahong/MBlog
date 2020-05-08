let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let cors = require('cors')
let mysqlQuery = require('./src/server/login');
let getText = require('./src/server/getText');
let getArticle = require('./src/server/getArticle');
let submitText = require('./src/server/submitText');
let history = require('connect-history-api-fallback');

let app = express();
path.resolve(__dirname, '..')
app.use(cors({origin:'http://localhost:8080',optionsSuccessStatus:200}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
// app.use(history({
//     index: '/',
//     verbose: true
//   }));

//处理跨域问题
app.all('*', (req, res, next) =>{
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    next();
  });

//从数据库获取文章摘要
app.get('/getblock',(req,res)=>{
    getText(req.query.page,req.query.nums,(data)=>{
        res.send(JSON.stringify(data));
    })
})
//从数据库获取文章内容
app.get('/getarticle',(req,res)=>{
    getArticle(req.query.id,(data)=>{
        res.send(JSON.stringify(data));
    })
})

//获取登陆请求
app.post("/login",(req,res)=>{
    mysqlQuery(req.body.name,req.body.password,(result)=>{
        console.log(result);
        if(result){
            if(result!='404'){
                res.cookie('LoginName',result);
            }
            res.send(result); 
        }    
    });
})

//接收文章数据
app.post("/submittext",(req,res)=>{
    // console.log(req.body)
    submitText(req.body,(result)=>{
        console.log(result);
        if(result){
            res.send(result); 
        }
         
    });
})
 
app.listen(3000, function () {
    console.log('服务器启动中');
})