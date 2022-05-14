<template>
  <h2>sum中的值是：{{ sum }}</h2>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <h3 v-show="person.car">汽车信息：{{ person.car }}</h3>
  <button @click="name = 'wuyue'">点我改姓名</button>
  <button @click="age++">点我改年龄</button>
  <button @click="job.j1.salary++">点我涨薪</button>
  <button @click="showRawPerson">输出原始的person</button>
  <button @click="addCar">添加车辆</button>
  <button @click="person.car.name += '!'">换车</button>
  <button @click="person.car.price++">加钱</button>
</template>

<script>
  import { ref, reactive, toRefs, toRaw } from 'vue' //, markRaw
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

      //toRaw只能作用于reactive数据
      function showRawPerson() {
        let rawPerson = toRaw(person)
        console.log(rawPerson)
      }

      //   markRaw
      function addCar() {
        const car = { name: '宝马', price: 50 }
        // person.car = markRaw(car)
        person.car = car
      }

      return {
        sum,
        person,
        ...toRefs(person),
        showRawPerson,
        addCar,
      }
    },
  }
</script>
