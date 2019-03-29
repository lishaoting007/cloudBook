<template>
  <div class="container">
    <div class="book-wrap">
      <div class="book-left">
        <img :src="bookData.img" :alt="bookData.img">
      </div>
      <div class="book-right">
        <div class="book-right-title">{{bookData.title}}</div>

        <div class="author">作者:{{bookData.author}}</div>
        <div class="looknums">{{bookData.looknums}}人看过</div>
        <div class="like">{{bookData.startsnums}}人喜欢</div>
      </div>
    </div>
    <div class="btns">
      <btn>加入收藏</btn>
      <btn>分享好友</btn>
    </div>
    <div class="line"></div>
    <div class="title">简介</div>
    <div class="desc">{{bookData.desc}}</div>
    <div class="catalogue">
      <div class="cataLeft">
        <div class="cataTitle">查看目录</div>
        <div class="titleNums">共{{totalTitles}}章</div>
      </div>
      <div class="time">{{bookData.updateTime}}</div>
    </div>
    <div class="line line2"></div>
    <div class="bottom" @click='pushTitle'>
      <btn type="primary"  class="btn-bottom" >阅读该书籍</btn>
    </div>
  </div>
</template>

<script>
import { button } from "mint-ui";
import moment from "moment";
export default {
  name: "lst-details",
  components: {
    btn: button
  },
  data() {
    return {
      bookData: [],
      totalTitles: 0
    };
  },
  methods: {
    getBookData() {
      const id = this.$route.params.id;
      this.$axios.get(this.$api.getBook + id).then(res => {
        this.bookData = res.data;
        this.totalTitles = res.length;
        this.bookData.updateTime = moment(this.bookData.updateTime).format(
          "YYYY年M月DD日"
        );
      });
    },
    pushTitle() {
      this.$router.push({
        name:'titles',
        params: {
          id: this.bookData._id
        }
      })
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
  padding-bottom: p2r(18);
  .book-wrap {
    display: flex;
    justify-content: space-between;

    .book-left {
      width: p2r(203);
      height: p2r(266);

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
      margin-left: p2r(15);
      padding: p2r(12) 0;

      .book-right-title {
        font-size: p2r(30);
        font-weight: bold;
      }

      .author,
      .looknums,
      .like {
        color: #939393;
        font-size: p2r(26);
        font-weight: 700px;
        padding-left: 10px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-around;
    margin-top: p2r(50);

    .mint-button {
      height: p2r(60);
      width: p2r(184);
      font-size: p2r(26);
      color: #555;
      font-weight: bold;
    }
  }
  .line {
    margin-top: p2r(51);
    height: p2r(17);
    background: #ccc;
  }
  .title {
    margin-top: p2r(40);
    font-size: p2r(34);
    color: #000;
    font-weight: bolder;
  }
  .desc {
    margin-top: p2r(57);
    font-size: p2r(27);
    line-height: 1.5;
    font-weight: bold;
  }
  .line2 {
    margin-top: p2r(35);
  }
  .catalogue {
    display: flex;
    justify-content: space-between;
    margin-top: p2r(45);
    align-items: flex-end;

    .cataLeft {
      display: flex;
      justify-content: space-between;
      width: 32%;
      align-items: flex-end;

      .cataTitle {
        font-size: p2r(34);
        font-weight: bolder;
      }
      .titleNums {
        font-size: p2r(28);
        font-weight: bold;
        color: #000;
      }
    }
  }
  .bottom {
    position: fixed;
    bottom: p2r(18);
    left: 0;
    right: 0;
    padding:0 p2r(18);
    
    .btn-bottom {
      width: 100%;
      height: p2r(98);
      font-size: p2r(38);
    }
  }
}
</style>