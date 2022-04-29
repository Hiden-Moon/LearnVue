<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>

        <!-- 当transition用到name属性时，css中要用name-enter-active...，默认是v-enter-active -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
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

    .hello-enter-active{
        animation: demo 0.5s linear;
    }

    .hello-leave-active{
        animation: demo 0.5s linear reverse;
    }

    @keyframes demo {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>