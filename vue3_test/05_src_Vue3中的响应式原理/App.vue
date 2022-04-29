<template>
  <h1>我是App组件</h1>
  <h2 v-show="person.name">{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2 v-show="person.sex">{{person.sex}}</h2>
  <h3>{{ person.job.type }}</h3>
  <h3>{{ person.job.salary }}</h3>
  <h3>{{person.hobby}}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加sex属性</button>
  <button @click="delName">删除name属性</button>
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
        hobby:['打架','喝酒'],
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
        person.hobby[0]='学习'
        console.log(person.job)
      }

      function addSex() {
          person.sex = '男'
      }
      function delName() {
          delete person.name
      }

      return {
        person,
        changeInfo,
        addSex,
        delName,
      }
    },
  }
</script>
