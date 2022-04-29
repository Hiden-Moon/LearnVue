<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
</template>

<script>
  import { onBeforeMount,onMounted,onBeforeUpdate, onUpdated, onBeforeUnmount ,onUnmounted, ref } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      let sum = ref(0)

      onBeforeMount(() => {
        console.log('----onBeforeMount---')
      })

      onMounted(() => {
        console.log('----onMounted---')
      })

      onBeforeUpdate(() => {
        console.log('----onBeforeUpdate---')
      })

      onUpdated(() => {
        console.log('----onUpdated---')
      })

      onBeforeUnmount(() => {
        console.log('----onBeforeUnmount---')
      })

      onUnmounted(() => {
        console.log('----onUnmounted---')
      })

      return {
        sum,
      }
    },
    // #region
    /* beforeCreate() {
      console.log('------BeforeCreate------')
    },
    created() {
      console.log('------Created------')
    },
    beforeMount() {
      console.log('------BeforeMount------')
    },
    mounted() {
      console.log('------Mounted------')
    },
    beforeUpdate() {
      console.log('------BeforeUpdate------')
    },
    updated() {
      console.log('------Updated------')
    },
    beforeUnmount() {
      console.log('------BeforeUnmount------')
    },
    unmounted() {
      console.log('------Unmounted------')
    }, */
    // #endregion
  }
</script>
