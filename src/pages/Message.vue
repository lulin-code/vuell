<!--
 * @Author: 卢林
 * @Date: 2021-11-16 18:17:21
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-18 15:10:22
 * @Descripttion: 文件描述
-->
<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' }
      ]
    }
  },
}
</script>