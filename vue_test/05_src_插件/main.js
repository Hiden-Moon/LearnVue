import Vue from 'vue'
import App from './App.vue'

import plugins from './plugins';

Vue.config.productionTip = false

Vue.use(plugins,1,2,3)//可以带参数

new Vue({
    el:'#app',
    render : h => h(App)
})