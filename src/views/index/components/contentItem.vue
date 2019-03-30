<template>
  <div class="content-item">
    <div class="content-item-row1">
      <h1 class="title">{{options.title}}</h1>
      <router-link to="#">更多...</router-link>
    </div>
    <div class="content-item-row2" v-for="(it, index) in options.books" :key="index">
      <router-link :to="{name:'details', params: {id: it._id}}">
        <div class="img-wrap">
          <img :src="it.img" :alt="it.img">
        </div>
        <div class="article-wrap">
          <div class="article-title">{{it.title}}</div>
          <div class="article-preview">{{it.desc}}</div>
          <div class="article-msg">
            <div class="article-msg-left">{{it.author}}</div>
            <div class="article-msg-middle">{{it.updateTime}}</div>
            <div class="article-msg-right">{{it.looknums}}人在看</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentItem",
  props: ["options"],
  data() {
    return {
     
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../../globalCss/px2-rem.scss";

.content-item {
  margin-top: 20px;
  .content-item-row1 {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-left: 4px solid #000;
    padding: 0 4px 0 8px;
    font-size: 12px;
  }

  .content-item-row2 {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    a {
      display: flex;

      .img-wrap {
        width: p2r(200);
        height: p2r(266);

        img {
          height: 100%;
          width: 100%;
        }
      }

      .article-wrap {
        position: relative;
        flex: 1;
        margin-left: 12px;

        .article-title {
          font-size: 18px;
          font-weight: 1000;
          color: #111;
        }

        .article-preview {
          margin-top: 15px;
          color: #888;
          font-weight: 550;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .article-msg {
          display: flex;
          justify-content: space-between;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 2px;
          color: #888;
          font-size: 12px;
          font-weight: 550;
        }
      }
    }
  }
}
</style>