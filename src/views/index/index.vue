<template>
  <div>
    首页
    <my-swiper></my-swiper>
  </div>
</template>

<script>
import MySwiper from "@/components/my-swiper/index";
export default {
  name: "index",
  components: {
    "my-swiper": MySwiper
  },
  data() {
    return {
      swiperOption: {}
    };
  }
};
</script>

<style scoped lang='scss'>
</style>