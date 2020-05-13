//将cookie转化为对象
function cookieToObj() {
    //将cookie按；分组
    let cookies = document.cookie.split(';');
    //将组转化为对象；
    let cookieObj = cookies.reduce((pre, next) => {
        const key = next.split('=')[0];
        const val = next.split('=')[1];
        pre[key] = val;
        return pre;
    }, {})
    return cookieObj;
}

function getTime() {
    //获取当前时间
    let time = new Date()
    let year = time.getFullYear();
    let mouth =time.getMonth();
    let date = time.getDate()+1;
    let hours = time.getHours();
    let Minutes = time.getMinutes();
    return year + '-' +mouth + '-' + date + ' ' + hours + ':' + Minutes;
}

module.exports = {
    cookieToObj,
    getTime
}