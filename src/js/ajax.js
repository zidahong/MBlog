//发送给请求，返回JSON对象
function ajax(query, callback) {
  let xhr = new XMLHttpRequest();

  xhr.withCredentials = true; //允许跨域请求
  xhr.open('get', 'http://127.0.0.1:3000/' + query);

  xhr.send();
  xhr.onload = function () {
    let resText = JSON.parse(xhr.responseText);
    callback(resText);
  }
};


//发送登陆时的用户信息
function isLogin(userName, userPassword, callback) {
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求

  let query = "name=" + userName + "&password=" + userPassword;
  xhr.open("post", "http://127.0.0.1:3000/login", true);
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
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求

  let query = "name=" + userName + "&password=" + userPassword + "&email=" + userEmail;
  xhr.open("post", "http://127.0.0.1:3000/create", true);
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
function submitText(text,callback){
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求
  xhr.open('post',"http://127.0.0.1:3000/submittext");
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
 
  let head = "Head=" + text.Head +"&";
  let section = "Section=" + text.Section +"&";
  let article = "Article=" + text.Article +"&";
  let time = "Time=" + text.Time +"&";
  let type = "Type=" + text.Type +"&";
  let author = "Author=" + text.Author;

  let query = head + section +article+time+type+author;

  xhr.send(query);

  xhr.onload = function(){
    callback(xhr.responseText);
  }
}

//添加留言
function submitComment(text,callback){
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.open('post',"http://127.0.0.1:3000/submitcomment");
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );

  let time = "time=" + text.time +"&";
  let type = "author=" + text.username +"&";
  let author = "comment=" + text.comment;
  
  let query = time + type +author;

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