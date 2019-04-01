<template>
  <label class="dy-label">
    <slot name="icon">
      <i class="iconfont"></i>
    </slot>
    <input type="text" class="dy-input" v-model="currentValue" v-if="type==='text'">
    <input type="password" class="dy-input" v-model="currentValue" v-if="type==='password'">
    <slot name="right"></slot>
  </label>
</template>

<script>
export default {
  name: "P-input",
  props: {
    value: String,
    type: {
      default: "text"
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>

<style scoped lang="scss">
.dy-label {
  display: flex;
  align-items: center;
  margin-top: 30px;
  border-bottom: 1px solid #0099ff;
  padding: 0 10px;

  input {
    display: block;
    width: 100%;
    border: 0; // 去除未选中状态边框
    outline: none; // 去除选中状态边框
    background-color: rgba(0,0,0,0);
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    font-size: 14px;
  }

  .iconfont {
    width: 36px;
    height: 36px;
    font-size: 30px;
    color: #888;
  }
}
</style>