<template>
  <div id="article-block">
    <div id="article-block-header">
      <h3>
        <slot name="header"></slot>
      </h3>
    </div>
    <div id="article-block-section">
      <slot name="section"></slot>
    </div>
    <div id="article-block-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  data() {
    return {
      isShow: true,
      testShow: true
    };
  },
  methods: {
    clickAgree() {
      this.isShow = !this.isShow;
    },
    rclick() {
      return (this.testShow = !this.testShow);
    }
  }
};
</script>

<style>
#article-block {
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 20px;
  width: 100%;
  cursor: pointer;
  border-bottom: solid #f6f6f6 2px;
}

#article-block a {
  text-decoration: none;
  color: black;
}

#article-block-header {
  margin-bottom: 10px;
}

#article-block-section {
  color: #999999;
  margin-bottom: 10px;
}

#article-block-footer {
  color: #999999;
}
</style>