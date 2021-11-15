<!--
 * @Author: 卢林
 * @Date: 2021-11-10 16:34:50
 * @LastEditors: 卢林
 * @LastEditTime: 2021-11-15 16:21:16
 * @Descripttion: 文件描述
-->
<template>
	<div>
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和放大10倍为：{{bigSum}}</h2>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
    data() {
      return {
        n:1
      }
    },
    computed:{
      // 借助mapState生成计算属性，从state中读取数据（数据写法）
      ...mapState(['sum','school','subject','personList']),
      ...mapGetters(['bigSum'])
    },
    methods: {

      ...mapMutations({increment:'JIA',decrement:'JIAN'}),

      //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    },
	}
</script>

<style scoped>
  button{
		margin-left: 5px;
	}
</style>