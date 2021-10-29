<!--
 * @Author: 卢林
 * @Date: 2021-08-11 08:47:54
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-29 11:40:40
 * @Descripttion: 文件描述
-->
<template>
	<div class="demo">
		<h2>学生名称：{{name}}</h2>
		<h2 class="atg">学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'tony',
        sex:'男'
			}
		},
    methods: {
      sendStudentName(){
        // this.$bus.$emit('hello',this.name)
        pubsub.publish('hello',666)
      }
    },
	}
</script>

<style lang="less" scoped>
  .demo {
    background-color: pink;
    .atg{
      font-size: 40px;
    }
  }


</style>