<template>
  <div id="edit-box">
    <div id="edit-box-contain">
      <div id="edit-box-header" class="edit-box-class">
        <h2>编辑文章</h2>
      </div>
      <div id="edit-article-head" class="edit-box-class">
        <h3>HEAD</h3>
        <textarea name="Head" v-model="text.Head"></textarea>
      </div>
      <div id="edit-article-section" class="edit-box-class">
        <h3>Section</h3>
        <textarea name="Head" v-model="text.Section"></textarea>
      </div>
      <div id="edit-article" class="edit-box-class">
        <h3>Article</h3>
        <textarea name="Head" v-model="text.Article"></textarea>
      </div>
      <div id="edit-article-time" class="edit-box-class">
        <span>
          Time
          <input type="date" v-model="text.Time" />
        </span>
        <span>
          Type
          <input type="text" v-model="text.type" />
        </span>
        <span>
          Author
          <input type="text" v-model="text.Author" />
        </span>
      </div>
      <div id="edit-article-submit">
        <button @click="submitText">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
let ajax = require("@/js/ajax.js");
export default {
  name: "EditBox",
  data() {
    return {
      text: {
        Head: "",
        Section: "",
        Article: "",
        Time: "",
        Type: "",
        Author: ""
      }
    };
  },
  methods: {
    submitText() {
      let text = this.text;
      ajax.submitText(text, data => {
        alert("提交成功");
        console.log(data);
      });
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
}
#edit-article-section textarea {
  margin-top: 5px;
  resize: none;
  height: 75px;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
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
}

#edit-article-time {
  display: flex;
  justify-content: space-around;
}

#edit-article-time input {
  border-radius: 3px;
}

/* #edit-article-submit{
 
} */

#edit-article-submit button{
   width: 100%;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 3px;
}
</style>