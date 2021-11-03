/*
 * @Author: 卢林
 * @Date: 2021-08-11 08:48:26
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-02 17:00:44
 * @Descripttion: 文件描述
 */
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})