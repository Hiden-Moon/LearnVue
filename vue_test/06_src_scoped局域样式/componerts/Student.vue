<template>
  <div class="demo">
      <h2 class="name">名字：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                name:"许B",
                sex:"女"
            }
        },
    }
</script>

// scoped是当前文件结构中的样式，防止与其他组件同名样式相冲突（覆写）
<style lang="less" scoped>
    .demo{
        background-color: orange;
        .name{
            color: white;
        }
    }    
</style>