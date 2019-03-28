<template>
  <div class="container">
    <my-swiper></my-swiper>
    <div>
      <contentItem
        class="content"
        v-for="(item, index) in contentData "
        :options="item"
        :key="index"
      ></contentItem>
    </div>
  </div>
</template>

<script>
import MySwiper from "@/components/my-swiper/index";
import contentItem from "./components/contentItem";
import moment from "moment";

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
      this.$axios.get(this.$api.getContent, {
        params: {
          size:5
        }
      }).then(res => {
        let resData = res.data.map(item => {
          item.books.map(it => {
            it.updateTime = moment(it.updateTime).format("YYYY年M月DD日");
            return it;
          });
          return item;
        });
        this.contentData = resData;
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
  padding-bottom: 65px;
}
</style>