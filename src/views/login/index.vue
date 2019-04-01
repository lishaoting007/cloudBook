<template>
  <div class="container login">
    <Logo></Logo>
    <p-input>
      <i class="iconfont icon-ren" slot="icon"></i>
    </p-input>
    <p-input :type="isHide?'password': 'text'">
      <i
        class="iconfont"
        :class="isHide?'icon-yanjing1':'icon-yanjing'"
        slot="icon"
        @click="isHide=!isHide"
      ></i>
    </p-input>
    <div class="register">
      <router-link :to="{name: 'register'}">没有账号？立即注册</router-link>
    </div>
    <div class="btn-wrap">
      <Button size="large" type="primary" @click="handleLogin">立即登录</Button>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/Logo/logo";
import pInput from "@/components/P-input";
import { Toast, Button } from "mint-ui";
export default {
  name: "login",
  data() {
    return {
      userData: {},
      isHide: true
    };
  },
  components: {
    Logo,
    pInput,
    Toast,
    Button
  },
  methods: {
    handleLogin() {}
  }
};
</script>

<style scoped lang="scss">
.login {
  .register {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    a {
      color: #0099ff;
    }
  }
  .btn-wrap {
    margin-top: 40px;
  }
}
</style>