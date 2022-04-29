<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">把学校名传给App</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        props:["getSchoolName"],
        data(){
            return {
                name:"广东科技",
                address:"东莞石排镇"
            }
        },
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            },
        },
    }
</script>

// scoped是当前文件结构中的样式，防止与其他组件同名样式相冲突（覆写）
<style scoped>
    .school{
        background-color: skyblue;
    }
</style>