<template>
  <div class="app">
    <h3>我是App组件（祖）</h3>
    <h3>汽车信息：{{ car }}</h3>
    <Child />
  </div>
</template>

<script>
  import { provide, reactive } from 'vue'
  import Child from './components/Child.vue'
  export default {
    name: 'App',
    components: { Child },
    setup() {
      let car = reactive({
        name: '宝马',
        price: 40,
      })
      // 祖组件提供出去的信息
      provide('car', car)

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
