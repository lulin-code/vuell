<!--
 * @Author: 卢林
 * @Date: 2021-10-25 14:23:52
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:11:30
 * @Descripttion: 文件描述
-->
<template>
	<div>
    <Student></Student><br>
    <School></School>

	</div>
</template>

<script>
	//引入School组件
	import Student from './components/Student'
  import School from './components/School'

	export default {
		name:'App',
		components:{Student,School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		}
	
	}
</script>
