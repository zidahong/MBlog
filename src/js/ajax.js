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
  xhr.open("post", "http://127.0.0.1:3000/", true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send(query);
  xhr.onload = function () {
    callback(xhr.responseText);
  };
}
module.exports = {
  ajax,
  isLogin
};