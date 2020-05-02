let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
// import mysqlQuery from './src/js/login';
let mysqlQuery = require('./src/js/login');

let app = express();
path.resolve(__dirname, '..')

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(bodyParser.json());

app.get('/',(req,res)=>{
})

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