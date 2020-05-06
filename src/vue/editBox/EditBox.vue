<template>
  <div id="edit-box">
    <div id="edit-box-header">
      <h1>编辑文章</h1>
    </div>
    <div id="edit-article-head">
      <h3>HEAD</h3>
      <textarea name="Head" maxlength="50" v-model="text.Head"></textarea>
    </div>
    <div id="edit-article-section">
      <h3>Section</h3>
      <textarea name="Head" maxlength="200" v-model="text.Section"></textarea>
    </div>
    <div id="edit-article">
      <h3>Article</h3>
      <textarea name="Head" maxlength="2000" v-model="text.Article"></textarea>
    </div>
    <div id="edit-article-time">
      Time
      <input type="date" v-model="text.Time">
      Type
      <input type="text" v-model="text.type">
      Author
      <input type="text" v-model="text.Author">
    </div>
    <div id="edit-article-submit">
      <button @click="submitText">提交</button>
    </div>
  </div>
</template>

<script>
let ajax = require('@/js/ajax.js');
export default {
  name: "EditBox",
  data(){
    return{
      text:{
        Head:'',
        Section:'',
        Article:'',
        Time:'',
        Type:'',
        Author:''
      }
    }
  },
  methods:{
    submitText(){
        let text = this.text;
        ajax.submitText(text,(data)=>{
           alert('提交成功');
           console.log(data);  
        })
    }
  }
};
</script>

<style>
#edit-box {
  background-color: #fff;
  width: 50%;
  margin: 1%;
  padding: 5%;
  display: flex;
  flex-direction: column;
}

#edit-article-head textarea {
  width: 100%;
  resize: none;
  height: 36px;
  font-size: 18px;
  padding: 18px;
}
#edit-article-section textarea {
  width: 100%;
  resize: none;
  height: 90px;
  font-size: 18px;
  padding: 18px;
}
#edit-article textarea {
  width: 100%;
  resize: none;
  height: 720px;
  font-size: 18px;
  padding: 18px;
}
</style>