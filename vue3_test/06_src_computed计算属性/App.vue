<template>
<h1>一个人的信息</h1>
  <Demo/>
</template>

<script>
  // 引入reactive后使用对象时，不用再.value了
  import Demo from './components/Demo.vue'
  export default {
    name: 'App',
    components: { Demo },
  }
</script>
