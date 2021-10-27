/*
 * @Author: 卢林
 * @Date: 2021-10-25 14:24:00
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:49:51
 * @Descripttion: 文件描述
 */
import Vue from 'vue';
import App from './App.vue'
// 引入插件
import plugins from './plugins'

Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App)
})