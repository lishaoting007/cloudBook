<template>
  <div class="container ">
   <Logo></Logo>
   <p-input>
      <i class="iconfont icon-shouji" slot="icon"></i>
    </p-input>
    <p-input :type="isHide?'password': 'text'">
      <i
        class="iconfont"
        :class="isHide?'icon-yanjing1':'icon-yanjing'"
        slot="icon"
        @click="isHide=!isHide"
      ></i>
    </p-input>
    <p-input>
      <i class="iconfont icon-yanzhengma" slot="icon"></i>
      <Button slot="right" size="small" @click="handleSendCode" style="width: 150px" :disabled="disabled&&!isCanSendCode" >{{btnText}}</Button>
    </p-input>
    <div class="btn-wrap">
      <Button size="large" type="primary" @click="handleRegister">立即注册</Button>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/Logo/logo";
import pInput from "@/components/P-input";
import { Toast, Button } from "mint-ui";

export default {
  name: "register",
  components: {
    Logo,
    pInput,
    Toast,
    Button
  },
  data() {
    return{
      isHide:true,
      disabled:true,
      isCanSendCode:false,
      btnText: '获取验证码'
    }
  },
  methods: {
    handleRegister() {},
    handleSendCode() {}
  }
};
</script>

<style scoped>
.btn-wrap {
    margin-top: 40px;
  }
</style>