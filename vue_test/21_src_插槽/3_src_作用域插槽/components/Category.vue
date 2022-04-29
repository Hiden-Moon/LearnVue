// 作用域插槽---数据在子组件
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games"></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['QQ飞车','穿越火线','英雄联盟'],
            }
        },
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>