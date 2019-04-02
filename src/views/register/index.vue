<template>
  <div class="container">
    <Logo></Logo>
    <p-input v-model="registerData.phone"
             placeholder="请输入手机号">
      <i class="iconfont icon-shouji"
         slot="icon"></i>
    </p-input>
    <p-input :type="isHide?'password': 'text'"
             v-model="registerData.password"
             placeholder="请输入密码">
      <i class="iconfont"
         :class="isHide?'icon-yanjing1':'icon-yanjing'"
         slot="icon"
         @click="isHide=!isHide"></i>
    </p-input>
    <p-input :max="6"
             v-model="registerData.code"
             placeholder="请输入验证码">
      <i class="iconfont icon-yanzhengma"
         slot="icon"></i>
      <Button slot="right"
              size="small"
              @click="handleSendCode"
              style="width: 150px"
              :disabled="disabled&&!isCanSendCode">{{btnText}}</Button>
    </p-input>
    <div class="btn-wrap">
      <Button size="large"
              type="primary"
              @click="handleRegister">立即注册</Button>
    </div>
  </div>
</template>

<script>
import Logo from "../../components/Logo/logo"
import pInput from "@/components/P-input"
import { Toast, Button } from "mint-ui"
import validator from "validator"

export default {
  name: "register",
  components: {
    Logo,
    pInput,
    Toast,
    Button
  },
  data () {
    return {
      isHide: true,
      disabled: true,
      isCanSendCode: false,
      isSendCode: false,
      btnText: "获取验证码",
      registerData: {
        phone: "",
        code: "",
        password: ""
      },
      timeNum: 60
    }
  },
  methods: {
    handleRegister () {
      this.$axios.post(this.$api.register, this.formData).then(res => {
        if (res.code == 200) {
          this.$router.push({
            name: "login"
          })
          Toast({
            message: res.msg,
            duration: 1000
          })
        }
      })
    },
    handleSendCode () {
      this.isSendCode = true;

      if (!this.disabled) {
        this.disabled = true;
        this.$axios
          .post(this.$api.sendCode, {
            phone: this.formData.phone
          })
          .then(res => {
            if (res.code == 200) {
              Toast({
                message: res.msg
              });
            } else {
              Toast({
                message: res.msg
              })
            }
          })

        let timer = setInterval(() => {
          this.timeNum--
          this.btnText = `再次获取(${this.timeNum})s`
          if (this.timeNum == 0) {
            this.btnText = "获取验证码"
          }
        }, 1000)
      }
    }
  },
  watch: {
    registerData: {
      deep: true,
      handler (newValue, oldValue) {
        if (validator.isMobilePhone(newValue.phone, "zh-CN")) {
          this.disabled = false
          this.isCanSendCode = true
        } else {
          this.disabled = true
          this.isCanSendCode = false
        }
      }
    }
  }
};
</script>

<style scoped>
.btn-wrap {
  margin-top: 40px;
}
</style>