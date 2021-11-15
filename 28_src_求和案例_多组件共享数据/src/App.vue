<!--
 * @Author: 卢林
 * @Date: 2021-11-11 10:19:05
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-15 16:17:46
 * @Descripttion: 文件描述
-->
<template>
  <div class="app">
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'
export default {
  name: 'App',
  components: { Count,Person }
}
</script>


