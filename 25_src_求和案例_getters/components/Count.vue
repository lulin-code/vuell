<!--
 * @Author: 卢林
 * @Date: 2021-11-10 16:34:50
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-15 14:23:01
 * @Descripttion: 文件描述
-->
<template>
	<div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h2>当前求和放大10倍为：{{$store.getters.bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数数再加</button>
    <button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
    data() {
      return {
        sum:0,
        n:1
      }
    },
    methods: {
      increment(){
       this.$store.commit('JIA',this.n)
      },
      decrement(){
       this.$store.commit('JIAN',this.n)
      },
      incrementOdd(){
       this.$store.dispatch('jiaOdd',this.n)
      },
      incrementWait(){
       this.$store.dispatch('jiaWait',this.n)
      }
    },
	}
</script>

<style scoped>
  button{
		margin-left: 5px;
	}
</style>