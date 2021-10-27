/*
 * @Author: 卢林
 * @Date: 2021-10-25 14:24:00
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-25 14:30:29
 * @Descripttion: 文件描述
 */
import Vue from 'vue';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App)
})