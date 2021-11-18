<!--
 * @Author: 卢林
 * @Date: 2021-11-18 15:03:12
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-18 16:37:42
 * @Descripttion: 文件描述
-->
<template>
    <ul>
      <li>消息编号：{{$route.params.id}}</li>
      <li>消息标题:{{$route.params.title}}</li>
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