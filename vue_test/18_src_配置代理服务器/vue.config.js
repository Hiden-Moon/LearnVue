/* 
此文件放于src同级目录下
*/

module.exports = {
    pages:{
        index:{
            //入口
            entry: 'src/main.js',
        },
    },
    // lintOnServe:false,//关闭检查语法
    //开启代理服务器
    //方式1---------------------------------------
    /* devServer:{
        proxy: 'http://localhost:5000'
    } */

    //方式2---------------------------------------
    devServer:{
        proxy:{
            '/atguigu':{
                target: 'http://localhost:5000',
                pathRewrite:{'^/atguigu':''},
                ws: true,//用于支持websocket
                changeOrigin: true//使得代理服务器访问服务器时保持两者端口一致
            },
            '/demo':{
                target: 'http://localhost:5001',
                pathRewrite:{'^/demo':''},
                ws: true,//用于支持websocket
                changeOrigin: true//使得代理服务器访问服务器时保持两者端口一致
            },
        }
    }
}