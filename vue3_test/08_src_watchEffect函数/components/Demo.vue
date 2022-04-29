<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <br />
  <h2>信息：{{ msg }}</h2>
  <button @click="msg += '!'">点我加！</button>
  <br />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name = 'wuyeu'">点我改姓名</button>
  <button @click="person.age++">点我改年龄</button>
  <button @click="person.job.j1.salary++">点我涨薪</button>
</template>

<script>
  import { ref, reactive, watchEffect } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      let sum = ref(0)
      let msg = ref('你好啊')
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      })

      //   watch([() => person.age, () => person.name], (newValue, oldValue) => {
      //     console.log(newValue, oldValue)
      //   })

      // 监视在watchEffect用了的数据
      watchEffect(() => {
        const x1 = msg.value
        const x2 = person.job.j1.salary
        console.log(x1, x2)
      })

      return {
        sum,
        msg,
        person,
      }
    },
  }
</script>
