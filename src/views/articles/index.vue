<template>
  <div class="container">
    <div class="content markdown" v-html="html" :style="{fontSize:fontSize + 'px'} "></div>
    <div class="btns">
      <i class="iconfont icon-xiaoyuhao" @click="articleJump('prev')"></i>
      <i class="iconfont icon-mulu" @click="isShow=true"></i>
      <i class="iconfont icon-zitisuoxiao" @click="fontReduce"></i>
      <i class="iconfont icon-zitifangda" @click="fontAdd"></i>
      <i class="iconfont icon-dayu" @click="articleJump('next')"></i>
    </div>
    <div class="masking" v-show="isShow" @click.stop="isShow=false"></div>
    <transition>
      <div class="title-wrap" v-show="isShow">
        <ul class="titles" v-show="isShow">
          <li class="title" @click.stop v-for="(item,index) in titles" :key="index">
            <router-link :to="{name:'article',params:{id: item._id}}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import ShowDown from "showdown";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";

export default {
  name: "lst-article",
  data() {
    return {
      articleData: {},
      html: "",
      fontSize: 48,
      index: -1,
      titles: [],
      bookId: "",
      isShow: false
    };
  },
  methods: {
    getArticle(itemId) {
      return new Promise(resolve => {
        const id = itemId ? itemId : this.$route.params.id;
        this.$axios.get(this.$api.getArticle + id).then(res => {
          this.articleData = res.data;
          this.index = res.data.article.index;
          this.bookId = res.data.article.bookId;
          const converter = new ShowDown.Converter();
          this.html = converter.makeHtml(res.data.article.content);

          resolve();
        });
      });
    },
    fontAdd() {
      if (this.fontSize > 60) {
        Toast({
          message: "字体太大不好看~~~",
          duration: 2000
        });
      } else {
        this.fontSize += 2;
      }
    },
    fontReduce() {
      if (this.fontSize < 38) {
        Toast({
          message: "字体太小会损害眼睛哟~~~",
          duration: 2000
        });
      } else {
        this.fontSize -= 2;
      }
    },
    getTitle() {
      const id = this.bookId;
      this.$axios.get(this.$api.getTitle + id).then(res => {
        this.titles = res.data;
      });
    },
    articleJump(isPrev) {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      const _this = this;
      function getArticleByIndex() {
        const item = _this.titles.find(value => value.index == _this.index);
        const id = item._id;
        _this.getArticle(id);
        _this.$router.push({
          name: "article",
          params: {
            id
          }
        });
      }

      if (isPrev == "prev") {
        if (this.index == 0) {
          return new Promise(revolve => {
            Toast({
              message: "已经是第一页了",
              duration: 1500
            });
            revolve();
          }).then(() => {
            Indicator.close();
          });
        } else {
          this.index--;
          getArticleByIndex();
        }
      } else {
        if (this.index == this.titles.length) {
          Toast({
            message: "已经是最后一页了",
            duration: 1500
          });
        } else {
          this.index++;
          getArticleByIndex();
        }
      }
    }
  },
  created() {
    this.getArticle().then(() => {
      this.getTitle();
    });
  },
  updated() {
    Indicator.close();
  }
};
</script>

<style scoped lang='scss'>
@import "@/globalCss/px2-rem.scss";
.container {
  .btns {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    color: #555;
    height: p2r(80);
    line-height: p2r(80);

    .iconfont {
      flex: 1;
      text-align: center;
      font-size: p2r(50);
    }
  }
  .title-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    overflow-y: auto;
    background: #fff;
    color: #000;
    height: 100%;
    width: 80%;
    .titles {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 30px 0 0 20px;

      .title {
        background: #fff;
        width: 80%;
        border-bottom: 1px solid #939393;
        line-height: p2r(70);
        height: p2r(70);
        padding-left: p2r(30);

        a {
          font-size: p2r(30);
          display: block;
        }
      }
    }
  }
  .masking {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;

    background: rgba(0, 0, 0, 0.5);
    color: #000;
    height: 100%;
    width: 100%;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.3s ease;
}
</style>

<style lang='scss'>
@import "./markdown.scss";
</style>