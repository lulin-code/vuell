<!--
 * @Author: 卢林
 * @Date: 2021-10-26 16:04:21
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-27 10:34:43
 * @Descripttion: 文件描述
-->
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox">
    </label>
    <span>
      <span>已完成</span>全部
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  data() {
    return {
     
    }
  }
}
</script>

<style scoped>
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>

