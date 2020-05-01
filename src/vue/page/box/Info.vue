<template>
  <div id="info-box">
    <div id='info-title'>
      <h1>公告</h1>
    </div>
    <div id="info-pic">
      <img src="../../../img/page/person-img.jpg" alt="头像">
    </div>
    <div id="info-person">
      <div id="info-person-name"  class="info-person-tag">
        <img src='../../../img//page/info-person-name.png'>
        <span>Zida</span>
      </div>
      <div id="info-person-email"  class="info-person-tag">
      <img src='../../../img//page/info-person-email.png'>
      <span>847866091@qq.com </span>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
    name:'Info'
}
</script>

<style>
#info-box{
  padding-bottom: 15px;
  background-color:#ffffff;
  display: inline-block;
  margin-bottom:15px;
}

#info-title{
  color: seagreen;
  padding: 0 15px;
}

#info-pic{
  
  text-align: center;
}
#info-pic img{
  width: 80px;
  height: 80px;
  border: seagreen 5px solid;
  border-radius: 80px;
}

#info-person{
  padding-top:20px;
  width: 200px;
  margin: 0 auto;
  color: seagreen;
  text-align: center;
  
}

.info-person-taga{
  text-align: left;
}

#info-person img{
  width: 30px;
  height: 30px;
  vertical-align: text-bottom;
  
}

</style>