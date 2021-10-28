<!--
 * @Author: 卢林
 * @Date: 2021-10-25 14:23:52
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-28 10:58:17
 * @Descripttion: 自定义组件
-->
<template>
	<div>
    <School :getSchoolName='getSchoolName' ></School><br>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（使用@或者v-on） -->
    <!-- <Student @ll='getStudent' @demo='m1'></Student> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <Student ref="student" @click.native="show"></Student>

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
		},
    methods: {
      getSchoolName(name){
        console.log('APP收到了公司名称：',name)
      },
      getStudent(name,...prams){
        console.log('APP收到了学生名称：',name,prams)
      },
      m1(){
        console.log('事件被触发')
      },
      show(){
        alert(123)
      }
    },
    mounted() {
      // this.$refs.student.$on('ll',this.getStudent)
    },
	
	}
</script>
