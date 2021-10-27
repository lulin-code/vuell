<!--
 * @Author: 卢林
 * @Date: 2021-08-11 08:47:54
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:49:48
 * @Descripttion: 文件描述
-->
<template>
	<div >
		<h2>学生名称：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
    <input type="text" v-fbind:value='name'>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'tony',
        sex:'男'
			}
		},
	}
</script>

<style>

</style>