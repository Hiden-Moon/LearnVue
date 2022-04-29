<template>
  <h1>我是App组件</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h3>{{ job.type }}</h3>
  <h3>{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'App',

    setup() {
      let name = ref('zs')
      let age = ref(18)
      let job = ref({
        type: '前端工程师',
        salary: '30K',
        test: {
          a: 1,
          b: 2,
        },
      })

      function changeInfo() {
        name.value = 'wuyue'
        age.value = 23
        job.value.type = '后端工程师'
        console.log(job.value.test)
      }

      return {
        name,
        age,
        changeInfo,
        job,
      }
    },
  }
</script>
