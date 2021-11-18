<!--
 * @Author: 卢林
 * @Date: 2021-11-18 15:03:12
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-18 17:47:47
 * @Descripttion: 文件描述
-->
<template>
    <ul>
      <li>消息编号：{{$route.query.id}}</li>
      <li>消息标题:{{$route.query.title}}</li>
    </ul>
</template>

<script>
export default {
  name:'Detail',
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style>

</style>