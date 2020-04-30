let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
// import mysqlQuery from './src/js/login';
let mysqlQuery = require('./src/js/login');

let app = express();
path.resolve(__dirname, '..')

let urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.post("/",urlencodedParser,(req,res)=>{
    // console.log(req.body);
    mysqlQuery(req.body.name,req.body.password,(result)=>{
        console.log(result);
        res.send(result);  
    });
})
 
app.listen(3000, function () {
    console.log('服务器启动中');
})