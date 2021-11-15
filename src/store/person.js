/*
 * @Author: 卢林
 * @Date: 2021-11-15 17:44:57
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-15 17:53:03
 * @Descripttion: 文件描述
 */
import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
  namespaced:true,
  actions:{
    addPersonWang(content,value){
      if (value.name.indexOf('王') === 0) {
        content.commit('ADD_PERSON',value)
      } else {
        alert('添加人必须姓王')
      }
    },
    addPersonServe(content){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          content.commit('ADD_PERSON',{id:nanoid(),name:response.data})
        },
        error => {
          alert(error.message)
        }
      )
    }
  },
  mutations:{
    ADD_PERSON(state,value){
      state.personList.unshift(value)
    }
  },
  state:{
    personList:[{
      id:'001',name:'张三'
    }]
  },
  getters:{
    firstPersonName(state){
      return state.personList[0].name
    }
  }
}
