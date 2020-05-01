<template>
  <div id="search-box">
      <input type="text" placeholder="搜索"/>
      <button @click="isClick" type="button">搜索</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods:{
    isClick(){
      alert("搜索功能未开放");
      }
  }
};
</script>

<style>

#search-box {
  
  /* display: inline-block;
  text-align: center;
  padding: 0 15px; */
  display: flex;
  border: rgb(159, 165, 162) solid 1px;
  margin: 0 15px;
  
  padding: 3px;
  border-radius: 50px;
}
/* #search-box span{
  display: inline-block;
  line-height: 50px;
} */
/* #search-box-contain {
  font-size: 0;
  border: seagreen solid 2px;
  border-radius: 30px;
} */
#search-box input {
  border: 0;
  outline: none;
  font-size: 12px;
  padding: 0 15px;

}

#search-box button {
  
  color: transparent;
  background-image: url("../../../img/page/search.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 0;
}
#search-box button:hover{
  background-color: rgb(46, 139, 87,0.1);
}
</style>