<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="g,index in games" :key="index">{{g}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue';
    export default {
        name:'App',
        components:{Category},
        data() {
            return {
                foods:['火锅','烧烤','寿司','小龙虾'],
                games:['QQ飞车','穿越火线','英雄联盟'],
                films:['《奇迹笨小孩》','《这个杀手不太冷静》','《拆弹专家》']
            }
        },
    }
</script>

<style lang="css">
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>