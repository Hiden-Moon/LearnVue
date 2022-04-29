<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods: {
            searchUsers(){
                this.$bus.$emit('updataListData', {isFirst:false,isLoading:true,errMsg:'',users:[]})
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    res=>{
                        console.log('请求成功！')
                        //请求成功后更新List数据
                        this.$bus.$emit('updataListData', {isLoading:false,errMsg:'',users:res.data.items})
                    },
                    err=>{
                        console.log('请求失败！')
                        //请求失败后更新List数据
                        this.$bus.$emit('updataListData', {isLoading:false,errMsg:err.message,users:[]})
                    }
                )
            }
        },
    }
</script>

<style>

</style>