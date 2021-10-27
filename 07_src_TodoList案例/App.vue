<!--
 * @Author: 卢林
 * @Date: 2021-10-25 14:23:52
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-27 16:44:27
 * @Descripttion: 文件描述
-->
<template>
	<div>
    <MyHeader :addTodo='add'></MyHeader>
    <MyList 
    :todos='todos' 
    :checkTodo='checkTodo'
    :deleteTodo='deleteTodo'
    ></MyList>
    <MyFooter 
    :todos='todos'
    :checkAllTodo='checkAllTodo'
    :clearAllTodo='clearAllTodo'
    ></MyFooter>
	</div>
</template>

<script>
	//引入School组件
	import MyHeader from '../src/components/MyHeader.vue'
  import MyList from '../src/components/MyList.vue'
  import MyFooter from '../src/components/MyFooter.vue'


	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				todos:[
          {id:'001',title:'抽烟',done:true},
					{id:'002',title:'喝酒',done:false},
					{id:'003',title:'开车',done:true}
        ]
			}
		},
    methods: {
      // 添加一个todo
      add(todoObj){
       this.todos.unshift(todoObj)
      },
      // 勾选或者取消勾选todo
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if (todo.id === id) {
            todo.done = !todo.done
          }
        })
      },
      deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
         return todo.id !== id
        })
      },
      // 全选or取消全选
      checkAllTodo(done){
        this.todos.forEach((todo)=> {
          todo.done = done
        })
      },
      // 清除所有已经完成的todo
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=> {
          return !todo.done
        })
      }
    },
	
	}
</script>
