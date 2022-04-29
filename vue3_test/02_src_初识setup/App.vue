<template>
  <h1>我是App组件</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="sayHello">show</button>
</template>

<script>
  //   import { h } from 'vue'
  export default {
    name: 'App',
    setup() {
      let name = 'zs'
      let age = 18

      function sayHello() {
        alert(`${name},${age}`)
      }

      // 返回一个对象，模版中可以直接调用（常用）
      return {
        name,
        age,
        sayHello,
      }

      // 返回一个渲染函数
      //   return () => h('h1', 'BNUZ')
    },
  }
</script>
