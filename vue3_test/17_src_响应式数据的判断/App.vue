<template>
  <div class="app">
    <h3>我是App组件（祖）</h3>
  </div>
</template>

<script>
  import { reactive, ref, isRef, readonly, isReactive, isReadonly, isProxy } from 'vue'
  export default {
    name: 'App',
    setup() {
      let sum = ref(0)
      let car = reactive({
        name: '宝马',
        price: 40,
      })
      let car2 = readonly(car)

      console.log(isRef(sum))
      console.log(isReactive(car))
      console.log(isReadonly(car2))
      // isProxy检查一个对象是否是由reactive或者readonly方法创建的代理
      console.log(isProxy(car))
      console.log(isProxy(car2))

      return { car }
    },
  }
</script>
<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>
