<template>
  <div class="student">
      <h2>名字：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
      <button @click="sendStudentName">把名字传给App</button>
      <button @click="unbind">解绑atguigu</button>
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
        methods: {
            sendStudentName(){
                //触发Student组件实例身上的atguigu事件
                this.$emit('atguigu',this.name)
            },
            unbind(){
                this.$off('atguigu')//解绑一个事件
                //this.$off(['atguigu','demo1','demo2',...])//解绑多个事件
                //this.$off()//解绑所有事件
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