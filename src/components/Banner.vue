<!--
 * @Author: 卢林
 * @Date: 2021-11-22 11:45:04
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-22 11:48:23
 * @Descripttion: 文件描述
-->
<template>
	<div class="col-xs-offset-2 col-xs-8">
		<div class="page-header"><h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试GO</button>
    </div>
	</div>
</template>

<script>
	export default {
		name:'Banner',
    methods: {
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      test(){
        this.$router.go(3)
      }
    },
	}
</script>