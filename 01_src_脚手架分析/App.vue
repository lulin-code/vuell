<!--
 * @Author: 卢林
 * @Date: 2021-10-18 15:30:34
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-25 14:21:51
 * @Descripttion: 文件描述
-->
<template>
  <div id="app">
   <School></School>
   <Student></Student>
  </div>
</template>

<script>
import School from '../components/School.vue'
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
