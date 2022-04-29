import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message";
import Detail from "../pages/Detail";
export default new VueRouter({
    routes: [
        {
            name: "guanyu",
            path: "/about",
            component: About,
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News,
                },
                {
                    path: "message",
                    component: Message,
                    children: [
                        {
                            name: "xiangqing",
                            // path: "detail/:id/:title",
                            path:"detail",
                            component: Detail,
                            // props的第一种写法，对象写法,该对象中所有的key-value都会以props形式传入Detail组件中
                            // props:{a:1,b:'hello'}

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props:true

                            //第三种写法: props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }

                            //解构赋值
                            // props({query}){
                            //     return {
                            //         id:query.id,
                            //         title:query.title
                            //     }
                            // }

                            //多级解构赋值
                            // props({query:{id,title}}){
                            //     return {
                            //         id,
                            //         title
                            //     }
                            // }
                        },
                    ],
                },
            ],
        },
    ],
});
