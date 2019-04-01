<template>
  <div class="logo">
    <i class="iconfont icon-xuexi"></i>
  </div>
</template>

<script>
export default {
  name: "logo"  
};
</script>

<style scoped  lang='scss'>
@import "../../globalCss/px2-rem";

.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: p2r(174) auto p2r(100) auto;
  text-align: center;

  .iconfont {
    font-size: 80px;
    color: #0099ff;
  }
}
</style>