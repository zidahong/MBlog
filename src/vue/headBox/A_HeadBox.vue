<template>
  <div id="head-box">
    
    <div id="head-box-contain">
      <slot name="logo"></slot>
      <div id="head-box-item">
        <slot name="index"></slot>
<<<<<<< HEAD
=======
        <slot name="comment"></slot>
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
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