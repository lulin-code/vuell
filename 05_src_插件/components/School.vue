<!--
 * @Author: 卢林
 * @Date: 2021-10-26 16:04:21
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:52:03
 * @Descripttion: 文件描述
-->
<template>
  <div>
    <h2 >公司名称是：{{name | mySlice}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="test">点我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'赛博星通科技有限公司',
      address:'石景山'
    }
  },
  methods: {
    test(){
      this.hello()
    }
  },
}
</script>

<style>

</style>