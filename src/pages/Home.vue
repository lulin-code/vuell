<!--
 * @Author: 卢林
 * @Date: 2021-11-16 10:32:51
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-16 18:27:48
 * @Descripttion: 文件描述
-->
<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>