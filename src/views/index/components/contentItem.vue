<template>
  <div class="content-item">
    <div class="content-item-row1">
      <h1>前端书籍</h1>
      <router-link to="#">更多</router-link>
    </div>
    <div class="content-item-row2">
      <div class="img-wrap"></div>
      <div class="article-wrap">
        <div class="article-title"></div>
        <div class="article-preview"></div>
        <div class="article-msg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookItem",
  props: {
    options: Object
  }
};
</script>

<style scoped>
</style>