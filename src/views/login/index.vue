<template>
  <div class="login-container">
    <!-- top start -->
    <div class="login-top">
      <div class="top-wrap1">
        <div class="wrap1-left">
          <div class="left-top1">立即登录</div>
          <div class="left-top2">
            <h6>时光回头，当下最重要</h6>
          </div>
        </div>
        <div class="wrap1-right">
          <img class="img" src alt>
          <i class="iconfont icon-dayu"></i>
        </div>
      </div>
      <div class="top-wrap2">
        <div>
          <div class="wrap2-item">
            <span>24</span>
            本
          </div>
          <div>已读书籍</div>
        </div>
        <div class="divition">|</div>
        <div>
          <div class="wrap2-item">
            <span>22</span>
            本
          </div>
          <div>已收藏书籍</div>
        </div>
        <div class="divition">|</div>
        <div>
          <div class="wrap2-item">
            <span>10</span>
            本
          </div>
          <div>喜欢</div>
        </div>
      </div>
    </div>
    <!-- top end -->
    <!-- middle start -->
    <div class="login-middle">
      <ul class="middle-wrap">
        <li class="mwrap-item">
          <div class="item-left">
            <img src alt>
            <div class="text">修改个人信息</div>
          </div>
          <i class="iconfont icon-dayu"></i>
        </li>
        <li class="mwrap-item">
          <div class="item-left">
            <img src alt>
            <div class="text">收藏书单</div>
          </div>
          <i class="iconfont icon-dayu"></i>
        </li>
        <li class="mwrap-item">
          <div class="item-left">
            <img src alt>
            <div class="text">喜欢的书</div>
          </div>
          <i class="iconfont icon-dayu"></i>
        </li>
      </ul>
    </div>
    <!-- middle end -->
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style scoped lang="scss">
@import "../../globalCss/px2-rem";

.login-container {
  .login-top {
    height: p2r(341);
    background: #186fc8;
    position: relative;
    .top-wrap1 {
      display: flex;
      justify-content: space-between;
      .wrap1-left {
        margin: p2r(40) 0 0 p2r(40);
        .left-top1 {
          font-size: p2r(44);
          color: #fff;
        }

        .left-top2 {
          margin-top: p2r(29);
          h6 {
            font-size: p2r(24);
            color: #e0dfdf;
          }
        }
      }
      .wrap1-right {
        display: flex;
        justify-content: flex-end;
        padding-right: p2r(27);
        padding-top: p2r(18);
        .img {
          width: p2r(137);
          height: p2r(137);
          border-radius: 50%;
          background: #fff;
        }
        .iconfont {
          color: #fff;
          align-self: center;
          font-weight: bolder;
          font-size: p2r(26);
          padding-left: p2r(8);
        }
      }
    }
    .top-wrap2 {
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: p2r(32);
      left: 0;
      right: 0;
      margin: 0 p2r(20);
      color: #fff;
      font-size: p2r(24);
      text-align: center;
    
      .wrap2-item {
        padding-bottom: p2r(4);
        span {
          font-size: p2r(28);
        }
      }
      .divition {
        align-self: center;
        font-size: p2r(30);
        font-weight: 100;
      }
    }
  }
  .login-middle {
    margin-top: p2r(54);
    .middle-wrap {
      .mwrap-item {
        display: flex;
        justify-content: space-between;
        padding: p2r(30) p2r(26);
        border-bottom: p2r(3) solid #eee;
        .item-left {
          display: flex;
          justify-content: flex-start;
          img {
            width: p2r(68);
            height: p2r(68);
            border: 1px solid #000;
            box-sizing: border-box;
          }
          .text {
            align-self: center;
            font-size: p2r(28);
            font-weight: bold;
            padding-left: p2r(16);
          }
        }
        .iconfont {
          align-self: center;
          color: #e0e0e0;
          font-weight: bolder;
          font-size: p2r(26);
        }
      }
    }
  }
}
</style>