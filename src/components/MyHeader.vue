<!--
 * @Author: 卢林
 * @Date: 2021-08-11 08:47:54
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-28 15:14:45
 * @Descripttion: 文件描述
-->
<template>
	<div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add">
	</div>
</template>

<script>
  import {nanoid} from 'nanoid'
	export default {
		name:'MyHeader',
    methods: {
      add(e){
        let ev = e.target.value
        if (!ev.trim()) return alert('输入不能为空')
        const todoObj = {id:nanoid(),title:ev,done:false}
        this.$emit('addTodo',todoObj)
        e.target.value = ''
      }
    }
	}
</script>

<style lang="less" scoped>
  .todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>