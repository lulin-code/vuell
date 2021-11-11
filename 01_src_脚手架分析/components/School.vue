<!--
 * @Author: 卢林
 * @Date: 2021-10-18 15:30:34
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-09 10:55:45
 * @Descripttion: 脚手架分析
-->
<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '赛博星通',
      address: '石景山'
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  },

}
</script>


