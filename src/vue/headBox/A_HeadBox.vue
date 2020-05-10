<template>
  <div id="head-box">
    
    <div id="head-box-contain">
      <slot name="logo"></slot>
      <div id="head-box-item">
        <slot name="index"></slot>
        <slot name="comment"></slot>
        <slot name="writearticle"></slot>
      </div>
      <slot name="login"></slot>
    </div>
  </div>
</template>

<script>


export default {
  name: "Headbox",
};
</script>

<style>
@import url("~@/css/headBox.css");
</style>