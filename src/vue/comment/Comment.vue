<template>
  <div id="comment-box">
    <div id="comment-box-contain">
      <div id="comment-box-contain-height" class="comment-box-contain-class">
        <h3>评论区</h3>
      </div>
      <div id="comment-box-contain-input" class="comment-box-contain-class">
        <textarea placeholder="在这里留下你的评论~" v-model="commentData.comment"></textarea>
        <button @click="submitComment">提交</button>
      </div>
<<<<<<< HEAD
      <div v-for="item in comments" :key="item.id" class="comment-box-contain-class">
=======
      <div v-for="item in comments" :key="item.ID" class="comment-box-contain-class">
        <div class="comment-box-class-id">#{{item.ID}}楼</div>
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
        <div class="comment-box-class-author">用户：{{item.author}}</div>
        <div class="comment-box-class-comment">评论：{{item.comment}}</div>
        <div class="comment-box-class-time">时间：{{item.time}}</div>
      </div>

      <div id="comment-box-button">
        <button @click="getLastComments">上一页</button>
        <button @click="getNextComments">下一页</button>
      </div>
    </div>
  </div>
</template>

<script>
const ajax = require("@/js/ajax.js");
const tool = require("@/js/tool.js");
import Vue from "vue";
export default {
  name: "Comment",
  data() {
    return {
      comments: {},
      page: 1,
      commentData: {
        username: "",
        comment: "",
<<<<<<< HEAD
        time: "",
        textId:""
      }
    };
  },
  props:['textid'],
  created() {
    this.commentData.textId = this.textid;
    ajax.ajax("comment?id=0&textid="+this.commentData.textId, data => {
=======
        time: ""
      }
    };
  },
  created() {
    ajax.ajax("comment?id=0", data => {
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
      this.comments = data;
    });
  },
  methods: {
    submitComment() {
<<<<<<< HEAD
      if (this.$store.state.user) {
=======
      if (document.cookie) {
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
        if (this.commentData.comment == "") {
          alert("请输入内容后再提交评论哦");
        } else {
          //获取用户名
<<<<<<< HEAD
          this.commentData.username =this.$store.state.user;
          //获取评论时间
          this.commentData.time = tool.getTime();
          this.commentData.textId = this.textid;
       
          let text = this.commentData;
=======
          this.commentData.username = tool.cookieToObj().LoginName;
          //获取评论时间
          this.commentData.time = tool.getTime();

          let text = this.commentData;

>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
          ajax.submitComment(text, data => {
            console.log(data);
            alert("评论成功");
            document.location.reload();
          });
        }
      } else {
        alert("请登陆后再评论！");
      }
    },
    //评论下一页
    getNextComments() {
      if (this.comments.length < 10) {
        alert("没有更多内容了~");
      } else {
        this.page = this.page + 1;
        let start = (this.page - 1) * 10;
<<<<<<< HEAD
        let sql = "comment?id=" + start +"&textid="+this.commentData.textId;
=======
        let sql = "comment?id=" + start;
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
        ajax.ajax(sql, data => {
          this.comments = data;
        });
      }
    },
    // 评论上一页
    getLastComments() {
      if (this.page == 1) {
        alert("没有上一页了~");
      } else {
        this.page = this.page - 1;
        let start = (this.page - 1) * 10;
<<<<<<< HEAD
        let sql = "comment?id=" + start+"&textid="+this.commentData.textId;
=======
        let sql = "comment?id=" + start;
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
        ajax.ajax(sql, data => {
          this.comments = data;
        });
      }
    }
  }
};
</script>

<style>
#comment-box {
  display: flex;
  justify-content: center;
  width: 880px;
  box-sizing: border-box;
<<<<<<< HEAD
  padding: 0 20px 20px 20px;
=======
  padding: 20px;
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
}

#comment-box-contain {
  background-color: #eeeeee;
  border-radius: 3px;
  padding: 20px;
  width: 100%;
}

.comment-box-contain-class {
  box-sizing: border-box;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 20px;
}
#comment-box-contain-input {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#comment-box-contain-input textarea {
  margin-top: 5px;
  resize: none;
  height: 75px;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
<<<<<<< HEAD
  border: solid 1px #eeeeee;
=======
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
}

#comment-box-contain-input button {
  background-color: #f4f4f5;
  color: #606266;
  border: none;
  margin: 20px 5px 0 5px;
  padding: 5px 10px;
  border-radius: 3px;
}

#comment-box-contain-input button:hover {
  background-color: #409eff;
  color: #fff;
}

/* 评论区评论的样式 */
.comment-box-class-id {
}
.comment-box-class-author {
}

.comment-box-class-comment {
}

.comment-box-class-time {
}

#comment-box-button {
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  height: 52px;
  padding: 10px;
  border-radius: 3px;
}

#comment-box-button button {
  background-color: #f4f4f5;
  color: #606266;
  border: none;
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 3px;
}

#comment-box-button button:hover{
  background-color: #409eff;
  color: #fff;

}
</style>