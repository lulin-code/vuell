<!--
 * @Author: 卢林
 * @Date: 2021-10-25 14:23:52
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-25 16:52:55
 * @Descripttion: 文件描述
-->
<template>
	<div>
    <Student name='jim' sex='女'></Student><br>
		<Student name='tony' :age='43' sex='男'></Student><br>
		<Student name='卢林' :age='33' sex='男'></Student>
	</div>
</template>

<script>
	//引入School组件
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		}
	
	}
</script>
