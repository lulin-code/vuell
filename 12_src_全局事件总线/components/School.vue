<!--
 * @Author: 卢林
 * @Date: 2021-10-26 16:04:21
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-28 17:11:30
 * @Descripttion: 文件描述
-->
<template>
  <div class="demo">
    <h2 >公司名称是：{{name}}</h2>
    <h2>地址：{{address}}</h2>
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
  mounted() {
    this.$bus.$on('hello',(data)=>{
      console.log('我是School组件，收到了数据',data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  },
}
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>>

