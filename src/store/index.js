/*
 * @Author: 卢林
 * @Date: 2021-11-12 17:26:16
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-15 18:03:22
 * @Descripttion: 文件描述
 */
// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
