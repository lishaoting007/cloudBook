<template>
  <div class="container login">
    <Logo></Logo>
    <p-input placeholder="请输入手机号" v-model="formData.phone">
      <i class="iconfont icon-ren" slot="icon"></i>
    </p-input>
    <p-input :type="isHide?'password': 'text'" placeholder="请输入6位以上密码" v-model="formData.password">
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
import validator from "validator";
export default {
  name: "login",
  data() {
    return {
      formData: {
        phone: "",
        password: ""
      },
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
    handleLogin() {
      let validatorStatus = this.handleValidator();
      if (validatorStatus) {
        this.$axios.post(this.$api.login, this.formData).then(res => {
          console.log(res);
          if(res.code == 200){
            localStorage.setItem('token', res.token)
            Toast({
                message: '登录成功',
                duration: 1000
              })
              setTimeout(() => {
                this.$router.push({
                  name: 'index'
                })
              }, 1000)
          }
        });
      }
    },
    handleValidator() {
      let phoneOk = validator.isMobilePhone(this.formData.phone, 'zh-CN')
      let passwordOk = validator.isLength(this.formData.password, {
        min: 6,
        max: undefined
      });

      if (phoneOk && passwordOk) {
        return true;
      } else if (!phoneOk) {
        Toast({
          message: "不是合法的手机号码"
        });
        return false;
      } else if (!passwordOk) {
        Toast({
          message: "密码长度必须大于六位"
        });
        return false;
      }
    }
  }
};
</script>

<style scoped lang="scss" src="./login.scss">
</style>