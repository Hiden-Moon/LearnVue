<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件数字：{{sum}}</h3>
        <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一句话</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    // import {mapState} from 'vuex';
    import {nanoid} from 'nanoid';
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            // ...mapState(['personList']),
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                //自己亲手写，要这样简写
                return this.$store.getters['personAbout/firstPersonName']
            },
            //...mapgetters的简写方式
            //...mapGetters('personAbout',['firstPersonName'])
        },
        methods: {
            add(){
                const personObj = {id:nanoid(),name:this.name}
                //当commit需要用Vuex组件简写方式时，按一下方式写
                this.$store.commit('personAbout/ADD_PERSON',personObj)
                this.name = ''
            },
            addWang(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addPersonWang',personObj)
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
    }
</script>

<style>

</style>