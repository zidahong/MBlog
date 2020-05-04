function ajax(query,callback){
    let xhr = new XMLHttpRequest();
         xhr.open('get','http://127.0.0.1:3000/'+query);
         xhr.send();
         xhr.onload = function(){
        // console.log(xhr.responseText);
         // console.log(JSON.parse(xhr.responseText));
         let resText = JSON.parse(xhr.responseText);
         callback(resText);
       }
};

function isLogin(userName,userPassword,callback){
  let xhr = new XMLHttpRequest();
  let query = "name=" + userName + "&password=" + userPassword;
  xhr.open("post", "http://127.0.0.1:3000/", true);
  xhr.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  xhr.send(query);
  xhr.onload = function(){
      callback(xhr.responseText);
  };
}
module.exports = {
  ajax,
  isLogin
};