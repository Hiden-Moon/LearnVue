//求和功能相关配置
// const countOptions = 
export default {
    //当以组件形式，并调用时用mapState形式简写...mapState('xxxAbout',['xxx','xxx']),必须写上
    namespaced:true,
    actions:{
        jiaOdd(context,val){
            if(context.state.sum % 2)
                context.commit('JIA',val)
        },
        jiaWait(context,val){
            setTimeout(()=>{
                context.commit('JIA',val)
            },1000)
        }
    },
    mutations:{
        JIA(state,val){
            state.sum += val
        },
        JIAN(state,val){
            state.sum -= val
        },
    },
    state:{
        sum:0,//当前的和
        school:'BNUZ',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}
