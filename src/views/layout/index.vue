<template>
  <div>
      <router-view></router-view>
      <lstTabbar></lstTabbar>
  </div>
</template>

<script>
import lstTabbar from '@/components/tab-bar/index'
export default {
  name: "index",
  components:{
      lstTabbar
  }
};
</script>

<style scoped>
</style>