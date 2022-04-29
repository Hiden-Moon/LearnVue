<template>
    <ul class="todo-main">
        <!-- name必须配置成animate__animated animate__bounce，动画才可以生效 -->
        <transition-group
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__flipInX"
            leave-active-class="animate__flipOutX">
            <MyItem
                v-for="todoObj in todos" 
                :key="todoObj.id" 
                :todo="todoObj"
            />
        </transition-group>
        
    </ul>
</template>

<script>
    import 'animate.css'
    import MyItem from './MyItem.vue';
    export default {
        name:'MyList',
        components:{MyItem},
        props:['todos']
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>