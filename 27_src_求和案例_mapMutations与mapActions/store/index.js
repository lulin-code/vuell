/*
 * @Author: 卢林
 * @Date: 2021-11-12 17:26:16
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-15 14:45:19
 * @Descripttion: 文件描述
 */
// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions----用于相应组件中的动作
const actions = {
  jiaOdd(context,value){
    if (context.state.sum % 2) {
      context.commit('JIA',value)
    }
  },
  jiaWait(context,value){
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500);
  }
}

// 准备mutation----用于操作数据（state）
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  }
}

// 准备state---用于存储数据
const state = {
  sum:0,
  school: '尚硅谷',
  subject: '前端'
}

const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({
  actions, mutations, state, getters
})
