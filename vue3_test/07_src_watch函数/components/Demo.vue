<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <br />
  <h2>信息：{{ msg }}</h2>
  <button @click="msg += '!'">点我加！</button>
  <br />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name = 'wuyeu'">点我改姓名</button>
  <button @click="person.age++">点我改年龄</button>
</template>

<script>
  import { ref, watch, reactive } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      let sum = ref(0)
      let msg = ref('你好啊')
      let person = reactive({
        name: '张三',
        age: 18,
      })

      // 情形一————监视ref定义的一个响应式数据
      //   watch(
      //     sum,
      //     (newValue, oldValue) => {
      //       console.log(newValue, oldValue)
      //     },
      //     { immediate: true },
      //   )

      // 情形二————监视ref定义的多个响应式数据
      //   watch([sum, msg], (newValue, oldValue) => {
      //     console.log(newValue, oldValue)
      //   })

      /* 
      情形三————监视reactive定义的响应式数据
            1.此处无法获取oldValue
            2.强制开启深度监视属性，（deep配置无效）
       */
      //   watch(person, (newValue, oldValue) => {
      //     console.log(newValue, oldValue)
      //   })

      // 情形四————监视reactive所定义的一个响应式数据
      /* watch(
        () => person.age,
        (newValue, oldValue) => {
          console.log(newValue, oldValue)
        },
      ) */

      // 情形五————监视reactive所定义的多个响应式数据
      watch([() => person.age, () => person.name], (newValue, oldValue) => {
        console.log(newValue, oldValue)
      })

      // 特殊情况————监视reactive定义的对象中的某个属性，deep配置有效，但和情形三一样

      return {
        sum,
        msg,
        person,
      }
    },
  }
</script>
