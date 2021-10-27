<!--
 * @Author: 卢林
 * @Date: 2021-08-11 08:47:54
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:15:26
 * @Descripttion: 文件描述
-->
<template>
	<div class="school">
		<h2 @click="showName">学生名称：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
	</div>
</template>

<script>
import {mixin,mixin2} from '../mixin'
	export default {
		name:'School',
		data() {
			return {
				name:'tony',
        sex:'男'
			}
		},
    mixins:[mixin,mixin2]
	}
</script>

<style>

</style>