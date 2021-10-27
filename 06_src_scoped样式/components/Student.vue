<!--
 * @Author: 卢林
 * @Date: 2021-08-11 08:47:54
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-27 09:40:52
 * @Descripttion: 文件描述
-->
<template>
	<div class="demo">
		<h2>学生名称：{{name}}</h2>
		<h2 class="atg">学生性别：{{sex}}</h2>
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

<style lang="less" scoped>
  .demo {
    background-color: pink;
    .atg{
      font-size: 40px;
    }
  }


</style>