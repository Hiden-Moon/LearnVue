<template>
    <div class="app">
        <h1>{{msg}}，{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName='getSchoolName'/>
        
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <!-- <Student v-on:atguigu="getSchoolName"/> -->
        <Student @atguigu="getStudentName" @click.native="show"/><!--点击事件中需要添加.native，不加Vue则解析成自定义事件 -->
        
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <!-- <Student ref="student"/> -->
    </div>
</template>

<script>
    import School from './componerts/School.vue'
    import Student from './componerts/Student.vue'
    export default {
        name:'App',
        components: {Student,School},
        data(){
            return{
                msg:"这里是app",
                studentName:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log('App收到了学校名：',name)
            },
            getStudentName(name){
                console.log("App收到了名字",name)
                this.studentName = name
            },
            show(){
                console.log("组件点击事件")
            }
            /*
            多个参数传入时：
                1、后台数据照样传，前端一个一个接
                2、后端将数据以对象方式传，前端接收一个对象
                3、后端数据照样传，前端用"...params",接收到的是一个数组

            getStudentName(name){
                console.log("demo被调用了",name)
            }, 
            */
        },
        mounted() {
            //灵活性强(定时器)
            //this.$refs.student.$on('atguigu',this.getStudentName)
            //this.$refs.student.$once('atguigu',this.getStudentName)

            //这里的this.getStudentName的this是指调用组件的vc（这里是Student组件调用，所以是student的vc）
            /* this.$refs.student.$on('atguigu',function(){
                console.log(this)
            }) */

            //这里的this是App的vc，因为箭头函数没有自己的this，往外找找到mounted的this
            /* this.$refs.student.$on('atguigu',()=>{
                console.log(this)
            }) */
        },
    }
</script>

<style lang="css">
    .app{
        background-color: gray;
    }
</style>