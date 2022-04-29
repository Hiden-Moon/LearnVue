<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>

        <!-- 当transition用到name属性时，css中要用name-enter-active...，默认是v-enter-active -->
        <transition-group name="hello" appear>
            <h1 :key="1" v-show="isShow">你好啊！</h1>
            <h1 :key="2" v-show="isShow">小许B</h1>
        </transition-group>
    </div>
</template>

<script>
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

    /* 进入起点 *//* 离开终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    /* 激活 */
    .hello-enter-active,.hello-leave-active{ 
        transition: 0.5 linear;
    }

    /* 进入终点 *//* 离开起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
</style>