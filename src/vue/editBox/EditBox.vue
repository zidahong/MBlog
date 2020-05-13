<template>
  <div id="edit-box">
    <div id="edit-box-contain">
      <div id="edit-box-header" class="edit-box-class">
        <h2>发帖</h2>
      </div>
      <div id="edit-article-head" class="edit-box-class">
        <h3>TITLE</h3>
        <textarea name="Head" v-model="discuss.title"></textarea>
      </div>
      <div id="edit-article" class="edit-box-class">
        <h3>TEXT</h3>
        <textarea name="Head" v-model="discuss.text"></textarea>
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
        alert("请登陆后再发帖~")
      } else {
        this.discuss.user =this.$store.state.user;
          //获取评论时间
         this.discuss.time = tool.getTime();

        let discuss = this.discuss;
        ajax.submitText(discuss, data => {
          alert("提交成功");
          console.log(data);
        });
      }
    }
  }
};
</script>

<style>
#edit-box {
  display: flex;
  justify-content: center;
  width: 880px;
  box-sizing: border-box;
  padding: 20px;
}

.edit-box-class {
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
}

#edit-box-contain {
  background-color: #eeeeee;
  border-radius: 3px;
  padding: 20px;
  width: 100%;
}
#edit-article-head textarea {
  margin-top: 5px;
  resize: none;
  height: 50px;
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

/* #edit-article-submit{
 
} */

#edit-article-submit button {
  width: 100%;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 3px;
  border: solid 1px #eeeeee;
}
</style>