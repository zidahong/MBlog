let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');


let mysqlQuery = require('./src/server/handle.js');
let serConfig = require('./src/server/serConfig.js');

let app = express();
path.resolve(__dirname, '..')
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());


//处理跨域问题
app.all('*', (req, res, next) =>{
    res.header('Access-Control-Allow-Origin', serConfig.httpConfig.domain);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    next();
  });

//从数据库获取文章摘要
app.get('/getblock',(req,res)=>{
    mysqlQuery.getArticleBrief(req.query.page,req.query.nums,(data)=>{
        res.send(JSON.stringify(data));
    })
})
//从数据库获取文章内容
app.get('/getarticle',(req,res)=>{
    mysqlQuery.getArticle(req.query.id,(data)=>{
        res.send(JSON.stringify(data));
    })
})

//获取登陆请求
app.post("/login",(req,res)=>{
    mysqlQuery.login(req.body.name,req.body.password,(result)=>{
        console.log(result);
        if(result){
            if(result!='404'){
                res.cookie('LoginName',result);
            }
            res.send(result); 
        }    
    });
})

//获取注册请求
app.post("/create",(req,res)=>{
    mysqlQuery.createAcount(req.body.name,req.body.password,req.body.email,(result)=>{
        if(result=='200'){
            //向客户端发送200，表示注册成功
            res.send(result); 
        }else{
            //向客户端发送404表示注册失败
            console.log(result);
            res.send('404')
        }   
    });
})

//接收文章数据
app.post("/submittext",(req,res)=>{
    mysqlQuery.submitArticle(req.body,(result)=>{
        if(result){
            res.send(result); 
        }  
    });
})

//获取评论请求
app.get('/comment',(req,res)=>{
<<<<<<< HEAD
    mysqlQuery.getComment(req.query.id,req.query.textid,(data)=>{
=======
    mysqlQuery.getComment(req.query.id,(data)=>{
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
        console.log(req.query,data);
        res.send(JSON.stringify(data));
    })
});

//添加评论
app.post("/submitcomment",(req,res)=>{
    mysqlQuery.submitComment(req.body,(result)=>{
        console.log(result);
        if(result){
            res.send(result); 
        }
         
    });
})
 
app.listen(serConfig.httpConfig.port, function () {
    console.log('服务器启动中');
})