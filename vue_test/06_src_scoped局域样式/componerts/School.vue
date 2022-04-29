<template>
  <div class="demo">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
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
    }
</script>

// scoped是当前文件结构中的样式，防止与其他组件同名样式相冲突（覆写）
<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>