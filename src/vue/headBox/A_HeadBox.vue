<template>
  <div id="head-box">
    
    <div id="head-box-contain">
      
      <div id="head-box-item">
        <slot name="logo"></slot>
        <div class="head-box-item">
          <slot name="index"></slot>
        </div>
        <div class="head-box-item">
          <slot name="note"></slot>
        </div>
        <div class="head-box-item">
          <slot name="tellme"></slot>
        </div>
        <div class="head-box-item">
          <slot name="download"></slot>
        </div>
        <div class="head-box-item">
          <slot name="writearticle"></slot>
        </div>
      </div>
      <slot name="search"></slot>
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