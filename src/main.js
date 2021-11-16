/*
 * @Author: 卢林
 * @Date: 2021-11-12 17:42:22
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-16 16:16:11
 * @Descripttion: 文件描述
 */
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
//关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
//创建vm
new Vue({
	el:'#app',
  router:router,
	render: h => h(App)
})