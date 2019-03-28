// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //引入路由
import 'amfe-flexible/index' //引入淘宝移动端适配方案
import 'normalize.css/normalize.css' //引入初始化样式
import '@/globalCss/init.scss';
import {instance} from '@/utils/index' //引入axios
import api from '@/utils/api' //引入所有api

Vue.config.productionTip = false
Vue.prototype.$axios = instance
Vue.prototype.$api = api //将api挂载在vue实例上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
