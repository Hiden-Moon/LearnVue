<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDom">点我显示上方DOM</button>
      <School ref="sch"/>
  </div>
</template>

<script>
    import School from '../02_src_ref属性/componerts/School.vue'
    export default {
        name:'App',
        components: {School},
        data(){
            return{
                msg:'正在学习Vue！'
            }
        },
        methods: {
            showDom(){
                console.log(this.$refs.title)//真实的DOM元素
                console.log(this.$refs.sch)//School组件的实例对象（vc)
            }
        },
    }
</script>