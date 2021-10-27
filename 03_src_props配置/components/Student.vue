<!--
 * @Author: 卢林
 * @Date: 2021-08-11 08:47:54
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-25 16:51:57
 * @Descripttion: 文件描述
-->
<template>
	<div class="school">
		<h2>学生名称：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				msg:'我是一名程序员',
        myAge:this.age
			}
		},
    methods: {
      updateAge(){
        this.myAge++
      }
    },
    // 普通接收
    // props:['name','age','sex']

    // 接收的同时限制数据类型
    // props: {
    //   name:String,
    //   age:Number,
    //   sex:String
    // }

    // 接收的同时对数据进行类型限制、默认值指定、必要性的限制
    props:{
      name:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        default:80
      },
      sex:{
        type:String,
        required:true
      }
      
    }
	}
</script>

<style>

</style>