import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render : h => h(App),
    /* 
    //安装全局事件总线（组件之间相互通信）
    beforeCreate(){
        Vue.prototype.$bus = this//安装全局事件总线
    } 
    */
})