<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a class="foot" slot="footer" href="http://www.baidu.com">百度</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="g,index in games" :key="index">{{g}}</li>
            </ul>
            <div slot="footer" class="foot">
                <a href="http://www.weibo.com">新浪微博</a>
                <a href="http://www.weibo.com">新浪微博</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <!-- 只有template才可以用v-slot -->
            <template v-slot:footer>
                <div class="foot">
                    <a href="http://www.bilibili.com">B站</a>
                    <a href="http://www.bilibili.com">B站</a>
                </div>
                <h4>欢迎观看</h4>
            </template>
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
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>