<template>
  <h1>我是Demo组件</h1>
  <h2>姓：{{ person.firstName }}</h2>
  <input type="text" v-model="person.firstName" />
  <h2>名：{{ person.lastName }}</h2>
  <input type="text" v-model="person.lastName" />
  <h2>全名：{{ person.fullName }}</h2>
  <input type="text" v-model="person.fullName" />
</template>

<script>
  // 引入reactive后使用对象时，不用再.value了
  import { reactive, computed } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      let person = reactive({
        firstName: '张',
        lastName: '三',
      })

      // 计算属性————简写（没有考虑计算属性被修改的情况）
      //   person.fullName = computed(() => {
      //     return person.firstName + '-' + person.lastName
      //   })

      // 计算属性————完整写法（考虑了计算属性被修改的情况）
      person.fullName = computed({
        get() {
          return person.firstName + '-' + person.lastName
        },
        set(value) {
          const nameArr = value.split('-')
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        },
      })

      return {
        person,
      }
    },
  }
</script>
