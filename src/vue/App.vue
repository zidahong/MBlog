<template>
  <div id="app">
    <navigation></navigation>
    <div class="background">
      <mainContent></mainContent>
    </div>
</div>
</template>

<script>
import navigation from "@/vue/navigation/navbar";
import mainContent from "@/vue/main/main";




export default {
  name: "App",
  components: {
    navigation,
    mainContent,
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