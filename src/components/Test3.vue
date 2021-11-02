<!--
 * @Author: 卢林
 * @Date: 2021-11-02 16:55:55
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-02 18:10:11
 * @Descripttion: 动画效果
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear首次加载显示动画 -->
    <transition-group  appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
    >
     <h1 v-show="!isShow" key="1">你好</h1> 
     <h1 v-show="isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
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

</style>