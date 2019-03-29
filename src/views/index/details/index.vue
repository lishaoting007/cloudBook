<template>
  <div class="container">
    <div class="book-wrap">
      <div class="book-left">
        <img :src="bookData.img" :alt="bookData.img">
      </div>
      <div class="book-right">
        <div class="book-right-title">{{bookData.title}}</div>
        <div class="book-right-msg">
          <div class="author">作者:{{bookData.author}}</div>
          <div class="looknums">{{bookData.looknums}}人看过</div>
          <div class="like">{{bookData.startsnums}}人喜欢</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lst-details",
  data() {
    return {
      bookData: [],
      totalTitle: 0
    };
  },
  methods: {
    getBookData() {
      const id = this.$route.params.id;
      console.log(id);
      this.$axios.get(this.$api.getBook + id).then(res => {
        this.bookData = res.data;
        this.totalTitles = res.length;
      });
    }
  },
  created() {
    this.getBookData();
  }
};
</script>

<style scoped lang='scss'>
@import "@/globalCss/px2-rem.scss";

.container {
  padding-bottom: 40px;
  .book-wrap {
    display: flex;
    justify-content: space-between;

    .book-left {
      width: p2r(216);
      height: p2r(277);

      img {
        width: 100%;
        height: 100%;
      }
    }

    .book-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      margin-left: 15px;

      .book-right-title {
        margin-top: 12px;
        font-size: 16px;
        font-weight: 700;
      }
      .book-right-msg {
        flex: 1;
        padding-top: 26px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .author {
        }
        .looksnum {
        }
        .like {
        }
      }
    }
  }
}
</style>