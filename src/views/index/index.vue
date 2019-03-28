<template>
  <div class="container">
    <my-swiper></my-swiper>
    <div class="content">
      <contentItem v-for="(item, index) in contentData " :options="item" :key="index"></contentItem>
    </div>
  </div>
</template>

<script>
import MySwiper from "@/components/my-swiper/index";
import contentItem from "./components/contentItem";
export default {
  name: "index",
  components: {
    "my-swiper": MySwiper,
    contentItem
  },
  data() {
    return {
      contentData: []
    };
  },
  methods: {
    getContent() {
      this.$axios.get(this.$api.getContent).then(res => {
        this.contentData = res.data;
      });
    }
  },
  created() {
    this.getContent();
  }
};
</script>

<style scoped lang='scss'>
@import "../../globalCss/px2-rem";

.container {
  padding: p2r(14);
}
</style>