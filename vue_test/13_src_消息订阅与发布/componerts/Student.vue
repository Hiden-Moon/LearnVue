<template>
  <div class="student">
      <h2>名字：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
      <button @click="sendStudentName">把名字给school组件</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name:'Student',
        data(){
            return {
                name:"许B",
                sex:"女"
            }
        },
        methods: {
            sendStudentName(){
                // this.$bus.$emit('hello',this.name)
                pubsub.publish('hello',666)
                
            }
        },
    }
</script>

// scoped是当前文件结构中的样式，防止与其他组件同名样式相冲突（覆写）
<style lang="less" scoped>
    .student{
        background-color: orange;
    }    
</style>