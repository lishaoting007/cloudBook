<template>
  <label class="dy-label">
    <slot name="icon">
      <i class="iconfont"></i>
    </slot>
    <input
      type="text"
      class="dy-input"
      v-model="currentValue"
      v-if="type==='text'"
      :placeholder="placeholder"
    >
    <input
      type="password"
      class="dy-input"
      v-model="currentValue"
      v-if="type==='password'"
      :placeholder="placeholder"
    >
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
    },
    placeholder: {
      type: String,
      default: ""
    },
    max: {
      type: Number
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    currentValue(newValue, oldValue) {
      if(this.max) {
        if(newValue.length > this.max) {
          this.currentValue = oldValue
        }
      }
      this.$emit("input", newValue);
    },
    value() {
      this.currentValue = this.value;
    }
  }
};
</script>

<style scoped lang="scss" src="./P-index.scss">
</style>