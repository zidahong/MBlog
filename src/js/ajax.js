//发送给请求，返回JSON对象
function ajax(query, callback) {
  const http = require('./httpconfig');
  
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求
  xhr.open('get', http.url + query);

  xhr.send();
  xhr.onload = function () {
    let resText = JSON.parse(xhr.responseText);
    callback(resText);
  }
};


//发送登陆时的用户信息
function isLogin(userName, userPassword, callback) {

  const http = require('./httpconfig');
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求

  let query = "name=" + userName + "&password=" + userPassword;
  xhr.open("post", http.url+"login", true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send(query);
  xhr.onload = function () {
    callback(xhr.responseText);
  };
}

//发送创建用户的信息
function isCreate(userName, userPassword, userEmail,callback) {
  const http = require('./httpconfig');
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求

  let query = "name=" + userName + "&password=" + userPassword + "&email=" + userEmail;
  xhr.open("post", http.url + "create", true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send(query);
  xhr.onload = function () {
    callback(xhr.responseText);
  };
}

//添加文章
function submitText(discuss,callback){
  const http = require('./httpconfig');
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求
  xhr.open('post',http.url + "submittext");
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
 
  let title = "title=" + discuss.title +"&";
  let text = "text=" + discuss.text +"&";
  let time = "time=" + discuss.time +"&";
  let user = "user=" + discuss.user;

  let query = title+text+time+user;

  xhr.send(query);

  xhr.onload = function(){
    callback(xhr.responseText);
  }
}

//添加留言
function submitComment(text,callback){
  const http = require('./httpconfig');
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open('post',http.url+"submitcomment");
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );

  let time = "time=" + text.time +"&";
  let type = "author=" + text.username +"&";
  let textid = "textid=" + text.textId +"&";
  let author = "comment=" + text.comment;

  let query = time + type+textid +author;

  xhr.send(query);
  xhr.onload = function(){
    callback(xhr.responseText);
  }
}



module.exports = {
  ajax,
  isLogin,
  isCreate,
  submitText,
  submitComment
};