/*
 * @Author: 卢林
 * @Date: 2021-10-26 16:06:18
 * @LastEditors: 卢林
 * @LastEditTime: 2021-10-26 16:13:28
 * @Descripttion: 文件描述
 */
export const mixin = {
  methods: {
    showName(){
      alert(this.name)
    }
  },
  mounted() {
    console.log('加载')
  },
}
export const mixin2 = {
  data() {
    return {
      x:200,
      y:20
    }
  },
}