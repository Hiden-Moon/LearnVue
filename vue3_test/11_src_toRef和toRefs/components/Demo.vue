<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name = 'wuyeu'">点我改姓名</button>
  <button @click="age++">点我改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      })

      return {
        person,
        // name: toRef(person, 'name'),
        // age: toRef(person, 'age'),
        // salary: toRef(person.job.j1, 'salary'),
        ...toRefs(person)
      }
    },
  }
</script>
