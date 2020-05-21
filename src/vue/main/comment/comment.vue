<template>
  <div id="comment-box">
    <div class="comment-box-header">
      <div class="comment-box-header-title">
        <h3>评论区</h3>
      </div>
      <div class="comment-box-header-input">
        <textarea placeholder="在这里留下你的评论~" v-model="commentData.comment"></textarea>
        <button @click="submitComment">提交</button>
      </div>
    </div>
    <div class="comment-box-contain">
      <div v-for="item in comments" :key="item.id" class="comment-box-contain-comment-block">
        <div class="comment-box-class-author">
          <img src="@/img/login/headpic.png" />
          <div class="comment-author-name">{{item.author}}</div>
        </div>
        <div class="comment-box-class-comment">{{item.comment}}</div>
        <div class="comment-box-class-time">{{item.time}}</div>
      </div>

      <div id="comment-box-button">
        <button v-if="isMore"  @click="getNextComments">显示更多评论~</button>
        <p v-else>没有评论了~</p>
      </div>
    </div>
  </div>
</template>

<script>
const ajax = require("@/js/ajax.js");
const tool = require("@/js/tool.js");

export default {
  name: "comment",
  data() {
    return {
      comments: {},
      page: 1,
      isMore:true,
      commentData: {
        username: "",
        comment: "",
        time: "",
        textId: ""
      }
    };
  },
  props: ["textid"],
  created() {
    this.commentData.textId = this.textid;
    ajax.ajax("comment?id=0&textid=" + this.commentData.textId, data => {
      this.comments = data;
       if(data.length<10)
          {
            this.isMore = false;
          }
    });
  },
  methods: {
    submitComment() {
      if (this.$store.state.user) {
        if (this.commentData.comment == "") {
          alert("请输入内容后再提交评论哦");
        } else {
          //获取用户名
          this.commentData.username = this.$store.state.user;
          //获取评论时间
          this.commentData.time = tool.getTime();
          this.commentData.textId = this.textid;

          let text = this.commentData;
          ajax.submitComment(text, data => {
            console.log(data);
            alert("评论成功");
            document.location.reload();
          });
        }
      } else {
        this.$store.commit('openLoginPage')
      }
    },
    //评论下一页
    getNextComments() {
        this.page = this.page + 1;
        let start = (this.page - 1) * 10;
        let sql = "comment?id=" + start + "&textid=" + this.commentData.textId;
        ajax.ajax(sql, data => {
          if(data.length<10)
          {
            this.comments = this.comments.concat(data);
            this.isMore = false;
          }else{
            this.comments =this.comments.concat(data);
          }
        });
      
    },
  }
};
</script>

<style>
#comment-box {
  background-color: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  width: 694px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.comment-box-header {
  border-bottom: 2px solid #f6f6f6;
  padding: 20px;
}

.comment-box-header-title {
  padding-bottom: 15px;
}

.comment-box-header-input {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.comment-box-header-input textarea {
  margin-top: 5px;
  resize: none;
  height: 75px;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: solid 1px #eeeeee;
}

.comment-box-header-input button {
  background-color: #0084ff;
  color: #fff;
  border: none;
  margin: 20px 5px 0 5px;
  padding: 5px 10px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.comment-box-header-input button:hover {
  background-color: #0077e6;
  color: #fff;
  outline: none;
}

/* 评论区评论的样式 */

.comment-box-contain-comment-block {
  border-bottom: 2px solid #f6f6f6;
  padding: 20px;
}

.comment-box-class-author {
  display: flex;
  align-items: center;
  padding: 10px;
}

.comment-author-name{
  padding: 0 20px;
}

.comment-box-class-author img {
  width: 30px;
  height: 30px;
}

.comment-box-class-comment {
  padding: 10px;
}

.comment-box-class-time {
  padding: 10px;
  color: rgb(153, 153, 153);;
  font-size: 15px;
}

#comment-box-button {
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;
  height: 52px;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
}

#comment-box-button button {
  background-color: #f4f4f5;
  color: #606266;
  border: none;
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 3px;
  cursor: pointer;
}

#comment-box-button button:hover {
  background-color: #409eff;
  color: #fff;
}

#comment-box-button p{
 
  color: #606266;
  font-size: 15px;
}
</style>