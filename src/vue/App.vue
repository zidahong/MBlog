<template>
  <div id="app">
    <Headbox></Headbox>
    <div class="background">
      <BackgroundBox></BackgroundBox>
    </div>
    

  </div>
</template>

<script>
import Headbox from "./headBox/A_HeadBox";
import BackgroundBox from "@/vue/articleBox/A_BackgroundBox"




export default {
  name: "App",
  components: {
    Headbox,
    BackgroundBox,
  }
};
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.background{
  widows: 1000px;
  padding: 10px;
  display: flex;
}
</style>