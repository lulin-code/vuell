/*
 * @Author: 卢林
 * @Date: 2021-10-26 16:06:18
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:50:27
 * @Descripttion: 文件描述
 */
export default {
  install(Vue){
    console.log(Vue);
    // 全局过滤器
    Vue.filter('mySlice', function (val) {
      return val.slice(0, 4)
    })
    // 定义全局组件
    Vue.directive('fbind',{
      // 指令与元素成功绑定时（一上来）
      bing(e,binding){
        e.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted(e){
        e.focus()
      },
      // 指令所在的模板被重新解析时
      update(e,binding) {
        e.value = binding.value
      },
    })

    Vue.mixin({
      data() {
        return {
          x:200,
          y:500
        }
      },
    })

    Vue.prototype.hello = ()=> {alert('你好啊')}
  }
  
}