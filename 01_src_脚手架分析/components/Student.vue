<!--
 * @Author: 卢林
 * @Date: 2021-10-25 14:00:22
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-25 14:03:03
 * @Descripttion: 文件描述
-->
<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
  </div>
</template>
<script>
export default {
  name:'Student',
  data() {
    return {
      name:'tony',
      age:39
    }
  },
}
</script>