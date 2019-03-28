<template>
  <div>
    <Tabbar v-model="selected" :fixed="true">
      <TabItem id="index">
        <i class="iconfont icon-house" slot="icon"></i>
        首页
      </TabItem>
      <TabItem id="learn">
        <i class="iconfont icon-course" slot="icon"></i>
        我的学习
      </TabItem>
      <TabItem id="peron">
        <i class="iconfont icon-ren" slot="icon"></i>
        个人中心
      </TabItem>
    </Tabbar>
  </div>
</template>

<script>
import "mint-ui/lib/tabbar/style.css";
import "mint-ui/lib/tab-item/style.css";
import { Tabbar, TabItem } from "mint-ui";

export default {
  name: "tab-bar",
  components: {
    Tabbar,
    TabItem
  },
  data() {
    return {
      selected: "index"
    };
  }
};
</script>

<style scoped>
.iconfont {
  font-size: 26px;
}
</style>