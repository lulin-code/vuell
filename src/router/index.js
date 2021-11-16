/*
 * @Author: 卢林
 * @Date: 2021-11-16 16:07:36
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-16 18:22:03
 * @Descripttion: 文件描述
 */
// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

import Message from '../pages/Message.vue'
import News from '../pages/News.vue'

export default new VueRouter({
  routes:[
    {
      path: '/about',
      component: About
    },
    {
      path:'/home',
      component: Home,
      children:[
        {
          path:'news',
          component: News,
        },
        {
          path:'message',
          component: Message
        }
      ]
    }
  ]
})