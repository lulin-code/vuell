<!--
 * @Author: 卢林
 * @Date: 2021-08-11 08:47:54
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-28 10:37:19
 * @Descripttion: 文件描述
-->
<template>
	<div class="demo">
		<h2>学生名称：{{name}}</h2>
		<h2 class="atg">学生性别：{{sex}}</h2>
    <button @click="sendStudentName">发送学生姓名</button>
    <button @click="unbind">解绑ll事件</button>
    <button @click="death">销毁当前Student组件的实例（VC）</button>
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
    methods: {
      sendStudentName(){
        this.$emit('ll',this.name,666,888,900)
        this.$emit('demo')
      },
      unbind(){
        // 解绑一个事件
        // this.$off('ll')  

        // 解绑多个事件
        this.$off(['ll','demo'])

        //解绑所有的自定义事件
        // this.$off()
      },
      death(){
        //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
        this.$destroy()
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