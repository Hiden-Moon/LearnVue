<template>
  <button @click="isShowDemo = !isShowDemo">显示/隐藏</button>
  <Demo v-if="isShowDemo" />
  <hr />
  <Test v-if="isShowDemo" />
</template>

<script>
  import { ref } from 'vue'
  import Demo from './components/Demo.vue'

  export default {
    name: 'App',
    components: { Demo },
    setup() {
      let isShowDemo = ref(true)
      return { isShowDemo }
    },
  }
</script>
