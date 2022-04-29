import VueRouter from 'vue-router';
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message';
import Detail from '../pages/Detail';
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/Home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                        }
                    ]
                }
            ]
        }
    ]
})