<!--
 * @Author: 卢林
 * @Date: 2021-10-27 10:18:05
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-28 17:38:16
 * @Descripttion: 文件描述
-->
<template>
  <ul>
    <MyItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo='todoObj'
    ></MyItem>
  </ul>
</template>

<script>
import MyItem from '../components/MyItem'
export default {
 name:'MyList',
 props:['todos'],
 components:{MyItem}
}
</script>

<style scoped>
  .todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>