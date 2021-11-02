<!--
 * @Author: 卢林
 * @Date: 2021-11-02 16:55:55
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-02 17:03:32
 * @Descripttion: 动画效果
-->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear首次加载显示动画 -->
    <transition name="llTest" appear>
     <h1 v-show="isShow">你好</h1> 
    </transition>
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
  .llTest-enter-active{
    animation: ll 0.5S linear;
  }
  .llTest-leave-active{
    animation: ll 0.5S linear reverse;
  }

  @keyframes ll {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>