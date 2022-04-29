//人员管理相关配置
// const personOptions = 
import axios from 'axios';
import {nanoid} from 'nanoid';
export default {
    //当以模块编码命名，并调用时用mapState形式简写...mapState('xxxAbout',['xxx','xxx']),必须写上
    namespaced:true,
    actions:{
        addPersonWang(context, val){
            if(val.name.indexOf('王')===0){
                context.commit('ADD_PERSON',val)
            }else{
                alert('添加的人必须姓王！')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,val){
            state.personList.unshift(val)
        }
    },
    state:{
        personList:[
            {id:'001',name:'吴粤'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}