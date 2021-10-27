<!--
 * @Author: 卢林
 * @Date: 2021-10-26 16:04:21
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:15:27
 * @Descripttion: 文件描述
-->
<template>
  <div>
    <h2 @click="showName">公司名称是：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin.js'
export default {
  data() {
    return {
      name:'赛博星通',
      address:'石景山'
    }
  },
  mixins:[mixin]
}
</script>

<style>

</style>