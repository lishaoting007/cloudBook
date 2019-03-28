<template>
  <div class="container">
    <Loadmore
      :top-method="loadTop"
      :bottom-all-loaded="allLoaded"
      :bottom-method="loadBottom"
      ref="loadmore"
    >
      <my-swiper></my-swiper>
      <div>
        <contentItem
          class="content"
          v-for="(item, index) in contentData "
          :options="item"
          :key="index"
        ></contentItem>
      </div>
    </Loadmore>
  </div>
</template>

<script>
import MySwiper from "@/components/my-swiper/index";
import contentItem from "./components/contentItem";
import moment from "moment";
import { Loadmore } from "mint-ui";

export default {
  name: "index",
  components: {
    "my-swiper": MySwiper,
    contentItem,
    Loadmore
  },
  data() {
    return {
      contentData: [],
      queryData: {
        booksSize: 4,
        size: 2,
        pn: 1
      },
      allLoaded: false
    };
  },
  methods: {
    getContent() {
      return new Promise(resolve => {
        this.$axios
          .get(this.$api.getContent, {
            params: this.queryData
          })
          .then(res => {
            let resData = res.data;
            if (resData.length < this.queryData.size) {
              this.allLoaded = true;
            }
            resData.map(item => {
              item.books.map(it => {
                it.updateTime = moment(it.updateTime).format("YYYY年M月DD日");
                return it;
              });
              return item;
            });
            this.contentData = [...this.contentData,...resData];
            resolve();
          });
      });
    },
    loadTop() {
      this.queryData = {
        booksSize: 4,
        size: 5,
        pn: 1
      };
      this.getContent().then(() => {
        this.$refs.loadmore.onTopLoaded();
      });
    },
    loadBottom() {
      this.queryData = {
        booksSize: 4,
        size: 2,
        pn: this.queryData.pn +1
      };
      this.getContent().then(() => {
        this.allLoaded = true; // 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
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
  touch-action: default;
}
</style>