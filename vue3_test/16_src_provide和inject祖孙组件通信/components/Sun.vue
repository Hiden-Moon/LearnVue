<template>
  <div class="sun">
    <h3>我是sun组件（孙）</h3>
    <h3>我爷爷的车：{{ car }}</h3>
  </div>
</template>

<script>
  import { inject } from 'vue'
  export default {
    name: 'Sun',
    setup() {
      // 孙组件得到信息
      let car = inject('car')

      return { car }
    },
  }
</script>
<style>
  .sun {
    background-color: orange;
    padding: 10px;
  }
</style>
