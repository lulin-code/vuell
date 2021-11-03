<!--
 * @Author: 卢林
 * @Date: 2021-11-02 16:55:55
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-02 17:48:09
 * @Descripttion: 动画效果
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear首次加载显示动画 -->
    <transition-group name="ll" appear>
     <h1 v-show="!isShow" key="1">你好</h1> 
     <h1 v-show="isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:true
    }
  },
}
</script>

<style scoped>
  h1{
    background-color: aquamarine;
  }
  /* 进入的起点、离开的终点 */
	.ll-enter,.ll-leave-to{
		transform: translateX(-100%);
	}
	.ll-enter-active,.ll-leave-active{
		transition: 0.5s linear;
	}
	/* 进入的终点、离开的起点 */
	.ll-enter-to,.ll-leave{
		transform: translateX(0);
	}

</style>