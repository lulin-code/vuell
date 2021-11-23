<!--
 * @Author: 卢林
 * @Date: 2021-11-22 18:31:02
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-23 10:14:27
 * @Descripttion: 文件描述
-->
<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['News','Message']"> -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  /* beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }, */
  /* mounted() {
    console.log('Home组件挂载完毕了',this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },  */
}
</script>