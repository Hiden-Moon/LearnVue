<template>
  <div>
      <h2>学校名称：{{name | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="test">点我显示你好</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:"广东科技123",
                address:"东莞石排镇"
            }
        },
        methods: {
            test(){
                this.hello()
            }
        },
    }
</script>
