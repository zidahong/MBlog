<template>
  <div id="side-box">
    <div id="side-box-contain">
      <div id="info-box">
        <div id="info-contain-title">
          <h3>个人简介</h3>
        </div>
        <div id="info-contain-info">职业：学生</div>
        <div id="info-contain-connect">email：847866091@qq.com</div>
      </div>
      <!-- <div id="rec-box">
        <div id="rec-box-title">
          <h3>分类</h3>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInfo"
};
</script>

<style>
#side-box{
  box-sizing: border-box;
  width: 296px;
  margin-left: 10px;
 
}
#side-box-contain{
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 3px;
}
#info-box {
  box-sizing: border-box;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 3px;
}
#info-contain-info {
  margin-top: 10px;
}

#rec-box {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 3px;
}
</style>