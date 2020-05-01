<template>
  <div id="article-content-box">
    <div id="article-content-header">
      <h1>Pandownload 开发者被捕后，百度网盘会变得更好么？丨附律师事件解读</h1>
    </div>
    <div id="article-content-main">
        <hr>
      <p>在此之前，大部分人其实并不知道这款软件，毕竟作为一个第三方小工具，用户只有几十万左右。但在第三方网盘下载工具这块儿，绝对是影响力和口碑最好的产品之一了。</p>
      <p>Pandownload 发布于 3 年前，作为一款网盘的下载工具，Pandownload 用户在没有百度会员权限情况下，对文件进行在线解压，且可以进行多任务不限速同时下载。</p>
      <p>大家都知道，百度网盘非会员用户的下载速度一直是其被大众诟病的原因，因此，Pandownload 被很多人称为「宝藏软件」。</p>
      <p>它的实现原理与 IDM 法类似，通过软件获取直链后调用 aria2 下载。操作的原理是在本地维护一个 IE 浏览器，可以在登录的时候看到，弹出了 IE 的百度网盘的登录页面，登录成功后再将浏览器进行隐藏。</p>
      <p>但这毕竟是未经授权的操作，并对百度网盘造成了直接的利益侵犯，再加上此次被举报的隐私泄露、违规谋利事件，让该软件的制作者蔡某被警方逮捕。</p>
      <p>据举报人所说，蔡某通过租用网络服务器对产品进行更新维护，并通过 QQ 群收取 1 到 10 元不等的进群费，总计牟利达 30 万余元。不过也有网友反馈 Pandownload 软件免费开放，蔡某所有获利均为自愿打赏。</p>
    </div>
    <div id="article-content-foot"></div>
  </div>
</template>

<script>
export default {
    name:'ArticleContent',
};
</script>

<style>
#article-content-box{
    width: 770px;
    display: inline-block;
    vertical-align: top;
    background-color: #FFFFFF;
}
</style>