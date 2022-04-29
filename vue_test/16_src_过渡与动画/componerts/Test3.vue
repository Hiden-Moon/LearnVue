<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>

        <!-- 当transition用到name属性时，css中要用name-enter-active...，默认是v-enter-active -->
        <!-- name必须配置成animate__animated animate__bounce，动画才可以生效 -->
        <transition-group 
            appear 
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
            >
            <h1 :key="1" v-show="!isShow">你好啊！</h1>
            <h1 :key="2" v-show="isShow">小许B</h1>
        </transition-group>
    </div>
</template>

<script>
    import 'animate.css';
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scope>
    h1{
        background-color: orange;
    }

    
</style>