<template>
  <h2>sum中的值是：{{ sum }}</h2>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name = 'wuyue'">点我改姓名</button>
  <button @click="age++">点我改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
</template>

<script>
  import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      let sum = ref(0)
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      })

      //   一般用于外部给到的数据要求不被改动时

      //person = readonly(person) //深层次的数据不能被修改，全为只读
      person = shallowReadonly(person) //只有浅层次的不能修改，深层次可以
      sum = readonly(sum) //sum无法修改
      sum = shallowReadonly(sum) //无意义，因为ref一般只为数字，不为对象，没必要分层

      return {
        sum,
        ...toRefs(person),
      }
    },
  }
</script>
