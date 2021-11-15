/*
 * @Author: 卢林
 * @Date: 2021-11-15 17:37:47
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-15 17:44:47
 * @Descripttion: 文件描述
 */
export default {
  namespaced:true,
  actions:{
    jiaOdd(context,value){
      if (context.state.sum % 2) {
        context.commit('JIA',value)
      }
    },
    jiaWait(context,value){
      setTimeout(() => {
        context.commit('JIA',value)
      }, 500);
    }
  },
  mutations:{
    JIA(state,value){
      state.sum +=value
    },
    JIAN(state,value){
      state.sum -=value
    }
  },
  state:{
    sum:0,
    school:'尚硅谷',
    subject:'前端'
  },
  getters:{
    bigSum(state){
      return state.sum * 10
    }
  }
}