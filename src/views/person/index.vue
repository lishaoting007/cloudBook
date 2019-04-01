<template>
  <div class="login-container">
    <!-- top1 start -->
    <div class="login-top" v-if="!isTrue">
      <router-link :to="{name:'login'}">
        <div class="top-wrap1" @click="jumpLogin">
          <div class="wrap1-left">
            <div class="left-top1">立即登录</div>
            <div class="left-top2">
              <h6>时光回头，当下最重要</h6>
            </div>
          </div>
          <div class="wrap1-right">
            <img class="img" src="@/assets/avatar_default.jpeg" alt>
            <i class="iconfont icon-dayu"></i>
          </div>
        </div>
      </router-link>
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
          <div>我喜欢</div>
        </div>
      </div>
    </div>
    <!-- top1 end -->
    <div class="login-top" v-else>
      <div class="top-wrap11">
        <div class="wrap11-left">
          <img class="img" src="@/assets/zhenxiang.jpg" alt>
        </div>
        <div class="wrap11-right">
          <div class="right-top1">dyYao</div>
          <div class="right-top2">
            <h6>这家伙很懒什么都没留下</h6>
          </div>
        </div>
      </div>

      <div class="top-wrap2">
        <div>
          <div class="wrap2-item">
            <span>3</span>
            本
          </div>
          <div>已读书籍</div>
        </div>
        <div class="divition">|</div>
        <div>
          <div class="wrap2-item">
            <span>0</span>
            本
          </div>
          <div>已收藏书籍</div>
        </div>
        <div class="divition">|</div>
        <div>
          <div class="wrap2-item">
            <span>1</span>
            本
          </div>
          <div>我喜欢</div>
        </div>
      </div>
    </div>
    <!-- middle start -->
    <div class="login-middle">
      <ul class="middle-wrap">
        <li class="mwrap-item">
          <div class="item-left">
            <i class="iconfont icon-xiugai"></i>
            <div class="text">修改个人信息</div>
          </div>
          <i class="iconfont icon-dayu"></i>
        </li>
        <li class="mwrap-item">
          <div class="item-left">
            <i class="iconfont icon-shoucang"></i>
            <div class="text">收藏书单</div>
          </div>
          <i class="iconfont icon-dayu"></i>
        </li>
        <li class="mwrap-item">
          <div class="item-left">
            <i class="iconfont icon-xihuan1"></i>
            <div class="text">喜欢的书</div>
          </div>
          <i class="iconfont icon-dayu"></i>
        </li>
      </ul>
    </div>
    <!-- middle end -->
    <div class="btn-wrap" v-if="isTrue">
      <Button type="danger" size="large" @click="logOut">退出登录</Button>
    </div>
  </div>
</template>

<script>
import { Button } from "mint-ui";

export default {
  name: "person",
  components: {
    Button
  },
  data() {
    return {
      isTrue: false
    };
  },
  methods: {
    jumpLogin() {
      this.$router.push({ name: "login" });
    },
    logOut() {}
  }
};
</script>

<style scoped lang="scss" src="./person.scss">

</style>