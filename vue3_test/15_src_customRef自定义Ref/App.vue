<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
  // import {ref} from 'vue';
  import { customRef } from 'vue'
  export default {
    name: 'App',
    setup() {
      function myRef(value, delay) {
        let timmer
        return customRef((track, trigger) => {
          return {
            get() {
              console.log(value)
              track() //通知vue追踪数据的改变
              return value
            },
            set(newValue) {
              console.log(newValue)
              // 防止输入快于更改时出现bug
              clearTimeout(timmer)
              timmer = setTimeout(() => {
                value = newValue
                trigger() //重新解析模版
              }, delay)
            },
          }
        })
      }
      // let keyWord = ref('hello') //vue自己的ref
      let keyWord = myRef('hello', 500)
      return { keyWord }
    },
  }
</script>
