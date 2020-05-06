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

function submitText(text,callback){
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true; //允许跨域请求
  xhr.open('post',"http://127.0.0.1:3000/submittext",true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  // text.Head,text.Section,text.Ariticle,text.Time,text.Type,text.Author
 
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


module.exports = {
  ajax,
  isLogin,
  submitText
};