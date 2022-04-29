<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
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
            }
        },
    }
</script>

<style lang="css">
    .app{
        background-color: gray;
    }
</style>