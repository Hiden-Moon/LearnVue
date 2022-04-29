<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name:'School',
        data(){
            return {
                name:"广东科技",
                address:"东莞石排镇"
            }
        },
        mounted() {
            /* this.$bus.$on('hello',(data)=>{
                console.log("school get data: ", data)
            }) */

            //类似定时器，与此同时函数内的this是undefined，将其改为箭头函数则this为vue实例对象（或者配置methods）
            /* this.pubId = pubsub.subscribe('hello',function(message, data){
                console.log('有人发布了消息', message, data)
            }) */
            this.pubId = pubsub.subscribe('hello',(message, data)=>{
                console.log('有人发布了消息', message, data)
            })
        },
        beforeDestroy() {
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

// scoped是当前文件结构中的样式，防止与其他组件同名样式相冲突（覆写）
<style scoped>
    .school{
        background-color: skyblue;
    }
</style>