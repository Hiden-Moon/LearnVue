//该文件用于创建Vuex中最核心的store

//引入Vuex
import Vue from 'vue';
import Vuex from 'vuex';
//应用Vuex
Vue.use(Vuex)

//准备actions——用于响应组件动作
const actions = {
    //下面两个函数多余
    /* jia(context,val){
        context.commit('JIA',val)
    },
    jian(context,val){
        context.commit('JIAN',val)
    }, */
    jiaOdd(context,val){
        if(context.state.sum % 2)
            context.commit('JIA',val)
    },
    jiaWait(context,val){
        setTimeout(()=>{
            context.commit('JIA',val)
        },1000)
    }
}

//准备mutations——用于操作数据（state）
const mutations = {
    JIA(state,val){
        state.sum += val
    },
    JIAN(state,val){
        state.sum -= val
    },
}

//准备state——用于存储数据
const state = {
    sum:0,//当前的和
    school:'BNUZ',
    subject:'前端',
}

//准备getters——用于将state中数据进行加工，类似组件中computed计算属性
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建store，并导出/暴露
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
