<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name = 'wuyue'">点我改姓名</button>
  <button @click="age++">点我改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  //shallowReactive 只处理对象最外层属性的响应式(浅响应式)。shallowRef 只处理基本教据类型的响应式,不进行对象的响应式处理。
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
        ...toRefs(person),
      }
    },
  }
</script>
