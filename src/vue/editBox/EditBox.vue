<template>
  <div id="edit-box">
    <div id="edit-box-contain">
      <div id="edit-box-header" class="edit-box-class">
       发帖
      </div>
      <div id="edit-article-head" class="edit-box-class">
     
        <textarea name="Head" v-model="discuss.title" placeholder="请输入标题~"></textarea>
      </div>
      <div id="edit-article" class="edit-box-class">
        
        <textarea name="Head" v-model="discuss.text" placeholder="请输入内容~"></textarea>
      </div>
      <div id="edit-article-submit">
        <button @click="submitText">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
let ajax = require("@/js/ajax.js");
const tool = require("@/js/tool.js");
export default {
  name: "EditBox",
  data() {
    return {
      discuss: {
       title:"",
       text:"",
       time:"",
       user:""
      }
    };
  },
  methods: {
    submitText() {
      if (!this.$store.state.user) {
        this.$store.commit('openLoginPage')
      } else {
        this.discuss.user =this.$store.state.user;
          //获取评论时间
         this.discuss.time = tool.getTime();

        let discuss = this.discuss;
        ajax.submitText(discuss, data => {
          alert("提交成功");
          location.reload();
        });
      }
    }
  }
};
</script>

<style>

#edit-box {
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  width: 694px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}


#edit-box-header{
  box-sizing: border-box;
  height: 59px;
  color: #0084ff;
  font-weight: 600;
  border-bottom: 2px solid #f6f6f6;
  padding: 20px;
}

#edit-article-head{
  padding: 20px;
}
#edit-article-head textarea {
  margin-top: 5px;
  resize: none;
  height: 45px;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: solid 1px #eeeeee;
}

#edit-article textarea {
  margin-top: 5px;
  resize: none;
  height: 300px;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: solid 1px #eeeeee;
}

#edit-article-time input {
  border-radius: 3px;
}

#edit-article{
  padding: 20px;
}


#edit-article-submit button {
  width: 100%;
  background-color: #0084ff;
   color: #fff;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #eeeeee;
  outline: none;
  cursor: pointer;
}

#edit-article-submit button:hover {
   background-color: #0077e6;
    color: #fff;
    outline: none;
}

</style>