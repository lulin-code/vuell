<!--
 * @Author: 卢林
 * @Date: 2021-11-22 18:31:02
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-24 14:35:16
 * @Descripttion: 文件描述
-->
<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:'About',
    beforeRouteEnter (to, from, next) {
      console.log('About---beforeRouterEnter',to,from)
      if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'll'){
          next()
        }else{
          alert('学校名不对，无权查看')
        }
      }else{
        next()
      }
    },
    beforeRouteLeave (to, from, next) {
      console.log('About---beforeRouteLeave',to,from)
      next()
    }
	}
</script>