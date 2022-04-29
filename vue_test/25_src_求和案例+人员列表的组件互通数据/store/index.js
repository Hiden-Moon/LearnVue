//该文件用于创建Vuex中最核心的store
//引入Vue
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';

import countOptions from './count';
import personOptions from './person';
//应用Vuex
Vue.use(Vuex)
//#region
/* //准备actions——用于响应组件动作
const actions = {
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
    ADD_PERSON(state,val){
        state.personList.unshift(val)
    }
}

//准备state——用于存储数据
const state = {
    sum:0,//当前的和
    school:'BNUZ',
    subject:'前端',
    personList:[
        {id:'001',name:'吴粤'}
    ]
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
*/
//#endregion
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
})
