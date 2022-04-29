import VueRouter from 'vue-router';
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/Home',
            component:Home
        }
    ]
})