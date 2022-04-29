<template>
  <h1>我是App组件</h1>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h3>{{ person.job.type }}</h3>
  <h3>{{ person.job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  // 引入reactive后使用对象时，不用再.value了
  import { reactive } from 'vue'
  export default {
    name: 'App',

    setup() {
      let person = reactive({
        name: 'zs',
        age: 18,
        job: {
          type: '前端工程师',
          salary: '30K',
          test: {
            a: 1,
            b: 2,
          },
        },
      })

      function changeInfo() {
        person.name = 'wuyue'
        person.age = 23
        person.job.type = '后端工程师'
        person.job.salary = '60K'
        console.log(person.job)
      }

      return {
        person,
        changeInfo,
      }
    },
  }
</script>
